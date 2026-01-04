import React from "react";
import { useParams, Link } from "react-router-dom";
import { DataProducts } from "../../data/DataProduct";

const ProductDetail = () => {
  const { id } = useParams();
  const productId = Number(id);

  // Find the parent category/group that contains this product
  const parentCategory = DataProducts.find((data) =>
    data.product.some((p) => p.id === productId)
  );

  // If not found, show a not found message
  if (!parentCategory) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Product Not Found
          </h1>
          <Link
            to="/"
            className="text-indigo-600 hover:text-indigo-800 font-medium underline"
          >
            ← Back to Products
          </Link>
        </div>
      </div>
    );
  }

  // Find the specific product
  const product = parentCategory.product.find((p) => p.id === productId);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-sm mb-8">
          <Link to="/" className="text-indigo-600 hover:text-indigo-800">
            Home
          </Link>
          <span className="mx-2 text-gray-500">/</span>
          <span className="text-gray-600">{parentCategory.title}</span>
        </nav>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 lg:p-12">
            {/* Product Image */}
            <div className="flex justify-center items-start">
              <div className="relative group">
                <img
                  src={product.img}
                  alt={product.color}
                  className="w-full max-w-lg h-auto object-cover rounded-xl shadow-lg 
                           group-hover:scale-105 transition-transform duration-500"
                />
                {product.discount && (
                  <span className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-md">
                    SALE
                  </span>
                )}
              </div>
            </div>

            {/* Product Details */}
            <div className="flex flex-col justify-center space-y-6">
              {/* Category & Brand */}
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                  {parentCategory.title}
                </h1>
                <p className="text-xl text-indigo-600 font-medium mt-2">
                  {parentCategory.brand}
                </p>
              </div>

              {/* Color */}
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Color</h3>
                <p className="text-2xl font-medium text-gray-900 capitalize">
                  {product.color}
                </p>
              </div>

              {/* Price */}
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-700">Price</h3>
                <div className="flex items-baseline gap-4">
                  {product.discount ? (
                    <>
                      <span className="text-4xl font-bold text-red-600">
                        ${product.discount}
                      </span>
                      <span className="text-2xl text-gray-500 line-through">
                        ${product.price}
                      </span>
                      <span className="text-lg font-medium text-green-600">
                        Save ${product.price - product.discount}
                      </span>
                    </>
                  ) : (
                    <span className="text-4xl font-bold text-indigo-600">
                      ${product.price}
                    </span>
                  )}
                </div>
              </div>

              {/* Product Code */}
              <div>
                <h3 className="text-lg font-semibold text-gray-700">
                  Product Code
                </h3>
                <p className="text-lg font-mono bg-gray-100 px-4 py-2 rounded-lg inline-block mt-1">
                  {product.code}
                </p>
              </div>

              {/* Categories/Tags */}
              {parentCategory.category.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-3">
                    Categories
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {parentCategory.category.map((cat, idx) => (
                      <span
                        key={idx}
                        className="px-5 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-4 pt-6">
                <button className="flex-1 bg-indigo-600 text-white font-bold py-4 px-8 rounded-xl hover:bg-indigo-700 transition-colors shadow-lg">
                  Add to Cart
                </button>
                <button className="px-8 py-4 border-2 border-gray-300 rounded-xl hover:border-indigo-600 hover:bg-indigo-50 transition-colors font-medium">
                  ♡ Wishlist
                </button>
              </div>

              {/* Back Link */}
              <Link
                to="/"
                className="text-indigo-600 hover:text-indigo-800 font-medium text-center mt-8"
              >
                ← Back to All Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
