import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import "../assets/css/Home.css";

const Home: React.FC = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle button click
  const handleExploreClick = () => {
    navigate('/all'); // Navigate to the AllMoviesList page
  };

  return (
    <>
      <header>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark d-none d-lg-block" style={{ zIndex: 2000 }}>
          <div className="container-fluid">
            <a className="navbar-brand nav-link" target="_blank" href="https://mdbootstrap.com/docs/standard/">
              <strong>Tourist Places</strong>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-collapse-init
              data-mdb-target="#navbarExample01"
              aria-controls="navbarExample01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarExample01">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
              <ul className="navbar-nav d-flex flex-row">
                <li className="nav-item me-3 me-lg-0">
                  <a className="nav-link" href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA" rel="nofollow" target="_blank">
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
                <li className="nav-item me-3 me-lg-0">
                  <a className="nav-link" href="https://www.facebook.com/mdbootstrap" rel="nofollow" target="_blank">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="nav-item me-3 me-lg-0">
                  <a className="nav-link" href="https://twitter.com/MDBootstrap" rel="nofollow" target="_blank">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="nav-item me-3 me-lg-0">
                  <a className="nav-link" href="https://github.com/mdbootstrap/mdb-ui-kit" rel="nofollow" target="_blank">
                    <i className="fab fa-github"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Navbar */}

        {/* Background image */}
        <div id="intro" className="bg-image shadow-2-strong">
          <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
            <div className="container d-flex align-items-center justify-content-center text-center h-100">
              <div className="text-white" data-mdb-theme="dark">
                <h1 className="mb-3">Learn Bootstrap 5 with MDB</h1>
                <h5 className="mb-4">Best & free guide of responsive web design</h5>
                <a
                  className="btn btn-outline-light btn-lg m-2"
                  href="https://youtu.be/_IyBZd8sLXs?si=lDOshCR3Cjd3emNW"
                  role="button"
                  target="_blank"
                  rel="nofollow"
                >
                  Start tutorial
                </a>
                <a
                  className="btn btn-outline-light btn-lg m-2"
                  href="https://youtu.be/_WhLhByngbk?si=1xM_DZZI1mSgLyiy"
                  target="_blank"
                  role="button"
                >
                  Download MDB UI KIT
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Background image */}

        {/* Centered Button */}
        <div className="d-flex justify-content-center align-items-center mt-4">
          <button type="button" className="btn btn-primary" onClick={handleExploreClick}>Explore</button>
        </div>
      </header>
    </>
  );
};

export default Home;
