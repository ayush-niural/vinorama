import React from "react";
import { Route, Routes } from "react-router-dom";
import Category from "../pages/Category";

export default function Shop() {
  return (
    <Routes>
      <Route path="/" element={<Category />} />
      <Route path="/:category" element={<Category />} />
    </Routes>
  );
}
