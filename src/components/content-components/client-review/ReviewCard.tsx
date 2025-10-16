"use client";

// import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { ReactNode } from "react";

// ReviewCard Component
const ReviewCard = ({
  img,
  name,
  role,
  comment,
  rating,
}: {
  img: ReactNode;
  name: string;
  role: string;
  comment: string;
  rating: number;
}) => {
  return (
    <div className="h-full p-6 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-100 dark:border-slate-700 flex flex-col">
      {/* Rating */}
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating
                ? "fill-yellow-400 text-yellow-400"
                : "fill-gray-300 text-gray-300 dark:fill-slate-600 dark:text-slate-600"
            }`}
          />
        ))}
      </div>

      {/* Comment */}
      <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
        &quot;{comment}&quot;
      </p>

      {/* Client Info */}
      <div className="flex items-center gap-4 mt-auto">
        <div className="w-12 h-12 rounded-full overflow-hidden">{img}</div>
        <div>
          <h4 className="font-medium text-gray-900 dark:text-white">{name}</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
