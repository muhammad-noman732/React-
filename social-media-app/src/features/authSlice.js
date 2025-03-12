import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {  createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth";
import { auth, db } from "../config/firebase";
import {  collection, doc, getDoc, setDoc } from "firebase/firestore";


export const signup = createAsyncThunk("auth/signup",
     async(user)=>{
        try {
            // console.log("user in action" , user);
            // email and password save in auth 
         const userCredientals =  await  createUserWithEmailAndPassword(auth, user.email, user.password);
         const firebaseUser = userCredientals.user;
         console.log("user " , firebaseUser);
        //  other info save in db 
        const saveUserToDb = {
            email:user.email,
            name:user.name,
            password:user.password,
            phone: user.phone,
            address:user.address,
            Gender:user.Gender,
            uid:userCredientals.user.uid 
        }

        // now add these into db  setdocs so can get uid and use for login
        await setDoc(doc(db, "users", userCredientals.user.uid) , saveUserToDb);
        return saveUserToDb;
        } catch (error) {
            console.log("error ", error);
            throw error
        }
}) ;

export const login = createAsyncThunk ("auth/login" , 
     async(user)=>{
        try {
          const userCredential=  await  signInWithEmailAndPassword(auth, user.email, user.password)
          console.log("login" , userCredential.user.uid);
          
        const docSnap = await getDoc(doc(db,"users" , userCredential.user.uid));
           const dbUser = docSnap?.data();
           console.log("db user" , dbUser);
           
           return dbUser;

        } catch (error) {
            console.log("error" , error);
            
        }
     }
)

const initialState = 
{
    user:null
}

export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
            setUser :(state , action)=>{
                state.user = action.payload
            }
    },
    extraReducers:(builder)=>{
            builder.addCase(signup.fulfilled , (state , action)=>{
                console.log("action" , action.payload);
                state.user = action.payload
            })
            builder.addCase(login.fulfilled , (state , action)=>{
                console.log("action in login " , action.payload);
                state.user = action.payload
            })
            
            
    }
})

export const {setUser} = authSlice.actions
export default authSlice.reducer