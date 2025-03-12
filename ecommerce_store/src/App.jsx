import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { DeleteProduct, fetchProduct } from "./features/productSlice";
import AllProducts from "./components/allProducts/AllProducts";
import Navigation from "./navigation/Navigation";

function App() {


  return (
    <div>
    <Navigation/>

   
    </div>
  );
}

export default App;
