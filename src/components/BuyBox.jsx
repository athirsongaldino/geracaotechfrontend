import React from "react";
import ProductOptions from "./ProductOptions";

const BuyBox = ({ name, reference, stars, rating, price, priceDiscount, descriptionTitle, description, children }) => {
  return (
    <>
      <div>
        <h3 className="w-[440px] h-[72px] font-bold text-[32px] leading-[36px] tracking-[1px] text-dark-gray mt-4 mb-4">{name}</h3>

        <p className="font-medium text-[12px] leading-[18px] tracking-[0.5px] text-dark-gray-3 mb-4">{reference}</p>

        <div className="flex flex-row gap-4 mb-4 items-center">
          <img src="/assets/stars.svg" alt="" />
          <div className="w-[63px] h-[23px] py-[6px] px-[10px] rounded-[4px] bg-warning flex items-center justify-center">
            <p className="flex items-center text-[14px] font-black leading-[24px] tracking-[0.25px] text-white">
              {stars}
              <img src="/assets/star.svg" alt="Estrela" className="h-[12px] w-[12px] ml-1" />
            </p>
          </div>
          <span className="text-[14px] leading-[22px] tracking-[0.25px] font-medium text-light-gray">{rating}</span>
        </div>

        <div className="mb-4">
          {priceDiscount ? (
            <>
              <span className="text-[16px] leading-[28px] tracking-[0.75px] font-normal text-dark-gray-2">R$</span>
              <span className="font-bold text-[32px] leading-[36px] tracking-[1px] text-dark-gray-2">{priceDiscount}</span>
              <span className="font-bold text-[16px] leading-[24px] tracking-[0.75px] text-dark-gray-2">,00</span>
              <span className="line-through font-normal text-[16px] leading-[28px] tracking-[0.75px] text-light-gray-2 ml-2">{price}</span>
            </>
          ) : (
            <span>R${price}</span>
          )}
        </div>

        <p className="font-bold text-[14px] leading-[22px] tracking-[0.75] text-light-gray mb-2">{descriptionTitle}</p>
        <p className="font-medium text-[14px] leading-[22px] tracking-[0.25px] text-dark-gray-2 w-[440px] mb-4">{description}</p>
        {children}

        <div className="mb-4">
          <h3 className="text-[14px] leading-[27px] tracking-[0.75px] font-bold text-light-gray">Tamanho</h3>
          <ProductOptions
            options={["39", "41", "42", "43"]}
            radius="4px"
            shape="square"
            type="text"
          />
        </div>
        <div className="mb-4">
          <h3 className="text-[14px] leading-[27px] tracking-[0.75px] font-bold text-light-gray">Cor</h3>
          <ProductOptions
            options={["#6FEEFF", "#FF6969", "#5E5E5E", "#6D70B7"]}
            shape="circle"
            type="color"
          />
        </div>


        <button className="w-[220px] h-[48px] rounded-lg bg-warning text-light-gray-3 text-[16px] font-bold leading-[24px] tracking-[0.75px]">Comprar</button>
      </div>
    </>
  );
};

export default BuyBox;