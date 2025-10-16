import Image from "next/image";
import { BsApple, BsGooglePlay } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { GrMapLocation } from "react-icons/gr";
import * as motion from "framer-motion/client";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 10,
    },
  },
};

const Hero = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={container}
      className="min-h-screen w-full relative flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 overflow-hidden"
    >
      {/* Background decorative elements */}
      <motion.div
        className="absolute -top-20 -left-20 w-64 h-64 bg-pink-200/10 dark:bg-pink-900/20 rounded-full filter blur-[90px]"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto relative z-10">
        {/* Text Content */}
        <div className="flex justify-center flex-col items-center lg:items-start text-center lg:text-left">
          <motion.h1
            variants={item}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black dark:text-white mb-5 leading-tight"
          >
            Your favorite meals,{" "}
            <span className="text-pink-800 dark:text-pink-600">delivered</span>{" "}
            to your home
          </motion.h1>

          <motion.p
            variants={item}
            className="text-base md:text-lg text-gray-700 dark:text-gray-400 mb-8 max-w-lg"
          >
            Food, drinks, groceries, and more available for delivery and pickup.
          </motion.p>

          <motion.div
            variants={item}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative flex items-center gap-2 my-6 bg-gray-100 dark:bg-slate-800 py-3 px-5 rounded-full max-w-md w-full"
          >
            <GrMapLocation className="text-pink-800 shrink-0" />
            <input
              type="text"
              placeholder="Enter your address"
              className="flex-1 outline-none border-none bg-transparent text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-black dark:bg-white rounded-full cursor-pointer"
            >
              <FaTelegramPlane className="text-pink-500 dark:text-pink-800" />
            </motion.button>
          </motion.div>

          <motion.div
            variants={item}
            className="flex items-center flex-col gap-4 mt-8"
          >
            <p className="text-sm md:text-base text-gray-700 dark:text-gray-400">
              Apps Available to download on
            </p>
            <div className="flex items-center justify-center gap-4">
              <motion.button
                variants={item}
                whileHover={{ y: -3 }}
                className="px-4 py-3 rounded-lg border border-gray-500 dark:border-gray-400 flex gap-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
              >
                <div className="flex items-center gap-1.5">
                  <BsApple size={18} />
                  <div className="flex flex-col items-start">
                    <p className="text-xs">Download on the</p>
                    <span className="text-sm font-semibold">App Store</span>
                  </div>
                </div>
              </motion.button>
              <motion.button
                variants={item}
                whileHover={{ y: -3 }}
                className="px-4 py-3 rounded-lg border border-gray-500 dark:border-gray-400 flex gap-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
              >
                <div className="flex items-center gap-1.5">
                  <BsGooglePlay size={18} />
                  <div className="flex flex-col items-start">
                    <p className="text-xs">Get it on</p>
                    <span className="text-sm font-semibold">Google Play</span>
                  </div>
                </div>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                type: "spring",
                stiffness: 60,
                damping: 15,
              },
            },
          }}
          className="hidden lg:flex justify-center items-center"
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <Image
              src="/images/hero.png"
              alt="Delicious food delivery"
              width={600}
              height={600}
              priority
              className="w-full max-w-[600px] h-auto aspect-square object-contain"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
