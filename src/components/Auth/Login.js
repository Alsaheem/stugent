import React, { useState } from "react";
import Layout from "../Layout/Layout";
import { authLogin } from "../../api/api";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    authLogin(username,password)
    console.log(`submitting`);
  }

  return (
    <div>
      <Layout>
        <section id="login" className="bg-light py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6 mx-auto">
                <div className="card">
                  <div className="card-header bg-primary text-white">
                    <h4 className="text-white">
                      <i className="fas fa-sign-in-alt" /> Login
                    </h4>
                  </div>
                  <div className="card-body">
                    <form onSubmit={handleSubmit}>
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
                      <input
                        type="submit"
                        defaultValue="Login"
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
