import React from "react";
import { Outlet } from "react-router-dom";

const Pokemon = () => {
  return (
    <div>
      <h1>Pokemon</h1>
      <p>These are my pokemon.</p>
      <Outlet />
    </div>
  );
};

export default Pokemon;
