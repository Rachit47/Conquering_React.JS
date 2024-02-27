import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <div className="body">
      <div className="Search">Search</div>
      <div className="res-container">
        {
          //map-filter reduce
          resList.map((restaurant) => (
            //Each list item must have a unique key whenever we have to loop or use .map()
            <RestaurantCard key={restaurant.data.id} resInfo={restaurant} />
          ))
        }
      </div>
    </div>
  );
};
export default Body;
