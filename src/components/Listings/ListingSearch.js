import React from "react";

export default function ListingSearch() {
  return (
    <div>
      <div>
        <section
          id="showcase-inner"
          className="showcase-search text-white py-5"
        >
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12">
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
                          Bedrooms (Any)
                        </option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-3">
                      <select name="price" className="form-control">
                        <option selected="true" disabled="disabled">
                          Max Price (All)
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
        </section>
        {/* Breadcrumb */}
        <section id="bc" className="mt-3">
          <div className="container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">
                    <i className="fas fa-home" /> Home
                  </a>
                </li>
                <li className="breadcrumb-item">
                  <a href="listings.html">Browse Listings</a>
                </li>
                <li className="breadcrumb-item active"> Search Results</li>
              </ol>
            </nav>
          </div>
        </section>
        {/* Listings */}
        <section id="listings" className="py-4">
          <div className="container">
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
                        <i className="fas fa-map-marker text-secondary" /> Salem
                        MA, 01915
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
              {/* Listing 4 */}
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="card listing-preview">
                  <img
                    className="card-img-top"
                    src="assets/img/homes/home-4.jpg"
                    alt
                  />
                  <div className="card-img-overlay">
                    <h2>
                      <span className="badge badge-secondary text-white">
                        $380,000
                      </span>
                    </h2>
                  </div>
                  <div className="card-body">
                    <div className="listing-heading text-center">
                      <h4 className="text-primary">28 Gifford Street</h4>
                      <p>
                        <i className="fas fa-map-marker text-secondary" />{" "}
                        Bedford NH, 03103
                      </p>
                    </div>
                    <hr />
                    <div className="row py-2 text-secondary">
                      <div className="col-6">
                        <i className="fas fa-th-large" /> Sqft: 2927
                      </div>
                      <div className="col-6">
                        <i className="fas fa-car" /> Garage: 2
                      </div>
                    </div>
                    <div className="row py-2 text-secondary">
                      <div className="col-6">
                        <i className="fas fa-bed" /> Bedrooms: 4
                      </div>
                      <div className="col-6">
                        <i className="fas fa-bath" /> Bathrooms: 2
                      </div>
                    </div>
                    <hr />
                    <div className="row py-2 text-secondary">
                      <div className="col-6">
                        <i className="fas fa-user" /> Jenny Johnson
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
              {/* Listing 5 */}
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="card listing-preview">
                  <img
                    className="card-img-top"
                    src="assets/img/homes/home-5.jpg"
                    alt
                  />
                  <div className="card-img-overlay">
                    <h2>
                      <span className="badge badge-secondary text-white">
                        $230,000
                      </span>
                    </h2>
                  </div>
                  <div className="card-body">
                    <div className="listing-heading text-center">
                      <h4 className="text-primary">12 United Road</h4>
                      <p>
                        <i className="fas fa-map-marker text-secondary" /> South
                        Hampton NH, 03827
                      </p>
                    </div>
                    <hr />
                    <div className="row py-2 text-secondary">
                      <div className="col-6">
                        <i className="fas fa-th-large" /> Sqft: 2207
                      </div>
                      <div className="col-6">
                        <i className="fas fa-car" /> Garage: 1
                      </div>
                    </div>
                    <div className="row py-2 text-secondary">
                      <div className="col-6">
                        <i className="fas fa-bed" /> Bedrooms: 3
                      </div>
                      <div className="col-6">
                        <i className="fas fa-bath" /> Bathrooms: 1.5
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
              {/* Listing 6 */}
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="card listing-preview">
                  <img
                    className="card-img-top"
                    src="assets/img/homes/home-6.jpg"
                    alt
                  />
                  <div className="card-img-overlay">
                    <h2>
                      <span className="badge badge-secondary text-white">
                        $780,000
                      </span>
                    </h2>
                  </div>
                  <div className="card-body">
                    <div className="listing-heading text-center">
                      <h4 className="text-primary">33 Essex Circle</h4>
                      <p>
                        <i className="fas fa-map-marker text-secondary" />{" "}
                        Lexington MA, 01731
                      </p>
                    </div>
                    <hr />
                    <div className="row py-2 text-secondary">
                      <div className="col-6">
                        <i className="fas fa-th-large" /> Sqft: 4145
                      </div>
                      <div className="col-6">
                        <i className="fas fa-car" /> Garage: 1
                      </div>
                    </div>
                    <div className="row py-2 text-secondary">
                      <div className="col-6">
                        <i className="fas fa-bed" /> Bedrooms: 5
                      </div>
                      <div className="col-6">
                        <i className="fas fa-bath" /> Bathrooms: 3.5
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
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
