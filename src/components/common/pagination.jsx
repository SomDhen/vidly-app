// import React from "react";
// import _ from "lodash";

// const Pagination = props => {
//   const { itemsCount, pageSize } = props;
//   const pagesCount = Math.ceil(itemsCount / pageSize);
//   //   console.log(pagesCount);
//   if (pagesCount === 1) return null;
//   // [1, 2, 3].map()
//   // [1..., pagesCount].map()
//   const pages = _.range(1, pagesCount + 1);
//   return (
//     <nav>
//       <ul className="pagination">
//         {pages.map(page => (
//           <li key={page} className="page-item">
//             <a
//               href="#"
//               className="page-link"
//             >
//               {page}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default Pagination;

// Pagination - Handling Page Changes
// import React from "react";
// import _ from "lodash";

// const Pagination = props => {
//   const { itemsCount, pageSize, currentPage, onPageChange } = props;
//   console.log(currentPage);

//   const pagesCount = Math.ceil(itemsCount / pageSize);
//   if (pagesCount === 1) return null;
//   const pages = _.range(1, pagesCount + 1);

//   return (
//     <nav>
//       <ul className="pagination">
//         {pages.map(page => (
//           <li
//             key={page}
//             className={page === currentPage ? "page-item active" : "page-item"}
//           >
//             <a className="page-link" onClick={() => onPageChange(page)}>
//               {page}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default Pagination;

// Pagination - Type Checking wit PropTypes
import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map(page => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <button className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
