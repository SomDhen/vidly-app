// import React from "react";
// import { Route, Redirect, Switch } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import Movies from "./components/movies";
// import Customers from "./components/customers";
// import Rentals from "./components/rentals";
// import NotFound from "./components/notFound";
// import NavBar from "./components/navBar";
// import MovieForm from "./components/movieForm";
// import LoginForm from "./components/loginForm";
// import RegisterForm from "./components/registerForm";
// import ContactForm from "./components/contactForm";
// import "react-toastify/dist/ReactToastify.css";
// import "./App.css";

// function App() {
//   return (
//     <React.Fragment>
//       <ToastContainer />
//       <NavBar />
//       <main className="container">
//         <Switch>
//           <Route path="/contact" component={ContactForm} />
//           <Route path="/register" component={RegisterForm} />
//           <Route path="/login" component={LoginForm} />
//           <Route path="/movies/:id" component={MovieForm} />
//           <Route path="/movies" component={Movies} />
//           <Route path="/customers" component={Customers} />
//           <Route path="/rentals" component={Rentals} />
//           <Route path="/not-found" component={NotFound} />
//           <Redirect from="/" exact to="/movies" />
//           <Redirect to="/not-found" />
//         </Switch>
//       </main>
//     </React.Fragment>
//   );
// }

// export default App;

// JSON Web Tokens
// Getting the Current User
// import React, { Component } from "react";
// import { Route, Redirect, Switch } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import jwtDecode from "jwt-decode";
// import Movies from "./components/movies";
// import Customers from "./components/customers";
// import Rentals from "./components/rentals";
// import NotFound from "./components/notFound";
// import NavBar from "./components/navBar";
// import MovieForm from "./components/movieForm";
// import LoginForm from "./components/loginForm";
// import RegisterForm from "./components/registerForm";
// import ContactForm from "./components/contactForm";
// import Logout from "./components/logout";
// import "react-toastify/dist/ReactToastify.css";
// import "./App.css";

// class App extends Component {
//   state = {};

//   componentDidMount() {
//     try {
//       const jwt = localStorage.getItem("token");
//       const user = jwtDecode(jwt);
//       this.setState({ user });
//     } catch (error) {}
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <ToastContainer />
//         <NavBar user={this.state.user} />
//         <main className="container">
//           <Switch>
//             <Route path="/contact" component={ContactForm} />
//             <Route path="/register" component={RegisterForm} />
//             <Route path="/login" component={LoginForm} />
//             <Route path="/logout" component={Logout} />
//             <Route path="/movies/:id" component={MovieForm} />
//             <Route path="/movies" component={Movies} />
//             <Route path="/customers" component={Customers} />
//             <Route path="/rentals" component={Rentals} />
//             <Route path="/not-found" component={NotFound} />
//             <Redirect from="/" exact to="/movies" />
//             <Redirect to="/not-found" />
//           </Switch>
//         </main>
//       </React.Fragment>
//     );
//   }
// }

// export default App;

// Refactoring (Authentication, Token Key)
// import React, { Component } from "react";
// import { Route, Redirect, Switch } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import Movies from "./components/movies";
// import Customers from "./components/customers";
// import Rentals from "./components/rentals";
// import NotFound from "./components/notFound";
// import NavBar from "./components/navBar";
// import MovieForm from "./components/movieForm";
// import LoginForm from "./components/loginForm";
// import RegisterForm from "./components/registerForm";
// import ContactForm from "./components/contactForm";
// import Logout from "./components/logout";
// import auth from "./services/authService";
// import "react-toastify/dist/ReactToastify.css";
// import "./App.css";

// class App extends Component {
//   state = {};

//   componentDidMount() {
//     const user = auth.getCurrentUser();
//     this.setState({ user });
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <ToastContainer />
//         <NavBar user={this.state.user} />
//         <main className="container">
//           <Switch>
//             <Route path="/contact" component={ContactForm} />
//             <Route path="/register" component={RegisterForm} />
//             <Route path="/login" component={LoginForm} />
//             <Route path="/logout" component={Logout} />
//             <Route path="/movies/:id" component={MovieForm} />
//             <Route path="/movies" component={Movies} />
//             <Route path="/customers" component={Customers} />
//             <Route path="/rentals" component={Rentals} />
//             <Route path="/not-found" component={NotFound} />
//             <Redirect from="/" exact to="/movies" />
//             <Redirect to="/not-found" />
//           </Switch>
//         </main>
//       </React.Fragment>
//     );
//   }
// }

// export default App;

// Showing or Hiding Elements based on the User
import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import ContactForm from "./components/contactForm";
import Logout from "./components/logout";
import ProtectedRoute from "./components/common/protectedRoute";
import auth from "./services/authService";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar user={user} />
        <main className="container">
          <Switch>
            <Route path="/contact" component={ContactForm} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <ProtectedRoute path="/movies/:id" component={MovieForm} />
            <Route
              path="/movies"
              render={props => <Movies {...props} user={this.state.user} />}
            />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
