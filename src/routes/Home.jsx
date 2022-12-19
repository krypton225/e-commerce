import { AiOutlineShoppingCart } from "react-icons/ai";

import { LinkDetails, MainButton } from "../components";

import Products from "../data/products";

const Home = () => {
    return (
        <section className="section-padding">
            <div className="container grid min[400px]:grid-cols-1 max-[639px]:grid-cols-1 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {
                    Products.map(({ id, productTitle, productDescription, productImage: { imageAltText, imagePath }, productPrice }) => (
                        <div key={id} className="min-[100px]:w-[80%] max-[639px]:w-[80%] min-[640px]:w-[90%] max-[767px]:w-[90%] md:w-full h-full relative mx-auto py-6 px-4 rounded-2xl text-center text-white bg-dark-1 overflow-hidden transition-all hover:bg-[#36393e]">
                            <div className="w-[55%] h-auto mx-auto mb-8">
                                <img src={imagePath} alt={imageAltText} className="w-full h-full object-cover" draggable="false" />
                            </div>

                            <div className="flex justify-between items-center text-xl">
                                <p>{productTitle}</p>
                                <p>{productPrice}</p>
                            </div>

                            <div className="my-7 line-divider"></div>

                            <p className="text-center text-sm tracking-wide">{productDescription}</p>

                            <div className="flex justify-between items-center">
                                <LinkDetails productID={id} />
                                <MainButton productID={id} icon={<AiOutlineShoppingCart />} />
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Home;