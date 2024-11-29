import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Section from "../components/Section";
import Layout from "./Layout";
import BuyBox from "../components/BuyBox";
import Gallery from "../components/Gallery";

const ProductViewPage = () => {

    const products = [
        {
            id: "1",
            name: "K-Swiss V8 - Masculino",
            category: "Tênis",
            price: "200",
            priceDiscount: "100",
            image: "assets/kswisv8.svg"
        },
        {
            id: "2",
            name: "K-Swiss V8 - Masculino",
            category: "Tênis",
            price: "200",
            priceDiscount: "100",
            image: "assets/kswisv8.svg"
        },
        {
            id: "3",
            name: "K-Swiss V8 - Masculino",
            category: "Tênis",
            price: "200",
            priceDiscount: "100",
            image: "assets/kswisv8.svg"
        },
        {
            id: "4",
            name: "K-Swiss V8 - Masculino",
            category: "Tênis",
            price: "200",
            priceDiscount: "100",
            image: "assets/kswisv8.svg"
        },
    ]

    return (
        <Layout>
            <section className="bg-[#f9f8fe] w-full">

                <div className="pt-10 flex flex-col px-[100px] max-w-[1440px] mx-auto">
                    <div className="flex gap-2 font-medium text-[14px] leading-[22px] tracking-[0.75px] text-dark-gray-2">
                        <Link to="/"><span className="font-bold">Home</span></Link><span>/</span>
                        <Link to="/produtos">Produtos</Link><span>/</span>
                        <Link to="/tenis">Tênis</Link><span>/</span>
                        <Link to="/tenis/nike">Nike</Link><span>/</span>
                        <span>Tênis Nike Revolution 6 Next Nature Masculino</span>
                    </div>


                    <div className="flex py-6 justify-between">
                        <Gallery
                            radius="4px"
                            showThumbs={true}
                            images={[
                                { src: "/assets/sneaker.svg" },
                                { src: "/assets/sneaker.svg" },
                                { src: "/assets/sneaker.svg" },
                                { src: "/assets/sneaker.svg" },
                                { src: "/assets/sneaker.svg" }
                            ]}
                        />
                        <BuyBox
                            name={"Tênis Nike Revolution 6 Next Nature Masculino"}
                            reference={"Casual | Nike | REF:38416711"}
                            stars={"4.7"}
                            rating={"(90 avaliações)"}
                            priceDiscount={"219"}
                            price={"219,00"}
                            descriptionTitle={"Descrição do produto"}
                            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."}
                        />
                    </div>

                </div>
                <Section
                    title="Produtos Relacionados"
                    titleAlign="left"
                    link={{ text: "Ver todos", path: "/produtos" }}>
                    <div className="flex gap-[24px] mb-10">
                        {products.map((product) => (
                            <ProductCard
                                key={product.id}
                                image={product.image}
                                name={product.name}
                                category={product.category}
                                price={product.price}
                                priceDiscount={product.priceDiscount}
                            />
                        ))}
                    </div>
                </Section>
            </section>
        </Layout>
    );
}

export default ProductViewPage;