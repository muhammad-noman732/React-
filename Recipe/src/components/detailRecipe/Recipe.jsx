import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './recipe.css'
const Detail = () => {
  // state for managing state of active recipe detail
  const [details, setDetail] = useState({});
  const [activeTab, setActiveTab] = useState("");
  const[error , setError] = useState("")
  // id of recipe from url
  const params = useParams();

  const fetchRecipeDetail = async () => {
    try {
      const apiKey = import.meta.env.VITE_API_KEY;
      const response = await fetch(
        `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${apiKey}`
      );

      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);

      const data = await response.json();
      setDetail(data);
    } catch (error) {
      console.error("Fetch error:", error);
      // Handle error state here
    }
  };
  useEffect(() => {
    fetchRecipeDetail();
  }, [params.id]);

return (
  <div className="detail-wrapper">
  <div className="content">
    
    {/* Image Section */}
    <div className="details">
      <h2 className="recipe-title">{details.title}</h2>
      <img 
        src={details.image} 
        alt={details.title} 
        className="recipe-img"
      />
    </div>

    {/* Content Section */}
    <div className="content-right">
      <div className="info">
        <button
          className={`button ${activeTab === 'instructions' ? 'active' : ''}`}
          onClick={() => setActiveTab('instructions')}
        >
          Instructions
        </button>
        <button
          className={`button ${activeTab === 'ingredients' ? 'active' : ''}`}
          onClick={() => setActiveTab('ingredients')}
        >
          Ingredients
        </button>
      </div>

      <div className="content-details">
        {activeTab === 'instructions' && (
          <div dangerouslySetInnerHTML={{ __html: details.instructions }} />
        )}

        {activeTab === 'ingredients' && (
          <ul className="ingredients-list">
            {details.extendedIngredients?.map((ingredient) => (
              <li key={ingredient.id}>
                {ingredient.original}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  </div>
</div>
);
};

export default Detail;
