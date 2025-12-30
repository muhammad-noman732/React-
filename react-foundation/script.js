// const element1 = document.createElement("h1");
// element1.textContent ='hi welcome to react';
// element1.className= "element1";
// element1.id='first';
// element1.style.fontSize = '30px';
// element1.style.color="white",
// element1.style.backgroundColor ="red";


// const element2 = document.createElement("h2");
// element2.textContent ='how react works';
// element2.className= "element2";
// element2.id='second';
// element2.style.fontSize = '20px';
// element2.style.color="white",
// element2.style.backgroundColor= "green"
// const root = document.getElementById('root');
// root.appendChild(element1)
// root.appendChild(element2)


// instead of writing again and again we can make a function 

// attributes = {
//     className:'element1',
//     id:'first'
//    style:{
//      color:"pink" ,
//      backgroundColor:'green',
//      fontSize:'30px'}
// }

// element ={
//     tag:'h1',
    //    textContent:"'",
    //    style:{

    //    }

// }


// function createElement(tag , attributes , children){
//     const element = document.createElement(tag); // create the real element in dom
//     element.textContent = children
//     for (key in attributes){
//          if(key === "style"){
//             Object.assign(element.style , attributes.style  )
//          }else{
//         element[key] = attributes[key]
//          }
      
//     }
//     return element
// }


// const element1= createElement("h1",{className:'element1',id:"first" , style:{color:"pink" ,backgroundColor:'green',fontSize:'30px'}} ,"Hello , welcome to react ")
// const element2= createElement("h2",{className:'element2',id:"second" , style:{color:"white" ,backgroundColor:'red',fontSize:'20px'}} ,"Hello , master react")


// const root = document.getElementById('root');
// root.appendChild(element1)
// root.appendChild(element2)


// with react object

// const React = {
//     createElement: function (tag , attributes , children){
//     const element = document.createElement(tag);
//     element.textContent = children
//     for (key in attributes){
//          if(key === "style"){
//             Object.assign(element.style , attributes.style  )
//          }else{
//         element[key] = attributes[key]
//          }
      
//     }
//     return element
// }

// }

// const ReactDom ={
//     render : function(child , parent){
//         parent.appendChild(child)
//     }
// }

const element1= React.createElement("h1",{className:'element1',id:"first" , style:{color:"pink" ,backgroundColor:'green',fontSize:'30px'}} ,"Hello , welcome to react ")
const element2= React.createElement("h2",{className:'element2',id:"second" , style:{color:"white" ,backgroundColor:'red',fontSize:'20px'}} ,"Hello , master react")


const root = document.getElementById('root');
ReactDOM.render(element1 , root)
// root.appendChild(element1)
// root.appendChild(element2)

//  so here we can say react is an object (not in real)



// react
// it does not creat the element it just tell what to show in UI
// it creates the js object
// reactDom
// it create the original element 




// the above we are doing is not exact what react do 
// in react the React.createElement() create the  js object in virtual dom not in real dom
// ReactDOM create the dom . it compares the previous virtua dom with new ne and make changes in the dom 


// React.createElement() Creates a JS Object in the Virtual DOM (Not Real DOM)

//  Absolutely! React.createElement(type, props, ...children) doesn't touch the real browser DOM at all. It simply returns a lightweight plain JavaScript object (called a React Element).
// This object is a description of what you want to render, like:JavaScript{
//   type: 'h1',  // e.g., HTML tag or component
//   props: { className: 'title', children: 'Hello' },
//   key: null,
//   ref: null,
//   // ... other internal fields
// }

// These objects form the Virtual DOM tree — an in-memory representation that's fast and cheap to create/manipulate.
// No real DOM elements (like actual <h1>) are created here. That's why it's efficient — React can build and compare entire trees without expensive browser operations.

// 2. ReactDOM Handles the Real DOM

//  ReactDOM (specifically methods like createRoot() and root.render()) is responsible for rendering your Virtual DOM to the real DOM in the browser.
// It doesn't "create the DOM" from scratch every time. Instead, it:
// Takes your new Virtual DOM tree (from createElement or JSX).
// Compares it to the previous Virtual DOM snapshot (this is called diffing or reconciliation).
// Calculates the minimal changes needed (e.g., update text, add/remove elements, change attributes).
// Applies only those changes to the real DOM.


// This is powered by React's reconciler (the engine behind the scenes, like Fiber in modern React), which ReactDOM uses to bridge to the browser.
// Example Flow:JavaScript
// const newVDOM = React.createElement('h1', null, 'Updated Hello');

// ReactDOM handles:
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(newVDOM);  // Diffs old vs new VDOM → updates real DOM minimally
// If nothing changed, ReactDOM does almost no work on the real DOM (super efficient!).

