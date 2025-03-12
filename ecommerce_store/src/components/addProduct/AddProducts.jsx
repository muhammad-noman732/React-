import React, { useState , useEffect} from 'react'
import { addProducts, updateProductApiAction } from '../../features/productSlice'
import { addProductsApiActions } from '../../features/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate , useParams} from 'react-router-dom';

const AddProducts = () => {
  const[title , setTitle] = useState("");
  const[image , setImage] = useState("");
  const[category, setCategory] = useState("");
  const[price , setPrice] = useState("");

  const navigate = useNavigate()
  const { products } = useSelector(state => state.products);
  const dispatch = useDispatch();
   //  extracts the id from url of addcomponents when click on edit it gives id in url
    const {productId } = useParams();
    const editMode = !!productId;
  
    useEffect(()=>{

            if(productId && products){
              // Find the product to edit
              const product = products.find(product => product.id === Number(productId));

              // fill the prexistng data in form 
              if (product){
              setTitle(product.title);
              setImage(product.image);
              setCategory(product.category);
              setPrice(product.price.toString());
              }
            }

    },[productId , products])

 

  const addHandler = ()=>{
    // console.log("title " , title);
    // console.log("image " , image);
    // console.log("category " ,category);
    // console.log("price " , price);
    if(editMode){
      // update the product 
      dispatch(updateProductApiAction({
       id: productId,
        updateProduct:{
        title,
        image,
        price:Number(price),
        category
        }
      }))
    }
    else{

    let product = {
      title,
      image,
      category,
      price
    }
    // console.log("product" , product);
    // dispatch(addProducts(product))
    dispatch(addProductsApiActions(product));
    // setImage("");
    // setTitle("");
    // setCategory("");
    // setPrice("");
  }
      navigate('/')
  }

  return (

    <div>
      <input type="text" placeholder='enter title' value={title} onChange={e=> setTitle(e.target.value)} />
      <input type="text" placeholder='upload image' value={image} onChange={e => setImage(e.target.value)} />
      <input type="text" placeholder='add category' value={category} onChange={e => setCategory(e.target.value)} />
      <input type="Number" placeholder='add price '  value={price} onChange={e => setPrice(e.target.value)}/>
     
      <button onClick={addHandler}> {editMode ? 'Update Product' : "Add product"}</button>
    </div>
  )
}

export default AddProducts
