import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <div>
        <section id="top-bar" className="p-3">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <i className="fas fa-phone" /> +2348091356855
              </div>
              <div className="col-md-4">
                <i className="fas fa-envelope-open" /> alsaheem@stugent.com
              </div>
              <div className="col-md-4">
                <div className="social text-right">
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-facebook" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fab fa-pinterest" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Navbar />
        {children}
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
