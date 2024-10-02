import React, { useContext, useEffect, useState } from "react";
import { PostalDataContext } from "./context/PostalDataContext";
import PostOfficeCard from "./PostOfficeCard";

const PostOfficeContainer = () => {
  const { pincodeData } = useContext(PostalDataContext);
  const [filteredPostOffices, setFilteredPostOffices] = useState([]);
  const [filterString, setFilterString] = useState("");


  const handleFilter = (e) => {
    setFilterString(e.target.value);
    // console.log(filterString);
  };

  useEffect(() => {
    setFilteredPostOffices((pincodeData!= null)?[...pincodeData]:[]);
    // console.log(filteredPostOffices);
  }, [pincodeData]);

  useEffect(() => {
    const copyfilterArray = pincodeData.filter((postOffice) =>
      postOffice.Name.toLowerCase().includes(filterString.toLowerCase())
    );
    setFilteredPostOffices(copyfilterArray);
  }, [filterString]);

  return (
    <div className="p-4">
        {(pincodeData != null && pincodeData.length!=0) && <input
            className="p-2 text-xl h-10 w-[90%] border-2 border-black my-3 rounded-md"
            type="text"
            placeholder="Filter"
            onChange={handleFilter}
          />
        }
      {filteredPostOffices.length > 0 && (
          <div className="flex flex-wrap flex-grow gap-3 w-[90%]">
            {filteredPostOffices?.map((office, ind) => (
              <PostOfficeCard key={ind} postOffice={office} />
            ))}
          </div>
        
      )}
      {(pincodeData != null && pincodeData.length!=0) && filteredPostOffices.length === 0 && (
        <p className="text-xl text-red-400">Couldn’t find the postal data you’re looking for…</p>
      )}
    </div>
  );
};

export default PostOfficeContainer;
