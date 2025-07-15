import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import MiddleInfoPage from "./pages/MiddleInfoPage";
import About from "./components/About";
import Projects from "./components/Projects";
import HappyClients from "./components/HappyClients";
import NewsletterSubscription from "./components/NewsletterSub";
const App = () => {
  return (
    <div>
      {/* <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/clients" element={<HappyClients />}></Route>
      </Routes> */}

      <LandingPage />
      <MiddleInfoPage />
      <Projects />
      <HappyClients />
      <About />
      <NewsletterSubscription />
    </div>
  );
};

export default App;
