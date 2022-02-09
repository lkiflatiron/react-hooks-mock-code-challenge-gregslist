import React, {useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [searchTerm, setSearchTerm] = useState('')
  const [isSorted, setIsSorted] = useState(false)

  function onSubmitSearch (searchSubmit) {
    setSearchTerm(searchSubmit)
  }

  function onSortClick () {
    setIsSorted(isSorted => !isSorted)
  }

  return (
    <div className="app">
      <Header 
        onSubmitSearch={onSubmitSearch}
        onSortClick={onSortClick}
        isSorted={isSorted}
      />
      <ListingsContainer 
        searchTerm={searchTerm} 
        isSorted={isSorted}
      />
    </div>
  );
}

export default App;
