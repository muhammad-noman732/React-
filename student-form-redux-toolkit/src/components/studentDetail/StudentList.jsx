import React from "react";
import { useDispatch } from "react-redux";
import {
  DeleteStudent,
  ToggleStudent,
} from "../../features/studentForm/studentSlice";

const StudentList = (props) => {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    console.log("student deleted with id: ", props.data.id);

    dispatch(
      DeleteStudent({
        id: props.data?.id,
      })
    );
  };

  const toggleHandler = () => {
    console.log("student toggled with id: ", props.data.id);
    dispatch(ToggleStudent({ id: props.data.id }));
  };
  return (
    <tr>
    
      <td
        style={{
          textDecoration: props.data?.completed ? "line-through" : "none",
          color: props.data.completed ? "green" : "inherit",
        }}
      >
      
        {props.data.id}
      </td>
      <td
        style={{
          textDecoration: props.data?.completed ? "line-through" : "none",
          color: props.data.completed ? "green" : "inherit",
        }}
      >
        {props.data.name}
      </td>
      <td
        style={{
          textDecoration: props.data?.completed ? "line-through" : "none",
          color: props.data.completed ? "green" : "inherit",
        }}
      >
        {props.data.email}
      </td>
      <td
        style={{
          textDecoration: props.data?.completed ? "line-through" : "none",
          color: props.data.completed ? "green" : "inherit",
        }}
      >
        {props.data.rollNumber}
      </td>
      <td 
      style={{ 
        textDecoration: props.data?.completed ? 'line-through' : 'none',
        color: props.data.completed ? 'green' : 'inherit'
      }} 
      >
        {props.data.classes} 
      </td>

      <td className="action-buttons">
      <input
        type="checkbox"
        checked={props.data?.completed}
        onChange={toggleHandler}
      />
        <button className="delete-btn" onClick={deleteHandler}>
          Delete
        </button>

        <button
          className="update-btn"
          onClick={() =>
            props.startEditStudent({
              id: props.data.id,
              name: props.data.name,
              email: props.data.email,
              rollNumber: props.data.rollNumber,
              classes: props.data.classes,
            })
          }
        >
          Update
        </button>
      </td>
    </tr>
  );
};

export default StudentList;
