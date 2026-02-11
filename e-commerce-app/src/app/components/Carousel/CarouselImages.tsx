"use client";

import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

import { NavLink, Link } from "react-router-dom";
import Styles from "./Carousel.module.css";

import "bootstrap/dist/css/bootstrap.min.css";

import { Carousel } from "react-bootstrap";

function Carouselimages() {
  return (
    <>
      <div className="container-fluid">
        <div className="container mt-5">
          <Carousel fade interval={3000} pause="hover">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/1f9c9ad24c2bc37b.jpg?q=90"
                height={345}
                alt="First slide"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/a9c8542102ed822e.jpg?q=90"
                height={345}
                alt="Second slide"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/66faf3950cda0b7a.png?q=90"
                height={345}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>

        <div className={Styles.topdealsection}>
          <div className={Styles.sectioncontainer}>
            <div className={Styles.topdeals}>Top Deals</div>
          </div>
          <div className={Styles.sectionitemscontainer}>
            <div className={Styles.sectionitems}>
              <a className="imag" href="flipcart.html">
                <img src="https://rukminim1.flixcart.com/image/220/220/xif0q/projector/8/z/n/atom-3x-native-fhd-1080p-4k-support-13-0-android-projector-300-original-imahhsp7nfnhjjk6.jpeg?q=60" />
                <div className={Styles.text}>Projector</div>
                <div className={Styles.text}>From 6990</div>
              </a>
            </div>

            <div className={Styles.sectionitems}>
              <a className="imag" href="flipcart.html">
                <img src="https://rukminim1.flixcart.com/image/220/220/xif0q/monitor/c/n/8/-original-imahf4rbgwtzquxh.jpeg?q=60" />
                <div className={Styles.text}>Monitor</div>
                <div className={Styles.text}>From 6990</div>
              </a>
            </div>

            <div className={Styles.sectionitems}>
              <a className="imag" href="flipcart.html">
                <img src="https://rukminim1.flixcart.com/image/220/220/kcf4lu80/speaker/mobile-tablet-speaker/h/u/f/srs-xb23-sony-original-imaftk66vjxp86h5.jpeg?q=60" />
                <div className={Styles.text}>Projector</div>
                <div className={Styles.text}>From 6990</div>
              </a>
            </div>

            <div className={Styles.sectionitems}>
              <a className="imag" href="flipcart.html">
                <img src="https://rukminim1.flixcart.com/image/220/220/xif0q/monitor/c/n/8/-original-imahf4rbgwtzquxh.jpeg?q=60" />
                <div className={Styles.text}>Monitors</div>
                <div className={Styles.text}>From 6990</div>
              </a>
            </div>

            <div className={Styles.sectionitems}>
              <a className="imag" href="flipcart.html">
                <img src="https://rukminim1.flixcart.com/image/220/220/xif0q/monitor/v/h/t/-original-imahebtvxh22sgtw.jpeg?q=60" />
                <div className={Styles.text}>Monitors</div>
                <div className={Styles.text}>From 8299</div>
              </a>
            </div>

            <div className={Styles.sectionitems}>
              <a className="imag" href="flipcart.html">
                <img src="https://rukminim1.flixcart.com/image/220/220/xif0q/camera/s/o/y/na-digital-kids-camera-20mp-1080p-32gb-card-supported-mini-original-imagy2znwq4uy4z8.jpeg?q=60" />
                <div className={Styles.text}>Top Mirrorless cameras</div>
                <div className={Styles.text}>From 6990</div>
              </a>
            </div>

            <div className={Styles.sectionitems}>
              <a className={Styles.text} href="flipcart.html">
                <img src="https://rukminim1.flixcart.com/image/220/220/xif0q/monitor/c/n/8/-original-imahf4rbgwtzquxh.jpeg?q=60" />
                <div className={Styles.text}>Monitor</div>
                <div className={Styles.text}>From 6990</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Carouselimages;

// export default function ImageCarousel() {
//   // Example image data
//   const images = [
//     { src: "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/1f9c9ad24c2bc37b.jpg?q=90", alt: "Slide 1" },
//     { src: "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/a9c8542102ed822e.jpg?q=90", alt: "Slide 2" },
//     { src: "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/66faf3950cda0b7a.png?q=90", alt: "Slide 3" },
//   ];

//   return (
//     <div style={{ maxWidth: "800px", margin: "0 auto" }}>
//       <Carousel
//         showThumbs={false}
//         autoPlay
//         infiniteLoop
//         interval={3000}
//         showStatus={false}
//         swipeable
//         emulateTouch
//       >
//         {images.map((img, index) => (
//           <div key={index}>
//             {/* Next.js Image optimization */}
//             <Image
//               src={img.src}
//               alt={img.alt}
//               width={800}
//               height={345}
//               style={{ objectFit: "cover" }}
//               priority={index === 0}
//             />
//             <p className="legend">{img.alt}</p>
//           </div>
//         ))}
//       </Carousel>
//     </div>
//   );
// }
