// import React, { Component } from "react";

// // Input: liked: Boolean (ture/false)
// // Output: onClick

// class Like extends Component {
//   render() {
//     return <span className="fa fa-heart-o" aria-hidden="true"></span>;
//   }
// }

// export default Like;

// Implementing Input (Boolean true/false)
// import React, { Component } from "react";

// // Input: liked: Boolean (ture/false)

// class Like extends Component {
//   render() {
//     let classes = "fa fa-heart";
//     if (!this.props.liked) classes += "-o";
//     return (
//       <span
//         className={classes}
//         aria-hidden="true"
//         onClick={this.props.onClick}
//         style={{ cursor: "pointer" }}
//       ></span>
//     );
//   }
// }

// export default Like;

// Converting into Statelss Functional Components
import React from "react";

const Like = props => {
  let classes = "fa fa-heart";
  if (!props.liked) classes += "-o";
  return (
    <span
      className={classes}
      aria-hidden="true"
      style={{ cursor: "pointer" }}
      onClick={props.onClick}
    ></span>
  );
};

export default Like;
