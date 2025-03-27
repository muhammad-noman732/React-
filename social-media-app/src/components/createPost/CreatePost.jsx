import React, { use, useEffect, useState } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updateDocId, updatePost } from "../../features/feedSlice";
import { storage } from "../../config/firebase";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  // this state is for uploading file in sonerio 2 
  const [ file , setFile] = useState("")
  const [loading , setLoading] = useState(false);
  // get state of updatepost
  const post = useSelector((state) => state.feed.updatePost);
    // get state of user so we can also give uid of user at createpost
    const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();
  console.log("post", post);

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setDescription(post.description);
    } else {
      setTitle("");
      setDescription("");
    }
  }, [post]);

  const AddPost = () => {
    console.log("title", title);
    console.log("description", description);
   console.log("user uid " , user.uid);
   
    const postData = {
      uid:user.uid,
      title,
      description,
      createAt: new Date().toISOString(),
      // imageURL: imageURL
      imageURL: "sdkvalsdgvjfsdjb",
    };

    if (post) {
      dispatch(updatePost({ ...postData, id: post.id }));
    } else {
    
        dispatch(createPost({postData  , setLoading})); 

      // this is case where have to upload files in second sonerio
      // dispatch(createPost({...postData , file , setLoading}));
    }
    setTitle("");
    setDescription("");
  };

  // const uploadImage = async (e) => {

  //   try {
  //     // sonerio 1 = hm choose file pr click kre o wo storage m save ho aue ska url mle chose file p click krne pr storage m save hota h 
      
  //     // similar like e.target.value but it is for files
  //     const file = e.target.files[0];
  //     if (!file) return; // Handle case where no file is selected
  //     console.log("image", file);
  //     // reference of file , where give name of folder images/filename
  //     const fileRef = ref(storage, "images/" + file.name);
  //     // meta data
  //     const metadata = {
  //       contentType: file.type, // Use actual file type (e.g., 'image/png')
  //     };
  //     // upload file using uploadBytes
  //     // Upload the file and metadata
  //   const response = await uploadBytes(fileRef, file, metadata);
  //     console.log("response", response);

  //     // download url
  //     const url = await getDownloadURL(fileRef);
  //     console.log("url", url);
  //     // jo url mle ga usko set kr dena 
  //     setImageURL(url)
  //   } catch (error) {
  //     console.log("error ", error);
  //   }
  // };

  
      // const changeImage = (e)=>{
        // sonerio 2 -->hm jb create post pr click kre to pehly file upload ho phir url mle aur phir ja kr storage m upload ho  choose file krny pr kuch na ho
      
      //          const file =  e.target.files[0]
      //          console.log("file" , file);
      //          // yha pr file save krni h na k url
      //       setFile(file)         
      // }


  return (
    <div>
      <h1>Create Post</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="enter title"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="description"
      />
      {/* <input type="file" placeholder="choose file" onChange={uploadImage} /> */}
      {/* <input type="file" placeholder="choose file" onChange={changeImage} /> */}
      {
        loading ? <p>loading...</p> :
      <button onClick={AddPost} type="submit">
        {post ? "Update Post" : "Create post"}
      </button>
}
 {/* <button onClick={AddPost} type="submit">
        {post ? "Update Post" : "Create post"}
      </button> */}
    </div>
  );
};

export default CreatePost;
