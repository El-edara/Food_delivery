// components/restaurants/RestaurantPageItems.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
// import Link from "next/link";
import { FiClock, FiDollarSign, FiStar, FiHeart } from "react-icons/fi";
import { motion } from "framer-motion";
import { restaurantData, restaurants } from "../../../db/data";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ItemsCard from "./ItemsCard";

const RestaurantPageItems = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isFavorite, setIsFavorite] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 8;

  const restaurant = restaurantData;
  const categories = [
    "All",
    ...new Set(restaurants.map((item) => item.cuisine)),
  ];

  const filteredItems =
    activeCategory === "All"
      ? restaurants
      : restaurants.filter((item) => item.cuisine === activeCategory);

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const currentItems = filteredItems.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Restaurant Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row gap-8 mb-12 relative"
      >
        <div className="w-full md:w-1/3 lg:w-1/4">
          <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg group">
            <Image
              src={restaurant.image}
              alt={restaurant.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="absolute top-4 right-4 p-2 bg-white/90 rounded-full shadow-md hover:bg-red-100 transition-colors"
              aria-label={
                isFavorite ? "Remove from favorites" : "Add to favorites"
              }
            >
              <FiHeart
                size={20}
                className={
                  isFavorite ? "fill-red-500 text-red-500" : "text-gray-700"
                }
              />
            </button>
          </div>
        </div>

        <div className="w-full md:w-2/3 lg:w-3/4">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold mb-2">{restaurant.name}</h1>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1 bg-yellow-50 dark:bg-yellow-900/20 px-2 py-1 rounded-full">
                  <FiStar className="text-yellow-500" />
                  <span className="font-semibold">{restaurant.rating}</span>
                </div>
                <span className="text-gray-500 dark:text-gray-400">
                  • {restaurant.cuisine}
                </span>
              </div>
            </div>
          </div>

          <p className="text-gray-700 dark:text-gray-300 mb-6">
            {restaurant.description}
          </p>

          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-full">
              <FiClock className="text-gray-600 dark:text-gray-400" />
              <span className="text-gray-700 dark:text-gray-300">
                {restaurant.deliveryTime} min
              </span>
            </div>
            <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-full">
              <FiDollarSign className="text-gray-600 dark:text-gray-400" />
              <span className="text-gray-700 dark:text-gray-300">
                ${restaurant.deliveryFee} delivery
              </span>
            </div>
            <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-full">
              <span className="text-gray-700 dark:text-gray-300">
                Min: ${restaurant.minOrder}
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Menu Categories */}
      {categories.length > 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <Carousel>
            <CarouselContent>
              {categories.map((category) => (
                <CarouselItem key={category} className="basis-auto">
                  <Button
                    variant={
                      activeCategory === category ? "default" : "outline"
                    }
                    onClick={() => {
                      setActiveCategory(category);
                      setCurrentPage(1);
                    }}
                    className="rounded-full whitespace-nowrap"
                  >
                    {category}
                  </Button>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </motion.div>
      )}

      {/* Menu Items Grid */}
      {currentItems.length > 0 ? (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {currentItems.map((item) => (
              // <Link href={`/restaurants/${item.id}`} key={item.id} passHref>
              <ItemsCard
                key={item.id}
                id={item.id}
                image={item.image}
                name={item.name}
                price={item.price}
                description={item.description}
                rating={item.rating}
                cuisine={item.cuisine}
                deliveryTime={item.deliveryTime}
              />
              // </Link>
            ))}
          </motion.div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1}-
                {Math.min(currentPage * ITEMS_PER_PAGE, filteredItems.length)}{" "}
                of {filteredItems.length} items
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </Button>

                <div className="flex gap-1">
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let pageNum;
                    if (totalPages <= 5) {
                      pageNum = i + 1;
                    } else if (currentPage <= 3) {
                      pageNum = i + 1;
                    } else if (currentPage >= totalPages - 2) {
                      pageNum = totalPages - 4 + i;
                    } else {
                      pageNum = currentPage - 2 + i;
                    }

                    return (
                      <Button
                        key={pageNum}
                        variant={
                          currentPage === pageNum ? "default" : "outline"
                        }
                        size="sm"
                        onClick={() => handlePageChange(pageNum)}
                        className="w-10 h-10 p-0 flex items-center justify-center"
                      >
                        {pageNum}
                      </Button>
                    );
                  })}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next
                </Button>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            No items found
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Try selecting a different category
          </p>
        </div>
      )}
    </div>
  );
};

export default RestaurantPageItems;
