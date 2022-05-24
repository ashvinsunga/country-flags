import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ThumbInfo from '../components/ThumbInfo';

function Home() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = async () => {
    const res = await fetch('https://restcountries.com/v3.1/all');
    const data = await res.json();
    // console.log(data);

    await setCountries(data);
  };

  return (
    <div>
      <div className="grid grid-cols-4 justify-center">
        <i className="place-self-end fa fa-search my-auto -mr-8 z-10 pl-3 py-5 rounded-md text-gray-400"></i>
        <input
          type="text"
          placeholder="Filter Countries by Name"
          // onChange={(countryName) =>
          //   searchCountryByName(countryName.target.value)
          // }
          className="pl-10 p-2 shadow-md rounded-3xl w-9/12  m-2 border-slate-600 col-span-3"
        />
      </div>

      <div className=" grid grid-cols-4 gap-2">
        {countries.map((country, index) => (
          <Link to={{ pathname: 'details', state: country }} key={index}>
            <ThumbInfo
              countryFlag={country.flags.png}
              countryCode={country.cca2}
              countryName={country.name.common}
              countryTimezones={country.timezones}
              countryCallingCode={country.ccn3}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
