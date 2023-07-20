import React from "react";
//GlobalStyle
import GlobalStyle from "./components/GlobalStyle";
//import pages
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
//import route
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>
      <Routes>
        <Route exact path="/" element={<AboutUs/>}></Route>
        <Route path="/work" element={<OurWork />}></Route>
        <Route path="/contact" element={ <ContactUs />}></Route>
      </Routes>
    
    </div>
  );
}

export default App;
