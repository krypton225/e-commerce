import AllRoutes from "./data/routes";

import { Routes, Route } from "react-router-dom";

import { GoToTop, Navbar } from "./components";

const App = () => {
  return (
    <div className="relative bg-dark-3">
      <Navbar />
      <GoToTop />

      <Routes>
        {
          AllRoutes.map(({ id, path, element }) => (<Route key={id} path={path} element={element} />))
        }
      </Routes>
    </div>
  )
};

export default App;