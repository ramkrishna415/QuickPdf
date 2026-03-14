import { Facebook, Twitter, Linkedin } from 'lucide-react';
import './Styles.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-grid">
          {/* Column 1 */}
          <div className="footer-col">
            <h3>Company</h3>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">About Us</a></li>
              <li><a href="#" className="footer-link">Contact</a></li>
              <li><a href="#" className="footer-link">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="footer-col">
            <h3>Support</h3>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">Terms of Service</a></li>
              <li><a href="#" className="footer-link">FAQ</a></li>
              <li><a href="#" className="footer-link">Support</a></li>
            </ul>
          </div>

          {/* Column 3 - Socials */}
          <div className="footer-col">
            <h3>Follow Us</h3>
            <div className="social-group">
              <a href="#" className="social-icon"><Twitter size={20} /></a>
              <a href="#" className="social-icon"><Facebook size={20} /></a>
              <a href="#" className="social-icon"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright-text">
            © 2026 ToolBox. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
