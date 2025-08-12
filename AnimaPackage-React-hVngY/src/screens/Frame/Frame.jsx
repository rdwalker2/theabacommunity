import React from "react";
import { Home } from "../../components/Home";
import "./style.css";

export const Frame = () => {
  return (
    <div className="frame">
      <div className="home-wrapper">
        <Home className="home-instance" footerClassName="home-2" />
      </div>
    </div>
  );
};
