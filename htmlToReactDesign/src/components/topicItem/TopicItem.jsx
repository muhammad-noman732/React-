import React from 'react';
import './topicItem.css';
import { IoServerOutline, IoAccessibilityOutline, IoRocketOutline } from 'react-icons/io5';

const TopicItem = ({title}) => {

     // Choose the appropriate icon based on the title
  let IconComponent;
  if (title === "Database") {
    IconComponent = IoServerOutline;
  } else if (title === "Accessibility") {
    IconComponent = IoAccessibilityOutline;
  } else if (title === "Web Performance") {
    IconComponent = IoRocketOutline;
  } else {
    IconComponent = IoServerOutline; // Fallback icon
  }

  return (
    <div className="topics">
      <a href="#" className="topic-btn">
        <div className="icon-box">
          <IconComponent />
        </div>
        <div className="btn-text">
          <p>{title}</p>
        </div>
      </a>

    
    </div>
  );
};

export default TopicItem;
