import insertID from "./generateID";

import { Home, Cart, Details, ListCart, ErrorPage } from "../routes/index";

const routes = [
    { path: "/", element: <Home /> },
    { path: "cart", element: <Cart /> },
    { path: "list", element: <ListCart /> },
    { path: "details/:id", element: <Details /> },
    { path: "list/details/:id", element: <Details /> },
    { path: "*", element: <ErrorPage /> },
];

(function () {
    insertID(routes);
})();

export default routes;