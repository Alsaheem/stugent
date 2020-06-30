import React, { useState } from "react";
import Layout from "../Layout/Layout";
import { authSignup } from "../../api/api";


export default function Register() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const handleSubmit = () => {
    authSignup(email,username,password)
    console.log(`submitting`);
  }

  return (
    <div>
      <Layout>
        <section id="register" className="bg-light py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6 mx-auto">
                <div className="card">
                  <div className="card-header bg-primary text-white">
                    <h4 className="text-white">
                      <i className="fas fa-user-plus" /> Register
                    </h4>
                  </div>
                  <div className="card-body">
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="first_name">First Name</label>
                        <input
                          type="text"
                          name="first_name"
                          className="form-control"
                          value={firstname}
                          onChange={(e) => setFirstname(e.target.value)}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="last_name">Last Name</label>
                        <input
                          type="text"
                          name="last_name"
                          className="form-control"
                          value={lastname}
                          onChange={(e) => setLastname(e.target.value)}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                          type="text"
                          name="username"
                          className="form-control"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="password2">Password</label>
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="password">Confirm Password</label>
                        <input
                          type="password"
                          name="password2"
                          className="form-control"
                          value={password2}
                          onChange={(e) => setPassword2(e.target.value)}
                          required
                        />
                      </div>
                      <input
                        type="submit"
                        defaultValue="Register"
                        className="btn btn-secondary btn-block"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
}
