import React, { useState, useEffect } from 'react';
import './AutoComplete.css';
import { fetchSuggestions } from '../../services/api';
import { Suggestion } from '../../utils/types';

interface AutoCompleteProps {
  placeholder?: string;
}

const AutoComplete: React.FC<AutoCompleteProps> = ({ placeholder }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [isLoading, setIsLoading] = useState(false);

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
  }, [query]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
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

  return (
    <div className="container">
      <div className="card">
        <h2 className="card-title">AutoComplete Component</h2>
        <div className="autocomplete">
          <input
            type="text"
            placeholder={placeholder || 'Search...'}
            value={query}
            onChange={handleChange}
          />
          {isLoading && <div className="loading">Loading...</div>}
          {!isLoading && query.length > 2 && suggestions.length === 0 && (
            <div className="no-results">No results found</div>
          )}
          <ul className="suggestions">
            {suggestions.map((suggestion) => (
              <li key={suggestion.id}>
                {highlightMatch(suggestion.name, query)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AutoComplete;