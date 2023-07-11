import { FC } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Cart from "../components/Cart";
import NotFound from "../components/NotFound";

export const Router: FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
