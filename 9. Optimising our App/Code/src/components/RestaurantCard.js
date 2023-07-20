import { CDN_URL } from "../utils/constants";

//Restaurant Card Component
const RestaurantCard = (props) => {
  const { dataList } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = dataList.data;
  return (
    <div className="res-card">
      <img
        className="res-img"
        alt="food-img"
        src={CDN_URL + dataList.data.cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} STARS </h4>
      <h4>{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime} MINS</h4>
    </div>
  );
};

export default RestaurantCard;
