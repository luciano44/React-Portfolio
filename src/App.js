import "./styles/app.scss";
//header
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideSocialMedias from "./components/SideSocialMedias";
//pages
import HomePage from "./pages/HomePage";
import Wallpapers from "./pages/Wallpapers";
import Logos from "./pages/Logos";
import Visuals from "./pages/Visuals";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <SideSocialMedias />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wallpapers" element={<Wallpapers />} />
        <Route path="/logos" element={<Logos />} />
        <Route path="/visuals" element={<Visuals />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
