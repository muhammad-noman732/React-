import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import TrendingMovies from "../../components/trendingMovies/TrendingMovies";
import Search from "../../components/search/Search";
import { useParams } from "react-router-dom";
import Card from "../../components/card/Card";

const Home = () => {
  const [results, setResults] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const params = useParams();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const apiKey = import.meta.env.VITE_API_KEY;
  const fetchMovies = async () => {
    if (!query) {
      setResults([]);
      return;
    }

    try {
      setLoading(true)

      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(
          query  )}`);

      const data = await response.json();
      setResults(data.results)
      console.log("search", data);
    } catch (error) {
      console.error("error", error);
      setError(error)
    }finally{
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [query]);

  return (
    <div className="home">
    <h1>Movie Search</h1>
    <Search />
    
    {loading && <p>Loading...</p>}
    {error && <p className="error">{error}</p>}

    {query ? (
      results.length > 0 ? (
        <div className="results-grid">
          {results.map((movie) => (
            <Card key={movie.id} item={movie} />
          ))}
        </div>
      ) : (
        <p>No results found for "{query}"</p>
      )
    ) : (
      <TrendingMovies />
    )}
  </div>

  );
};

export default Home;
