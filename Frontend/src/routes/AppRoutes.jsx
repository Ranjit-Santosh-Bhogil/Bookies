import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Explore from "../pages/Explore/Explore";
import Exchange from "../pages/Exchange/Exchange";
import Profile from "../pages/Profile/Profile";
import Login from "../pages/Auth/Login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/exchange" element={<Exchange />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />

      
    </Routes>
  );
};

export default AppRoutes;
