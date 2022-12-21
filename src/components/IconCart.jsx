import { useRecoilState } from "recoil";
import { cartAtom } from "../atoms/cartAtom";

import { Link } from "react-router-dom";

import { AiOutlineShoppingCart } from "react-icons/ai";

const IconCart = () => {
    const [arr] = useRecoilState(cartAtom);

    return (
        <Link to={"list"} className="relative">
            <AiOutlineShoppingCart size={24} />
            <span className="absolute -top-3 -right-6 w-1 h-1 p-3 rounded-full bg-custom-blue flex justify-center items-center text-sm font-semibold">
                {arr.length}
            </span>
        </Link>
    )
}

export default IconCart;