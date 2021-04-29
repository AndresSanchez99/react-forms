import React from 'react';
import './search-bar.styles.css';

const SearchBar = () => {
    return (
        
        <div className="search-bar-container">
            <div className="Searchbar-input">
                <input type="text" placeholder="Buscar por nombre"/> </div>
            <div>
            <input type ="radio" name='choice'/> Servicio realizado 
            <input type ="radio" name='choice'/> Servicio sin realizar 
            <input type ="radio" name='choice'/> Todos
            </div>
            
        </div>
    );
    
}

export default SearchBar;