import { FC, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Product } from "../types";
import productsData from "../data/products.json";
import ImageViewer from "../components/ImageViewer";

const ProductDetail: FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [isImageViewerOpen, setIsImageViewerOpen] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<string>("");
  const [currentImageAlt, setCurrentImageAlt] = useState<string>("");

  useEffect(() => {
    // 在实际应用中，这里可能会从 API 获取数据
    const productId = parseInt(id || "0");
    const foundProduct =
      (productsData as Product[]).find(p => p.id === productId) || null;
    setProduct(foundProduct);

    if (foundProduct) {
      // 获取相关商品（同类别的其他商品）
      const related = (productsData as Product[])
        .filter(
          p => p.category === foundProduct.category && p.id !== foundProduct.id
        )
        .slice(0, 4);
      setRelatedProducts(related);
    }

    setLoading(false);
  }, [id]);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };

  const incrementQuantity = () => {
    if (product && quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // 打开图片查看器
  const openImageViewer = (imageSrc: string, imageAlt: string) => {
    setCurrentImage(imageSrc);
    setCurrentImageAlt(imageAlt);
    setIsImageViewerOpen(true);
  };

  // 关闭图片查看器
  const closeImageViewer = () => {
    setIsImageViewerOpen(false);
  };

  if (loading) {
    return (
      <div className="py-8 sm:py-16 flex justify-center">
        <div className="animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="py-8 sm:py-16 text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
          Product Not Found
        </h2>
        <p className="text-gray-600 mb-6 sm:mb-8">
          The product you are looking for does not exist or has been removed.
        </p>
        <Link to="/" className="btn-primary">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div
      className={`product-detail ${import.meta.env.XR_ENV !== "avp" ? "py-6 sm:py-8 max-w-7xl mx-auto" : ""}`}
    >
      {/* 面包屑导航 */}
      <div className="text-sm text-gray-500 mb-6 sm:mb-8 overflow-x-auto whitespace-nowrap pb-2">
        <Link to="/" className="hover:text-indigo-600">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link to="/" className="hover:text-indigo-600">
          Products
        </Link>
        <span className="mx-2">/</span>
        <Link to="/" className="hover:text-indigo-600">
          {product.category}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800">{product.name}</span>
      </div>

      <div
        className={`flex flex-col md:flex-row gap-6 sm:gap-8 mb-10 sm:mb-16 ${import.meta.env.XR_ENV !== "avp" ? "max-w-full" : ""}`}
      >
        {/* 商品图片 - 左侧跟随页面宽度变化 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md md:flex-1">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-contain sm:object-cover max-h-[300px] sm:max-h-[400px] md:max-h-[500px] cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => openImageViewer(product.image, product.name)}
          />
        </div>

        {/* 商品信息 - 右侧固定宽度 */}
        <div
          enable-xr
          className={`product-detail-info ${import.meta.env.XR_ENV !== "avp" ? "flex flex-col w-full md:w-auto md:max-w-md lg:max-w-lg" : ""}`}
        >
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">
            {product.name}
          </h1>

          <div className="flex items-center mb-3 sm:mb-4">
            <div className="flex text-yellow-500 mr-2">
              {[...Array(5)].map((_, i) => (
                <span key={i}>
                  {i < Math.floor(product.rating) ? (
                    <span>★</span>
                  ) : i < product.rating ? (
                    <span>⯨</span>
                  ) : (
                    <span className="text-gray-300">★</span>
                  )}
                </span>
              ))}
            </div>
            <span className="text-gray-600">{product.rating} out of 5</span>
          </div>

          <p className="text-2xl sm:text-3xl font-bold text-indigo-600 mb-4 sm:mb-6">
            ${product.price.toFixed(2)}
          </p>

          <div className="border-t border-b border-gray-200 py-4 sm:py-6 mb-4 sm:mb-6">
            <p className="text-gray-700 leading-relaxed mb-4">
              {product.description}
            </p>

            <div className="flex items-center">
              <span className="text-gray-600 mr-2">Category:</span>
              <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">
                {product.category}
              </span>
            </div>
          </div>

          <div className="mb-4 sm:mb-6">
            <p className="text-gray-600 mb-2">
              Availability:
              <span
                className={
                  product.stock > 0
                    ? "text-green-600 ml-2"
                    : "text-red-600 ml-2"
                }
              >
                {product.stock > 0
                  ? `${product.stock} in stock`
                  : "Out of stock"}
              </span>
            </p>

            {product.stock > 0 && (
              <div className="flex items-center mt-4">
                <span className="text-gray-600 mr-4">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button
                    onClick={decrementQuantity}
                    className="px-3 py-1 border-r border-gray-300 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    max={product.stock}
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="w-12 text-center py-1 focus:outline-none bg-white text-gray-800"
                  />
                  <button
                    onClick={incrementQuantity}
                    className="px-3 py-1 border-l border-gray-300 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-3 sm:gap-4">
            <button
              className="btn-primary flex-1"
              disabled={product.stock === 0}
            >
              Add to Cart
            </button>
            <button className="px-3 sm:px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
              <svg
                className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 相关商品 */}
      {relatedProducts.length > 0 && (
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
            Related Products
          </h2>
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 ${import.meta.env.XR_ENV !== "avp" ? "max-w-full" : ""}`}
          >
            {relatedProducts.map(relatedProduct => (
              <div key={relatedProduct.id} className="product-card">
                <div className="relative overflow-hidden">
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="product-image cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() =>
                      openImageViewer(relatedProduct.image, relatedProduct.name)
                    }
                  />
                </div>
                <div className="product-info">
                  <h3 className="product-title">{relatedProduct.name}</h3>
                  <p className="product-price">
                    ${relatedProduct.price.toFixed(2)}
                  </p>
                  <Link
                    to={`/product/${relatedProduct.id}`}
                    className="btn-primary block text-center mt-4"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 图片查看器 */}
      <ImageViewer
        src={currentImage}
        alt={currentImageAlt}
        isOpen={isImageViewerOpen}
        onClose={closeImageViewer}
      />
    </div>
  );
};

export default ProductDetail;
