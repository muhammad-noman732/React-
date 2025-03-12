import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchProduct = createAsyncThunk(
      "product/fetchProduct",
  async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = response.json();
    return data;
  }
);

// Delete Products from store . 
export const deleteProductApiAction = createAsyncThunk ( "product/deleteProduct" ,
     async(id) => { 
        const response = await fetch(`https://fakestoreapi.com/products/${id}` ,{
          method : "DELETE",
        })
        // const data  = await response.json()
        // return data
        return id
      });
  
      //  adding product to store
      export const addProductsApiActions = createAsyncThunk("product/addProduct",
        async (product) => {
          const response = await fetch("https://fakestoreapi.com/products", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(product)
          });
          const data = await response.json();
          return data;
        }
      );

      //  updating the product in store

      export const updateProductApiAction =  createAsyncThunk("product/updateProduct" ,
        async({id , updateProduct })=>{
         const response = await fetch(`https://fakestoreapi.com/products/${id}` , {
          method: "PUT",
          headers:{
            "Content-Type": "application/json",
          },
            body:
              JSON.stringify(updateProduct)
           })
            return response.json();
        })
    


const productSllice = createSlice({
  name: "products",
  //  this is an object not array 
  initialState: {
    products: [],
    error: false,
    loading: false
   
  },

  //  these reducer work without Api
  reducers:{
            DeleteProduct : (state , action)=>{
              // not payload.id becuse getting id in payload
             state.products =   state.products.filter(product => product.id !== action.payload)
              },
            addProducts:  (state , action)=>{
              console.log("product added " , action.payload);
              state.products = [action.payload , ...state.products]   
          },

          // UpdateProducts:(state , action)=>{
          //   let updateProductId = state.products.find(product => product.id === action.payload.id);

          //   if(updateProductId){
          //     
          //   }
          // }
        },

  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending , (state , action)=>{
        state.loading = true;
    })
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.products = action.payload
      state.loading = false
    })
    builder.addCase(fetchProduct.rejected , (state , action)=>{
        state.error = true
        state.loading = false
    })
    
    builder.addCase(deleteProductApiAction.fulfilled  , (state , action)=>{
         console.log("delete product in reducer " , action.payload);
         state.products = state.products.filter(product => product.id !== action.payload)
    })

    builder.addCase(addProductsApiActions.fulfilled , (state , action)=>{
      console.log("product added in store " , action.payload);
    state.products = [action.payload , ...state.products]
    })

    builder.addCase(updateProductApiAction.fulfilled , (state , action)=>{
         console.log("updated product in reducer " , action.payload.id);
         let index = state.products.findIndex(product => product.id === action.payload.id)

         if(index !== -1 ){
          state.products[index] = action.payload
         }
    })
    
  },
});

export const { DeleteProduct , addProducts } = productSllice.actions
export default productSllice.reducer;
