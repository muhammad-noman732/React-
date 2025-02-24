import React, { useState } from "react";

function Form() {
  const [city, setCity] = useState("");

  const submitHandler = (e)=>{
          e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type ="text"
          placeholder ="Enter City Name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button>Get Weather</button>
      </form>
    </div>
  );
}

export default Form;
