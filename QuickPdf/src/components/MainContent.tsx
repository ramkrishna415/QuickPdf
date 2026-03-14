import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, Zap, Shield, Database, Star, Loader2, FileDown, CheckCircle } from 'lucide-react';
import './MainContent.css';
import { toolConfig } from './toolmap'; // Jo mapping humne banayi thi

interface MainContentProps {
  currentTool: string;
}

export function MainContent({ currentTool }: MainContentProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [status, setStatus] = useState<'idle' | 'converting' | 'success'>('idle');
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const safeName = selectedFile?.name.replace(/\.[^/.]+$/, "");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Jab bhi sidebar se tool change ho, sab reset ho jaye
  useEffect(() => {
    setSelectedFile(null);
    setDownloadUrl(null);
    setStatus('idle');
  }, [currentTool]);

   const config = toolConfig[currentTool] || {
  endpoint: '',
  outputExt: '',
  accept: '*/*'
};


  //  const config = toolConfig[currentTool];
  // || { endpoint: 'pdf-to-word', outputExt: 'docx', accept: '.pdf' };
const isValidFile = (file: File, allowedTypes: string) => {

  if (!allowedTypes) return true;

  const fileExt = "." + file.name.split('.').pop()?.toLowerCase();

  const allowed = allowedTypes
    .split(',')
    .map(type => type.trim().toLowerCase());

  if (allowed.includes(fileExt)) return true;

  if (allowed.includes("image/*") && file.type.startsWith("image/")) {
    return true;
  }

  return false;
};
 
  const handleFileSelect = (files: FileList | null) => {
     if (files && files[0]) {
    const file = files[0];
    
    // VALIDATION CHECK YAHAN HAI:
    if (!isValidFile(file, config.accept)) {
      alert(`Invalid file type! Please select: ${config.accept}`);
      return; // Agar galat file hai toh function yahi ruk jayega
    }

    setSelectedFile(file);
    setDownloadUrl(null);
    setStatus('idle');
  }
  
  };

  const handleConvert = async () => {
    if (!selectedFile) return alert("Please select a file!");

    setStatus('converting');
    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      // Backend API Call
      const response = await fetch(`http://localhost:3000/api/${config.endpoint}`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Failed to convert');

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      setDownloadUrl(url);
      setStatus('success');
    } catch (error) {
      console.error(error);
      alert("Conversion failed. Please try again.");
      setStatus('idle');
    }
  };

  const features = [
    { id: 'fast-conversion', icon: <Zap />, title: 'Fast Conversion', desc: 'Convert your files in seconds' },
    { id: 'secure', icon: <Shield />, title: '100% Secure', desc: 'Your files are encrypted and secure' },
    { id: 'no-limit', icon: <Database />, title: 'No File Size Limit', desc: 'Convert files of any size' },
    { id: 'free-forever', icon: <Star />, title: 'Free Forever', desc: 'No hidden charges or subscriptions' },
  ];

  return (
    <div className="main-container">
      {/* 1. Header (Dynamic Title) */}
      <div className="content-header">
        <h1>{currentTool}</h1>
        <p>Convert your files to {config.outputExt.toUpperCase()} format instantly</p>
      </div>

      {/* 2. Upload Box */}
      <div
        className={`upload-wrapper ${isDragging ? 'dragging' : ''} ${selectedFile ? 'has-file' : ''}`}
        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(e) => { 
          e.preventDefault(); 
          setIsDragging(false); 
          handleFileSelect(e.dataTransfer.files);
        }}
        onClick={() => fileInputRef.current?.click()}
      >
        <input 
          type="file" 
          ref={fileInputRef} 
          style={{display: 'none'}} 
          accept={config.accept}
        
          onChange={(e) => handleFileSelect(e.target.files)}
        />
        <div className="upload-icon-circle">
          {status === 'success' ? <CheckCircle size={32} color="#22c55e" /> : <Upload size={32} />}
        </div>
       <p className="upload-text-main">
  {selectedFile ? selectedFile.name : `Upload ${config.accept} file`}
</p>
        <p className="upload-text-sub">{selectedFile ? "File selected" : "or click to browse"}</p>
        <p className="max-size-note">Max file size: 50MB</p>
      </div>

      {/* Logic for Buttons: Convert -> Converting... -> Download */}
      {status === 'idle' && (
        <button className="convert-btn" onClick={handleConvert} disabled={!selectedFile}>
          Convert Now
        </button>
      )}

      {status === 'converting' && (
        <button className="convert-btn" disabled style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
          <Loader2 className="animate-spin" size={20} /> Converting Now...
        </button>
      )}
       
      {status === 'success' && downloadUrl && (
        <a 
          href={downloadUrl} 
          download={`converted_${safeName}.${config.outputExt}`}
          // download={`converted_${selectedFile?.name.split('.')[0]}.${config.outputExt}`}
          className="convert-btn" 
          style={{ backgroundColor: '#22c55e', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}
        >
          <FileDown size={20} /> Download Now
        </a>
      )}

      {/* 3. Features Grid */}
      <div className="features-grid">
        {features.map((f) => (
          <div key={f.id} className="feature-card">
            <div className="feature-icon-box">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
            <button onClick={() => navigate(`/feature/${f.id}`)} className="read-more-link">
              Read More →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
