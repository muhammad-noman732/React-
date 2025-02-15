import React from 'react';
import './tags.css';

const Tags = ({ tags }) => {
  return (
    <div className="tag-wrapper">
      <div className="tag-container">
        {tags.map((tag, index) => (
          <button key={index} className="hashtag">
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tags;
