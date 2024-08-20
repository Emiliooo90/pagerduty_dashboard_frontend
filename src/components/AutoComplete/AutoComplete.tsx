import React, { useState, useEffect } from 'react';
import './AutoComplete.css';
import { fetchSuggestions } from '../../services/api';
import { Suggestion } from '../../utils/types';

interface AutoCompleteProps {
  placeholder?: string;
}

const AutoComplete: React.FC<AutoCompleteProps> = ({ placeholder }) => {
  const [query, setQuery] = useState(''); // State for the input query
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]); // State for suggestions
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator

  useEffect(() => {
    if (query.length > 2) {
      setIsLoading(true);
      fetchSuggestions(query).then((data) => {
        setSuggestions(data);
        setIsLoading(false);
      });
    } else {
      setSuggestions([]);
    }
  }, [query]); // Fetch suggestions when query changes

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value); // Update query state on input change
  };

  const highlightMatch = (text: string, query: string) => {
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return (
      <>
        {parts.map((part, index) =>
          part.toLowerCase() === query.toLowerCase() ? (
            <span key={index} className="highlight">
              {part}
            </span>
          ) : (
            part
          )
        )}
      </>
    );
  };

  const handleSuggestionClick = (suggestion: Suggestion) => {
    setQuery(suggestion.name); // Set query to the clicked suggestion
    setSuggestions([]); // Clear suggestions
  };

  const clearQuery = () => {
    setQuery(''); // Clear the query state
    setSuggestions([]); // Clear suggestions
  };

  return (
    <div className="container">
      <div className="card">
        <h2 className="card-title">AutoComplete Component</h2>
        <div className="autocomplete">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder={placeholder || 'Search...'}
              value={query}
              onChange={handleChange} // Handle input change
            />
            {query && <button className="clear-button" onClick={clearQuery}>x</button>}
          </div>
          {isLoading && <div className="loading">Loading...</div>}
          {!isLoading && query.length > 2 && suggestions.length === 0 && (
            <div className="no-results">No results found</div>
          )}
          <ul className="suggestions">
            {suggestions.map((suggestion) => (
              <li key={suggestion.id} onClick={() => handleSuggestionClick(suggestion)}>
                {highlightMatch(suggestion.name, query)} {/* Highlight matching text */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AutoComplete;