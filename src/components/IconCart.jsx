import { AiOutlineShoppingCart } from "react-icons/ai";

const IconCart = () => (
    <div className="relative before:content-[''] before:absolute before:-top-1 before:-right-2 before:w-1 before:h-1 before:p-3 before:rounded-full before:bg-custom-blue before:flex before:justify-center before:items-center before:text-sm before:font-semibold">
        <a href="/" className={`inline-block py-2 px-4 text-2xl md:text-3xl`}>
            <AiOutlineShoppingCart />
        </a>
    </div>
);

export default IconCart;