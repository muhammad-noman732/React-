import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import './search.css'
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [search, setSearch] = useState("");

    const navigate = useNavigate();
    const submitHandler = (e)=>{
         e.preventDefault();
        //  ye searche/jo input m value h wha pr navigate kre ga
        // means ik page searched ka bnana jha pr jb koi path me searched/search ka path hoga 
         navigate(`/searched/${search}`);
         setSearch("")
    }

    return (
        <div className="search-container">
            <form onSubmit={submitHandler}>
                <div className="search-input-group">
                    <FaSearch className="search-icon" />
                    <input
                        type="text"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        placeholder="Search recipes..."
                        className="search-input"
                    />
                </div>
            </form>
        </div>
    )
}

export default Search