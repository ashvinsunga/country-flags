import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ThumbInfo from '../components/ThumbInfo';
import Spinner from '../components/Spinner';

function Home() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = async () => {
    const res = await fetch('https://restcountries.com/v3.1/all');
    const data = await res.json();
    // console.log(data);

    await setCountries(data);
    setLoading(false);
  };
  const searchCountryByName = async (countryName) => {
    try {
      if (countryName === '') return getCountries();
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${countryName}`
      );
      const data = await res.json();
      await setCountries(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className=' justify-center flex container mx-auto'>
        <i className='fa fa-search my-auto -mr-8 z-10 pl-3 py-5 rounded-md text-gray-400'></i>
        <input
          type='text'
          placeholder='Filter Countries by Name'
          onChange={(countryName) =>
            searchCountryByName(countryName.target.value)
          }
          className='pl-10 p-2 shadow-md rounded-3xl w-9/12  m-2 border-slate-600 col-span-3 sm:text-sm'
        />
      </div>

      {loading ? (
        <Spinner />
      ) : (
        <div className='grid gap-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
          {countries.map((country, index) => (
            <Link to={'/Details'} state={country} key={index}>
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
      )}
    </div>
  );
}

export default Home;
