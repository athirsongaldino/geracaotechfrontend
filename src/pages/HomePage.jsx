import { Link } from "react-router-dom";
import ProductListing from "../components/ProductListing";
import Section from "../components/Section";
import Layout from "./Layout";
import { useEffect, useState } from "react";

const HomePage = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const carouselData = [
        {
            id: 1,
            title: "Queima de estoque Nike 🔥",
            description: "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",
            image: "/assets/nikeair.svg"
        },
        {
            id: 2,
            title: "Queima de estoque Nike 🔥",
            description: "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",
            image: "/assets/nikeair.svg"
        },
        {
            id: 3,
            title: "Queima de estoque Nike 🔥",
            description: "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",
            image: "/assets/nikeair.svg"
        },
        {
            id: 4,
            title: "Queima de estoque Nike 🔥",
            description: "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",
            image: "/assets/nikeair.svg"
        },

    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselData.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);


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
        {
            id: "5",
            name: "K-Swiss V8 - Masculino",
            category: "Tênis",
            price: "200",
            priceDiscount: "100",
            image: "assets/kswisv8.svg"
        },
        {
            id: "6",
            name: "K-Swiss V8 - Masculino",
            category: "Tênis",
            price: "200",
            priceDiscount: "100",
            image: "assets/kswisv8.svg"
        },
        {
            id: "7",
            name: "K-Swiss V8 - Masculino",
            category: "Tênis",
            price: "200",
            priceDiscount: "100",
            image: "assets/kswisv8.svg"
        },
        {
            id: "8",
            name: "K-Swiss V8 - Masculino",
            category: "Tênis",
            price: "200",
            priceDiscount: "100",
            image: "assets/kswisv8.svg"
        },


    ]

    return (
        <Layout>


            <section className="relative overflow-hidden w-full bg-light-gray-3">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {carouselData.map((slide, index) => (
                        <div key={index} className="flex-shrink-0 w-full">
                            <div className="flex px-[100px] max-w-[1440px] mx-auto">
                                <div className="flex flex-col w-[510px] h-[352px] justify-center mt-24">
                                    <span className="font-bold text-[16px] leading-[24px] tracking-[0.75px] mb-4 text-warning">
                                        Melhores ofertas personalizadas
                                    </span>
                                    <h2 className="w-[510px]  font-extrabold text-[64px] leading-[66px] tracking-[1px] mb-4 text-dark-gray">
                                        {slide.title}
                                    </h2>
                                    <p className="w-[495px] h-[68px] text-dark-gray-2 font-normal text-[18px] leading-[34px] tracking-[0.75px] mb-4">
                                        {slide.description}
                                    </p>
                                    <Link to={`/produtos/${slide.id}`}>
                                        <button className="w-[220px] h-[48px] text-light-gray-3 rounded-[8px] bg-primary font-bold text-[16px] leading-[24px] tracking-[0.75px]">Ver Ofertas</button>
                                    </Link>
                                </div>

                                <div className="">
                                    <img
                                        src={slide.image}
                                        alt={slide.title}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="absolute bottom-[40px] left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {carouselData.map((_, index) => (
                        <button
                            key={index}
                            className={`w-[12px] h-[12px] rounded-full transition-colors duration-300 ${index === currentSlide ? 'bg-primary' : 'bg-light-gray-2'}`}
                            onClick={() => setCurrentSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </section>


            <Section
                title="Coleções em destaque"
            >

                <div className="flex justify-center gap-6">

                    <div>
                        <img src="assets/supreme.png" alt="" />
                        <Link to={"/produtos"}><button className="bottom-[80px] relative left-[30px] text-primary text-[16px] font-bold leading-[24px] tracking-[0.75px] bg-light-gray-3 w-[153px] h-[48px] rounded-lg hover:bg-light-gray-2 transition-all">Comprar</button></Link>
                    </div>

                    <div>
                        <img src="assets/adidas.svg" alt="" />
                        <Link to={"/produtos"}><button className="bottom-[80px] relative left-[30px] text-primary text-[16px] font-bold leading-[24px] tracking-[0.75px] bg-light-gray-3 w-[153px] h-[48px] rounded-lg hover:bg-light-gray-2 transition-all">Comprar</button></Link>
                    </div>
                    <div>
                        <img src="assets/beatsbass.svg" alt="" />
                        <Link to={"/produtos"}><button className="bottom-[80px] relative left-[30px] text-primary text-[16px] font-bold leading-[24px] tracking-[0.75px] bg-light-gray-3 w-[153px] h-[48px] rounded-lg hover:bg-light-gray-2 transition-all">Comprar</button></Link>
                    </div>
                </div>

            </Section>

            <Section
                title="Coleções em destaque"
                titleAlign="center">
                <div className="flex justify-center gap-10">
                    <div className="flex flex-col mt-4">
                        <div className="bg-white rounded-[50%] drop-shadow p-[20px] grayscale transition duration-200 ease-in-out hover:grayscale-0">
                            <Link to={"/produtos"}><img src="assets/camisetas.svg" alt="Camisetas" /></Link>
                        </div>
                        <span className="flex justify-center text-[14px] font-bold leading-[22px] tracking-[0.75] mt-4">Camisetas</span>
                    </div>
                    <div className="flex flex-col mt-4">
                        <div className="bg-white rounded-[50%] drop-shadow p-[20px] grayscale transition duration-200 ease-in-out hover:grayscale-0">
                            <Link to={"/produtos"}><img src="assets/calcas.svg" alt="Calças" /></Link>
                        </div>
                        <span className="flex justify-center text-[14px] font-bold leading-[22px] tracking-[0.75] mt-4">Calças</span>
                    </div>
                    <div className="flex flex-col mt-4">
                        <div className="bg-white rounded-[50%] drop-shadow p-[20px] grayscale transition duration-200 ease-in-out hover:grayscale-0">
                            <Link to={"/produtos"}><img src="assets/bones.svg" alt="" /></Link>
                        </div>
                        <span className="flex justify-center text-[14px] font-bold leading-[22px] tracking-[0.75] mt-4">Bonés</span>
                    </div>
                    <div className="flex flex-col mt-4">
                        <div className="bg-white rounded-[50%] drop-shadow p-[20px] grayscale transition duration-200 ease-in-outh hover:grayscale-0">
                            <Link to={"/produtos"}> <img src="assets/headphones.svg" alt="" /></Link>
                        </div>
                        <span className="flex justify-center text-[14px] font-bold leading-[22px] tracking-[0.75] mt-4">Headphones</span>
                    </div>
                    <div className="flex flex-col mt-4">
                        <div className="bg-white rounded-[50%] drop-shadow p-[20px] grayscale transition duration-200 ease-in-out hover:grayscale-0">
                            <Link to={"/produtos"}><img src="assets/tenis.svg" alt="" /></Link>
                        </div>
                        <span className="flex justify-center text-[14px] font-bold leading-[22px] tracking-[0.75] mt-4">Tênis</span>
                    </div>
                </div>
            </Section>

            <Section
                title="Produtos em alta"
                titleAlign="left"
                link={{ text: "Ver mais", path: "/produtos" }}>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-[24px]">
                    <ProductListing products={products} />
                </div>
            </Section>

            <section className="w-full bg-white py-6">
                <div className="flex justify-between cols-2 px-[100px] items-center mt-[100px] max-w-[1440px] mx-auto">
                    <div>
                        <img src="assets/airjordan.svg" alt="" />
                    </div>
                    <div className="flex flex-col gap-4 w-[589px] h-[341px]">

                        <span className="text-[14px] leading-[22px] tracking-[0.75px] font-bold text-primary">Oferta especial</span>

                        <h2 className=" w-[514px] text-[48px] leading-[50px] tracking-[1px] font-bold text-dark-gray-2">Air Jordan edição de colecionador</h2>

                        <span className="w-[556px] h-[112px] text-[16px] leading-[28px] tracking-[0.75px] font-normal text-dark-gray-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</span>

                        <Link to={"/produtos"}>
                            <button className="w-[200px] h-[40px] text-light-gray-3 rounded-lg bg-primary font-bold text-[16px] leading-[24px] tracking-[0.75px]">Ver Ofertas</button>
                        </Link>

                    </div>

                </div>

            </section>

        </Layout>
    );
}

export default HomePage;