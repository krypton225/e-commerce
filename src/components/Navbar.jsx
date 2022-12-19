import { Logo, IconCart } from "./index";

const Navbar = () => {
    return (
        <header className="w-screen py-[1.2rem] border-b-[1px] border-dark-1 fixed top-0 left-0 z-[9999] bg-dark-3 text-white">
            <nav className={`container flex items-center justify-between`}>
                <Logo />
                <IconCart />
            </nav>
        </header>
    )
}

export default Navbar;