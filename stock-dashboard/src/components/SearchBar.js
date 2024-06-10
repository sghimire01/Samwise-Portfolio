import React, { useState } from 'react';

function SearchBar({ onSubmit }) {
  const [input, setInput] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={input} onChange={e => setInput(e.target.value)} />
      <button type="submit">Get Data</button>
    </form>
  );
}

export default SearchBar;