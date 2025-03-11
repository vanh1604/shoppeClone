import React from "react";

import SearchBar from "./SearchBar";

const DefaultComponent = ({ children }) => {
  return (
    <div>
      <SearchBar />
      {children}
    </div>
  );
};

export default DefaultComponent;