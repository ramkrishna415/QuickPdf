const CloudConvert = require("cloudconvert");
const fs = require("fs");
const fetch = require("node-fetch");

const cloudConvert = new CloudConvert(process.env.CLOUDCONVERT_API_KEY);

exports.convertFile = async (req, res) => {

  const tool = req.params.tool;

 const map = {

  // PDF - Documents
  "pdf-to-word": { from: "pdf", to: "docx" },
  "pdf-to-docx": { from: "pdf", to: "docx" },
  "pdf-to-odt": { from: "pdf", to: "odt" },
  "pdf-to-rtf": { from: "pdf", to: "rtf" },
  "pdf-to-txt": { from: "pdf", to: "txt" },

  // Documents - PDF
  "word-to-pdf": { from: "docx", to: "pdf" },
  "docx-to-pdf": { from: "docx", to: "pdf" },
  "odt-to-pdf": { from: "odt", to: "pdf" },
  "rtf-to-pdf": { from: "rtf", to: "pdf" },
  "txt-to-pdf": { from: "txt", to: "pdf" },

  // PDF → Images
  "pdf-to-jpg": { from: "pdf", to: "jpg" },
  "pdf-to-png": { from: "pdf", to: "png" },
  "pdf-to-tiff": { from: "pdf", to: "tiff" },
  "pdf-to-bmp": { from: "pdf", to: "bmp" },
  "pdf-to-webp": { from: "pdf", to: "webp" },

  // Images → PDF
  "jpg-to-pdf": { from: "jpg", to: "pdf" },
  "png-to-pdf": { from: "png", to: "pdf" },
  "tiff-to-pdf": { from: "tiff", to: "pdf" },
  "bmp-to-pdf": { from: "bmp", to: "pdf" },
  "webp-to-pdf": { from: "webp", to: "pdf" },
  "gif-to-pdf": { from: "gif", to: "pdf" },

  // PDF → Spreadsheet
  "pdf-to-excel": { from: "pdf", to: "xlsx" },
  "pdf-to-csv": { from: "pdf", to: "csv" },

  // Spreadsheet → PDF
  "excel-to-pdf": { from: "xlsx", to: "pdf" },
  "csv-to-pdf": { from: "csv", to: "pdf" },

  // Presentation
  "ppt-to-pdf": { from: "pptx", to: "pdf" },
  "pdf-to-ppt": { from: "pdf", to: "pptx" },

  // Web
  "pdf-to-html": { from: "pdf", to: "html" },
  "html-to-pdf": { from: "html", to: "pdf" },

  // eBook
  "pdf-to-epub": { from: "pdf", to: "epub" },
  "epub-to-pdf": { from: "epub", to: "pdf" }

};

  const config = map[tool];

  if (!config) {
    return res.status(400).json({ error: "Tool not supported" });
  }

  try {

    const job = await cloudConvert.jobs.create({
      tasks: {
        upload: {
          operation: "import/upload"
        },
        convert: {
          operation: "convert",
          input: "upload",
          input_format: config.from,
          output_format: config.to
        },
        export: {
          operation: "export/url",
          input: "convert"
        }
      }
    });

    const uploadTask = job.tasks.find(t => t.name === "upload");

    // await cloudConvert.tasks.upload(uploadTask, fs.createReadStream(req.file.path));
    await cloudConvert.tasks.upload(
  uploadTask,
  fs.createReadStream(req.file.path),
  req.file.originalname
);

    const completedJob = await cloudConvert.jobs.wait(job.id);

    const exportTask = completedJob.tasks.find(
      task => task.operation === "export/url"
    );

    if (!exportTask || !exportTask.result || !exportTask.result.files) {
      console.log(completedJob.tasks);
      return res.status(500).json({ error: "Export failed" });
    }

    const file = exportTask.result.files[0];

    const response = await fetch(file.url);
    const buffer = await response.arrayBuffer();

    res.setHeader(
      "Content-Disposition",
      `attachment; filename=converted.${config.to}`
    );

    res.send(Buffer.from(buffer));

  } catch (error) {

    console.error("CloudConvert Error:", error);

    res.status(500).json({
      error: "Conversion failed",
      message: error.message
    });

  }

};