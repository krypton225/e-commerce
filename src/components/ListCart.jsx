import { useEffect } from "react";

import { useRecoilState } from "recoil";
import { cartAtom } from "../atoms/cartAtom";

import { SectionTitle, Product } from "../components";

const ListCart = () => {
    const [arr] = useRecoilState(cartAtom);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="section-padding">
            <SectionTitle innerText="list of cart" styleAdditions="animate-top-bottom" />

            <div className="container grid min[400px]:grid-cols-1 max-[639px]:grid-cols-1 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {arr.map((el) => <Product key={el.id} product={el} list={true} />)}
            </div>
        </section>
    )
}

export default ListCart;