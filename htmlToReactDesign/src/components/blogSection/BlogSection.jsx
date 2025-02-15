import React from 'react'
import { FaDatabase, FaUniversalAccess, FaRocket } from 'react-icons/fa';
import './blogSection.css'
import Card from '../card/Card'
import { blogData  , tags} from '../../constant/blog'
import TopicItem from '../topicItem/TopicItem'
import Tags from '../tags/Tags';
import SideCrad from '../sideCard/SideCrad';
import NewsLetter from '../newLetter/NewsLetter';


const BlogSection = () => {

    // console.log("blog data", blogData);
    
  return (
    <div className="blogSection">
    <div className='blogs'>
      <h1>Latest Blog Post</h1>

   {
    blogData?.map((item , index)=>{
        return <Card key={index} data = {item} />
    })
   }



      {/* now here if we have 10 cards and we pass them props then we have to send a lot 
      of data and done repetitive work so instead of passing props agin and again we should loop over them
      
       we should create array ob objects that contain all the information and then loop over the array
    */}
      {/* <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/> */}
    </div>

    <div className='aside'>
        <h2 className='h2'>Topics</h2>

    <TopicItem title="Database"/>
    <TopicItem title="Accessibility"/>
    <TopicItem title="Web Performance"/>

     {/*  tags  */}
   {/* Render all tags in one card */}
   <h2 className="tags-title">Tags</h2>
   <Tags tags={tags} />
   <SideCrad/>
   <NewsLetter/>
       
    </div>
    </div>
  )
}

export default BlogSection
