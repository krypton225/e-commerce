import { useRecoilState } from "recoil";
import { cartAtom } from "../atoms/cartAtom";

import { Link } from "react-router-dom";

import { AiOutlineShoppingCart } from "react-icons/ai";

import filterArr from "../utils/filterUniqueArr";

const IconCart = () => {
    const [arr] = useRecoilState(cartAtom);

    let myArrAfterFiltered = filterArr(arr);

    return (
        <Link to={"list"} className="relative">
            <AiOutlineShoppingCart size={24} />
            {
                myArrAfterFiltered.length === 0 ? "" :
                    <span className="absolute -top-3 -right-6 w-1 h-1 p-3 rounded-full bg-custom-blue flex justify-center items-center text-sm font-semibold">
                        {myArrAfterFiltered.length}
                    </span>
            }

        </Link>
    )
}

export default IconCart;