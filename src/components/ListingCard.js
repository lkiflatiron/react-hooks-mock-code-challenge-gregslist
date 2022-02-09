import React, {useState} from "react";

function ListingCard({listing, onDeleteListing}) {

  const [favorite, setFavorite] = useState(true)

  function handleFavoriteClick() {
    setFavorite((favorite) => !favorite)
  }

  function handleDeletClick() {
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res=> res.json())
    .then(() => onDeleteListing(listing.id))
    .catch(e => console.error(e))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {favorite ? (
          <button onClick={handleFavoriteClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFavoriteClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete" onClick={handleDeletClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
