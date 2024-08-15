// SearchContext.js
import React, { createContext, useState, useContext } from 'react';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const resetSearchQuery = () => {
        setSearchQuery('');
    };

    return (
        <SearchContext.Provider value={{ searchQuery, setSearchQuery, resetSearchQuery }}>
            {children}
        </SearchContext.Provider>
    );
};

export const useSearch = () => useContext(SearchContext);
