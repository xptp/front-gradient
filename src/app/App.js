import React, { useRef, useState } from "react";
import "../app/style/app.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/navBar";
import HomePage from "./components/page/homePage";
import ContactsPage from "./components/page/contactsPage";
import ActorsPage from "./components/page/actorsPage";
import ActressPage from "./components/page/actressPage";
import Header from "./components/header";
import Footer from "./components/footer";
import OneActorPage from "./components/page/oneActorPage/oneActorPage";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />

      <Routes>
        <Route index element={<HomePage />} />
        <Route path="actors" element={<ActorsPage />} />
        <Route path="actor/:id" element={<OneActorPage />} />
        <Route path="actress" element={<ActressPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
