import { useState } from "react";
import "./App.css";
import StudentInfo from "./components/studentInfo/StudentInfo";
import Form from "./components/form/Form";

function App() {
  const [data, setData] = useState(() => {
    //  here data is the key we set in localStorage.setItem("data")
    const savedData = localStorage.getItem("data");
  // console.log(savedData);
  
    if (!savedData || savedData === "undefined") {
      return [];
    }
    return JSON.parse(savedData);
  });

  //  add record
  const addRecord = (record) => {
    const newRecord = [
      ...data,
      {
        ...record,
        id: Date.now(),
      },
    ];

    // Store the data with a key
    localStorage.setItem("data", JSON.stringify(newRecord));
    setData(newRecord);
  };

  const deleteRecord = (id) => {
    console.log("id , ", id);
    const newRecord = data.filter((item) => item.id !== id);

    // Store the data with a key
    localStorage.setItem("data", JSON.stringify(newRecord));
    setData(newRecord);
  };

  //      UPDATE

  const updateRecord = (id, newData) => {
    const newRecord = data.map((item) =>
      item.id === id
        ? {
            ...item,
            ...newData,
          }
        : item
    );

    // Store the data with a key
    localStorage.setItem("data", JSON.stringify(newRecord));
    setData(newRecord);
  };

  return (
    <div>
      <Form addRecod={addRecord} />

      <table className="table">
        <tr className="table-row">
          <th>id:</th>
          <th>Email:</th>
          <th>Name:</th>
          <th>Roll no:</th>
          <th>Class:</th>
          <th>Actions:</th>
        </tr>
        <tbody>
          {data.map((item) => (
            <StudentInfo
              key={item.id}
              data={item}
              deleteRecord={deleteRecord}
              updateRecord={updateRecord}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
