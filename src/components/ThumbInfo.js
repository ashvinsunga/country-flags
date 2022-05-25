import React from 'react';

export default function ThumbInfo({
  countryFlag,
  countryCode,
  countryName,
  countryTimezones,
  countryCallingCode,
}) {
  return (
    <div className="grid grid-flow-col content-center rounded-lg shadow-lg bg-white p-2 border-4">
      <div className="p-4">
        <p className="text-xs">
          <span className="text-gray-700">{countryCode}</span>
        </p>
        <p className="text-xs">
          <span className="text-gray-700">{countryName}</span>
        </p>
        <p className="text-xs">
          {countryTimezones.map((timezone, index) => (
            <span key={index}>
              {' '}
              {countryTimezones.length > 1 ? timezone + ',' : timezone}
            </span>
          ))}
        </p>
        <p className="text-xs">
          <span className="text-gray-700">{countryCallingCode}</span>
        </p>
      </div>
      <div className="grid content-center justify-center">
        <img
          src={countryFlag}
          className="h-32 max-h-20 max-w-3xl shadow-md border-2"
          alt={countryName}
        />
      </div>
    </div>
  );
}
