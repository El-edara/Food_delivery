import { RestaurantProps } from "@/types/types";
import Image from "next/image";

const RestaurantList = ({
  restaurants,
}: {
  restaurants: RestaurantProps[];
}) => {
  return (
    <div className="space-y-4">
      {restaurants.map((restaurant) => (
        <div
          key={restaurant.id}
          className="flex gap-4 p-4 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          <div className="relative h-24 w-24 flex-shrink-0">
            <Image
              src={restaurant.image}
              alt={restaurant.name}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-gray-900 dark:text-white">
              {restaurant.name}
            </h3>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mt-1">
              <span>{restaurant.rating} ★</span>
              <span>•</span>
              <span>{restaurant.cuisine}</span>
              <span>•</span>
              <span>${restaurant.minOrder} min</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-300 mt-2 line-clamp-2">
              {restaurant.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantList;
