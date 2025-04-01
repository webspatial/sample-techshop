import { FC } from "react";
import { Product } from "../types";
import { Link } from "react-router-dom";
import { initScene } from "@webspatial/react-sdk";

interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <div
      enable-xr
      debugName={"card" + product.id}
      className="product-card h-full flex flex-col w-full"
    >
      <div className="relative overflow-hidden h-40 sm:h-48">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-110"
          onClick={e => {
            e.preventDefault();
            initScene("detailScene", prevConfig => {
              return {
                ...prevConfig,
                defaultSize: {
                  width: 1500,
                  height: 1100,
                },
              };
            });
            window.open(
              `${__XR_ENV_BASE__}/product/${product.id}`,
              "detailScene"
            );
          }}
        />
      </div>
      <div className="product-info flex-grow flex flex-col">
        <h3 className="product-title">{product.name}</h3>
        <div className="flex justify-between items-center mt-2">
          <p enable-xr className="product-price">
            ${product.price.toFixed(2)}
          </p>
          <div className="flex items-center">
            <span className="text-yellow-500 mr-1">★</span>
            <span className="text-sm text-gray-600">{product.rating}</span>
          </div>
        </div>
        <p className="product-description mt-2">{product.description}</p>
        <div className="mt-auto pt-4 flex justify-between items-center">
          <Link
            enable-xr
            debugName={"link-view-details" + product.id}
            style={{
              "--xr-back": 10,
              position: "relative",
            }}
            to={`/product/${product.id}`}
            target="_blank"
            className="btn-primary text-sm sm:text-base px-3 py-1.5 sm:px-4 sm:py-2"
          >
            View Details
          </Link>
          <span className="text-xs sm:text-sm text-gray-600">
            {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
