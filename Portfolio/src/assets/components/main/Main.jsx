import React from 'react';
import "./main.css";

function Main() {
  return (
    <div className="mainSection">
      <h1 className="topHeading">
        Hi, I am <span className="name">M. Noman</span>
      </h1>
      <h3 className="aboutDetail">A Front End Engineer.</h3>

      {/* Wrapped paragraph inside a div to align better */}
      <div className="mainContent">
        <p>
          Adipisicing sit fugit ullam unde aliquid sequi. Facilis soluta facilis
          perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi
          quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima
          consectetur.
        </p>
      </div>
    </div>
  );
}

export default Main;
