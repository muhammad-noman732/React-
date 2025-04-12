import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const signupHandler =  createAsyncThunk("/user/signuphandler",
    async({userName , email , password , address} , { rejectWithValue })=>{
      try {
        const response = await fetch("http://localhost:8000/auth/signup" ,{
          method:"POST",
          headers:{
            "Content-Type":"application/json",
          },
          body : JSON.stringify({
              userName,
              email,
              password,
              address
          })
        });
        if (!response.ok){
          const errorData = await response.json();
          // This errorData can include a message like "Email already exists"
          return rejectWithValue(errorData.message || `Failed to signup (status: ${response.status})`);
          
        }
        console.log("response ", response);
        const data = await response.json();
        console.log('data in reducer ' , data);
        return data 
      } catch (error) {
         console.log('error' , error.message);
         return rejectWithValue(error.message)
      }
          
})

export const loginHandler = createAsyncThunk("/user/loginHandler" , 
    async({email ,password} , {rejectWithValue})=>{
      try {
        const response = await fetch("http://localhost:8000/auth/login" , {
          method : "POST",
          headers:{
            "Content-Type":"Application/json"
          },
          body: JSON.stringify({
            email,
            password
          })
        })
        
          if(!response.ok){
             const errorData = await response.json();
            //  get the error message from backend and send to store
             return rejectWithValue(errorData.message || `Failed to Login ${response.status}`)
          }
        console.log("response in login" , response);
        const data = await response.json();
        console.log("data in login reducer ", data);
        return data
      
       } catch (error) {
            console.log("error in login" , error);
            return rejectWithValue(error.message)    
      }
     
})



const initialState = {
  users: [],
  loading: false,
  error: null,
  
};

export const authSlice = createSlice({
  name: "users",
  initialState,
  
  extraReducers: (builder)=>{
    builder.addCase(signupHandler.pending , (state , action)=>{
      state.loading = true;
      state.error= false;
    })
    builder.addCase(signupHandler.rejected , (state , action)=>{
      state.error = action.payload || action.error.message;
      state.loading = false;
    })
    builder.addCase(signupHandler.fulfilled , (state , action)=>{
      console.log('data in signup action' , action.payload);
      state.users =[action.payload , ...state.users];
      state.loading = false;
    })
    //  login reducer
    builder.addCase(loginHandler.pending , (state , action)=>{
      state.loading = true;
      state.error= false;
    })
    builder.addCase(loginHandler.rejected , (state , action)=>{
      state.error =  action.error.message || action.payload ;
      state.loading = false;
    })
    builder.addCase(loginHandler.fulfilled , (state , action)=>{
      console.log('data in login action' , action.payload);
      state.users =[action.payload , ...state.users];
      state.loading = false;
    })
}
})

// Export actions and reducer 
// export const { getState } = todosSlice.actions;
export default authSlice.reducer
