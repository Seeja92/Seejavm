import React from "react";
import styles from "./nav.module.css";
import Link from "next/link";

export default function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-11f9e2.svg"></img>
          </a>

          <div className={styles.search}>
            <form className={styles.headersearch} action="/search" method="get">
              <div className={styles.searchcontainer}>
                <button className={styles.searchbtn}></button>
                <div className={styles.searchinput}>
                  <input
                    type="text"
                    className={styles.searchbox}
                    placeholder="Search for Products,Brands and More"
                  />
                </div>
                <button className="btn btn-primary w-20">Search</button>
              </div>
            </form>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  href="/products"
                >
                  Products
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  href="/Login"
                >
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  href="/AboutUs"
                >
                  AboutUs
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  href="/ContactUs"
                >
                  ContactUs
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  href="/Cart"
                >
                  <img
                    src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg"
                    alt="Cart"
                    width={24}
                    height={24}
                  />
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
