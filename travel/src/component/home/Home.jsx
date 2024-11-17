import React from "react";
import Navbar from "../header/Navbar";
import CategoryTabs from "../header/CatageryTab";
import SearchBar from "../header/Searchbar";
import Banner from "./Banner";
import "./Home.css";
import AwardedMeals from "../home omponent/Award";
import MoreToExplore from "../home omponent/Mpore";
import TravellersChoice from "../home omponent/TravellersChoice";
import HolidaySlider from "../home omponent/HolidaySlider";

const Home = () => {
  return (
    <>
      <Banner />
      <AwardedMeals />
      <MoreToExplore />
      <TravellersChoice />
      <HolidaySlider />
    </>
  );
};

export default Home;
