import { Link } from "react-router-dom";

const LinkDetails = ({ productID = "" }) => (
    <Link to={`details/${productID}`} type="button" className="custom-btn capitalize">
        show
    </Link>
);

export default LinkDetails;