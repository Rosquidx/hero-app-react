import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginScree from "../Login/LoginScree";
import Dashboards from "./Dashboards";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginScree />} />
        <Route path="/*" element={<Dashboards />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
