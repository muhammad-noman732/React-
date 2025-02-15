import React from "react";
import Button from "../button/Button.jsx"
import './newLetter.css'

function NewsLetter() {
  return (
    <div className="newsLetter">
      <h2 className="h2">Newsletter</h2>
      <div className="box">
        <p>
          Subscribe to our newsletter to be among the first to keep up with the
          latest updates.
        </p>
        <input type="text"  value="Email Address" />
        <Button text="Subscribe" color = "white" bgcolor="blue"/>
      </div>
    </div>
  );
}

export default NewsLetter;
