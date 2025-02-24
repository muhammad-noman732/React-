// pages/searched/Searched.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../../components/card/Card';
import './searched.css'

const Searched = () => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { searchTerm } = useParams();

  useEffect(() => {
    const fetchSearched = async () => {
      try {
        const apiKey = import.meta.env.VITE_API_KEY;
        const response = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${searchTerm}&number=12`
        );
        
        const data = await response.json();
        console.log(data)
        setRecipes(data.results);
      } catch (error) {
        console.error("Search error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSearched();
  }, [searchTerm]);

  return (
    <div className="searched-wrapper">
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <>
          <h2>Results for "{searchTerm}"</h2>
          <div className="searched-grid">
            {recipes.map(recipe => (
              <Card key={recipe.id} item={recipe} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Searched