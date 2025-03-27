import React, { useEffect } from 'react'
import Button from '../button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts , deletePost, updatePost, updateDocId } from '../../features/feedSlice'

const FeedListing = () => {

    const feed = useSelector(state => state.feed.feed)
    const dispatch = useDispatch();

    useEffect(()=>{
             dispatch(getPosts())
    },[])
    // const onclickHandler = ()=>{
    //     console.log("button clicked ");
    //     dispatch(getPosts());
    // }

    const deleteHandler =(id)=>{
      console.log("post deleted with id " , id);
      dispatch(deletePost(id))
    }

    
    const updateHandler =(id)=>{
      console.log("post updated with id " , id);
      // dispatch(updatePost(id))
      dispatch(updateDocId(id))
    }
    console.log("feed" , feed);
    
  return (
    <div>
    <h1>Feed Listing</h1>
    {/* <Button title="Get Posts" onclick = {onclickHandler}/> */}
    {
        feed.map((item)=>(
            <div key={item?.id}>
                <h2>{item?.title}</h2>
                <p>{item?.description}</p>
                <p>{item?.uid}</p>
                <img style={{width:100}} src={item?.imageURL} alt={item?.title} />
                <button onClick={()=>{deleteHandler(item?.id)}}>Delete</button>
                <button onClick={()=>{updateHandler(item?.id)}}>Edit</button>
                <hr />
            </div>
        ))
    }
  
    </div>
  )
}

export default FeedListing
