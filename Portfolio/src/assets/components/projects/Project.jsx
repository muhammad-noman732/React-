import React from 'react';
import { FaGithub , FaBox  } from 'react-icons/fa';


import './project.css';
import Card from '../card/Card';

function Project() {
  return (
    <div >
      <h1 className='project'>Projects</h1>
      <div className="projects-container">

        <Card 
          title="Project 1" 
          description="Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam" 
          source = "SAAS"
          language="TypeScript"
          frameWork = "React"
          github = "https://github.com/"
          githubIcon= {<FaGithub />}
          box = "https://github.com/"
          boxIcon = {< FaBox /> }
        />
        <Card 
          title="Project 2" 
          description="Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam" 
          source = "SAAS"
          language="TypeScript"
          frameWork = "React"
          github = "https://github.com/"
          githubIcon= {<FaGithub/>}
           box = "https://github.com/"
          boxIcon = {< FaBox /> }
        
          />

        <Card 
          title="Project 3" 
          description="Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam" 
          source = "SAAS"
          language="TypeScript"
          frameWork = "React"
          github = "https://github.com/"
          githubIcon= {<FaGithub />}
          box = "https://github.com/"
          boxIcon = {<FaBox  /> }
        
        />
      </div>
    </div>
  )
}

export default Project;