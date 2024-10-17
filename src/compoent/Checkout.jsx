import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Productdetails from "./Productdetails";
import { INDIAN_CURRENCY } from "../utils/constants";
import { removeFromCart } from "../redux/CartSlice";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"; // Import skeleton CSS

const Checkout = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  const itemnumber = useSelector((state) => state.cart.productsNumber);
  const subTotal = useSelector((state) =>
    state.cart.products.reduce(
      (subTotal, product) => subTotal + product.price * product.quantity,
      0
    )
  );

  // Loading state to simulate skeleton
  const [loading, setLoading] = useState(true);

  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2 seconds for demo
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen bg-amazonclone-background">
      <div className="min-w-[1000px] max-w-[1500px] m-auto pt-8">
        <div className="grid grid-cols-8 gap-10">
          {/* Products */}
          <div className="col-span-6 bg-white">
            <div className="text-2xl xl:3xl m-4">Shopping Cart</div>
            {loading
              ? Array(3)
                  .fill()
                  .map((_, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-12 divide-y divide-gray-400 mb-4"
                    >
                      <div className="col-span-2">
                        <Skeleton height={120} width={120} />
                      </div>
                      <div className="col-span-8">
                        <Skeleton height={20} width="80%" />
                        <Skeleton height={15} width="40%" />
                        <Skeleton height={20} width="30%" />
                      </div>
                      <div className="col-span-2 text-right">
                        <Skeleton height={30} width={60} />
                      </div>
                    </div>
                  ))
              : products.map((product) => (
                  <div key={product.id}>
                    <div className="grid grid-cols-12 divide-y divide-gray-400 mr-4">
                      <div className="col-span-10 grid grid-cols-8 divide-y divide-gray-400">
                        <div className="col-span-2">
                          <Link to={`/Productpage/${product.id}`}>
                            <img
                              className="p-4 m-auto"
                              src={product.image_small}
                              alt={product.title}
                            />
                          </Link>
                        </div>
                        <div className="col-span-6">
                          <div className="font-medium text-black mt-2">
                            <Link to={`/Productpage/${product.id}`}>
                              <Productdetails
                                product={product}
                                ratings={false}
                              />
                            </Link>
                          </div>
                          <div>
                            <button
                              className="text-sm xl:text-base font-semibold rounded text-blue-500 mt-2 mb-1"
                              onClick={() =>
                                dispatch(removeFromCart(product.id))
                              }
                            >
                              Delete
                            </button>
                          </div>
                          <div className="grid grid-cols-3 w-20 text-center">
                            <div className="text-xl xl:text-2xl bg-gray-400 rounded">
                              -
                            </div>
                            <div className="text-lg xl:text-xl bg-gray-200">
                              {product.quantity}
                            </div>
                            <div className="text-xl xl:text-2xl bg-gray-400 rounded">
                              +
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-2">
                        <div className="text-xl xl:text-xl mt-2 mr-4 font-semibold">
                          {INDIAN_CURRENCY.format(product.price)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            <div className="text-xl xl:text-xl text-right mb-4 mr-4">
              {loading ? (
                <Skeleton height={25} width="50%" />
              ) : (
                <>
                  Subtotal ({itemnumber} items):{" "}
                  <span className="font-semibold">
                    {INDIAN_CURRENCY.format(subTotal)}{" "}
                  </span>
                </>
              )}
            </div>
          </div>
          {/* Checkout */}
          <div className="col-span-2 bg-white rounded h-[250px] p-7">
            {loading ? (
              <>
                <Skeleton height={25} width="80%" />
                <Skeleton height={35} width="100%" />
              </>
            ) : (
              <>
                <div className="text-xs xl:text-sm text-green-900 mb-2">
                  Your Order Qualifies{" "}
                  <span className="font-bold">FREE DELIVERY</span>. Delivery
                  Details
                </div>
                <div className="text-base lg:text-xl mb-4">
                  Subtotal ({itemnumber} items):{" "}
                  <span className="font-semibold">
                    {INDIAN_CURRENCY.format(subTotal)}{" "}
                  </span>
                </div>
                <button className="btn">Proceed To Checkout</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
