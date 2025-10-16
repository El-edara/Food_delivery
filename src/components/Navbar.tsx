"use client";
import { NavLinks } from "@/constant/constants";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdDeliveryDining } from "react-icons/md";
import MobileNav from "./MobileNav";
import ThemeToggler from "./Helper/ThemeToggler";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectCartItemCount } from "@/redux/cartSlice";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () =>
      window.scrollY > 0 ? setScrolled(true) : setScrolled(false);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const cartItemCount = useSelector(selectCartItemCount);

  return (
    <nav
      className={`fixed top-0 z-50 flex items-center justify-between gap-4 px-4 md:px-8 lg:px-12 w-full py-4 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-slate-900/90 shadow-md"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <Link href={"/"} className="flex items-center gap-2">
        <div className="flex items-center justify-center gap-2">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center bg-blue-950 dark:bg-white transition-all duration-300 `}
          >
            <MdDeliveryDining
              className={`h-7 w-7 text-white dark:text-black `}
            />
          </div>
          <h1
            className={`hidden md:block text-2xl lg:text-3xl font-bold transition-all duration-300 `}
          >
            Foodei
          </h1>
        </div>
      </Link>
      {/* Links */}
      <ul className="hidden md:flex items-center gap-4 text-black dark:text-white overflow-x-auto scrollbar-hide whitespace-nowrap py-2">
        {NavLinks.map((link) => (
          <li
            key={link.id}
            className={`hover:text-blue-900 font-bold px-3 transition-colors duration-200`}
          >
            <Link href={link.url}>{link.label}</Link>
          </li>
        ))}
      </ul>
      {/* CTA */}
      <div className="flex justify-center items-center gap-4">
        <button
          aria-label="Join Now"
          className="w-max bg-blue-950 dark:bg-white dark:text-black text-white px-5 py-2.5 rounded-lg shadow-xs font-semibold"
        >
          Join Now
        </button>

        {/* cart icon */}
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
        <div>
          {/* <BiMoon className="text-white h-6 w-6" /> */}
          <ThemeToggler />
        </div>

        {/* Rendering Mobile UI */}
        <MobileNav />
      </div>
    </nav>
  );
};
export default Navbar;
