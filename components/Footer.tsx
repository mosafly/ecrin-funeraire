export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="footer-logo-img">
              <img src="/assets/logo/ecrin-logo.png" alt="" />
            </div>
            <span className="footer-name">L&apos;Écrin Funéraire</span>
          </div>
          <p className="footer-copy">© 2024 L&apos;Écrin Funéraire. L&apos;élégance du dernier hommage.</p>
        </div>
        <nav className="footer-nav">
          <a href="#accueil">Accueil</a>
          <a href="#fonctionnalites">Fonctionnalités</a>
          <a href="#retours">Retour d&apos;Expérience</a>
          <a href="#participer">Participer</a>
        </nav>
      </div>
    </footer>
  )
}
