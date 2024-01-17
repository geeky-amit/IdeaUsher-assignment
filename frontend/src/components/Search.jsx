import React from 'react'
import "./Search.css"
const Search = () => {
    return (
        <div className="search-container">
            <div className="input-container">
                <input type='text' />
                <button className="search-btn">Search</button>
            </div>
            <button className="filter-btn">filter</button>

        </div>
    )
}

export default Search