import { Routes, Route } from "react-router-dom";

import { ErrorPage, GoToTop, ListCart, Navbar } from "./components";

import { Home, Cart, Details } from "./routes";

const App = () => {
  return (
    <div className="relative bg-dark-3">
      <Navbar />
      <GoToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="list" element={<ListCart />} />
        <Route path="details/:id" element={<Details />} />
        <Route path="list/details/:id" element={<Details />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  )
};

export default App;