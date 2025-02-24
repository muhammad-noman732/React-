import React from 'react'
import { useState , useEffect } from 'react';
import Card from '../../components/card/Card';
import { NavLink } from 'react-router-dom';

const Home = () => {

    const [recipes, setRecipes] = useState([]);
    const [Error , setError] = useState("")
    
  const fetchRecipe = async() =>{
       const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${"d995d2e9eaf142f1995fb3f4b5b806e6"}&number=10`);
       if(!response.ok){
        setError("error");
  
       }

       const data = await response.json();
       console.log(data);
        if(data.recipes){
          setRecipes(data.recipes);
        }
     
       setError("")
      }
  
      useEffect(()=>{
               fetchRecipe();
      },[])
  
    return (
      <div>

        <div className='wrapper'>
        {
           recipes.map((recipe)=>(
            <Card key={recipe.id} item={recipe}/>
           ))
         }
        </div>
         
      </div>
    )
  }

export default Home
