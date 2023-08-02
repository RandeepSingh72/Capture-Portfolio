import React from "react";
//GlobalStyle
import GlobalStyle from "./components/GlobalStyle";
//import pages
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";
//import route
import { Routes, Route, useLocation } from "react-router-dom";
//Animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<AboutUs />}></Route>
        <Route path="/work" element={<OurWork />}></Route>
        <Route path="/work/:id" element={<MovieDetail />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
      </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
