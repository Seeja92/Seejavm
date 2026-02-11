import React from "react";

import { ProductsService } from "@/app/services/product-service";
import { useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import { Params } from "next/dist/server/request/params";
import Styles from "../ProductList/product.module.css";
import Link from "next/link";
import ProductCard from "../ProductCard/productCard";

export default async function ProductDetail(props: any) {
  var product = await ProductsService.getProducts();

  var classNameForProductList = [
    Styles.productlist,
    Styles.container,
    Styles.text,
  ].join(" ");

  return (
    <div className="container-fluid">
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">
            <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-11f9e2.svg"></img>
          </a>

          <ul className="navbar-nav me-auto mb-2 mb-lg">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/">
                Home
              </Link>
            </li>
          </ul>

          <form className="d-flex" role="search">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
              name="name"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <div className="nav-item text-dark">
            <Link className="nav-link active" aria-current="page" href="/cart">
              Cart ({product.length})
            </Link>
          </div>
        </div>
      </nav>
<Link href="#recommended">Bottom</Link>
      <div className={classNameForProductList}>
        {product.map((prod: any) => {
          return <ProductCard key={prod.id} product={prod} />;
        })}
      </div>
    <Link href="#recomend">  <h4 id="recommended">top</h4></Link>
    </div>
  );
}
