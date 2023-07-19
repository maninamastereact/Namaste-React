import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API, ITEM_IMG_URL } from "../utils/constants";
import MenuShimmer from "./MenuShimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null) return <MenuShimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards?.map((item) => (
          <div key={item.card.info.id} className="item-container">
            {/* <li> */}
            <div className="item-part1">
              {item.card.info.name} - {" Rs."} {item.card.info.price / 100}
              <p>{item.card.info.description}</p>
            </div>
            <img
              className="item-img"
              src={ITEM_IMG_URL + item.card.info.imageId}
            />
            {/* </li> */}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
