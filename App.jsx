import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Replace this URL with your API endpoint URL
    const apiUrl = 'https://testbfhl.herokuapp.com/bfhl';

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className='App'>
      <h1>React API Request Example</h1>
      <div className='Response'>
        {data ? (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    </div>
  );
}

export default App;
