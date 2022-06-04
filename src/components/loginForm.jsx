// Form - Refs
// import React, { Component } from "react";

// class LoginForm extends Component {
//   //   username = React.createRef();

//   //   componentDidMount() {
//   //     this.username.current.focus();
//   //   }

//   handleSubmit = e => {
//     e.preventDefault();

//     // Call the Server
//     const username = this.username.current.value;
//     console.log("Submitted");
//   };

//   render() {
//     return (
//       <div>
//         <h2>Login Form</h2>
//         <form onSubmit={this.handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="username">Username</label>
//             <input
//               autoFocus
//               //   ref={this.username}
//               type="text"
//               id="username"
//               className="form-control"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input type="password" id="password" className="form-control" />
//           </div>
//           <button className="btn btn-primary">Login</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default LoginForm;

// Forms - Controlled Elements
// import React, { Component } from "react";

// class LoginForm extends Component {
//   state = {
//     data: { username: "", password: "" },
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     // Call the Server
//     console.log("Submitted");
//   };

//   handleChange = ({ currentTarget: input }) => {
//     const data = { ...this.state.data };
//     data[input.name] = input.value;
//     this.setState({ data });
//   };

//   render() {
//     const { data } = this.state;
//     return (
//       <div>
//         <h2>Login Form</h2>
//         <form onSubmit={this.handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="username">Username</label>
//             <input
//               autoFocus
//               value={data.username}
//               onChange={this.handleChange}
//               name="username"
//               id="username"
//               type="text"
//               className="form-control"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input
//               value={data.password}
//               onChange={this.handleChange}
//               name="password"
//               type="password"
//               id="password"
//               className="form-control"
//             />
//           </div>
//           <button className="btn btn-primary">Login</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default LoginForm;

// Form - Extracting a Reusable Input
// import React, { Component } from "react";
// import Input from "./common/input";

// class LoginForm extends Component {
//   state = {
//     data: { username: "", password: "" },
//     errors: {},
//   };

//   validate = () => {
//     // return { username: "Username is Required!" };
//     const errors = {};

//     const { data } = this.state;

//     if (data.username.trim() === "")
//       errors.username = "Username is required!";
//     if (data.password.trim() === "")
//       errors.password = "Password is required!";

//     return Object.keys(errors).length === 0 ? null : errors;
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     const errors = this.validate();
//     // console.log(errors);
//     this.setState({ errors: errors || {} });
//     if (errors) return;

//     // Call the Server
//     console.log("Submitted");
//   };

//   validateProperty = ({ name, value }) => {
//     if (name === "username") {
//       if (value.trim() === "") return "Username is required";

//       // ....other rules.
//     }
//     if (name === "password") {
//       if (value.trim() === "") return "Password is required";

//       // ....other rules.
//     }
//   };

//   handleChange = ({ currentTarget: input }) => {
//     const errors = { ...this.state.errors };
//     const errorMessage = this.validateProperty(input);
//     if (errorMessage) errors[input.name] = errorMessage;
//     else delete errors[input.name];

//     const data = { ...this.state.data };
//     data[input.name] = input.value;

//     this.setState({ data, errors });
//   };

//   render() {
//     const { data, errors } = this.state;
//     return (
//       <div>
//         <h2>Login Form</h2>
//         <form onSubmit={this.handleSubmit}>
//           <Input
//             name="username"
//             value={data.username}
//             label="Username"
//             onChange={this.handleChange}
//             error={errors.username}
//           />
//           <Input
//             name="password"
//             value={data.password}
//             label="Password"
//             onChange={this.handleChange}
//             error={errors.password}
//           />
//           <button className="btn btn-primary">Login</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default LoginForm;

// Joi - Validation
// First, we installed npm i joi-browser@13.4.0
// import React, { Component } from "react";
// import Joi from "joi-browser";
// import Input from "./common/input";

// class LoginForm extends Component {
//   state = {
//     data: { username: "", password: "" },
//     errors: {},
//   };

//   schema = {
//     username: Joi.string().required(),
//     password: Joi.string().required(),
//   };

//   validate = () => {
//     const result = Joi.validate(this.state.data, this.schema, {
//       abortEarly: false,
//     });
//     console.log(result);

//     const errors = {};

//     const { data } = this.state;

//     if (data.username.trim() === "")
//       errors.username = "Username is required!";
//     if (data.password.trim() === "")
//       errors.password = "Password is required!";

//     return Object.keys(errors).length === 0 ? null : errors;
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     const errors = this.validate();
//     // console.log(errors);
//     this.setState({ errors: errors || {} });
//     if (errors) return;

//     // Call the Server
//     console.log("Submitted");
//   };

//   validateProperty = ({ name, value }) => {
//     if (name === "username") {
//       if (value.trim() === "") return "Username is required";

//       // ....other rules.
//     }
//     if (name === "password") {
//       if (value.trim() === "") return "Password is required";

//       // ....other rules.
//     }
//   };

//   handleChange = ({ currentTarget: input }) => {
//     const errors = { ...this.state.errors };
//     const errorMessage = this.validateProperty(input);
//     if (errorMessage) errors[input.name] = errorMessage;
//     else delete errors[input.name];

//     const data = { ...this.state.data };
//     data[input.name] = input.value;

//     this.setState({ data, errors });
//   };

//   render() {
//     const { data, errors } = this.state;
//     return (
//       <div>
//         <h2>Login Form</h2>
//         <form onSubmit={this.handleSubmit}>
//           <Input
//             name="username"
//             value={data.username}
//             label="Username"
//             onChange={this.handleChange}
//             error={errors.username}
//           />
//           <Input
//             name="password"
//             value={data.password}
//             label="Password"
//             onChange={this.handleChange}
//             error={errors.password}
//           />
//           <button className="btn btn-primary">Login</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default LoginForm;

// Validating a Form Using Joi.
// import React, { Component } from "react";
// import Joi from "joi-browser";
// import Input from "./common/input";

// class LoginForm extends Component {
//   state = {
//     data: { username: "", password: "" },
//     errors: {},
//   };

//   schema = {
//     username: Joi.string().required().label("Username"),
//     password: Joi.string().required().label("Password"),
//   };

//   validate = () => {
//     const options = { abortEarly: false };
//     const { error } = Joi.validate(this.state.data, this.schema, options);
//     if (!error) return null;

//     const errors = {};
//     for (let item of error.details) errors[item.path[0]] = item.message;
//     return errors;
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     const errors = this.validate();
//     // console.log(errors);
//     this.setState({ errors: errors || {} });
//     if (errors) return;

//     // Call the Server
//     console.log("Submitted");
//   };

//   validateProperty = ({ name, value }) => {
//     if (name === "username") {
//       if (value.trim() === "") return "Username is required";

//       // ....other rules.
//     }
//     if (name === "password") {
//       if (value.trim() === "") return "Password is required";

//       // ....other rules.
//     }
//   };

//   handleChange = ({ currentTarget: input }) => {
//     const errors = { ...this.state.errors };
//     const errorMessage = this.validateProperty(input);
//     if (errorMessage) errors[input.name] = errorMessage;
//     else delete errors[input.name];

//     const data = { ...this.state.data };
//     data[input.name] = input.value;

//     this.setState({ data, errors });
//   };

//   render() {
//     const { data, errors } = this.state;
//     return (
//       <div>
//         <h2>Login Form</h2>
//         <form onSubmit={this.handleSubmit}>
//           <Input
//             name="username"
//             value={data.username}
//             label="Username"
//             onChange={this.handleChange}
//             error={errors.username}
//           />
//           <Input
//             name="password"
//             value={data.password}
//             label="Password"
//             onChange={this.handleChange}
//             error={errors.password}
//           />
//           <button className="btn btn-primary">Login</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default LoginForm;

// Validating a Field Using Joi
// import React, { Component } from "react";
// import Joi from "joi-browser";
// import Input from "./common/input";

// class LoginForm extends Component {
//   state = {
//     data: { username: "", password: "" },
//     errors: {},
//   };

//   schema = {
//     username: Joi.string().required().label("Username"),
//     password: Joi.string().required().label("Password"),
//   };

//   validate = () => {
//     const options = { abortEarly: false };
//     const { error } = Joi.validate(this.state.data, this.schema, options);
//     if (!error) return null;

//     const errors = {};
//     for (let item of error.details) errors[item.path[0]] = item.message;
//     return errors;
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     const errors = this.validate();
//     // console.log(errors);
//     this.setState({ errors: errors || {} });
//     if (errors) return;

//     // Call the Server
//     console.log("Submitted");
//   };

//   validateProperty = ({ name, value }) => {
//     const obj = { [name]: value };
//     const schema = { [name]: this.schema[name] };
//     const { error } = Joi.validate(obj, schema);
//     return error ? error.details[0].message : null;
//   };

//   handleChange = ({ currentTarget: input }) => {
//     const errors = { ...this.state.errors };
//     const errorMessage = this.validateProperty(input);
//     if (errorMessage) errors[input.name] = errorMessage;
//     else delete errors[input.name];

//     const data = { ...this.state.data };
//     data[input.name] = input.value;

//     this.setState({ data, errors });
//   };

//   render() {
//     const { data, errors } = this.state;
//     return (
//       <div>
//         <h2>Login Form</h2>
//         <form onSubmit={this.handleSubmit}>
//           <Input
//             name="username"
//             value={data.username}
//             label="Username"
//             onChange={this.handleChange}
//             error={errors.username}
//           />
//           <Input
//             name="password"
//             value={data.password}
//             label="Password"
//             onChange={this.handleChange}
//             error={errors.password}
//           />
//           <button className="btn btn-primary" disabled={this.validate()}>
//             Login
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

// export default LoginForm;

// Code Review
// Extracting a Reusable Form
// import React, { Component } from "react";
// import Joi from "joi-browser";
// import Input from "./common/input";
// import Form from "./common/form";

// class LoginForm extends Form {
//   state = {
//     data: { username: "", password: "" },
//     errors: {},
//   };

//   schema = {
//     username: Joi.string().required().label("Username"),
//     password: Joi.string().required().label("Password"),
//   };

//   doSubmit = () => {
//     // Call the Server
//     console.log("Submitted");
//   };

//   render() {
//     const { data, errors } = this.state;
//     return (
//       <div>
//         <h2>Login Form</h2>
//         <form onSubmit={this.handleSubmit}>
//           <Input
//             name="username"
//             value={data.username}
//             label="Username"
//             onChange={this.handleChange}
//             error={errors.username}
//           />
//           <Input
//             name="password"
//             value={data.password}
//             label="Password"
//             onChange={this.handleChange}
//             error={errors.password}
//           />
//           <button className="btn btn-primary" disabled={this.validate()}>
//             Login
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

// export default LoginForm;

// Extracting Helper Rendering Methods
import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    // Call the Server
    console.log("Submitted");
  };

  render() {
    return (
      <div>
        <h2>Login Form</h2>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
