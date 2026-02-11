"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { useRouter } from "next/navigation";
import { addToCart, removeFromCart } from "../cartSlice";
import { updateTempQuantity, applyTempUpdate } from "../cartSlice";

export default function Cart() {
  const {
    items: cartItems,
    tempItems,
    totalPrice,
  } = useSelector((state: any) => state.cart);

  const router = useRouter();
  const dispatch = useDispatch();
  const removeItem = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const onUpdatedValue = (id: number, quantity: number) => {
    dispatch(updateTempQuantity({ id, quantity }));
  };

  const handleApplyUpdates = () => {
    tempItems.forEach((item: any) => {
      dispatch(applyTempUpdate(item.id));
    });
  };

  return (
    <>
      <div className="cart-page-container">
        <div className="cart-container">
          <h2>Your Cart</h2>
          {cartItems.map((cartitem: any) => (
            <div className="cart-item" key={cartitem.id}>
              <img src={cartitem.image} alt="image-title" />
              <div className="cart-item-details">
                <h3>{cartitem.title}</h3>
                <p>Price : ${cartitem.price}</p>
                <div>
                  <input
                    type="number"
                    min="1"
                    value={
                      tempItems.find(
                        (tempItem: any) => tempItem.id === cartitem.id,
                      )?.quantity || cartitem.quantity
                    }
                    onChange={(e) =>
                      onUpdatedValue(cartitem.id, parseInt(e.target.value))
                    }
                  />

                  <button onClick={handleApplyUpdates}>Add</button>
                  <button onClick={() => removeItem(cartitem.id)}>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="cart-total">
            <p>Total :${totalPrice}</p>
          </div>
          <div style={{ display: "flex", gap: "12px" }}>
            <button
              className="back-button"
              onClick={() => {
                router.push("/Success");
              }}
            >
              Proceed To Checkout
            </button>
            <button
              className="back-button"
              type="button"
              onClick={() => {
                router.push("/products");
              }}
            >
              Back To Shopping
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
