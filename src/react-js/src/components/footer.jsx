import React from 'react';

function Footer() {
  return (
    <div className="container-fluid">
      <header role="banner" className="fixed-top">
        {/* Navbar content */}
      </header>
      <main>
        {/* Main content */}
      </main>
      <footer className="py-5 container">
        <div className="row">
          <div className="col">
            <h5>About Us</h5>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a href="story.html" className="nav-link p-0 text-muted">Our Story</a>
              </li>
              <li className="nav-item mb-2">
                <a className="nav-link mb-2 p-0 text-muted active" aria-current="page" href="privacy.html">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-3 ">
            <h5>Share on Social Media</h5>
            <ul className="nav">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  <i className="bi bi-linkedin me-2"></i>
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  <i className="bi bi-twitter me-2"></i>
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  <i className="bi bi-facebook me-2"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                <button className="btn btn-primary" type="button">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;