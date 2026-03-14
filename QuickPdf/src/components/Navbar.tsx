import { Bell, Settings, User, Menu } from 'lucide-react';
import './Styles.css' // CSS Import zaroori hai

interface NavbarProps {
  currentTool: string;
  onMenuClick: () => void;
}

 function Navbar({ currentTool, onMenuClick }: NavbarProps) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        {/* Left Side */}
        <div className="nav-left">
          <button className="menu-toggle-btn" onClick={onMenuClick}>
            <Menu size={24} color="#4b5563" />
          </button>
          <h2 className="tool-title">{currentTool}</h2>
        </div>

        {/* Right Side */}
        <div className="nav-right">
          {/* Notifications */}
          <button className="nav-icon-btn">
            <Bell size={20} />
            <span className="notification-dot"></span>
          </button>

          {/* Settings */}
          <button className="nav-icon-btn settings-btn">
            <Settings size={20} />
          </button>

          {/* Profile */}
          <button className="user-avatar">
            <User size={20} color="white" />
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;