import React, { useEffect, useState } from 'react';

function Home() {
  const [countries, setCountries] = useState([]);
  const [mode, setMode] = useState([true]);

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = async () => {
    const res = await fetch('https://restcountries.com/v3.1/all');
    const data = await res.json();
    await setCountries(data);
  };

  return (
    <div>
      <h2> This is Home</h2>
    </div>
  );
}

export default Home;
