"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, selectCartItems } from "@/redux/cartSlice";
import toast from "react-hot-toast";
import { FaCheck, FaShoppingCart } from "react-icons/fa";
import { useRouter } from "next/navigation";

interface Props {
  id: string;
  image: string;
  name: string;
  price?: number;
  description: string;
  rating?: number;
  cuisine?: string;
  deliveryTime?: number;
}

const ItemsCard = ({
  id,
  image,
  name,
  price = 0,
  description,
  rating,
  cuisine,
  deliveryTime,
}: Props) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const isInCart = cartItems.some((item) => item.id === id);

  const handleToggleCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (isInCart) {
      dispatch(removeItem({ id: id }));
      toast.success(`${name} removed from cart`, {
        duration: 2000,
        position: "bottom-center",
        icon: <FaCheck />,

        style: {
          background: "red",
          color: "#fff",
          padding: "14px",
          borderRadius: "5px",
          fontSize: "16px",
          fontWeight: "bold",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
          transition: "opacity 0.3s ease-in-out",
        },
      });
    } else {
      dispatch(
        addItem({
          id,
          image,
          name,
          price,
          description,
          rating,
          cuisine,
          deliveryTime,
          quantity: 1,
          // deliveryFee: 0,
          // minOrder: 1, e
        })
      );
      toast.success(`${name} added to cart`, {
        duration: 2000,
        position: "bottom-center",
        icon: <FaCheck />,
        style: {
          background: "green",
          color: "#fff",
          padding: "14px",
          borderRadius: "5px",
          fontSize: "16px",
          fontWeight: "bold",
          boxShadow: "0 2px 4px rgba(0, 0lib, 0, 0.2)",
          transition: "opacity 0.3s ease-in-out",
        },
      });
    }
  };

  const handleCardClick = () => {
    router.push(`/restaurants/${id}`);
  };
  return (
    <motion.div
      onClick={handleCardClick}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md bg-white dark:bg-slate-900 h-full flex flex-col cursor-pointer"
    >
      <div className="relative aspect-video">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg line-clamp-1">{name}</h3>
          <span className="font-semibold whitespace-nowrap ml-2">
            ${price.toFixed(2)}
          </span>
        </div>

        <div className="flex items-center justify-between gap-4">
          {cuisine && (
            <span className="text-xs text-purple-600 dark:text-purple-300 bg-purple-50 dark:bg-purple-900/30 px-2 py-1 rounded-full w-fit mb-2">
              {cuisine}
            </span>
          )}
          {rating && (
            <div className="flex items-center gap-1 text-sm bg-yellow-50 dark:bg-yellow-900/20 px-2 py-1 rounded-full">
              <FiStar className="text-yellow-500" />
              <span>{rating}</span>
            </div>
          )}
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
          {description}
        </p>

        <div className="flex justify-between items-center">
          {/* <div className="flex items-center gap-2"> */}
          {deliveryTime && (
            <div className="flex items-center gap-1 font-light text-sm bg-blue-50 dark:bg-blue-900/20 px-3 py-1.5 rounded-full">
              <span>🚚 {deliveryTime} min</span>
            </div>
          )}
          {/* </div> */}

          {/* Add to Cart button */}
          <div className="flex justify-center items-center">
            <Button
              onClick={handleToggleCart}
              aria-label="Add to cart"
              className={`group flex items-center gap-2 px-4 py-2 rounded-full transition-all font-semibold shadow-md cursor-pointer
                ${
                  isInCart
                    ? "bg-red-600 hover:bg-red-700 text-white"
                    : "bg-gradient-to-br from-blue-800 to-blue-600 hover:from-blue-900 hover:to-blue-700 text-white"
                }`}
            >
              <span className="relative flex items-center justify-center w-5 h-5">
                <FaShoppingCart className="text-base transition-transform duration-200 group-hover:scale-110" />
                {isInCart && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full border border-red-600" />
                )}
              </span>
              <span className="text-sm">
                {isInCart ? "Remove" : "Add to Cart"}
              </span>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ItemsCard;
