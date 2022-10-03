import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink to="/projects"><h1>Mes projets</h1></NavLink>
    </div>
  );
};

export default Navigation;
