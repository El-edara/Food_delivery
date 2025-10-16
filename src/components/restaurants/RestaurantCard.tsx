import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import { RestaurantProps } from "@/types/types";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, selectCartItems } from "@/redux/cartSlice";
import toast from "react-hot-toast";
import { FaCheck, FaShoppingCart } from "react-icons/fa";
import { useRouter } from "next/navigation";

interface RestaurantCardProps {
  restaurant: RestaurantProps;
}

const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
  // set up redux dispatch and select cart items to check if products is in cart
  const router = useRouter();
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const isInCart = cartItems.some((item) => item.id === restaurant.id);

  // handle toggle add/remove to cart & notification toast
  const handleToggleCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    if (isInCart) {
      dispatch(removeItem({ id: restaurant.id }));
      toast.success(`${restaurant.name} removed from cart`, {
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
      dispatch(addItem({ ...restaurant, quantity: 1 }));
      toast.success(`${restaurant.name} added to cart`, {
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

  // handle navigate to restaurant page
  const handleNavigate = () => {
    router.push(`/restaurants/${restaurant.id}`);
  };

  return (
    <div
      onClick={handleNavigate}
      className="bg-white dark:bg-slate-900 rounded-xl h-full border border-gray-300 shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
    >
      {/* Image with rating badge */}
      <div className="relative h-48">
        <Image
          src={restaurant.image}
          alt={restaurant.name}
          fill
          className="object-cover"
          priority={false}
        />
        <div className="absolute top-2 right-2 bg-white dark:bg-gray-900 px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
          <StarIcon className="h-3 w-3 text-yellow-500" />
          <span>{restaurant.rating.toFixed(1)}</span>
        </div>
      </div>

      {/* Restaurant info */}
      <div className="p-4 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
            {restaurant.name}
          </h3>
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
            <span>{restaurant.cuisine}</span>
            <span>•</span>
            <span>{restaurant.deliveryTime} min</span>
            <span>•</span>
            <span>${restaurant.deliveryFee} delivery</span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-300 line-clamp-2">
            {restaurant.description}
          </p>
        </div>

        {/* Add to Cart button */}
        <div className="mt-4 flex justify-end">
          <button
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
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
