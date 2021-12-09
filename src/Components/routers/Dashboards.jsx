import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "../IU/Navbar";
import MarvelScreen from "../Marvel/MarvelScreen";
import SearchScreen from "../Search/SearchScreen";
import DcScreen from "../dc/DcScreen";
import HeroScreen from "../Hero/HeroScreen";


const Dashboards = () => {
  return (
    <>
      <Navbar />
      <div className="container">
      <Routes>
        <Route path="marvel" element={<MarvelScreen />} />
        <Route path="dc" element={<DcScreen />} />
        <Route path="search" element={<SearchScreen />} />
        <Route path="heroes/:heroid" element={<HeroScreen />} />
        <Route path="/" element={<MarvelScreen />} />
      </Routes>
      </div>
    </>
  );
};

export default Dashboards;
