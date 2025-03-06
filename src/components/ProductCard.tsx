import { FC } from "react";
import { Product } from "../types";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3 className="product-title">{product.name}</h3>
        <div className="flex justify-between items-center mt-2">
          <p className="product-price">${product.price.toFixed(2)}</p>
          <div className="flex items-center">
            <span className="text-yellow-500 mr-1">★</span>
            <span className="text-sm text-gray-600">{product.rating}</span>
          </div>
        </div>
        <p className="product-description">{product.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <Link to={`/product/${product.id}`} className="btn-primary">
            View Details
          </Link>
          <span className="text-sm text-gray-600">
            {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
