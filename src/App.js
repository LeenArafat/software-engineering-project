import "./App.css";
import Footer from "./footer";
import Header from "./header";

import LoginPage from "./pages/login-page/login";
import HomePage from "./pages/home-page/home";
import Tips from "./pages/tip/tip";
import ChildZone from "./pages/child-zone/child";
import Clinics from "./pages/clinic/clinic";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Header />

        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/child" element={<ChildZone />} />
          <Route path="/clinics" element={<Clinics />} />
        </Routes>

      </BrowserRouter>

      <Footer />

    </div>
  );
}

export default App;