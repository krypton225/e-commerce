import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { SectionTitle } from "../components";

import Product from "../data/products";

const Details = () => {
    let { id } = useParams();
    let { productTitle, productDeepDesc, productPrice, productImage: { imagePath, imageAltText } } = Product.filter((el) => el.id == id)[0];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="section-padding">
            <div className="container">
                <div className="w-full text-white grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="w-[90%] md:w-[85%] mx-auto py-6 rounded-2xl bg-dark-1">
                        <LazyLoadImage src={imagePath} alt={imageAltText} className="w-full h-full object-cover" draggable="false"
                            effect={"blur"} delayTime={"400"} />
                    </div>

                    <div className="w-full px-6">
                        <div className="w-full flex justify-evenly items-center">
                            <SectionTitle innerText={productTitle} marginBottom={false} styleAdditions="text-start" />
                            <h3 className="py-2 px-4 md:py-3 rounded-2xl flex justify-center items-center text-xl lg:text-3xl text-custom-blue bg-dark-2">
                                {productPrice}
                            </h3>
                        </div>

                        <p className="w-full mt-10 text-lg leading-8">{productDeepDesc}</p>

                        <div className="flex justify-between items-center capitalize">
                            <Link to={"/"} className="custom-btn text-start">return</Link>
                            <button className="custom-btn capitalize text-end bg-custom-blue">add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Details;