import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [count , setCount ] = useState(30)

  //  async function fetUsers(){
  //    const response = await fetch("https://api.github.com/users")
  //    const data = await response.json();
  //    setUsers(data)
  //    console.log("data",data);
  //  }


  //  fetUsers()

  // so if we want this above function run for only once for that we need useeffect

  // useEffect(() => {
  //   async function fetUsers() {
  //     const response = await fetch("https://api.github.com/users");
  //     const data = await response.json();
  //     setUsers(data);
  //     console.log("data", data);
  //   }

  //   fetUsers();
  // }, []); // empty dependency ensure that this useEffect fucntion will run its callback function only once not again and again


    useEffect(() => {
    async function fetUsers() {
      const response = await fetch(`https://api.github.com/users?per_page=${count}`);
      const data = await response.json();
      setUsers(data);
      console.log("data", data);
    }

    fetUsers();
  }, [count]); // now if we want that this function run again than we need to pass value in dependeny as here we update the count and componet will re rnder and count change so useffect will also run again its callback fucntion as this time it has new value 
  return (
    <div>
      <h1>data</h1>
      <input type="number" onChange={(e)=>{setCount(e.target.value)}} />
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

export default App;
