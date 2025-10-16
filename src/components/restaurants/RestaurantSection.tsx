"use client";
import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { RestaurantProps } from "@/types/types";
import RestaurantCard from "./RestaurantCard";
import FilterButton from "./FilterButton";
import Link from "next/link";

interface RestaurantSectionProps {
  title: string;
  restaurants: RestaurantProps[];
  showFilters?: boolean;
}

const RestaurantSection = ({
  title,
  restaurants,
  showFilters = true,
}: RestaurantSectionProps) => {
  const [currentFilter, setCurrentFilter] = useState("all");

  const filters = [
    "all",
    "italian",
    "mexican",
    "american",
    "chinese",
    "desserts",
  ];

  const filteredRestaurants = useMemo(() => {
    if (currentFilter === "all") return restaurants;
    return restaurants.filter(
      (r) => r.cuisine.toLowerCase() === currentFilter.toLowerCase()
    );
  }, [currentFilter, restaurants]);

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div className="flex justify-between items-center gap-4 w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            {title}
          </h2>
          <Link
            href="/restaurants"
            className={`${
              showFilters ? "hidden" : "inline-flex"
            } items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800 hover:shadow-md transition-all duration-200`}
          >
            🍽️ <span className="text-sm font-semibold">View All Meals</span>
          </Link>
        </div>

        {showFilters && (
          <div className="flex gap-3 flex-wrap justify-center">
            {filters.map((filter) => (
              <FilterButton
                key={filter}
                active={currentFilter === filter}
                onClick={() => setCurrentFilter(filter)}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </FilterButton>
            ))}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredRestaurants.map((restaurant) => (
          <motion.div
            // href={`/restaurants/${restaurant.id}`}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.99 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            key={restaurant.id}
            className="cursor-pointer"
          >
            <RestaurantCard restaurant={restaurant} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default RestaurantSection;
