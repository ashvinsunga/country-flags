import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Details() {
  let navigate = useNavigate();
  let { state } = useLocation();
  const goBack = () => navigate('/');

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto mb-16">
        <div>
          {' '}
          <img src={state.flags.png} />
          <span> {state.cca2}</span>
          <span> {state.name.common}</span>
          <span> {state.timezones}</span>
          <span> {state.ccn3}</span>
        </div>
        <button className="px-8 py-2 bg-white text-gray-600 shadow-md rounded-lg">
          Show on the map
        </button>
        <button
          className="px-8 py-2 bg-white text-gray-600 shadow-md rounded-lg"
          onClick={() => goBack()}
        >
          {' '}
          Back
        </button>
      </div>
    </div>
  );
}

export default Details;
