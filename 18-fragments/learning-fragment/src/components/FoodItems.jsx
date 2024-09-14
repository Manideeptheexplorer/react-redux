import { useState } from "react";
import Item from "./Item";
const FoodItems = ({ items }) => {
  // let foodItems=['Biriyani','Fried rice','Dosa','Pani puri','Pickles']
  let [activeItems, setActiveItems] = useState([]);
  const onBuyButton = (item, event) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  };
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          fooditems={item}
          bought={activeItems.includes(item)}
          HandleEvent={(event) => {
            onBuyButton(item, event);
          }}
        ></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
