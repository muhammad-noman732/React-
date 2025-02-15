import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div className="blog-card">
      <div className="blog-image-container">
        <img 
          src= {props?.data?.cardImage} 
          alt="Blog post thumbnail" 
          className="blog-main-image"
        />
      </div>

      <div className="blog-content-container">
        <button className="blog-topic">{props?.data?.topic}</button>
        <h3 className="blog-title">
          <a href="#">{props?.data?.title}</a>
        </h3>

        <p className="blog-description">
        {props?.data?.text}
        </p>

        <div className="author-container">
          <img 
            src={props?.data?.author?.authorImage} 
            alt="Julia Walker" 
            className="author-avatar"
          />
          <div className="author-details">
            <a href="#" className="author-name">{props?.data?.author?.name} </a>
            <div className="post-metadata">
              <time className="post-date">{props?.data?.author?.date} </time>
              <span className="metadata-separator"></span>
              <span className="time-icon"></span>
              <time className="read-time">{props?.data?.author?.time} </time>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;