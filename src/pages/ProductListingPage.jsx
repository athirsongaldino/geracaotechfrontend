import FilterGroup from "../components/FilterGroup";
import ProductListing from "../components/ProductListing";
import Layout from "./Layout";

const ProductListingPage = () => {

    const marcas = [
        { text: "Adidas", value: "adidas" },
        { text: "Balenciaga", value: "balenciaga" },
        { text: "K-Swiss", value: "k-swiss" },
        { text: "Nike", value: "nike" },
        { text: "Puma", value: "puma" }
    ];

    const categorias = [
        { text: "Esporte e lazer" },
        { text: "Casual" },
        { text: "Utilitário" },
        { text: "Corrida" }
    ]

    const estado = [
        { text: "Novo", value: "novo" },
        { text: "Usado", value: "usado" }
    ];

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
        {
            id: "9",
            name: "K-Swiss V8 - Masculino",
            category: "Tênis",
            price: "200",
            priceDiscount: "100",
            image: "assets/kswisv8.svg"
        },
        {
            id: "10",
            name: "K-Swiss V8 - Masculino",
            category: "Tênis",
            price: "200",
            priceDiscount: "100",
            image: "assets/kswisv8.svg"
        },
        {
            id: "11",
            name: "K-Swiss V8 - Masculino",
            category: "Tênis",
            price: "200",
            priceDiscount: "100",
            image: "assets/kswisv8.svg"
        },
        {
            id: "12",
            name: "K-Swiss V8 - Masculino",
            category: "Tênis",
            price: "200",
            priceDiscount: "100",
            image: "assets/kswisv8.svg"
        },
        {
            id: "13",
            name: "K-Swiss V8 - Masculino",
            category: "Tênis",
            price: "200",
            priceDiscount: "100",
            image: "assets/kswisv8.svg"
        },
        {
            id: "14",
            name: "K-Swiss V8 - Masculino",
            category: "Tênis",
            price: "200",
            priceDiscount: "100",
            image: "assets/kswisv8.svg"
        },
        {
            id: "15",
            name: "K-Swiss V8 - Masculino",
            category: "Tênis",
            price: "200",
            priceDiscount: "100",
            image: "assets/kswisv8.svg"
        }
    ]


    return (

        <Layout>
            <section className="bg-[#f9f8fe] w-full">

                <div className="py-6 px-[100px] max-w-[1440px] w-full mx-auto">
                    <div className="flex justify-between items-center">
                        <p className="text-dark-gray-2 font-bold text-[16px] leading-[24px] tracking-[0.75px]">Resultados para “Tênis” - <span className="font-normal text-[16px] leading-[28px] tracking-[0.75px]">389 produtos</span></p>
                        <div className="p-3 w-full sm:w-auto rounded border-solid border-dark-gray-2 border-[1px]">
                            <div class="flex">
                                <spam class="font-bold text-[16px] leading-[28px] tracking-[0.75px] text-dark-gray-2">Ordenar por: </spam><spam class="font-normal text-[16px] leading-[28px] tracking-[0.75px] ml-2">mais revelantes</spam>
                                <button><img src="assets/setainput.svg" className="ml-10" /></button>
                            </div>
                        </div>
                    </div>
                    <div className="flex py-6">
                        <div className="w-[308px] h-[560px] bg-white p-[30px]">
                            <h2 className="text-16 text-dark-gray-2 font-semibold mb-2">Filtrar por</h2>
                            <hr className="border-t border-light-gray-2 mb-4 w-[208px]" />

                            <FilterGroup
                                title="Marcas"
                                inputType="checkbox"
                                options={marcas}
                            />

                            <FilterGroup
                                title="Categorias"
                                inputType="checkbox"
                                options={categorias}
                            />

                            <FilterGroup
                                title="Estado"
                                inputType="radio"
                                options={estado}
                            />
                        </div>
                        <div className="ml-12">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px]">
                                <ProductListing products={products} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </Layout>

    );
}

export default ProductListingPage;