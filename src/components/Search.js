import React, {useState} from "react";

function Search({onSubmitSearch, onSortClick, isSorted}) {
  const [inputValue, setInputValue] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    onSubmitSearch(inputValue.toLowerCase())
    e.target.reset()
  }

  function handleSortClick() {
    onSortClick()
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">🔍</button>
      <button onClick={handleSortClick}>{isSorted ? "Unsort" : "Sort"}</button>
    </form>
  );
}

export default Search;
