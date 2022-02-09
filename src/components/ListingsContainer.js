import React, {useState, useEffect } from "react";
import ListingCard from "./ListingCard";



function ListingsContainer({searchTerm, isSorted}) {
  const [listings, setListings] = useState([])

  useEffect(()=>{
    fetch("http://localhost:6001/listings")
    .then(res=> res.json())
    .then(data => setListings(data))
    .catch(e=> console.error(e))
  },[])

  function onDeleteListing(id) {
    const newArr = listings.filter(listing => 
      listing.id !== id
    )
    setListings(newArr)
  }

  const filteredListing = listings.filter(listing => 
    listing.description.toLowerCase().includes(searchTerm)
  )

  const displayArray = isSorted ? 
    filteredListing.sort(function(a, b) {
      const locationA = a.location.toUpperCase(); // ignore upper and lowercase
      const locationB = b.location.toUpperCase(); // ignore upper and lowercase
      if (locationA < locationB) {
        return -1;
      }
      if (locationA > locationB) {
        return 1;
      }
      // names must be equal
      return 0;
    }) : filteredListing

  return (
    <main>
      <ul className="cards">
        {displayArray.map(listing => 
          <ListingCard 
            key={listing.id} 
            listing={listing}
            onDeleteListing={onDeleteListing}
          />)
        }
      </ul>
    </main>
  );
}

export default ListingsContainer;
