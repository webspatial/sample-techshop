import { FC, useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { Product } from "../types";
import productsData from "../data/products.json";

const ProductList: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    // 在实际应用中，这里可能会从 API 获取数据
    setProducts(productsData as Product[]);
  }, []);

  // 获取所有唯一的分类
  const categories = [
    "All",
    ...new Set(products.map(product => product.category)),
  ];

  // 根据分类和搜索词过滤商品
  const filteredProducts = products.filter(product => {
    const matchesCategory =
      selectedCategory === "" ||
      selectedCategory === "All" ||
      product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div enable-xr className="py-8">
      <h1 className="list-title text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8">
        Our Products
      </h1>

      {/* 搜索框 */}
      <div className="mb-6">
        <div className="relative max-w-md">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-gray-800"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <svg
            className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      <div className="list-window flex flex-col md:flex-row gap-6">
        {/* 左侧分类菜单 */}
        <div enable-xr className="list-meun w-full md:w-64 shrink-0">
          <div
            enable-xr
            className="list-meun-bg bg-white rounded-lg shadow-md p-4"
          >
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Categories
            </h2>
            <ul className="space-y-2">
              <li>
                <button
                  enable-xr
                  style={
                    process.env.XR_ENV === "avp"
                      ? selectedCategory === ""
                        ? {
                            "--xr-background-material": "thin",
                          }
                        : {
                            "--xr-background-material": "thick",
                          }
                      : {}
                  }
                  className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                    process.env.XR_ENV === "avp"
                      ? selectedCategory === ""
                        ? "text-gray-100"
                        : "text-gray-900"
                      : selectedCategory === ""
                        ? "bg-indigo-100 text-indigo-700 font-medium"
                        : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => setSelectedCategory("")}
                >
                  All Categories
                </button>
              </li>
              {categories.map(
                (category, index) =>
                  category !== "All" && (
                    <li key={index}>
                      <button
                        enable-xr
                        style={
                          process.env.XR_ENV === "avp"
                            ? selectedCategory === category
                              ? {
                                  "--xr-background-material": "thin",
                                }
                              : {
                                  "--xr-background-material": "thick",
                                }
                            : {}
                        }
                        className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                          process.env.XR_ENV === "avp"
                            ? selectedCategory === category
                              ? "text-gray-100"
                              : "text-gray-900"
                            : selectedCategory === category
                              ? "bg-indigo-100 text-indigo-700 font-medium"
                              : "text-gray-700 hover:bg-gray-100"
                        }`}
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </button>
                    </li>
                  )
              )}
            </ul>
          </div>
        </div>

        {/* 商品网格 */}
        <div className="flex-1">
          <div
            enable-xr-monitor
            className={"auto-fill-grid" + " gap-4 sm:gap-6"}
          >
            {filteredProducts.length > 0 ? (
              filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <div className="col-span-full text-center py-8 sm:py-12">
                <p className="text-lg sm:text-xl text-gray-600">
                  No products found matching your criteria.
                </p>
                <button
                  className="mt-4 btn-primary"
                  onClick={() => {
                    setSelectedCategory("");
                    setSearchTerm("");
                  }}
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
