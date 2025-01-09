import "./styles/App.css";

function Header() {
  return (
    <header className="siteHeaderContainer">
      <div className="container">
        <div className="siteLogoContainer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            width="48"
            height="48"
            fill="white"
            aria-label="Cloud Logo"
          >
            <path d="M48.5 26.5c-1.1 0-2.2.1-3.2.4-1.5-5.3-6.4-9.2-12.3-9.2-5.1 0-9.6 3-11.5 7.4-1.1-.4-2.3-.6-3.5-.6-5.5 0-10 4.5-10 10s4.5 10 10 10h30c5.5 0 10-4.5 10-10s-4.5-10-10-10z" />
          </svg>
        </div>
        <div className="siteTextContainer">
          <div className="siteTitle">Whether...?</div>
          <div className="siteSubtitle">THE WORLD'S #1 WEATHER APP</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
