import { Link } from "react-router-dom";

const Logo = () => (
    <Link to="/" className="inline-block py-2 px-4">
        <h1 className="text-2xl md:text-3xl">My Shop</h1>
    </Link>
);

export default Logo;