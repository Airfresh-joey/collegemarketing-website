import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="app">
      <nav className="nav">
        <div className="nav-container">
          <Link to="/" className="logo">
            <span className="logo-icon">🎓</span>
            COLLEGE MARKETING CO
          </Link>
          <div className="nav-links">
            <Link to="/services">Services</Link>
            <div className="nav-dropdown">
              <span className="nav-dropdown-trigger">Capabilities</span>
              <div className="nav-dropdown-menu">
                <Link to="/hbcu-marketing">HBCU Marketing</Link>
                <Link to="/hsi-marketing">HSI Marketing</Link>
                <Link to="/community-college-marketing">Community College Marketing</Link>
                <Link to="/nil-marketing">NIL Marketing</Link>
                <Link to="/greek-life-marketing">Greek Life Marketing</Link>
                <Link to="/college-sports-marketing">College Sports Marketing</Link>
              </div>
            </div>
            <Link to="/schools">Schools</Link>
            <Link to="/case-studies">Case Studies</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </nav>

      <Outlet />

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <Link to="/" className="logo">
                <span className="logo-icon">🎓</span>
                COLLEGE MARKETING CO
              </Link>
              <p>Authentic campus marketing programs</p>
            </div>
            <div className="footer-links">
              <Link to="/services">Services</Link>
              <Link to="/schools">Schools</Link>
              <Link to="/hbcu-marketing">HBCU Marketing</Link>
              <Link to="/hsi-marketing">HSI Marketing</Link>
              <Link to="/community-college-marketing">Community Colleges</Link>
              <Link to="/nil-marketing">NIL Marketing</Link>
              <Link to="/greek-life-marketing">Greek Life</Link>
              <Link to="/college-sports-marketing">College Sports</Link>
              <Link to="/case-studies">Case Studies</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/contact">Contact</Link>
              <a href="mailto:hello@collegemarketing.co">hello@collegemarketing.co</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 College Marketing Co. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
