import React, { useState } from 'react';
import StockData from './StockData';
import SearchBar from './SearchBar';

function App() {
  const [ticker, setTicker] = useState('AAPL');

  return (
    <div>
      <SearchBar onSubmit={setTicker} />
      <StockData ticker={ticker} />
    </div>
  );
}

export default App;
