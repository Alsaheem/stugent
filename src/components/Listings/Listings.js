import React, { useState, useEffect } from "react";
import Layout from "../Layout/Layout";
import axios from "axios";

export default function Listings() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/listings")
      .then((response) => {
        setListings(response.data);
        console.log(response.data);
      });
  }, []);

  return (
    // setListings
    <div>
      <Layout>
        <div>
          <section id="showcase-inner" className="py-5 text-white">
            <div className="container">
              <div className="row text-center">
                <div className="col-md-12">
                  <h1 className="display-4">Browse Our Properties</h1>
                  <p className="lead">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Sunt, pariatur!
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="bc" className="mt-3">
            <div className="container">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">
                      <i className="fas fa-home" /> Home
                    </a>
                  </li>
                  <li className="breadcrumb-item active"> Browse Listings</li>
                </ol>
              </nav>
            </div>
          </section>

          <section id="listings" className="py-4">
            <div className="container">
              <div className="row">
                {/* Listing 1 */}
                {listings.map((listing,index) => (
                  <div key={index} className="col-md-6 col-lg-4 mb-4">
                    <div className="card listing-preview">
                      <img
                        className="card-img-top"
                        src="assets/img/homes/home-1.jpg"
                        alt
                      />
                      <div className="card-img-overlay">
                        <h2>
                          <span className="badge badge-secondary text-white">
                            {listing.price}
                          </span>
                        </h2>
                      </div>
                      <div className="card-body">
                        <div className="listing-heading text-center">
                          <h4 className="text-primary">{listing.title}</h4>
                          <p>
                            <i className="fas fa-map-marker text-secondary" />{" "}
                            {listing.state}
                          </p>
                        </div>
                        <hr />
                        <div className="row py-2 text-secondary">
                          <div className="col-6">
                            <i className="fas fa-th-large" /> Sqft: 3200
                          </div>
                          <div className="col-6">
                            <i className="fas fa-car" /> Garage: 2
                          </div>
                        </div>
                        <div className="row py-2 text-secondary">
                          <div className="col-6">
                            <i className="fas fa-bed" /> Bedrooms: 3
                          </div>
                          <div className="col-6">
                            <i className="fas fa-bath" /> Bathrooms: 2
                          </div>
                        </div>
                        <hr />
                        <div className="row py-2 text-secondary">
                          <div className="col-12">
                            <i className="fas fa-user" /> Kyle Brown
                          </div>
                        </div>
                        <div className="row text-secondary pb-2">
                          <div className="col-6">
                            <i className="fas fa-clock" /> 2 days ago
                          </div>
                        </div>
                        <hr />
                        <a
                          href="listing.html"
                          className="btn btn-primary btn-block"
                        >
                          More Info
                        </a>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="row">
                  <div className="col-md-12">
                    <ul className="pagination">
                      <li className="page-item disabled">
                        <a className="page-link" href="#">
                          «
                        </a>
                      </li>
                      <li className="page-item active">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          »
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </div>
  );
}
