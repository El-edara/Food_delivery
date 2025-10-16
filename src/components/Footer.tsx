import * as motion from "framer-motion/client";
import { FiHeart } from "react-icons/fi";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mt-6 bg-blue-950 dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Social proof/statistics */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { value: "10K+", label: "Happy Users" },
            { value: "100+", label: "5-Star Reviews" },
            { value: "24/7", label: "Support" },
            { value: "2023", label: "Established" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="p-6 bg-gray-50 dark:bg-slate-800 rounded-xl"
            >
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                {stat.value}
              </p>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Copyright and made with love */}
        <div className="mt-6 flex flex-col items-center">
          <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
            <span>Made with</span>
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="mx-1 text-red-500"
            >
              <FiHeart />
            </motion.span>
            <span>in {new Date().getFullYear()}</span>
          </div>
          <p className="text-gray-400 dark:text-gray-500 text-sm">
            © {new Date().getFullYear()} Eledara. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
