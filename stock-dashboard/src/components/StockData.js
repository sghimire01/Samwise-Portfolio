import React, { useState, useEffect } from 'react';

function StockData({ ticker }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/stocks/${ticker}`)
      .then(response => response.json())
      .then(data => setData(data));
  }, [ticker]);

  return (
    <div>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
}

export default StockData;