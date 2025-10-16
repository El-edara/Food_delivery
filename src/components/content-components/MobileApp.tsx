import * as motion from "framer-motion/client";
import Image from "next/image";
import { BsApple, BsGooglePlay } from "react-icons/bs";

const MobileApp = () => {
  return (
    <div className="py-16 my-6 md:my-16">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 justify-between gap-10">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 15,
            duration: 1,
            delay: 0.5,
          }}
          className="hidden md:block mx-auto"
        >
          <Image src={"/images/app.png"} alt="App" width={500} height={500} />
        </motion.div>
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 15,
            duration: 1,
            delay: 0.5,
          }}
          className="flex justify-center flex-col items-center lg:items-start text-center lg:text-left"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white leading-15">
            Connecting our user with iOS & Android Apps, Download from iTune &
            Play store.
          </h1>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-400 mt-4">
            We are committed to providing you with the best possible experience
            on our iOS and Android apps. Download them now and experience the
            convenience and functionality that our apps offer.
          </p>
          <div className="flex items-center flex-col gap-4 mt-8">
            <p className="text-sm md:text-base text-gray-700 dark:text-gray-400">
              Apps Available to download on
            </p>
            <div className="flex items-center justify-center gap-4">
              <button className="px-4 py-3 rounded-lg border border-gray-500 dark:border-gray-400 flex gap-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors">
                <div className="flex items-center gap-1.5">
                  <BsApple size={18} />
                  <div className="flex flex-col items-start">
                    <p className="text-xs">Download on the</p>
                    <span className="text-sm font-semibold">App Store</span>
                  </div>
                </div>
              </button>
              <button className="px-4 py-3 rounded-lg border border-gray-500 dark:border-gray-400 flex gap-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors">
                <div className="flex items-center gap-1.5">
                  <BsGooglePlay size={18} />
                  <div className="flex flex-col items-start">
                    <p className="text-xs">Get it on</p>
                    <span className="text-sm font-semibold">Google Play</span>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default MobileApp;
