"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import AnimateHeading from "../AnimateHeading";
import ReviewCard from "./ReviewCard";
import Image from "next/image";
import * as motion from "framer-motion/client";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

const ClientReview = () => {
  const reviews = [
    {
      id: 1,
      img: "/images/c1.png",
      name: "Sarah Johnson",
      role: "Marketing Director",
      comment:
        "The service was exceptional! Our engagement increased by 40% after using their platform.",
      rating: 5,
    },
    {
      id: 2,
      img: "/images/c3.png",
      name: "Michael Chen",
      role: "Small Business Owner",
      comment:
        "Reliable and cost-effective solution that helped us streamline our operations.",
      rating: 4,
    },
    {
      id: 3,
      img: "/images/c2.png",
      name: "Emma Williams",
      role: "E-commerce Manager",
      comment:
        "User-friendly interface and excellent customer support. Highly recommended!",
      rating: 5,
    },
    {
      id: 4,
      img: "/images/c4.png",
      name: "David Kim",
      role: "Startup Founder",
      comment:
        "Transformed our digital presence completely. Worth every penny and a game-changer. ",
      rating: 5,
    },
    {
      id: 6,
      img: "/images/c3.png",
      name: "Michael Chen",
      role: "Small Business Owner",
      comment:
        "Reliable and cost-effective solution that helped us streamline our operations.",
      rating: 4,
    },
    {
      id: 5,
      img: "/images/c2.png",
      name: "Emma Williams",
      role: "E-commerce Manager",
      comment:
        "User-friendly interface and excellent customer support. Highly recommended!",
      rating: 4,
    },
  ];

  const plugin = useRef(Autoplay({ delay: 2500, stopOnInteraction: false }));

  // Define variants for the container
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 20,
        staggerChildren: 0.2,
      },
    },
  };

  // Variants for each item
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };
  return (
    <div className="py-12 px-3 md:px-6 my-12 md:my-16 lg:my-26 bg-gray-50 shadow-sm dark:bg-slate-900 rounded-xs">
      <AnimateHeading text="What our clients say about us" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-7xl mx-auto p-2"
      >
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]} // Add the autoplay plugin
          className="w-full relative"
          // onMouseEnter={plugin.current.stop} // Pause on hover
          // onMouseLeave={plugin.current.reset} // Resume on mouse leave
        >
          <CarouselContent>
            {reviews.map((review) => (
              <CarouselItem
                key={review.id}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <motion.div variants={itemVariants}>
                  <ReviewCard
                    img={
                      <Image
                        src={review.img}
                        alt={`${review.name}, ${review.role}`}
                        width={80}
                        height={80}
                        className="rounded-full object-cover"
                      />
                    }
                    name={review.name}
                    role={review.role}
                    comment={review.comment}
                    rating={review.rating}
                  />
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:inline-flex absolute top-1/2 -translate-y-1/2 -left-6 opacity-50" />
          <CarouselNext className="hidden md:inline-flex absolute top-1/2 -translate-y-1/2 -right-6 opacity-50" />
        </Carousel>
      </motion.div>
    </div>
  );
};
export default ClientReview;
