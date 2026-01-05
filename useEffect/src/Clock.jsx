import React, { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleDateString());
  const [show, setShow] = useState(true);
  //   here we use setinterval for time after second
  // setInterval(() => {
  //     setTime(new Date().toLocaleTimeString())
  //     console.log("ie");

  // }, 1000);

  // the above code run firstly the state get intitialized and return than setinterval called and as react
  // does not handle it goes to web api which hanlde this browser function and react render the return
  // now as setinterval callback executed in the web apis it give the result to react as
  // the now in this state update than it re render the function now state initialzed with
  // the new value and now again this setinterval goes to the web api which is very bad
  //   again  and again re rendering make the ui bad and performance as well as sending multipe
  // setintervals to web api

  // use useEffect so this setInterval only runs once

  // useEffect(()=>{
  //     setInterval(() => {
  //     setTime(new Date().toLocaleTimeString())
  //     console.log("hi");
  // }, 1000);

  // },[]) // now only one time setinterval goes to the webapi

  // here with above code when we hide the show state is false the hi in log as setinterval code is still runing in the web api when show is false
  // setinterval is still calculating the time even when not showing that is consuming memory

  // it is returning two things
  useEffect(() => {
    // this is necessary otherwise the below instruction executes always but with this below only execute when state is true

    if (!show)
      // it return here stop execution below  code
      return;

    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      console.log("hi");
    }, 1000);

    //  here it return the callback but not everytime
    // it execute this instruction only when value of show is change it first execute this return instruction and than change the value
    // return this only when chnage in dependency array return this below callback function which clear the interval from web api
    return () => {
      clearInterval(intervalId);
    };
    
  }, [show]);

  // for that we pass dependency array

  return (
    <div>
      <button onClick={() => setShow(!show)}>{show ? "hide" : "show"}</button>
      {show && <h1> time: {time} </h1>}
    </div>
  );
}

export default Clock;


// stale closure 
// race condition in the useEffect occurs