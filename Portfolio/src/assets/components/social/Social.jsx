import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Social.css'; 

const Social = () => {
  return (
    <div className="social-links">
      <p className='resume'>resume</p>
      {/* GitHub */}
      <a
        href="https://github.com/muhammad-noman732/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="icon-link"
      >
        <FaGithub size={30} />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/muhammad-noman-b6284830b/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="icon-link"
      >
        <FaLinkedin size={30} />
      </a>
    </div>
  );
};

export default Social;
