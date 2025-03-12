import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DeleteProduct } from "../../features/productSlice";
import { fetchProduct  , deleteProductApiAction} from "../../features/productSlice";
import {  Link } from "react-router-dom";

const AllProducts = () => {
 
  const { loading, products } = useSelector((state) => state.products);
  console.log("products ", products);
  // for actions
  const dispatch = useDispatch();

  // .... fetch all products when click on button

  // const fetchProductHandler = () => {
  //   dispatch(fetchProduct());
  //   console.log("products ", products);
  // };

  //....... but we can also fetch when components render using use effect 
  useEffect(()=>{
     if(products.length === 0){
         dispatch(fetchProduct());
     }
  },[])

  //  delete products
  const deleteHandler = (productId) => {
    //  this is for deleting only from ui 

    // dispatch(DeleteProduct(productId));

      //  but this will delete using api both from ui and api
      dispatch(deleteProductApiAction(productId))
  };

  //  no need for this 
  // const updateHandler = (productId)=>{
  //   console.log("update product with id" , productId );
  // }

  return (
    <div className="products">
      {/* <button onClick={fetchProductHandler}>fetch product</button> */}
      {loading && <p className="loading">loading...</p>}
      <div className="allProducts">
        {products &&
          products.map((product) => (
            <div key={product.id } className="productCard">
              <p>{product.title}</p>
              <img style={{ width: 100 }} src={product.image} alt="" />
              
              <p>{product.category}</p>
              {/* <p>{product.description}</p> */}
              <p className="prize">${product.price}</p>
              <div  className="btns">
              <button onClick={() => deleteHandler(product.id)}>
                {" "}
                Delete 
              </button>
              {/* jb button pr click hoga to url m id jae gi jo ke add wale components m recieve ki h ur usko 
                 update products k liye use kia h */}
              <Link to={`/add-product/${product.id}`}>
                    <button>Edit </button>
               </Link>

              </div>
              
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllProducts;
