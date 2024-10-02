import React, { useState, useContext } from "react";
import { PostalDataContext } from "./context/PostalDataContext";

const SearchPincode = () => {
  const [inputValue, setInputValue] = useState();
  const { pincodeData, setPincodeData } = useContext(PostalDataContext);
  const [pincodeSearched, setPincodeSearched] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (inputValue.length === 6) {
      //   console.log(inputValue);
      try {
        const response = await fetch(
          `https://api.postalpincode.in/pincode/${inputValue}`
        );
        const data = await response.json();
        setPincodeData(data[0].PostOffice);
        setPincodeSearched(true);
      } catch (err) {
        window.alert(err);
      }
    } else {
      window.alert("Please type Valid (6 digit) Postal Code");
    }
  };

  return (
    <div className="p-4">
      {!pincodeSearched ? (
        <div>
          <p className="text-xl font-semibold">Enter Pincode</p>
          <form action="" onSubmit={handleSubmit} className="flex flex-col">
            <input
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
              className="p-2 text-xl h-10 w-[90%] border-2 border-black my-3 rounded-md"
              type="number"
              name="pincode"
              id="pincode"
              placeholder="Pincode"
            />
            <button
              className="sm:w-[200px] w-[90%] px-10 rounded-md text-white bg-black py-2"
              type="submit"
            >
              Lookup
            </button>
          </form>
        </div>
      ) : (
        <div>
          <p className="text-xl font-semibold">Pincode : {inputValue}</p>
          <p className="text-xl">
            <span className="font-semibold">Message: </span>
            {pincodeData != null ? (
              <span> Number of Pincode(s) found - {pincodeData.length} </span>
            ) : (
              <span className="text-xl text-red-500">
                No data found on above Pincode
              </span>
            )}
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchPincode;
