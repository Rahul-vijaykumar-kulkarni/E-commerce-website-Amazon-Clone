// src/compoent/Productpage.jsx
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { callApi } from "../utils/CallApi";
import Productdetails from "./Productdetails";
import { INDIAN_CURRENCY } from "../utils/constants";
import { addToCart } from "../redux/CartSlice";
import { useDispatch } from "react-redux";

const Productpage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1); // Default quantity as a number
  const dispatch = useDispatch();

  const getProduct = async () => {
    try {
      const productResults = await callApi("data/products.json");
      setProduct(productResults[id]); // Ensure this index is correct based on your data structure
    } catch (error) {
      console.error("Error fetching product:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  if (loading) return <h1>Loading Product...</h1>;
  if (!product) return <h1>Product not found</h1>;

  return (
    <div className="h-screen bg-amazonclone-background">
      <div className="min-w-[1000px] max-w-[1500px] m-auto p-4">
        <div className="grid grid-cols-10 gap-2">
          {/* left */}
          <div className="col-span-3 p-8 rounded bg-white m-auto">
            <img src={product.image} alt={product.title} />
          </div>
          {/* middle */}
          <div className="col-span-5 bg-white p-4 rounded divide-y divide-gray-400">
            <div className="mb-3">
              <Productdetails product={product} ratings={true} />
            </div>
            <div className="text-base xl:lg mt-3">{product.description}</div>
          </div>
          {/* right */}
          <div className="col-span-2 bg-white">
            <div className="text-xl xl:text-2xl font-semibold text-red-500 text-right">
              {INDIAN_CURRENCY.format(product.price)}
            </div>
            <div className="text-base xl:text-lg font-semibold text-gray-500 text-right">
              RRP:
              <span className="line-through">
                {INDIAN_CURRENCY.format(product.oldPrice)}
              </span>
            </div>
            <div className="text-sm xl:text-base font-semibold text-blue-600 mt-3">
              FREE Return
            </div>
            <div className="text-base xl:text-lg font-semibold text-blue-600 mt-1">
              FREE Delivery
            </div>
            <div className="text-base xl:text-lg font-semibold text-green-700 mt-1">
              IN Stock
            </div>
            <div className="text-base xl:text-lg">
              Quantity
              <select
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="p-2 bg-amazonclone-background border rounded-md focus:border-indigo-600"
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </select>
            </div>
            <Link>
              <button
                onClick={() =>
                  dispatch(
                    addToCart({
                      id: product.id,
                      title: product.title, // Pass title
                      price: product.price, // Pass price
                      quantity: parseInt(quantity),
                      image_small: product.image_small,
                      brand: product.brand,
                      attribute: product.attribute,
                      badge: product.badge,
                    })
                  )
                } // Pass product ID and quantity directly
                className="bg-amazonclone-yellow w-full p-3 text-xs xl:text-sm rounded hover:bg-yellow-400 mt-4"
              >
                Add To Cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productpage;
