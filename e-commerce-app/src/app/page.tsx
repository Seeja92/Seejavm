import Image from "next/image";
import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.css";
import Nav from "./components/Nav/Nav";
import Carousel from "../app/components/Carousel/CarouselImages";
import Footer from "./components/Footer/Footer";
export default function Home() {
  return (
    <>
      <Nav />
      <Carousel />

      <Footer />
    </>
  );
}
