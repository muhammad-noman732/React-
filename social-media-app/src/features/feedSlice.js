import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import {
  collection,
  addDoc,
  getDocs,
  QuerySnapshot,
  onSnapshot,
  query,
  where,
  orderBy,
  limit,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../config/firebase";

export const createPost = createAsyncThunk("feed/createPost", async ({postData , setLoading}) => {
  try {    
       setLoading(true)    
//       add in firebase
    // reference of collection where add data
    const collectionRef = collection(db, "posts");
    // Add the document to Firestore
    const response = await addDoc(collectionRef, postData);
    // Return a plain object with the document ID and the post data
    return { id: response.id, ...postData };
      
  } catch (error) {
    console.log("error", error);
    throw error;
  }finally{
   setLoading(false)
  }
});


// export const createPost = createAsyncThunk("feed/createPost", async (post) => {
//   try {
//       post.setLoading(true)
//       //  uplod files and download url for sonerio 2 
//         const  file = post.file;
//         console.log("files" , file);
        
//           const fileRef = ref(storage, "images/" + file.name);          
//           const metadata = {
//             contentType: file.type, // Use actual file type (e.g., 'image/png')
//           };
//         await uploadBytes(fileRef, file, metadata);
//         const url = await getDownloadURL(fileRef);
//           console.log("url", url); 
//          const updatedPost = {
//             title : post.title,
//             description: post.description,
//             createdAt: new Date(),
//             imageURL : url
//          }
//     //  add in firebase
//     // reference of collection where add data
//     const collectionRef = collection(db, "posts");
//     // Add the document to Firestore
//     // const response = await addDoc(collectionRef, post);
//     // in case when case 2 for image upload where file is given then
//     const response = await addDoc(collectionRef, updatedPost);
//     // Return a plain object with the document ID and the post data
//     return { id: response.id, ...post };
//     post.setLoading(false)
//   } catch (error) {
//     console.log("error", error);
//     throw error;
    
//   }
// });

//  get all the posts from firestore and save in store

export const getPosts = createAsyncThunk("feed/getPots", async () => {
  try {
    const collectionRef = collection(db, "posts");
    const queryRef = query(
      collectionRef,
      where("title", "!=", "post"),
      orderBy("title"),
      limit(4)
    );
    //  for one time data read
    const docs = await getDocs(queryRef);
    //   empty array to get data
    let data = [];
    console.log("docs", docs);
    docs.forEach((doc) => {
      // jo docs firestore m h wo mle ge  means hr doc ki ik id h aur data h jo k data ka object call krkr mle ga
      console.log("docs data ", doc.data());
      console.log("docs id ", doc.id);
      data.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    return data;

    // real time data read
    // let data = []
    // onSnapshot(collectionRef, (querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //         console.log("doc",doc.data());
    //         data = [...data, {id:doc.id,...doc.data()}]
    //     })
    //     console.log("data",data);
    //     return data
    // });
  } catch (error) {
    console.log("fetch error", error);
    throw error;
  }
});

//  delete post from firestore and als in store

export const deletePost = createAsyncThunk("feed/deletePost", async (id) => {
  try {
    const docRef = doc(db, "posts", id);
    // Remove the docment with id
    await deleteDoc(docRef);
    return id;
  } catch (error) {
    console.log("error", error);
  }
});

// update post in firestore and in store
export const updatePost = createAsyncThunk('feed/updatePost' , 
   async(post) =>{
  try {
       const docRef = doc(db ,"posts" , post.id);
       // update the document 
       await updateDoc(docRef , post)
       return post 
   
  } catch (error) {
     console.log("error" , error);
     throw error
  }
})
// slice for posts
const initialState = {
  feed: [],
  updatePost : null
};

export const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
       updateDocId :(state , action)=>{
        console.log("update post in store" , action.payload);
        const post = state.feed.find(post => post.id === action.payload);
        state.updatePost = post || null // set null if not find 
       }
  },
  extraReducers: (builder) => {
    builder.addCase(createPost.fulfilled, (state, action) => {
      state.feed = [action.payload, ...state.feed];
    });
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.feed = action.payload;
    });
    builder.addCase(deletePost.fulfilled, (state, action) => {
      state.feed = state.feed.filter((post) => post.id !== action.payload);
    });
    builder.addCase(updatePost.fulfilled , (state , action)=>{
      //  const index = state.feed.findIndex(post=> action.payload.id === post.id);
      //  state.feed[index] = action.payload
      
      state.feed = state.feed.map((post)=>{
        if (post.id === action.payload.id){
          return action.payload
        }
        return post;
        state.updatePost = null
    })
    })
  },
});

// Export actions and reducer
export const {updateDocId  } = feedSlice.actions;
export default feedSlice.reducer;
