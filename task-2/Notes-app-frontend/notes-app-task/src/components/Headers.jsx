import React from "react";
import { FiAlignLeft } from "react-icons/fi";
const Headers = () => {
  return (
    <nav className="navbar navbar-light  bg-dark bg-gradient">
      <div className="container-fluid">
        <a className="navbar-brand">
          <FiAlignLeft />
          <span className="he-notes">Notes</span>
        </a>
      </div>
    </nav>
  );
};

export default Headers;