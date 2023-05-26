import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./assets/Home";
import Shop from "./assets/Shop";
import Cart from "./assets/Cart";
import Nav from "./assets/Nav";
import { useState } from "react";
import beers from "./assets/beerData";
import ItemDetails from "./assets/itemDetails";
import Order from "./assets/Order";

export default function RouteSwitch() {
  const [items, setItems] = useState(beers);
  const [cartItems, setCartItems] = useState([]);

  function incrementQuantity(id) {
    const newCartItems = [...cartItems];
    newCartItems.map((item) => {
      if (item.id === id) {
        item.quantity += 1;
      }
    });
    setCartItems(newCartItems);
  }

  function removeAllItemsFromCart(){
    const emptyCart = [];
    setCartItems(emptyCart);
  }

  function removeItem(id) {
    const updatedCartItems = cartItems.filter((item) => item.id != id);
    setCartItems(updatedCartItems);
  }

  function decrementQuantity(id) {
    const newCartItems = [...cartItems];
    newCartItems.map((item) => {
      if (item.id === id) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        }
      }
    });
    setCartItems(newCartItems);
  }

  function addToCart(id) {
    let addedInCart = false;

    cartItems.forEach((item) => {
      if (item.id === id) {
        item.quantity += 1;
        setCartItems(cartItems);
        addedInCart = true;
      }
    });

    if (!addedInCart) {
      const newItem = items.filter((item) => item.id == id);
      setCartItems([...cartItems, newItem[0]]);
    }
  }

  return (
    <BrowserRouter>
      <Nav navCartItems={cartItems}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop"
          element={<Shop addToCart={addToCart} shopItems={items} />}
        />
        <Route
          path="/cart"
          element={
            <Cart
              currCartItems={cartItems}
              handleDecrement={decrementQuantity}
              handleIncrement={incrementQuantity}
              handleDelete={removeItem}
              handleEmptyCart={removeAllItemsFromCart}
            />
          }
        />
        <Route
          path="/shop/:id"
          element={<ItemDetails itemsList={items} handleClick={addToCart} />}
        />
        <Route path="/order" element={<Order />} />
      </Routes>
    </BrowserRouter>
  );
}
