import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Search = () => {
  const [input, setInput] = useState("");
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const query = searchParams.get("query");
    if (query) {
      // agar query h to usko decode krna h inside input field
      setInput(decodeURIComponent(query));
    }
  }, [searchParams]);

  const SubmitHandler = (e) => {
    e.preventDefault();

    if (input.trim()) {
      navigate({
        pathname: "/",
        // yha se jo search kre ge wo search bar m show hoga aur yha pr variable ka nam query raka h 
        search: `?query=${encodeURIComponent(input.trim())}`,
      });
    }
  };
  return (
    <div>
      <form onSubmit={SubmitHandler}>
        <input
          className="search-bar"
          type="text"
          value={input}
          placeholder="Search Movie.."
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Search;
