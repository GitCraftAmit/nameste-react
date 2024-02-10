import ResturantCarts from "../ResturantCarts";
import resList from "./utils/mockData";
import { useState } from "react";

const Body = () => {
  // Local State Variable - It is a super powerful Variable
  const [listOfRestaurants, setListOfRestaurant] = useState(resList);


  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <ResturantCarts key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
