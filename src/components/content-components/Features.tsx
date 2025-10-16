import * as motion from "framer-motion/client";
import Image from "next/image";
import AnimateHeading from "./AnimateHeading";

const Features = () => {
  const features = [
    {
      icons: "/images/f1.svg",
      title: "Analytics Business",
      description:
        "We're driven beyond just finishing the project. We want to find smart solutions through data-driven insights.",
    },
    {
      icons: "/images/f2.svg",
      title: "Wide Coverage Map",
      description:
        "Timely delivery is part of our promise to make your meals reach hot and fresh around the world.",
    },
    {
      icons: "/images/f3.svg",
      title: "Artificial Intelligence",
      description:
        "Our AI-powered systems predict demand, optimize delivery routes, and personalize recommendations to enhancement.",
    },
    {
      icons: "/images/f4.svg",
      title: "Largest Network",
      description:
        "With thousands of partner restaurants and delivery personnel, we connect more hungry customers to their favorite meals.",
    },
    {
      icons: "/images/f5.svg",
      title: "Trusted & Secure",
      description:
        "Your safety is our priority. Our rigorous vetting process ensures only trusted partners join our platform.",
    },
    {
      icons: "/images/f6.svg",
      title: "Mobile App",
      description:
        "Enjoy seamless ordering with our intuitive app featuring one-tap reordering, live tracking, and exclusive mobile-only deals.",
    },
  ];

  return (
    <div
      id="features"
      className="py-12 px-3 md:px-6 my-6 md:16 lg:my-26 bg-gray-50 shadow-sm dark:bg-slate-900 rounded-xs"
    >
      <AnimateHeading text="Meet our Quality Features" />
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-4">
        {features.map((feature, index) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -3 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17,
            }}
            key={index}
            className="flex flex-col items-center gap-2 md:gap-4 lg:gap-8 bg-white dark:bg-slate-800 py-8 px-4 rounded-lg shadow-md hover:shadow-lg text-center"
          >
            <Image
              src={feature.icons}
              alt={feature.title}
              width={64}
              height={64}
              className="w-16 h-16"
            />
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default Features;
