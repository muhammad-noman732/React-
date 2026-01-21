import React, { useEffect, useState } from "react";

function Shah() {
  const [users, setUsers] = useState([]);
  const [count , setCount]  = useState(0)

  useEffect(() => {
    async function fetUsers() {
      
        const response = await fetch(`https://api.github.com/users?per_page=${count}`);
      const data = await response.json();
      setUsers(data);
      console.log("data", data);
    }
    fetUsers();

  }, [count]);

  return (
    <div>
      <h1>data</h1>
      <input type="number" onChange={(e)=>setCount(e.target.value)} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        {users.map((user) => (
          <img
            src={user.avatar_url}
            width="200px"
            height="200px"
            key={user.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Shah;
