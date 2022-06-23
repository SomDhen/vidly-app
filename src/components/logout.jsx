// import React, { Component } from "react";

// class Logout extends Component {
//   componentDidMount() {
//     localStorage.removeItem("token");

//     window.location = "/";
//   }

//   render() {
//     return null;
//   }
// }

// export default Logout;

// Refactiong (Authentication, Token key)
import React, { Component } from "react";
// import { logout } from "../services/authService";
import auth from "../services/authService";

class Logout extends Component {
  componentDidMount() {
    auth.logout();
    window.location = "/";
  }

  render() {
    return null;
  }
}

export default Logout;
