import React from "react";
import Link from "next/link";
export default function AboutUsHeader() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-11f9e2.svg"></img>
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Who We Are
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                What We Do
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Our Workplace
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Our Impact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Our Planet
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Follow Us
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Subscribe
              </a>
            </li>

            <li className="nav-item">
              <Link
                // to={"/"}
                className="nav-link active"
                aria-current="page"
                href="/"
              >
                Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
