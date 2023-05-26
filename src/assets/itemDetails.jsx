/* eslint-disable react/prop-types */

import { useParams, Link } from "react-router-dom";

export default function ItemDetails({ itemsList, handleClick }) {
  const { id } = useParams();
  const currentItem = itemsList.filter((item) => item.id === id);


  return (
    <div className="itemDetail">
      <img src={currentItem[0].src} alt={currentItem[0].name} />
      <div className="beerCard">
        <div className="name-price">
          <h1>{currentItem[0].name}</h1>
          <h1>{currentItem[0].price} lv.</h1>
        </div>
        <p>{currentItem[0].description}</p>
        <button onClick={() => handleClick(id)}>Add to Cart</button>
        <Link to={"/shop"}>
        <button>Back to Shop</button>
        </Link>
      </div>
    </div>
  );
}
