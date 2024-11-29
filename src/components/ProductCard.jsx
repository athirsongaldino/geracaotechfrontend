const ProductCard = ({ image, category, name, price, priceDiscount }) => {
  return (
    <>
      <div className="flex flex-col">
        <div>
          <img src={`/${image}`} alt={name} className="shadow-md bg-white" />
        </div>
        <div className="w-[35px] h-[24px]">
          <span className="text-[12px] font-bold text-light-gray leading-[24px] tracking-[0.75px]">{category}</span>
        </div>
        <div className="w-[283px] h-[38px]">
          <span className="text-[24px] leading-[38px] font-normal text-dark-gray-2 tracking-[0.75px]">{name}</span>
        </div>

        <div className="w-[140px] h-[38px]">
          {priceDiscount ? (
            <>
              <span className="text-[24px] font-normal text-light-gray leading-[38px] tracking-[0.75px] line-through mr-2">
                ${price}
              </span>
              <span className="text-[24px] font-bold text-dark-gray leading-[38px] tracking-[0.75px]">
                ${priceDiscount}
              </span>
            </>
          ) : (
            <span className="text-[24px] font-bold text-dark-gray leading-[38px] tracking-[0.75px]">
              ${price}
            </span>
          )}
        </div>
      </div>
    </>
  );
}

export default ProductCard;