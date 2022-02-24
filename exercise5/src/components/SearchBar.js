import React from "react";

    const SearchBar = (props) => (
            <form>
            <label htmlFor="header-search">
                <span>Etsi tuotteista</span>
            </label>
            <input
                type="text"
                id="header-search"
                placeholder="Tuotteen nimi"
                name="s" 
            />
            <button type="submit">HAE </button>
            </form>
    );

export default SearchBar;