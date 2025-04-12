import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Parallax1 from "./parallax1/Parallax1";
import Parallax2 from './parralax2/Parallax2';
import NoPage from "./pages/nopage/NoPage";
import Home from "./pages/home/home";
import Parallax3 from "./parallax3/Parallax3";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="paralax1" element={<Parallax1/>} />
          <Route path="paralax2" element={<Parallax2/>} />
          <Route path="paralax3" element={<Parallax3/>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}