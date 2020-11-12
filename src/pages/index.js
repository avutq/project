import React from "react";
import GlobalStyle from "../styles/globalStyles";
import Header from "../components/Header";
import Banner from "../components/Banner";
import About from "../components/About";

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Banner />
      <About />
    </>
  );
}
