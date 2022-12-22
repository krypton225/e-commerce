import { useSetRecoilState } from "recoil";
import { cartAtom } from "../atoms/cartAtom";

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { AiOutlineShoppingCart } from "react-icons/ai";

import { LinkDetails } from "../components";

const Product = ({ product = {}, list = false }) => {
    const setArr = useSetRecoilState(cartAtom);

    const addNewItem = () => setArr((prev) => [...prev, product])

    return (
        <div className="min-[100px]:w-[90%] max-[639px]:w-[90%] min-[640px]:w-[90%] max-[767px]:w-[90%] md:w-full h-full relative mx-auto py-6 px-4 rounded-2xl text-center text-white bg-dark-1 overflow-hidden transition-all hover:bg-[#36393e]" >
            <div className="w-[55%] h-auto mx-auto mb-8">
                <LazyLoadImage src={product.productImage.imagePath} alt={product.productImage.imageAltText}
                    className="w-full h-full object-cover" draggable="false" effect={"blur"} />
            </div>

            <div className="flex justify-between items-center text-xl">
                <p>{product.productTitle}</p>
                <p>{product.productPrice}</p>
            </div>

            <div className="my-7 line-divider"></div>

            <p className="text-center text-sm tracking-wide">{product.productDescription}</p>

            <div className="flex justify-between items-center">
                <LinkDetails mainProduct={product} />
                {list ? "" :
                    <button to={`details/${product}`} type="button" className="custom-btn bg-custom-blue" onClick={addNewItem}>
                        <AiOutlineShoppingCart size={24} />
                    </button>
                }
            </div>
        </div >
    )
}

export default Product;