import React from "react";
import SearchBar from "./SecondaryComponents/searchBar";

function Navigation() {
  return (
    <>
      <div className="grid w-full md:grid-cols-[max-content_max-content_1fr_max-content_max-content] items-center ">
        <SearchBar />
      </div>
    </>
  );
}

export default Navigation;
