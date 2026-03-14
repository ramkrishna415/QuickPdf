import { useState } from 'react'
import { Routes, Route } from 'react-router-dom' // Import karein
import './App.css'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import { Footer } from './components/Footer'
import { MainContent } from './components/MainContent'
import { FeatureDetails } from './components/FeatureDetails' // Naya page import karein

function App() {
  const [currentTool, setCurrentTool] = useState('PDF to Word');
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="app-container">
      <Sidebar 
        currentTool={currentTool} 
        onToolSelect={setCurrentTool} 
        isOpen={isSidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
      />
      
      <main className="main-content">
        <Navbar  
          currentTool={currentTool} 
          onMenuClick={() => setSidebarOpen(true)}
        />

        <div className="content-body">
         
          <Routes>
           
            <Route path="/" element={<MainContent currentTool={currentTool} />}  />
            
            
            <Route path="/feature/:id" element={<FeatureDetails />} />
          </Routes>
        </div>

        <Footer />
      </main>
    </div>
  )
}

export default App
