import { Link } from "react-router-dom";

const LinkDetails = ({ mainProduct = {} }) => (
    <Link to={`details/${mainProduct.id}`} type="button" className="custom-btn capitalize">
        show
    </Link>
);

export default LinkDetails;