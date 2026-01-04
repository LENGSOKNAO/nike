import React from "react";
import { DataProducts } from "../../data/DataProduct";
import { Link } from "react-router-dom"; // Note: usually it's react-router-dom

const ListProduct = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Our Product Collection
      </h1>

      {DataProducts.map((element, index) => (
        <div
          key={index}
          className="mb-16 bg-white rounded-xl shadow-lg overflow-hidden"
        >
          {/* Section Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-6">
            <h2 className="text-3xl font-bold">{element.title}</h2>
            <p className="text-lg opacity-90 mt-2">Brand: {element.brand}</p>
          </div>

          {/* Categories */}
          <div className="px-8 py-4 bg-gray-50">
            <div className="flex flex-wrap gap-2">
              {element.category.map((categoryItem, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium"
                >
                  {categoryItem}
                </span>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className="p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {element.product.map((product) => (
                <Link
                  key={product.id}
                  to={`/testing/detail/${product.id}`}
                  className="group block transform transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                    <div className="aspect-w-1 aspect-h-1 bg-gray-100">
                      <img
                        src={product.img}
                        alt={product.color}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    <div className="p-5 space-y-3">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {product.color}
                      </h3>

                      <div className="flex items-center justify-between">
                        <div>
                          {product.discount ? (
                            <>
                              <span className="text-2xl font-bold text-indigo-600">
                                ${product.discount}
                              </span>
                              <span className="text-lg text-gray-500 line-through ml-3">
                                ${product.price}
                              </span>
                            </>
                          ) : (
                            <span className="text-2xl font-bold text-indigo-600">
                              ${product.price}
                            </span>
                          )}
                        </div>
                      </div>

                      <p className="text-sm text-gray-500">
                        Code: <span className="font-mono">{product.code}</span>
                      </p>

                      <button className="w-full mt-4 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListProduct;
