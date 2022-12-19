import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
    return (
        <header className="w-screen py-[1.2rem] border-b-[1px] fixed top-0 left-0 bg-dark-3 text-white">
            <nav className={`container flex items-center justify-between`}>
                <a href="/" className="inline-block py-2 px-4">
                    <h1 className="text-2xl md:text-3xl">My Shop</h1>
                </a>

                {/* TODO: ** Hide the pseudo element if there was any value is existed ** */}
                <div className="relative before:content-[''] before:absolute before:-top-1 before:-right-2 before:w-1 before:h-1 before:p-3 before:rounded-full before:bg-custom-blue before:flex before:justify-center before:items-center before:text-sm before:font-semibold">
                    <a href="/" className={`inline-block py-2 px-4 text-2xl md:text-3xl`}>
                        <AiOutlineShoppingCart />
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;