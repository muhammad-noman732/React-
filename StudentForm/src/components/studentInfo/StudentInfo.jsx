import React, { useState } from "react";
import "./studentInfo.css";

function StudentInfo(props) {
  //  id of editing item
  const [editId, setEditId] = useState(null);
  // object manages states of edit data
  const [editData, setEditData] = useState({
    name: "",
    email: "",
    roll: "",
    clas:""
  });

  const handleEditClick = (data) => {
    //  pass all the previous data in update
    setEditData(data);
    setEditId(data.id);
  };

  const saveInfo = (id) => {
    props.updateRecord(id, editData);
    // Reset edit state
    setEditId(null);
    setEditData({
      name: "",
      email: "",
      roll: "",
      clas:""
    });
  };

  return (
    <tr className="table-row">
      <td>{props.data.id}</td>
      <td>{props.data.name}</td>
      <td>{props.data.email}</td>
      <td>{props.data.roll}</td>
      <td>{props.data.clas}</td>
      {editId === props.data.id ? (
        <td>
          <div className="edit-mode-container">
            <input
              type="text"
              value={editData.name}
              onChange={(e) =>
                setEditData({ ...editData, name: e.target.value })
              }
            />
            <input
              type="text"
              value={editData.email}
              onChange={(e) =>
                setEditData({ ...editData, email: e.target.value })
              }
            />
            <input
              type="text"
              value={editData.roll}
              onChange={(e) =>
                setEditData({ ...editData, roll: e.target.value })
              }
            />
              <input
              type="text"
              value={editData.clas}
              onChange={(e) =>
                setEditData({ ...editData, clas: e.target.value })
              }
            />
            <button
              className="save-btn"
              onClick={() => saveInfo(props.data.id)}
            >
              Save
            </button>
            <button className="cancel-btn" onClick={() => setEditId(null)}>
              Cancel
            </button>
          </div>
        </td>
      ) : (
        <td>
          <button className="update-btn"onClick={() => handleEditClick(props.data)}>Update</button>
          <button className="delete-btn" onClick={() => props.deleteRecord(props.data.id)}>
            Delete
          </button>
        </td>
      )}
    </tr>
  );
}

export default StudentInfo;
