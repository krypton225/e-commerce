import { Logo, IconCart } from "./index";

const Navbar = () => {
    return (
        <header className="w-screen py-[1.2rem] border-b-[1px] fixed top-0 left-0 bg-dark-3 text-white">
            <nav className={`container flex items-center justify-between`}>
                <Logo />
                <IconCart />
            </nav>
        </header>
    )
}

export default Navbar;