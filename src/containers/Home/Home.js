import React from "react";
import Layout from "../../components/Layout/Layout";

export default function Home() {
  return (
    <div>
      <Layout>
        <div>
          {/* Showcase */}
          <section id="showcase">
            <div className="container text-center">
              <div className="home-search p-5">
                <div className="overlay p-5">
                  <h1 className="display-4 mb-4">
                    Property Searching Just Got So Easy
                  </h1>
                  <p className="lead">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Recusandae quas, asperiores eveniet vel nostrum magnam
                    voluptatum tempore! Consectetur, id commodi!
                  </p>
                  <div className="search">
                    <form action="search.html">
                      {/* Form Row 1 */}
                      <div className="form-row">
                        <div className="col-md-4 mb-3">
                          <label className="sr-only">Keywords</label>
                          <input
                            type="text"
                            name="keywords"
                            className="form-control"
                            placeholder="Keyword (Pool, Garage, etc)"
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label className="sr-only">City</label>
                          <input
                            type="text"
                            name="city"
                            className="form-control"
                            placeholder="City"
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label className="sr-only">State</label>
                          <select name="state" className="form-control">
                            <option selected="true" disabled="disabled">
                              State (All)
                            </option>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="DC">District Of Columbia</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                          </select>
                        </div>
                      </div>
                      {/* Form Row 2 */}
                      <div className="form-row">
                        <div className="col-md-6 mb-3">
                          <label className="sr-only">Bedrooms</label>
                          <select name="bedrooms" className="form-control">
                            <option selected="true" disabled="disabled">
                              Bedrooms (All)
                            </option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                            <option value={9}>9</option>
                            <option value={10}>10</option>
                          </select>
                        </div>
                        <div className="col-md-6 mb-3">
                          <select
                            name="price"
                            className="form-control"
                            id="type"
                          >
                            <option selected="true" disabled="disabled">
                              Max Price (Any)
                            </option>
                            <option value={100000}>$100,000</option>
                            <option value={200000}>$200,000</option>
                            <option value={300000}>$300,000</option>
                            <option value={400000}>$400,000</option>
                            <option value={500000}>$500,000</option>
                            <option value={600000}>$600,000</option>
                            <option value={700000}>$700,000</option>
                            <option value={800000}>$800,000</option>
                            <option value={900000}>$900,000</option>
                            <option value={1000000}>$1M+</option>
                          </select>
                        </div>
                      </div>
                      <button
                        className="btn btn-secondary btn-block mt-4"
                        type="submit"
                      >
                        Submit form
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Listings */}
          <section id="listings" className="py-5">
            <div className="container">
              <h3 className="text-center mb-3">Latest Listings</h3>
              <div className="row">
                {/* Listing 1 */}
                <div className="col-md-6 col-lg-4 mb-4">
                  <div className="card listing-preview">
                    <img
                      className="card-img-top"
                      src="assets/img/homes/home-1.jpg"
                      alt
                    />
                    <div className="card-img-overlay">
                      <h2>
                        <span className="badge badge-secondary text-white">
                          $490,000
                        </span>
                      </h2>
                    </div>
                    <div className="card-body">
                      <div className="listing-heading text-center">
                        <h4 className="text-primary">45 Drivewood Circle</h4>
                        <p>
                          <i className="fas fa-map-marker text-secondary" />{" "}
                          Norwood MA, 02062
                        </p>
                      </div>
                      <hr />
                      <div className="row py-2 text-secondary">
                        <div className="col-6">
                          <i className="fas fa-th-large" /> Sqft: 2500
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
                        <div className="col-6">
                          <i className="fas fa-user" /> Kyle Brown
                        </div>
                      </div>
                      <div className="row text-secondary pb-2">
                        <div className="col-6">
                          <i className="fas fa-clock" /> 5 days ago
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
                {/* Listing 2 */}
                <div className="col-md-6 col-lg-4 mb-4">
                  <div className="card listing-preview">
                    <img
                      className="card-img-top"
                      src="assets/img/homes/home-2.jpg"
                      alt
                    />
                    <div className="card-img-overlay">
                      <h2>
                        <span className="badge badge-secondary text-white">
                          $550,000
                        </span>
                      </h2>
                    </div>
                    <div className="card-body">
                      <div className="listing-heading text-center">
                        <h4 className="text-primary">18 Jefferson Lane</h4>
                        <p>
                          <i className="fas fa-map-marker text-secondary" />{" "}
                          Woburn MA, 01801
                        </p>
                      </div>
                      <hr />
                      <div className="row py-2 text-secondary">
                        <div className="col-6">
                          <i className="fas fa-th-large" /> Sqft: 3200
                        </div>
                        <div className="col-6">
                          <i className="fas fa-car" /> Garage: 1
                        </div>
                      </div>
                      <div className="row py-2 text-secondary">
                        <div className="col-6">
                          <i className="fas fa-bed" /> Bedrooms: 4
                        </div>
                        <div className="col-6">
                          <i className="fas fa-bath" /> Bathrooms: 2.5
                        </div>
                      </div>
                      <hr />
                      <div className="row py-2 text-secondary">
                        <div className="col-6">
                          <i className="fas fa-user" /> Mark Hudson
                        </div>
                      </div>
                      <div className="row text-secondary pb-2">
                        <div className="col-6">
                          <i className="fas fa-clock" /> 5 days ago
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
                {/* Listing 3 */}
                <div className="col-md-6 col-lg-4 mb-4">
                  <div className="card listing-preview">
                    <img
                      className="card-img-top"
                      src="assets/img/homes/home-3.jpg"
                      alt
                    />
                    <div className="card-img-overlay">
                      <h2>
                        <span className="badge badge-secondary text-white">
                          $580,000
                        </span>
                      </h2>
                    </div>
                    <div className="card-body">
                      <div className="listing-heading text-center">
                        <h4 className="text-primary">187 Woodrow Street</h4>
                        <p>
                          <i className="fas fa-map-marker text-secondary" />{" "}
                          Salem MA, 01915
                        </p>
                      </div>
                      <hr />
                      <div className="row py-2 text-secondary">
                        <div className="col-6">
                          <i className="fas fa-th-large" /> Sqft: 3107
                        </div>
                        <div className="col-6">
                          <i className="fas fa-car" /> Garage: 0
                        </div>
                      </div>
                      <div className="row py-2 text-secondary">
                        <div className="col-6">
                          <i className="fas fa-bed" /> Bedrooms: 4
                        </div>
                        <div className="col-6">
                          <i className="fas fa-bath" /> Bathrooms: 3
                        </div>
                      </div>
                      <hr />
                      <div className="row py-2 text-secondary">
                        <div className="col-6">
                          <i className="fas fa-user" /> Mark Hudson
                        </div>
                      </div>
                      <div className="row text-secondary pb-2">
                        <div className="col-6">
                          <i className="fas fa-clock" /> 5 days ago
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
              </div>
            </div>
          </section>
          <section id="services" className="py-5 bg-secondary text-white">
            <div className="container">
              <div className="row text-center">
                <div className="col-md-4">
                  <i className="fas fa-comment fa-4x mr-4" />
                  <hr />
                  <h3>Consulting Services</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt, debitis nam! Repudiandae, provident iste
                    consequatur hic dignissimos ratione ea quae.
                  </p>
                </div>
                <div className="col-md-4">
                  <i className="fas fa-home fa-4x mr-4" />
                  <hr />
                  <h3>Propery Management</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt, debitis nam! Repudiandae, provident iste
                    consequatur hic dignissimos ratione ea quae.
                  </p>
                </div>
                <div className="col-md-4">
                  <i className="fas fa-suitcase fa-4x mr-4" />
                  <hr />
                  <h3>Renting &amp; Selling</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt, debitis nam! Repudiandae, provident iste
                    consequatur hic dignissimos ratione ea quae.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </div>
  );
}
