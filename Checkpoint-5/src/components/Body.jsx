import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
const Body = () => {
  // Local state variable
  const [listOfRestaurants, setListofRestaurants] = useState(resList);
  // Normal JS variable
  // let listOfRestaurants = [
  //   {
  //     type: "restaurant",
  //     data: {
  //       id: "74453",
  //       name: "Domino's Pizza",
  //       cloudinaryImageId: "bz9zkh2aqywjhpankb07",
  //       cuisines: ["Pizzas"],
  //       costForTwo: 40000,
  //       deliveryTime: 45,
  //       avgRating: "4.5",
  //     },
  //   },
  //   {
  //     type: "restaurant",
  //     data: {
  //       id: "74454",
  //       name: "KFC",
  //       cloudinaryImageId: "bz9zkh2aqywjhpankb07",
  //       cuisines: ["Fries"],
  //       costForTwo: 40000,
  //       deliveryTime: 45,
  //       avgRating: "3.8",
  //     },
  //   {
  //     type: "restaurant",
  //     data: {
  //       id: "74455",
  //       name: "Rolls King",
  //       cloudinaryImageId: "bz9zkh2aqywjhpankb07",
  //       cuisines: ["Spring Rolls"],
  //       costForTwo: 40000,
  //       deliveryTime: 45,
  //       avgRating: "4.1",
  //     },
  //   },
  // ];
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // filter logic
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListofRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {
          //map-filter reduce
          listOfRestaurants.map((restaurant) => (
            //Each list item must have a unique key whenever we have to loop or use .map()
            <RestaurantCard key={restaurant.data.id} resInfo={restaurant} />
          ))
        }
      </div>
    </div>
  );
};
export default Body;
