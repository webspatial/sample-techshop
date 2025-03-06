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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Our Products</h1>

      <div className="flex flex-col md:flex-row justify-between mb-8">
        {/* 搜索框 */}
        <div className="mb-4 md:mb-0 w-full md:w-1/3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
            <svg
              className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* 分类过滤器 */}
        <div className="w-full md:w-auto">
          <select
            className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}>
            <option value="">All Categories</option>
            {categories.map(
              (category, index) =>
                category !== "All" && (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ),
            )}
          </select>
        </div>
      </div>

      {/* 商品网格 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-xl text-gray-600">
              No products found matching your criteria.
            </p>
            <button
              className="mt-4 btn-primary"
              onClick={() => {
                setSelectedCategory("");
                setSearchTerm("");
              }}>
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
