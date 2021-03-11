import React from 'react';

const SearchBox = ({searchChange}) => {
  return (
      <>
        <input className="db ml-auto mr-auto mt3 mb4 pa2"
               placeholder="Search Robots"
               type="search"
               onChange={searchChange}/>
      </>
  );
}

export default SearchBox;