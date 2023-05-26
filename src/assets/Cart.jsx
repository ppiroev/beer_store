import { useEffect } from "react";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function Cart({
  currCartItems,
  handleDecrement,
  handleIncrement,
  handleDelete,
  handleEmptyCart,
}) {
  let finalPrice = calculateTotal();

  function calculateTotal() {
    let total = 0;
    currCartItems.forEach((item) => {
      let cost = item.price * item.quantity;
      total += cost;
    });

    return total;
  }

  useEffect(() => {
    calculateTotal();
  }, [handleDecrement, handleDecrement, handleDelete]);

  let isCartEmpty = true;

  if (currCartItems.length > 0) {
    isCartEmpty = false;
  } else {
    isCartEmpty = true;
  }

  return (
    <div>
      {!isCartEmpty ? (
        <div className="cartSection">
          <div className="cartItemsList">
            {currCartItems.map((item) => {
              return (
                <div className="cartItem" key={item.id}>
                  <img src={item.src} alt="" />
                  <div className="cartItemDetails">
                    <h1>{item.name}</h1>
                    <p>Price: {item.price * item.quantity} lv.</p>
                    <div className="quantity">
                      <p>
                        Quantity:{" "}
                        <button onClick={() => handleDecrement(item.id)}>
                        <i className="fa-regular fa-square-minus"></i>
                        </button>
                        {item.quantity}
                        <button onClick={() => handleIncrement(item.id)}>
                        <i className="fa-regular fa-square-plus"></i>
                        </button>
                      </p>
                    </div>
                  </div>
                  <button onClick={() => handleDelete(item.id)}>Remove</button>
                </div>
              );
            })}
          </div>
          <div className="cartTotal">
            <h1>Total: {finalPrice} lv.</h1>
            <Link to={"/order"}>
            <button onClick={handleEmptyCart}>Complete Order</button>
            </Link>
            <Link to={"/shop"}>
              <button>Back to Shop</button>
            </Link>
            <button onClick={handleEmptyCart}>Empty Cart</button>
          </div>
        </div>
      ) : (
        <div className="emptyCart">
          <h1>Cart is empty</h1>
          <Link to={"/shop"}>
              <button>Back to Shop</button>
            </Link>
        </div>
      )}
    </div>
  );
}
