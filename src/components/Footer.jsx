import { Link } from "react-router-dom";
import { Logo2 } from "./Logo";

const Footer = () => {
    const informations = [
        {
            title: "Informações",
            items: [
                { text: "Sobre Drip Store", link: "/sobre" },
                { text: "Segurança", link: "/seguranca" },
                { text: "Wishlist", link: "/listadedesejo" },
                { text: "Blog", link: "/blog" },
                { text: "Trabalhe conosco", link: "/trabalheconosco" },
                { text: "Meus Pedidos", link: "/meuspedidos" }
            ]
        },
        {
            title: "Categorias",
            items: [
                { text: "Camisetas", link: "/camisetas" },
                { text: "Calças", link: "/calcas" },
                { text: "Bonés", link: "/bones" },
                { text: "Headphones", link: "/headphones" },
                { text: "Tênis", link: "/tenis" }
            ]
        }
    ];

    return (
        <footer className="py-6 w-full bg-dark-gray">
            <div className="max-w-[1440px] mx-auto px-[100px]">

                <div className="flex justify-between">
                    <div>
                        <Logo2 />
                        <p className="w-[307px] text-white text-[16px] font-normal leading-[26px] pt-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                        </p>
                        <div className="w-[124px] flex justify-between pt-8">
                            <Link to="https://www.facebook.com/digitalcollegebr" target="_blank">
                                <img src="/assets/facebook.svg" alt="Facebook" />
                            </Link>
                            <Link to="https://www.instagram.com/digitalcollegebr/" target="_blank">
                                <img src="/assets/instagram.svg" alt="Instagram" />
                            </Link>
                            <Link to="https://x.com/eaicollegers" target="_blank">
                                <img src="/assets/twitter.svg" alt="Twitter" />
                            </Link>
                        </div>
                    </div>
                    {informations.map((information, index) => (
                        <div key={index} className="flex flex-col gap-4">
                            <h3 className="text-[18px] font-semibold text-white">{information.title}</h3>
                            <nav className="flex flex-col gap-2">
                                {information.items.map((item, itemIndex) => (
                                    <Link
                                        key={itemIndex}
                                        to={item.link}
                                        className="text-[16px] leading-[38px] text-white transition-colors"
                                    >
                                        {item.text}
                                    </Link>
                                ))}
                            </nav>
                        </div>
                    ))}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-[18px] font-semibold text-white">Contato</h3>
                        <section className="flex flex-col gap-2">
                            <p className="w-[231px] text-[16px] leading-[26px] font-normal text-white">Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
                            <p className="text-[16px] leading-[26px] font-normal text-white">(85) 3051-3411</p>
                        </section>
                    </div>
                </div>
                <hr className="opacity-[30%]" />
                <p className="text-white text-[13px] leading-[24px] font-normal text-center mt-[24px]">
                    © 2024 Digital Store</p>
            </div>
        </footer>
    );
}

export default Footer;