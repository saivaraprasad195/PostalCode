import { createContext, useState } from "react";

export const PostalDataContext = createContext();

export const PostalDataProvider = ({ children }) => {
  const [pincodeData, setPincodeData] = useState([]);
  return (
    <PostalDataContext.Provider value={{ pincodeData, setPincodeData }}>
      {children}
    </PostalDataContext.Provider>
  );
};
