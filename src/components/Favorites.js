
import React, { useState } from "react";
import { FaStar } from "react-icons/fa"; //have to npm install react-icons
import "../css/Favorites.css";

const Favorites = (props) => {
  const [isFavorited, setFavorited] = useState(false);
  let favListHeader = "";
  let favList = [];
  let starLabel = "";
  let defaultLabel = "";

  if (isFavorited) {
    starLabel = (
      <p>
        This product has been added to your favorites. Click the yellow star to
        remove it.
      </p>
    );
    favList.push(Favorites);

    favListHeader = (
    <p>Your Favorites: </p> );
   

    console.log(favList);    //can remove, just checking to see if it is actually adding something to the array


  } else if (!isFavorited) {
    defaultLabel = (
    <p>
      This product is not in your favorites. Click the yellow star to add it.
    </p>);

    favList.splice(Favorites.key, 1);

    console.log(favList);    //can remove, just checking to see if it is actually removing something from the array
  }

  return (
    <div>
        <label>
          <input
            type="radio"
            name="favstar"
            onClick={() => setFavorited((value) => !value)}
          />
          <FaStar
            className="star"
            size={20}
            color={isFavorited ? "ffc107" : "e4e5e9"}
          />
        </label>

      {starLabel}
      {defaultLabel}
      {favListHeader}
      {favList}
    </div>
  );
};

export default Favorites;