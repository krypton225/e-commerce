import { useState } from "react";
import { Link } from "react-router-dom";

import { BsArrowUpShort } from "react-icons/bs";

const GoToTop = () => {

    const [goToTopButton, setGoToTopButton] = useState(false);

    const goToTop = () => window.scrollTo(0, 0);

    const checkingScroll = () => {
        if (document.body.scrollTo > 10 || document.documentElement.scrollTop > 10) {
            setGoToTopButton(true);
        } else {
            setGoToTopButton(false);
        }
    }

    window.addEventListener("scroll", checkingScroll);

    return (
        <Link href="/" className={`w-12 h-12 fixed bottom-6 flex justify-center items-center rounded-full cursor-pointer bg-custom-blue text-white
        ${goToTopButton ? "right-8 opacity-100 visible" : "right-0 opacity-0 invisible"} z-[999999] transition-all duration-[0.8s]`} onClick={goToTop}>
            {<BsArrowUpShort size={30} />}
        </Link>
    )
}

export default GoToTop;