import React from "react";
import SearchPincode from "./components/SearchPincode";
import { PostalDataProvider } from "./components/context/PostalDataContext";
import PostOfficeContainer from "./components/PostOfficeContainer";

const App = () => {
  return (
    <div>
      <PostalDataProvider>
        <SearchPincode />
        <PostOfficeContainer/>
      </PostalDataProvider>
    </div>
  );
};

export default App;
