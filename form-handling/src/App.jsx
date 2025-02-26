import { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";

function App() {

  const {
    register,      // for register input in hook state
    handleSubmit, // for form valid submission
    formState: { errors }, // for form validation errors
  } = useForm();

  const SubmitHandler = (data) => {
           console.log("form is submitted");
           console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(SubmitHandler)}>
      <label>First Name:</label>
      <br />
      <input
        {...register("firstName", {
          required: "FirstName is required",
          minLength: {
            value: 3,
            message: "Minimum 3 characters",
          },
          maxLength: {
            value: 20,
            message: "Maximum 10 characters",
          },
        })}
      />
      <br/>
       {/* Display error if exists */}
       {errors.firstName && (
        <span>{errors.firstName.message}</span>
      )}
      <br />
      <label> Last Name: </label>
      <br />
      <input
        {...register("lastName", {
          required: "lastName is required",
          minLength: {
            value: 3,
            message: "Minimum 3 characters",
          },
          maxLength: {
            value: 20,
            message: "Maximum 10 characters",
          },
        })}
      />
      {
        errors.lastName &&(
          <span className="error-message">{errors.lastName.message}</span>
        )
      }
      <br />
      <label> Email: </label>
      <br />
      <input
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        })}
      />
      {
        errors.email &&(
          <span className="email">{errors.email.message}</span>
        )
      }
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
