import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, db } from "../config/firebase";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";

//  get the  current user
export const getCurrentUser = createAsyncThunk(
  "auth/getcurrentuser",
  async (setLoading , store) => {
    try {
        setLoading(true);
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const uid = user.uid;
          console.log("user", user);
          console.log("uid" , uid);
        //   get user detail
        const docSnap = await getDoc(doc(db, "users", uid));
        const dbUser = docSnap?.data();
        // yha pr action k andar action call kia h pehly state m null tha to login pr le kr ja rha tha like ab 
        // state m jo detail h wo set ho jae gi to ab stat m current user ki detail a jae gi 
        store.dispatch(setUser(dbUser))
        console.log("db user", dbUser);
        setLoading(false);
        }
        else{
            setLoading(false);
        }
      });
    } catch (error) {
        setLoading(false);
      console.log("error", error);
    }
  }
);
export const signout = createAsyncThunk("auth/signout", async () => {
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    console.log("error", error);
  }
});
export const signup = createAsyncThunk("auth/signup", async (user) => {
  try {
    // console.log("user in action" , user);
    // email and password save in auth
    const userCredientals = await createUserWithEmailAndPassword(
      auth,
      user.email,
      user.password
    );
    const firebaseUser = userCredientals.user;
    console.log("user ", firebaseUser);
    //  other info save in db
    const saveUserToDb = {
      email: user.email,
      name: user.name,
      password: user.password,
      phone: user.phone,
      address: user.address,
      Gender: user.Gender,
      uid: userCredientals.user.uid,
    };

    // now add these into db  setdocs so can get uid and use for login
    await setDoc(doc(db, "users", userCredientals.user.uid), saveUserToDb);
    return saveUserToDb;
  } catch (error) {
    console.log("error ", error);
    throw error;
  }
});

export const login = createAsyncThunk("auth/login", async (user) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      user.email,
      user.password
    );
    console.log("login", userCredential.user.uid);

    const docSnap = await getDoc(doc(db, "users", userCredential.user.uid));
    const dbUser = docSnap?.data();
    console.log("db user", dbUser);
    return dbUser;
  } catch (error) {
    console.log("error", error);
  }
});

const initialState = {
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
       console.log("reducer in setuser", action.payload);
       state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signup.fulfilled, (state, action) => {
      console.log("action", action.payload);
      state.user = action.payload;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      console.log("action in login ", action.payload);
      state.user = action.payload;
    });
    builder.addCase(signout.fulfilled, (state, action) => {
      console.log("action in login ", action.payload);
      state.user = null;
    });
    builder.addCase(getCurrentUser.fulfilled, (state, action) => {
      console.log("action in login ", action.payload);
      state.user = action.payload;
    });
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
