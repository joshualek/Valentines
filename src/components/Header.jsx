import { useState, useEffect } from 'react';

const Header = () => {

  const [isTransparent, setIsTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const photoSection = document.getElementById('photo-section');
      const triggerHeight = photoSection ? photoSection.offsetHeight : 300;
      const scrollPosition = window.scrollY;

      if (scrollPosition > triggerHeight - 100) {
        setIsTransparent(false);
      } else {
        setIsTransparent(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleCards = () => {
    const element = document.getElementById('cards-container');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  const handleContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <header className={`site-header ${isTransparent ? "transparent" : "solid"}`}>
      <nav className="navbar navbar-expand-lg py-3">
        <div className="container-lg">
          <a href="/"><img src="/assets/Valentine-Light.svg" className="logo" alt="Logo" /></a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#bdNavbar"
            aria-controls="bdNavbar"
            style={{
              filter: isTransparent ? "invert(1)" : "none", 
              border: "none",
            }}
            >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="offcanvas offcanvas-end custom-offcanvas" tabIndex="-1" id="bdNavbar" aria-labelledby="bdNavbarOffcanvasLabel">
            <div className="offcanvas-body">
              <ul className="navbar-nav scrollspy-nav justify-content-end flex-grow-1 gap-lg-5">
                {/* home nav */}
                <li className="scrollspy-link nav-item">
                  <a className="nav-link text-dark" href="/">Home</a>
                </li>

                {/* <!-- Cards nav --> */}
                <li className="scrollspy-link nav-item">
                  <a className="nav-link text-dark" onClick={handleCards}>Valentine Cards</a>
                </li>

                <li className="scrollspy-link nav-item">
                  <a className="nav-link text-dark" onClick={handleContact}>Contact Me</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
