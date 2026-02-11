import React from "react";
import styles from "../ProductList/ProductList.module.css";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { ProductsService } from "@/app/services/product-service";

import {
  addToCart,
  removeFromCart,
  updateTempQuantity,
  applyTempUpdate,
} from "../cartSlice";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Cart",
};

export default async function ProductListView(props: any) {
  var product = await ProductsService.getProducts();

  const dispatch = useDispatch();

  return (
    <div>
      <div className="container">
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <ul className="navbar-nav me-auto mb-2 mb-lg">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/">
                  Home
                </Link>
              </li>
            </ul>

            <div className="nav-item text-dark">
              <Link
                className="nav-link active"
                aria-current="page"
                href="/Cart"
              >
                Cart ({product.length})
              </Link>
            </div>
          </div>
        </nav>
      </div>
      <div className="product-list">
        {product.map((prod: any) => (
          <div className="product-card" key={prod.id}>
            <img src={prod.image} width={150} alt={prod.title} />

            <p>Price:${prod.price}</p>
            <button onClick={() => dispatch(addToCart(product))}>
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
