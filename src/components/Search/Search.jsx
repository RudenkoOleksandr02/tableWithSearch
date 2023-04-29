import React, {useState} from "react";
import searchIcon from '../../assets/images/search.png'
import s from './Search.module.css'

const Search = ({searchTerm, handleSearchTerm}) => {
    return <div className={s.searchContainer}>
        <img src={searchIcon} alt="search"/>
        <input placeholder='Search' value={searchTerm} onChange={(e) => handleSearchTerm(e.target.value)}/>
    </div>
}

export default Search;