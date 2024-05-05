import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const SmoothScrollLink = ({ to, children }) => {
  return (
    <Link
      to={to}
      smooth={true}
      duration={500}
      offset={-70} // Adjust this value if needed to account for fixed header or other offsets
    >
      {children}
    </Link>
  );
};

export default SmoothScrollLink;
