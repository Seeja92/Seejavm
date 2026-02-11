"use client";
import { useRouter } from "next/navigation";

import React from "react";
import Link from "next/link";
import Styles from "./productcard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { ProductsService } from "@/app/services/product-service";

import {
  addToCart,
  removeFromCart,
  updateTempQuantity,
  applyTempUpdate,
} from "../../../app/cartSlice";

export default function ProductCard(props: any) {
  const router = useRouter();
  const dispatch = useDispatch();
  var prod = props.product;
  return (
    <div className={Styles.container}>
      <div>
        <img src={prod.image} width={200} height={200} />
        <div>
          <Link href={"/products/" + prod.id}>{prod.title}</Link>
        </div>
        <div>{prod.category}</div>
        <div>{prod.rating.rate}</div>
        <div>{prod.price}</div>
        <Link className="nav-link active" aria-current="page" href="/Cart/">
          <button type="button" onClick={() => dispatch(addToCart(prod))}>
            Add To Cart
          </button>
        </Link>
      </div>
    </div>
  );
}
