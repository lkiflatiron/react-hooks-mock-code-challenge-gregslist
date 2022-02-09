import React from "react";
import Search from "./Search";

function Header({onSubmitSearch, onSortClick, isSorted}) {

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search
        onSortClick={onSortClick} 
        onSubmitSearch={onSubmitSearch}
        isSorted={isSorted} 
      />
    </header>
  );
}

export default Header;
