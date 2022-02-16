import React from "react";

const SearchBar = ({searchCange}) =>{
    return(
        <input type={"text"} id="name" placeholder="search robots" className="pa3 ba b--green bg-lightest-blue"
        onChange={searchCange}/>
    );
}

export default SearchBar;