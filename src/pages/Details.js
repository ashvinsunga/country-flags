import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Details() {
  let navigate = useNavigate();
  let { state } = useLocation();
  const goBack = () => navigate("/");
  let languageKeys = Object.getOwnPropertyNames(state.languages);

  return (
    // Main container
    <div className="grid grid-rows-1 bg-gray-100 place-items-center h-screen">
      {/* Flag and details*/}
      <div className="border-4 border-solid rounded-lg border-neutral-400 px-5 pb-8 w-1/4">
        <div className="mt-5">
          <img src={state.flags.png} alt={state.name.common} />
        </div>
        <div className="mt-3">
          <p>
            {" "}
            <span className="font-medium"> Country Code:</span> {state.cca2}
          </p>
          <p>
            <span className="font-medium"> Country Name: </span>
            {state.name.common}
          </p>
          <p>
            {" "}
            <span className="font-medium"> Timezones:</span>{" "}
            {state.timezones.length > 1
              ? state.timezones + " "
              : state.timezones}
          </p>
          <p>
            {" "}
            <span className="font-medium"> Calling codes:</span> {state.ccn3}
          </p>
          <p>
            {" "}
            <span className="font-medium"> Capital:</span> {state.capital}
          </p>

          <p>
            {" "}
            <span className="font-medium"> Languages:</span>{" "}
            {languageKeys.map((key) =>
              languageKeys.length > 1
                ? state.languages[key] + " "
                : state.languages[key]
            )}
          </p>
          <p>
            {" "}
            <span className="font-medium"> Population:</span> {state.population}
          </p>
        </div>
      </div>
      {/* Buttons */}
      <div className="grid grid-rows-2 mt-11 ">
        <div className="my-2">
          <button className="px-6 py-2 bg-white text-stone-900 shadow-md w-44 shadow-stone-400">
            Show on the map
          </button>
        </div>

        <div>
          <button
            className="px-10 py-2 bg-white text-stone-900 shadow-md w-44 shadow-stone-400 "
            onClick={() => goBack()}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default Details;
