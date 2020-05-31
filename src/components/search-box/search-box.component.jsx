import React from 'react'
import './search-box.styles.css';

export const SearchBox = ({placeholder,handelChange}) =>(
    <input type="search" className="search"
            placeholder={placeholder} 
            onChange={handelChange} />
)