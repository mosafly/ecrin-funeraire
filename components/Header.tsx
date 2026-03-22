export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <a className="logo" href="#accueil">
          <div className="logo-img">
            <img src="/assets/logo/ecrin-logo.png" alt="L'Écrin Funéraire" />
          </div>
          <span className="logo-name">L&apos;Écrin Funéraire</span>
        </a>
        <nav className="nav">
          <a href="#accueil">Accueil</a>
          <a href="#fonctionnalites">Fonctionnalités</a>
          <a href="#retours">Retour d&apos;Expérience</a>
          <a href="#participer">Participer</a>
        </nav>
      </div>
    </header>
  )
}
