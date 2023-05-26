/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function Shop({ shopItems }) {
  return (
    <div className="shopSection">
      {shopItems.map((item) => {
        return (
          <Link to={`/shop/${item.id}`} key={item.id}>
            <div className="shopItem">
              <img src={item.src} alt={item.name} />
              <div className="info">
                <h1>{item.name}</h1>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
