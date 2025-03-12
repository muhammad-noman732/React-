// Test.jsx
import React from 'react';
import { ref, set } from 'firebase/database';
import { realtimeDb } from '../config/firebase'; // Use realtimeDb

const Test = () => {
  const addData = (id, name, phone) => {
    // Use realtimeDb instead of getDatabase()
    set(ref(realtimeDb, `students/${id}`), {
      name: name,
      phone: phone
    })
    .then(() => console.log("Data added successfully!"))
    .catch((error) => console.error("Error adding data:", error));
  };

  return (
    <div>
      <h1>test</h1>
      <button onClick={() => addData(1, "noman", 892384)}>
        Test Realtime DB
      </button>
    </div>
  );
};

export default Test;