// Extracting a Reusable Input

// import React from "react";

// const Input = props => {
//   return (
//     <div className="form-group">
//       <label htmlFor={props.name}>Username</label>
//       <input
//         autoFocus
//         value={account.username}
//         onChange={this.handleChange}
//         name={props.name}
//         id={props.name}
//         type="text"
//         className="form-control"
//       />
//     </div>
//   );
// };

// export default Input;

// Applying Object Destructuring

// import React from "react";

// const Input = ({ name, label, value, onChange }) => {
//   return (
//     <div className="form-group">
//       <label htmlFor={name}>{label}</label>
//       <input
//         value={value}
//         onChange={onChange}
//         name={name}
//         id={name}
//         type="text"
//         className="form-control"
//       />
//     </div>
//   );
// };

// export default Input;

// Displaying Validation Errors
// import React from "react";

// const Input = ({ type, name, label, value, onChange, error }) => {
//   return (
//     <div className="form-group">
//       <label htmlFor={name}>{label}</label>
//       <input
//         value={value}
//         onChange={onChange}
//         type={type}
//         name={name}
//         id={name}
//         className="form-control"
//       />
//       {error && <div className="alert alert-danger">{error}</div>}
//     </div>
//   );
// };

// export default Input;

// To get all the Attributes.

import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input {...rest} name={name} id={name} className="form-control" />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
