import PropTypes from "prop-types";
import React from "react";
import { Sample } from "./Sample";
import "./NavText.css";

export const NavText = ({
  showSample5 = true,
  showSample3 = true,
  showSample = true,
  showSample2 = true,
  showSample4 = true,
}) => {
  return (
    <div className="nav-text">
      <Sample />

      {showSample5 && <Sample />}

      {showSample4 && <Sample />}

      {showSample3 && <Sample />}

      {showSample2 && <Sample />}

      {showSample && <Sample />}
    </div>
  );
};

NavText.propTypes = {
  showSample5: PropTypes.bool,
  showSample3: PropTypes.bool,
  showSample: PropTypes.bool,
  showSample2: PropTypes.bool,
  showSample4: PropTypes.bool,
};
