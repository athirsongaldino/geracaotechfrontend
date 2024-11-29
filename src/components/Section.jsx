import { Link } from "react-router-dom";

const Section = ({ title, titleAlign = "left", children, link }) => {
    return (
        <section className="py-6 bg-[#f9f8fe] w-full">
            <div className="max-w-[1440px] mx-auto px-[100px]">
                <div className={`flex items-center justify-between ${titleAlign === "center" ? "flex-col" : "flex-row"}`}>
                    <h2 className="text-[24px] text-dark-gray-2 leading-[38px] tracking-[0.75px] font-bold pb-4">
                        {title}
                    </h2>
                    {link && (
                        <Link to={link.path} className=" text-primary text-[18px] leading-[34px] font-normal flex justify-center ">
                            {link.text}
                            <img src="/assets/setalink.svg" alt="" className="w-[24px] ml-[10px]" />
                        </Link>
                    )}
                </div>
                <div className="">
                    {children}
                </div>
            </div>
        </section>
    );
}

export default Section;