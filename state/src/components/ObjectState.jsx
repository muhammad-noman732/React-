import React, { useState } from 'react'

const ObjectState = () => {

      //  in this learn how to update the state of objects 
     //  objects are mutable as we can change the values of objects like person.nane ="noman" 
    // but react does not work with mutability in this only we can update the state

 const [position , setPosition] = useState({
        x: 0,
        y: 0
    })

    const [person , setPerson] = useState({
                                firstName:"noman",
                                lastName:'baghoor',
                                email:"email.com"
                            })
     
        
        // function handleFirstnameChange(e){
        //     // these will not work because we are direcly updating the  objects we have to pdate the state
        //        person.firstName = e.target.value;
        // }

        // function handleLastnameChange(){
        //     person.lastName = e.target.value;
        // }
        
        // function handleEmailChange(){
        //     person.email = e.target.value;
        // }
          

    //  for objects working updaing in the objects we should have make a shallow copy of object 
    // that contain complete objects and than we can chnage the existing object using usestate
     
    function handleFirstnameChange(e){
        setPerson(
            {
                ...person, // Copy all properties from the current user object
                firstName :e.target.value // override the fistName
            })
    }

    function handleLastnameChange(e){
        setPerson(
            {
                ...person, 
                lastName :e.target.value
            })
   }
    
    function handleEmailChange(e){
        setPerson(
            {
                ...person,
               email :e.target.value
            })
    }
          

 return (

    // sonerio 1 

    // <div
    //   onPointerMove={e => {
        //  this will not work because we are changing the the objects not updating the state
        // . But without using the state setting function, React has no idea that object has changed. So React does not do anything in response.
         
        // position.x = e.clientX;
        // position.y = e.clientY;
        
        //  for correct woking of movement of dot use usestate
        //  now this will work as we are updating the state
        // With setPosition, you’re telling React:
        // Replace position with this new object
        // And render this component again

    //      setPosition( {
    //        x : e.clientX,
    //        y: e.clientY,            
    //      }
    //      )
    //   }}
    //   style={{
    //     position: 'relative',
    //     width: '100vw',
    //     height: '100vh',
    //   }}>
    //   <div style={{
    //     position: 'absolute',
    //     backgroundColor: 'red',
    //     borderRadius: '50%',
    //     transform: `translate(${position.x}px, ${position.y}px)`,
    //     left: -10,
    //     top: -10,
    //     width: 20,
    //     height: 20,
    //   }} />
    // </div>

    <div>

    {/* sonerio 2 
    When updating an object in state, you need to create a new object that contains your 
    changes rather than modifying the original object directly. 
    This is important because React relies on immutability to detect changes and trigger re-renders.
    
    we can change the object as it is mutable but react relies on immutblity so when we chnages
    in the existing objects the react canot understand.*/}

    <label > first Name</label>
    <input type="text" value={person.firstName} onChange={handleFirstnameChange} />
    <br />
    <label > last Name</label>
    <input type="text" value={person.lastName} onChange={handleLastnameChange} />
    <br />
    <label > Email : </label>
    <input type="email" value={person.email} onChange={handleEmailChange} />
     <br />
     <p>{person.firstName} {person.lastName} {person.email} </p>
    </div>
  );
}
export default ObjectState
