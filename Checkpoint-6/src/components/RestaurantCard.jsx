import { CDN_URL } from "../utils/constants";

const styleCard = {
  backgroundColor: "rgb(37, 34, 34)",
};

const RestaurantCard = (props) => {
  const { resInfo } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resInfo?.info; //optional chaining
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        src={CDN_URL + "/" + cloudinaryImageId}
        alt="CurryCottage"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};
export default RestaurantCard;
