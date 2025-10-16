"use client";
import { motion } from "framer-motion";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NavLinks } from "@/constant/constants";
import { MdClose } from "react-icons/md";
import { MdDeliveryDining } from "react-icons/md";
import { HiBars3BottomRight } from "react-icons/hi2";
import ThemeToggler from "./Helper/ThemeToggler";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectCartItemCount } from "@/redux/cartSlice";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cartItemCount = useSelector(selectCartItemCount);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-3xl md:hidden text-blue-950"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? (
          <MdClose className="w-8 h-8" />
        ) : (
          <HiBars3BottomRight className="w-8 h-8 text-black dark:text-white" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 min-[875px]:hidden z-40 bg-black bg-opacity-50 backdrop-blur-sm"
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 0.8, x: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Mobile Menu Content */}
      <div
        className={`fixed top-0 right-0 md:hidden w-4/5 sm:w-3/5 h-screen z-50 bg-white dark:bg-black shadow-xl transition-all duration-500 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Mobile Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-950 dark:bg-white rounded-full flex items-center justify-center">
                <MdDeliveryDining className="h-7 w-7 text-white dark:text-black" />
              </div>
              <h1 className="text-2xl font-bold">Foodei</h1>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
              aria-label="Close menu"
            >
              <MdClose className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Links */}
          <nav className="flex-1">
            <ul className="flex flex-col gap-6">
              {NavLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.url}
                    className="block py-2 text-xl font-semibold hover:text-blue-950 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Footer */}
          <div className="mt-auto pt-6 border-t border-gray-200">
            <button className="w-full bg-blue-950 text-white px-5 py-3 rounded-lg shadow-xs mb-4 font-medium">
              Join Now
            </button>
            <div className="flex justify-around items-center">
              {/* Cart */}
              <Link href={"/cart"} className="relative">
                <FaShoppingCart
                  className={`hover:text-green-800 transition-colors ${
                    cartItemCount > 0 ? "text-blue-950 dark:text-white" : ""
                  }`}
                  size={22}
                />
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                    {cartItemCount}
                  </span>
                )}
              </Link>
              <ThemeToggler />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
