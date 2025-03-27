import React from 'react'
import Button from '../button/Button'
import './skills.css'

function Skills() {
  return (
    <div>
      <h1 className='skills'>SKILLS</h1>
      <div className="tech-skills">  {/* Fixed casing */}
        <Button text="HTML" />
        <Button text="CSS" />
        <Button text="JavaScript" />
        <Button text="TypeScript" />
        <Button text="React" />
        <Button text="Redux" />
        <Button text="SASS" />        {/* Fixed typo */}
        <Button text="Material UI" />
        <Button text="Git" />
        <Button text="CI/CD" />       {/* Fixed symbol */}
        <Button text="Jest" />
        <Button text="Enzyme" />      {/* Fixed typo */}
      </div>
    </div>
  )
}

export default Skills