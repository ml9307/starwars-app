import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { FilmDetailPage } from "./pages/FilmDetailPage";
import { FilmsPage } from "./pages/FilmsPage";
import { HomePage } from "./pages/HomePage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="films">
            <Route index element={<FilmsPage />} />
            <Route path=":id" element={<FilmDetailPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
