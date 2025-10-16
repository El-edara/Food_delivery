"use client";

import { motion } from "framer-motion";
import {
  FiShoppingCart,
  FiTrash2,
  FiArrowLeft,
  FiPlus,
  FiMinus,
} from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import {
  removeItem,
  incrementQuantity,
  decrementQuantity,
  selectCartItems,
  selectCartTotal,
  clearCart,
} from "@/redux/cartSlice";
import Image from "next/image";

const CartPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  const handleRemoveItem = (id: string | number) => {
    dispatch(removeItem({ id }));
  };

  const handleIncrement = (id: string) => {
    dispatch(incrementQuantity({ id }));
  };

  const handleDecrement = (id: string) => {
    dispatch(decrementQuantity({ id }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 dark:bg-slate-900 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => router.back()}
            className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <FiArrowLeft className="mr-2" />
            Continue Shopping
          </button>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center">
            <FiShoppingCart className="mr-2" />
            Your Cart
          </h1>
          <div className="w-24"></div> {/* Spacer for alignment */}
        </div>

        {cartItems.length === 0 ? (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center py-20"
          >
            <div className="mx-auto w-24 h-24 bg-gray-200 dark:bg-slate-700 rounded-full flex items-center justify-center mb-6">
              <FiShoppingCart className="text-gray-500 dark:text-gray-300 text-3xl" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              Your cart is empty
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Looks like you haven&apos;t added anything to your cart yet
            </p>
            <Button
              onClick={() => router.push("/restaurants")}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg"
            >
              Browse Products
            </Button>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm overflow-hidden">
                <div className="hidden md:grid grid-cols-12 bg-gray-100 dark:bg-slate-700 p-4 text-sm font-medium text-gray-700 dark:text-gray-300">
                  <div className="col-span-5">Product</div>
                  <div className="col-span-2 text-center">Price</div>
                  <div className="col-span-3 text-center">Quantity</div>
                  <div className="col-span-2 text-right">Total</div>
                </div>

                <motion.div
                  layout
                  className="divide-y divide-gray-200 dark:divide-slate-700"
                >
                  {cartItems.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="grid grid-cols-12 p-4 items-center"
                    >
                      <div className="col-span-6 md:col-span-5 flex items-center">
                        <div className="relative w-16 h-16 rounded-md overflow-hidden mr-4">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                            sizes="64px"
                          />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900 dark:text-white">
                            {item.name}
                          </h3>
                          <button
                            onClick={() => handleRemoveItem(item.id)}
                            className="flex items-center text-sm text-red-500 hover:text-red-700 mt-1"
                          >
                            <FiTrash2 className="mr-1" /> Remove
                          </button>
                        </div>
                      </div>

                      <div className="col-span-2 text-gray-700 dark:text-gray-300 text-center hidden md:block">
                        ${item.price?.toFixed(2)}
                      </div>

                      <div className="col-span-4 md:col-span-3 flex justify-center">
                        <div className="flex items-center border border-gray-300 dark:border-slate-600 rounded-lg">
                          <button
                            onClick={() => handleDecrement(item.id)}
                            className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-full cursor-pointer"
                            disabled={item.quantity <= 1}
                          >
                            <FiMinus />
                          </button>
                          <span className="px-3 py-1 text-gray-900 dark:text-white">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => handleIncrement(item.id)}
                            className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-full cursor-pointer"
                          >
                            <FiPlus />
                          </button>
                        </div>
                      </div>

                      <div className="col-span-2 text-right font-medium text-gray-900 dark:text-white">
                        ${((item.price ?? 0) * item.quantity).toFixed(2)}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-6 sticky top-6"
              >
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      Subtotal
                    </span>
                    <span className="text-gray-900 dark:text-white">
                      ${cartTotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      Shipping
                    </span>
                    <span className="text-gray-900 dark:text-white">Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      Tax
                    </span>
                    <span className="text-gray-900 dark:text-white">
                      Calculated at checkout
                    </span>
                  </div>
                </div>

                <div className="border-t border-gray-200 dark:border-slate-700 pt-4 mb-6">
                  <div className="flex justify-between font-bold text-lg">
                    <span className="text-gray-900 dark:text-white">Total</span>
                    <span className="text-indigo-600 dark:text-indigo-400">
                      ${cartTotal.toFixed(2)}
                    </span>
                  </div>
                </div>

                <Button
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg"
                  onClick={() => router.push("/checkout")}
                >
                  Proceed to Checkout
                </Button>

                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 text-center">
                  or{" "}
                  <button
                    onClick={() => router.push("/restaurants")}
                    className="text-indigo-600 dark:text-indigo-400 hover:underline transition-all duration-200"
                  >
                    Continue Shopping
                  </button>
                </p>

                <Button
                  onClick={handleClearCart}
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg mt-4"
                >
                  Clear Cart
                </Button>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default CartPage;
