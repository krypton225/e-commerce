import { useEffect } from "react";

import { Link } from "react-router-dom";

import { AiOutlineArrowRight } from "react-icons/ai";

import { useRecoilState } from "recoil";
import { cartAtom } from "../atoms/cartAtom";

import { SectionTitle, Product } from "../components";

const ListCart = () => {
    const [arr] = useRecoilState(cartAtom);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="section-padding relative">
            <Link to={"/"} className="custom-btn w-fit bg-custom-blue border-0 capitalize fixed right-8 bottom-24 z-[999999999]">
                <AiOutlineArrowRight />
            </Link>

            <SectionTitle innerText="list of cart" styleAdditions="animate-top-bottom" />

            <div className="container grid min[400px]:grid-cols-1 max-[639px]:grid-cols-1 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {arr.map((el) => <Product key={el.id} product={el} list={true} />)}
            </div>
        </section>
    )
}

export default ListCart;