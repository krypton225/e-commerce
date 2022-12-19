import { Routes, Route } from "react-router-dom";

import { Navbar } from "./components";

import { Home, Cart, Details } from "./routes";

const App = () => {
  return (
    <div className="bg-dark-3">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="details/:id" element={<Details />} />
      </Routes>
    </div>
  )
};

export default App;