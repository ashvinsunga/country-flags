import React, { useEffect, useState } from 'react';

function Home() {
  const [countries, setCountries] = useState([]);

  // useEffect(() => {
  //   getCountries();
  // }, []);

  const getCountries = async () => {
    const res = await fetch('https://restcountries.com/v3.1/all');
    const data = await res.json();
    await setCountries(data);
  };

  return (
    <div className="flex justify-center">
      <i className="fa fa-search my-auto -mr-8 z-10 pl-3 py-5 rounded-md text-gray-400"></i>
      <input
        type="text"
        placeholder="Filter Countries by Name"
        // onChange={(countryName) =>
        //   searchCountryByName(countryName.target.value)
        // }
        className="pl-10 p-2 shadow-md  rounded-md w-9/12"
      />
    </div>
  );
}

export default Home;
