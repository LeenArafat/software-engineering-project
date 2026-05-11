import './App.css';
import Footer from "./footer";
import LoginPage from './pages/login-page/login';
import HomePage from './pages/home-page/home';
import Tips from './pages/tip/tip';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/tips" element={<Tips />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
