import React from "react";
import AboutUsBody from "./AboutUsBody";
import AboutUsHeader from "./AboutUsHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AboutUs Page",
};
export default function AboutUs() {
  return (
    <>
      <AboutUsHeader />
      <AboutUsBody />
    </>
  );
}
