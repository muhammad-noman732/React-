

// const element = <h1>Hello</h1>

// the above we can not do we can only do using the babel it is a complier that allow to write html in javascript JSX like code 
// for the above it create 
// const element1 = React.createElement(h1,null ,"hello world")
// console.log(element);

const element2 = <div className="go">
    <h2 className="hi">hi</h2>
     <h2 className="helloe">hello</h2>
    <h2>good</h2>
</div>

console.log(element2);



// why in single div because we want it return only one element otherwie  which we  on will assigne 

// react Element
const reactElement = (
    <div>
        <h1>hello</h1>
        <h3>hnji</h3>
    </div>
)


function App(props){
    return(
        <div> 
            <h1>Hello kese ho {props.name} </h1>
            <p> kitni {props.age} ho gyi</p>
        </div>
    )
}

// {
//     name :'noman',
//     age:30
// }

// const a = App('nomi' )
const b = <App name="noman" age={30}></App>

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element1)
// root.render(element2)
root.render(reactElement)
// root.render(App())
// root.render(<App/>)
// root.render(a)
root.render(b)