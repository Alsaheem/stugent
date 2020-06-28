import axios from "axios";

export const authSignup = (username, email, password1, password2) => {
  axios
    .post("http://127.0.0.1:8000/rest-auth/registration/", {
      username: username,
      email: email,
      password1: password1,
      password2: password2,
    })
    .then((response) => {
      const token = response.data.key;
      const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
      localStorage.setItem("token", token);
      localStorage.setItem("expirationDate", expirationDate);
    })
    .catch((err) => {
      console.error(err);
    });
};


export const authLogin = (username, password) => {
  axios
    .post("http://127.0.0.1:8000/rest-auth/login/", {
      username: username,
      password: password,
    })
    .then((response) => {
      const token = response.data.key;
      const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
      localStorage.setItem("token", token);
      localStorage.setItem("expirationDate", expirationDate);
    })
    .catch((err) => {
      console.error(err);
    });
};


export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");
};