import { restaurants } from "../../../../db/data";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  FiClock,
  FiDollarSign,
  FiStar,
  FiMapPin,
  FiHeart,
} from "react-icons/fi";
import * as motion from "framer-motion/client";
import { Button } from "@/components/ui/button";

interface Props {
  params: Promise<{ id: string }>;
}

const ItemsDetails = async ({ params }: Props) => {
  const { id } = await params;
  const restaurant = restaurants.find((item) => item.id === id);

  if (!restaurant) {
    notFound(); // يعرض صفحة 404 الحقيقية من Next.js
  }

  return (
    <div className="bg-gray-50 dark:bg-slate-900 min-h-screen text-gray-800 dark:text-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative h-64 md:h-96 w-full"
      >
        <Image
          src={restaurant.image}
          alt={restaurant.name}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <button
          aria-label="Add to Favorites"
          className="absolute top-4 right-4 p-2 bg-white/80 rounded-full"
        >
          <FiHeart
            className="text-red-500 hover:text-red-700 transition"
            size={24}
          />
        </button>
      </motion.div>

      {/* Info Section */}
      <div className="container mx-auto px-4 py-8 -mt-16 relative z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6"
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="relative w-24 h-24 md:w-32 md:h-32 -mt-16 md:-mt-20">
              <Image
                src={restaurant.image}
                alt={`${restaurant.name} logo`}
                fill
                className="object-cover rounded-lg border-4 border-white dark:border-slate-800 shadow-md"
                sizes="128px"
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start flex-wrap gap-3">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold">
                    {restaurant.name}
                  </h1>
                  <p className="text-gray-600 dark:text-gray-400">
                    {restaurant.cuisine}
                  </p>
                </div>
                <div className="flex items-center bg-yellow-100 px-3 py-1 rounded-full">
                  <FiStar className="text-yellow-500 mr-1" />
                  <span className="font-semibold">{restaurant.rating}</span>
                </div>
              </div>

              <p className="mt-3 text-gray-700 dark:text-gray-300">
                {restaurant.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <span className="flex items-center bg-gray-100 dark:bg-slate-700 px-3 py-1 rounded-full">
                  <FiClock className="mr-1" />
                  {restaurant.deliveryTime} min delivery
                </span>
                <span className="flex items-center bg-gray-100 dark:bg-slate-700 px-3 py-1 rounded-full">
                  <FiDollarSign className="mr-1" />${restaurant.deliveryFee}{" "}
                  delivery fee
                </span>
                <span className="bg-gray-100 dark:bg-slate-700 px-3 py-1 rounded-full">
                  Min order: ${restaurant.minOrder}
                </span>
              </div>

              <div className="mt-4 flex items-center text-sm">
                <FiMapPin className="mr-2 text-gray-500 dark:text-gray-400" />
                <span>123 Main St, City, Country</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex flex-wrap border-b text-sm font-medium"
        >
          {["Menu", "Reviews", "Photos", "About"].map((tab, i) => (
            <button
              key={i}
              className={`px-4 py-2 ${
                i === 0
                  ? "border-b-2 border-purple-600 text-purple-600"
                  : "text-gray-500 dark:text-gray-300 hover:text-purple-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 bg-gradient-to-r from-purple-600 via-blue-400 to-blue-300 dark:from-purple-800 dark:via-blue-600 dark:to-blue-500 rounded-xl p-6 text-white"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h3 className="text-xl font-bold">Ready to order?</h3>
              <p className="mt-1 text-sm">
                Get your favorite food delivered to your doorstep
              </p>
            </div>
            <Button
              size="lg"
              className="mt-4 md:mt-0 bg-white text-purple-600 hover:bg-gray-100"
            >
              Order Now
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ItemsDetails;
