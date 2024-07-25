import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CaseStudies from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CaseStudies />} />
        {/* <Route path="/wheels/game" element={<Wheel />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
