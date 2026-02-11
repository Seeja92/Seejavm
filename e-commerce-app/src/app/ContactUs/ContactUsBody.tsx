import Footer from "../components/Footer/Footer";
import styles from "./ContactUsBody.module.css";
import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ContactUs ",
};
export default function ContactUsBody() {
  return (
    <>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-11f9e2.svg"></img>
            </a>

            <div className={styles.space}></div>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    href="/more"
                  >
                    More
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    href="/login"
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
                    href="/cart"
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

        <div className={styles.serviceContainer}>
          <div className={styles.serviceContents}>
            <span className={styles.text}>Electronics</span>
            <span className={styles.text}>TV&Appliances</span>
            <span className={styles.text}>Men</span>
            <span className={styles.text}>Women</span>
            <span className={styles.text}>Baby & Kids</span>
            <span className={styles.text}>Home & Furniture</span>
            <span className={styles.text}>Sports,Books & More</span>
            <span className={styles.text}>Flights</span>
            <span className={styles.text}>Offer Zone</span>
          </div>
        </div>
        <div className={styles.bodyContainer}>
          <div className={styles.bodyContainerStyle}>
            <div className={styles.content1Container}>
              <h1>Flipkart Help Center | 24x7 Customer Care Support</h1>
              <div className={styles.content2Container}>
                <p>
                  {" "}
                  The Flipkart Help Centre page lists out various types of
                  issues that you may have encountered so that there can be
                  quick resolution and you can go back to shopping online. For
                  example, you can get more information regarding order
                  tracking, delivery date changes, help with returns (and
                  refunds), and much more. The Flipkart Help Centre also lists
                  out more information that you may need regarding Flipkart
                  Plus, payment, shopping, and more. The page has various
                  filters listed out on the left-hand side so that you can get
                  your queries solved quickly, efficiently, and without a
                  hassle. You can get the Flipkart Help Centre number or even
                  access Flipkart Help Centre support if you need professional
                  help regarding various topics. The support executive will
                  ensure speedy assistance so that your shopping experience is
                  positive and enjoyable. You can even inform your loved ones of
                  the support page so that they can properly get their
                  grievances addressed as well. Once you have all your queries
                  addressed, you can pull out your shopping list and shop for
                  all your essentials in one place. You can shop during festive
                  sales to get your hands on some unbelievable deals online.
                  This information is updated on 04-Jan-26
                </p>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.contentRow1}>
                <span className={styles.row1head}> TYPE OF ISSUE </span>

                <div>
                  <div className={styles.row1content1}>
                    <span>Help with your issues</span>
                  </div>
                  <div className={styles.row1content1}>
                    <span>Help with your order</span>
                  </div>
                  <div className={styles.row1content1}>
                    <span>Help with other issues</span>
                  </div>
                  <div className={styles.row1content1}>
                    <span>Help Topics</span>
                  </div>
                  <div className={styles.row1content1}>
                    <span>Delivery related</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.col2}></div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
