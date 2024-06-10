import React, { useState, useEffect } from 'react';
import StockChart from './StockChart';

function StockData({ ticker }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:5000/stocks/${ticker}`);
      const jsonData = await response.json();
      setData(jsonData);
    };

    fetchData();
  }, [ticker]);

  return (
    <div>
      {data ? <StockChart data={data} /> : <p>Loading...</p>}
    </div>
  );
}

export default StockData;
