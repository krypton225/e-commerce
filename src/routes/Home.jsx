import { SectionTitle, Product } from "../components";

import Products from "../data/products";

const Home = () => {
    return (
        <section className="section-padding">
            <SectionTitle innerText="our products" />

            <div className="container grid min[400px]:grid-cols-1 max-[639px]:grid-cols-1 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {Products.map((product) => (<Product key={product.id} product={product} />))}
            </div>
        </section>
    )
}

export default Home;