import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div><p className="footer-name">Siddhesh Bhurke</p><p className="footer-role">Artificial Intelligence Engineer</p></div>
        <nav className="footer-links" aria-label="Footer navigation"><a href="https://www.linkedin.com/in/siddhesh-bhurke/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/siddheshbhurke" target="_blank" rel="noreferrer">GitHub</a><a href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a></nav>
      </div>
      <div className="container footer-bottom"><p>&copy; 2026 Siddhesh Bhurke.</p><p>Designed &amp; Developed with React.</p></div>
    </footer>
  );
}

export default Footer;
