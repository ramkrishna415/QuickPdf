export const toolConfig: Record<string, { endpoint: string, outputExt: string, accept: string }> = {
  // --- PDF to Documents ---
  'PDF to Docs Converter': { endpoint: 'pdf-to-docs', outputExt: 'docx', accept: '.pdf' },
  'PDF to Word': { endpoint: 'pdf-to-word', outputExt: 'docx', accept: '.pdf' },
  'PDF to DOCX': { endpoint: 'pdf-to-docx', outputExt: 'docx', accept: '.pdf' },
  'PDF to ODT': { endpoint: 'pdf-to-odt', outputExt: 'odt', accept: '.pdf' },
  'PDF to RTF': { endpoint: 'pdf-to-rtf', outputExt: 'rtf', accept: '.pdf' },
  'PDF to Text': { endpoint: 'pdf-to-text', outputExt: 'txt', accept: '.pdf' },
  'PDF to TXT': { endpoint: 'pdf-to-txt', outputExt: 'txt', accept: '.pdf' },

  // --- Documents to PDF ---
  'Docs to PDF Converter': { endpoint: 'docs-to-pdf', outputExt: 'pdf', accept: '.docx,.doc,.odt,.rtf,.txt' },
  'Word to PDF': { endpoint: 'word-to-pdf', outputExt: 'pdf', accept: '.doc,.docx' },
  'DOCX to PDF': { endpoint: 'docx-to-pdf', outputExt: 'pdf', accept: '.docx' },
  'ODT to PDF': { endpoint: 'odt-to-pdf', outputExt: 'pdf', accept: '.odt' },
  'RTF to PDF': { endpoint: 'rtf-to-pdf', outputExt: 'pdf', accept: '.rtf' },
  'Text to PDF': { endpoint: 'text-to-pdf', outputExt: 'pdf', accept: '.txt' },
  'TXT to PDF': { endpoint: 'txt-to-pdf', outputExt: 'pdf', accept: '.txt' },

  // --- PDF to Images ---
  'PDF to JPG': { endpoint: 'pdf-to-jpg', outputExt: 'jpg', accept: '.pdf' },
  'PDF to PNG': { endpoint: 'pdf-to-png', outputExt: 'png', accept: '.pdf' },
  'PDF to TIFF': { endpoint: 'pdf-to-tiff', outputExt: 'tiff', accept: '.pdf' },
  'PDF to BMP': { endpoint: 'pdf-to-bmp', outputExt: 'bmp', accept: '.pdf' },
  'PDF to GIF': { endpoint: 'pdf-to-gif', outputExt: 'gif', accept: '.pdf' },
  'PDF to WebP': { endpoint: 'pdf-to-webp', outputExt: 'webp', accept: '.pdf' },

  // --- Images to PDF ---
  'Image to PDF Converter': { endpoint: 'image-to-pdf', outputExt: 'pdf', accept: 'image/*' },
  'JPG to PDF': { endpoint: 'jpg-to-pdf', outputExt: 'pdf', accept: '.jpg,.jpeg' },
  'PNG to PDF': { endpoint: 'png-to-pdf', outputExt: 'pdf', accept: '.png' },
  'TIFF to PDF': { endpoint: 'tiff-to-pdf', outputExt: 'pdf', accept: '.tiff,.tif' },
  'BMP to PDF': { endpoint: 'bmp-to-pdf', outputExt: 'pdf', accept: '.bmp' },
  'GIF to PDF': { endpoint: 'gif-to-pdf', outputExt: 'pdf', accept: '.gif' },
  'WebP to PDF': { endpoint: 'webp-to-pdf', outputExt: 'pdf', accept: '.webp' },

  // --- PDF to Spreadsheets ---
  'PDF to Excel': { endpoint: 'pdf-to-excel', outputExt: 'xlsx', accept: '.pdf' },
  'PDF to CSV': { endpoint: 'pdf-to-csv', outputExt: 'csv', accept: '.pdf' },

  // --- Spreadsheets to PDF ---
  'Excel to PDF': { endpoint: 'excel-to-pdf', outputExt: 'pdf', accept: '.xls,.xlsx' },
  'CSV to PDF': { endpoint: 'csv-to-pdf', outputExt: 'pdf', accept: '.csv' },

  // --- PDF Utilities ---
  'Merge PDF': { endpoint: 'merge-pdf', outputExt: 'pdf', accept: '.pdf' },
  'Split PDF': { endpoint: 'split-pdf', outputExt: 'zip', accept: '.pdf' }, // Split usually returns a zip of pages
  'Compress PDF': { endpoint: 'compress-pdf', outputExt: 'pdf', accept: '.pdf' },
  'Rotate PDF': { endpoint: 'rotate-pdf', outputExt: 'pdf', accept: '.pdf' },

  // --- PDF Security ---
  'Lock PDF (Add Password)': { endpoint: 'lock-pdf', outputExt: 'pdf', accept: '.pdf' },
  'Unlock PDF (Remove Password)': { endpoint: 'unlock-pdf', outputExt: 'pdf', accept: '.pdf' },

  // --- Web & Markup ---
  'PDF to HTML': { endpoint: 'pdf-to-html', outputExt: 'html', accept: '.pdf' },
  'HTML to PDF': { endpoint: 'html-to-pdf', outputExt: 'pdf', accept: '.html,.htm' },
  'PDF to XML': { endpoint: 'pdf-to-xml', outputExt: 'xml', accept: '.pdf' },
  'XML to PDF': { endpoint: 'xml-to-pdf', outputExt: 'pdf', accept: '.xml' },
  'PDF to Markdown': { endpoint: 'pdf-to-markdown', outputExt: 'md', accept: '.pdf' },
  'Markdown to PDF': { endpoint: 'markdown-to-pdf', outputExt: 'pdf', accept: '.md' },

  // --- Data Formats ---
  'PDF to JSON': { endpoint: 'pdf-to-json', outputExt: 'json', accept: '.pdf' },
  'JSON to PDF': { endpoint: 'json-to-pdf', outputExt: 'pdf', accept: '.json' },

  // --- eBooks & Others ---
  'PDF to EPUB': { endpoint: 'pdf-to-epub', outputExt: 'epub', accept: '.pdf' },
  'EPUB to PDF': { endpoint: 'epub-to-pdf', outputExt: 'pdf', accept: '.epub' },
  'PPT to PDF': { endpoint: 'ppt-to-pdf', outputExt: 'pdf', accept: '.ppt,.pptx' },
  'PDF to PPT': { endpoint: 'pdf-to-ppt', outputExt: 'pptx', accept: '.pdf' },
  'PDF to AutoCAD': { endpoint: 'pdf-to-autocad', outputExt: 'dwg', accept: '.pdf' },
  'AutoCAD to PDF': { endpoint: 'autocad-to-pdf', outputExt: 'pdf', accept: '.dwg,.dxf' },
};
