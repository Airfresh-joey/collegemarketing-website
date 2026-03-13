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
            <Link to="/schools">Schools</Link>
            <Link to="/blog">Blog</Link>
            <a href="/#contact">Contact</a>
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
              <Link to="/blog">Blog</Link>
              <a href="/#contact">Contact</a>
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
