import { FileText, ChevronDown, ChevronRight, X } from 'lucide-react';
import { useState } from 'react';
import './Styles.css' // CSS Import karein

// ... (toolCategories interface and data remains the same)
interface SidebarProps {
  currentTool: string;
  onToolSelect: (tool: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

const toolCategories = [
  {
    category: 'PDF to Documents',
    icon: '📄',
    tools: [
     
      { icon: '📘', name: 'PDF to Word' },
      { icon: '📘', name: 'PDF to DOCX' },
      { icon: '📄', name: 'PDF to ODT' },
      { icon: '📄', name: 'PDF to RTF' },
      { icon: '📝', name: 'PDF to TXT' },
    ],
  },
  {
    category: 'Documents to PDF',
    icon: '📝',
    tools: [
     
      { icon: '📘', name: 'Word to PDF' },
      { icon: '📘', name: 'DOCX to PDF' },
      { icon: '📄', name: 'ODT to PDF' },
      { icon: '📄', name: 'RTF to PDF' },
      { icon: '📝', name: 'TXT to PDF' },
    ],
  },
  {
    category: 'PDF to Images',
    icon: '🖼️',
    tools: [
      { icon: '📸', name: 'PDF to JPG' },
      { icon: '🖼️', name: 'PDF to PNG' },
      { icon: '🖼️', name: 'PDF to TIFF' },
      { icon: '🖼️', name: 'PDF to BMP' },
      { icon: '🖼️', name: 'PDF to WebP' },
    ],
  },
  {
    category: 'Images to PDF',
    icon: '📸',
    tools: [
      
      { icon: '📸', name: 'JPG to PDF' },
      { icon: '📸', name: 'PNG to PDF' },
      { icon: '🖼️', name: 'TIFF to PDF' },
      { icon: '🖼️', name: 'BMP to PDF' },
      { icon: '🎨', name: 'GIF to PDF' },
      { icon: '🖼️', name: 'WebP to PDF' },
    ],
  },
  {
    category: 'PDF to Spreadsheets',
    icon: '📗',
    tools: [
      { icon: '📗', name: 'PDF to Excel' },
      { icon: '📊', name: 'PDF to CSV' },
    ],
  },
  {
    category: 'Spreadsheets to PDF',
    icon: '📊',
    tools: [
      { icon: '📗', name: 'Excel to PDF' },
      { icon: '📊', name: 'CSV to PDF' },
    ],
  },
 
  
  {
    category: 'Web & Markup',
    icon: '🌐',
    tools: [
      { icon: '🌐', name: 'PDF to HTML' },
      { icon: '🌐', name: 'HTML to PDF' },
      { icon: '🔤', name: 'PDF to XML' },
      { icon: '🔤', name: 'XML to PDF' },
     
    ],
  },
 
  {
    category: 'eBooks & Others',
    icon: '📚',
    tools: [
      { icon: '📚', name: 'PDF to EPUB' },
      { icon: '📚', name: 'EPUB to PDF' },
      { icon: '📙', name: 'PPT to PDF' },
      
    ],
  },
];

 function Sidebar({ currentTool, onToolSelect, isOpen, onClose }: SidebarProps) {
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['PDF to Documents']);

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev =>
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  return (
    <aside className={`sidebar ${!isOpen ? 'closed' : ''}`}>
      {/* Logo */}
      <div className="sidebar-logo-section">
        <div className="logo-box">
          <FileText size={24} />
        </div>
        <h1 style={{fontSize: '1.25rem', fontWeight: 600}}>ToolBox</h1>
        <button onClick={onClose} className="lg-hide-btn" style={{marginLeft: 'auto', background: 'none', border: 'none', color: 'white'}}>
          <X size={20} />
        </button>
      </div>

      <div className="sidebar-content">
        <div className="category-label">📄 PDF TOOLS</div>

        <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
          {toolCategories.map((cat) => (
            <div key={cat.category}>
              <button onClick={() => toggleCategory(cat.category)} className="category-btn">
                <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                  <span>{cat.icon}</span>
                  <span style={{fontSize: '14px', fontWeight: 500}}>{cat.category}</span>
                </div>
                {expandedCategories.includes(cat.category) ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </button>

              {expandedCategories.includes(cat.category) && (
                <div className="tool-list">
                  {cat.tools.map((tool, idx) => (
                    <button
                      key={idx}
                      onClick={() => 
                        {
                        onToolSelect(tool.name);
                        onClose();
                        }}
                      className={`tool-item ${currentTool === tool.name ? 'active' : ''}`}
                    >
                      <span>{tool.icon}</span>
                      <span style={{fontSize: '14px'}}>{tool.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;