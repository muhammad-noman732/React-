import React, { useState } from "react";
import "./form.css";
function Form() {
  const [IdError, setIdError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [nameError, setNameError] = useState("");
  const [zipCodeError, setZipCodeError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [countryError, setCountryError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [languageError, setLanguagerError] = useState("");


  const [formData, setFormData] = useState({
    userId: "",
    password: "",
    name: "",
    address: "",
    country: "",
    zipCode: "",
    email: "",
    sex: "",
    language: "",
    About: "",
  });

  const idChangeHandler = (e) => {
    setFormData({
      ...formData,
      userId: e.target.value,
    });
    //    the step is done if there is error stored in the userid field or others one so clear it as the user enter it again
  };

  const passwordChangeHandler = (e) => {
    setFormData({
      ...formData,
      password: e.target.value,
    });
  };

  const nameChangeHandler = (e) => {
    setFormData({
      ...formData,
      name: e.target.value,
    });
  };

  const addressChangeHandler = (e) => {
    setFormData({
      ...formData,
      address: e.target.value,
    });
  };

  const emailHandler = (e) => {
    setFormData({
      ...formData,
      email: e.target.value,
    });
  };

  const zipCodeHandler = (e) => {
    setFormData({
      ...formData,
      zipCode: e.target.value,
    });
  };

  const countrySelectorHandler = (e) => {
    setFormData({
      ...formData,
      country: e.target.value,
    });
  };

  const genderSelectorHandler = (e) => {
    setFormData({
      ...formData,
      sex: e.target.value,
    });
  };

  const languageSelectorHandler = (e) => {
    setFormData({
      ...formData,
       language: e.target.value,
    });
  };
  //  when submit the form...

  const submitHandler = (e) => {
    e.preventDefault();

    // Validation logic
    if (!formData.userId || formData.userId.length < 8) {
      setIdError("user Id must contain atleast  8 characters");
    } else {
      setIdError("");
    }

    //  for password validation
    if (!formData.password || formData.password.length < 8) {
      setPasswordError("pasword must contain atleast  8 characters");
    } else {
      setPasswordError("");
    }

    if (!formData.name) {
      setNameError("Name is required");
    } else {
      setNameError("");
    }

    if (!formData.email || formData.email.length < 8) {
      setEmailError("Required.must be a valid email");
    } else if (!formData.email.includes("@")) {
      setEmailError("@ missing ");
    } else {
      setEmailError("");
    }

    //  zip code
    if (!formData.zipCode) {
      setZipCodeError("Required.must contain number");
    } else {
      setZipCodeError("");
    }

    //  select a country
    if (!formData.country) {
      setCountryError("Required.must select a country");
    } else {
      setCountryError("");
    }

    //  for gender  
    if(!formData.sex){
         setGenderError("Required")
    }
    else{
      setGenderError("");
    }
     
    //  language select error

    if (!formData.language) {
         setLanguagerError("Required")
    } else {
        setLanguagerError("");
    }

    console.log("form submitted", formData);
  };


  return (
    <div className="div">
      <form onSubmit={submitHandler}>
        <label>id: </label>

        <input
          type="text"
          value={formData.userId}
          onChange={idChangeHandler}
          className="green-message"
          placeholder="Enter Your id"
        />
        {IdError && <span className="error-message">{IdError}</span>}
        <br />
        <label>Name: </label>
        <input
          type="text"
          value={formData.name}
          onChange={nameChangeHandler}
          className="green-message"
          placeholder="Enter Your name "
        />
        {nameError && <span className="error-message">{nameError}</span>}
        <br />
        <label>Password: </label>
        <input
          type="password"
          value={formData.password}
          onChange={passwordChangeHandler}
          className="green-message"
          placeholder="Enter your password"
        />
        {passwordError && (
          <span className="error-message">{passwordError}</span>
        )}
        <br />

        <label>Address:</label>
        <input
          type="text"
          value={formData.address}
          onChange={addressChangeHandler}
          className="green-message"
          placeholder="Optional"
        />
        <br />

        <label>Email: </label>
        <input
          type="email"
          value={formData.email}
          onChange={emailHandler}
          className="green-message"
          placeholder="Enter your Email"
        />
        {emailError && <span className="error-message">{emailError}</span>}
        <br />

        <label>zipCode: </label>
        <input
          type="number"
          value={formData.zipCode}
          onChange={zipCodeHandler}
          className="green-message"
          placeholder="Enter your zip Code"
        />
        {zipCodeError && <span className="error-message">{zipCodeError}</span>}
        <br />

        <label>Country</label>
        <select
          name="country"
          id="country"
          onChange={countrySelectorHandler}
          value={formData.country}
        >
          <option value=""  disabled hidden>
            Select a country
          </option>
          <option value="pakistan">Pakistan</option>
          <option value="india">India</option>
          <option value="newzeland">New Zealand</option>
        </select>

        {countryError && <span className="error-message">{countryError}</span>}
        <br />

        <label >Sex:</label>
        <input
         type="radio" 
         name="gender"
         value="male"
         checked= {formData.sex==="male"}
         onChange={genderSelectorHandler}  />
        <label>Male</label>
        <input 
        type="radio" 
        name="gender"
        value="female"
        checked= {formData.sex==="male"}
        onChange={genderSelectorHandler}  />
        <label>Female</label>
        {genderError && <span className="error">{genderError}</span>}
        <br />

        <label >Language:</label>
        <input
         type="radio" 
         name="language"
         value="English"
         checked= {formData.language === "English"}
         onChange={languageSelectorHandler}  />
        <label>English</label>

        <input 
        type="radio" 
        name="language"
        value="Urdu"
        checked= {formData.language ==="Urdu"}
        onChange={languageSelectorHandler}  />
        <label>Urdu</label>
        {languageError && <span className="error">{languageError}</span>}
        <br />
        <button>Submit</button>
      </form>
      <p>
        {formData.userId} {formData.name} {formData.password}
      </p>
    </div>
  );
}

export default Form;
