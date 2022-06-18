import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Details() {
  let navigate = useNavigate();
  let { state } = useLocation();
  const goBack = () => navigate("/");
  let languageKeys = Object.getOwnPropertyNames(state.languages);

  return (
    // Main container
    <div className="grid grid-rows-1 justify-items-center h-full mt-6">
      {/* Flag and details*/}
      <div className="border-4 border-solid rounded-lg border-neutral-400 px-5 pb-8 w-1/4 h-fit sm:w-4/6 md:w-3/6 lg:w-2/3">
        <div className="grid grid-col-3 mt-5">
          <img
            className="place-self-center lg:h-70"
            src={state.flags.png}
            alt={state.name.common}
          />
        </div>
        <div className="mt-6 md:text-xl">
          <p>
            {" "}
            <span className="font-medium "> Country Code:</span> {state.cca2}
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
      <div className="grid grid-rows-2 mt-2 md:text-xl">
        <div>
          <button
            className="px-10 py-2 bg-white text-stone-900 shadow-md w-44 shadow-stone-400 md:w-80"
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
