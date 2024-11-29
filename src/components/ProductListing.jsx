import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

const ProductListing = ({ products }) => {

    return (
        <>
            {products.map((product) => (
                <Link to={`/produtos/${product.id}`}>
                    <ProductCard
                        key={product.id}
                        image={product.image}
                        name={product.name}
                        category={product.category}
                        price={product.price}
                        priceDiscount={product.priceDiscount}
                    />
                </Link>
            ))}
        </>
    );
}

export default ProductListing;