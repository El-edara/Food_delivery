import * as motion from "framer-motion/client";
import Image from "next/image";
import img from "../../../public/images/a.png";
import AnimateHeading from "./AnimateHeading";

const About = () => {
  const details = [
    {
      id: 1,
      title: "Easy to use application",
      description:
        "We're driven beyond just finishing the project. We aim to solve problems with our website & apps.",
    },
    {
      id: 2,
      title: "Deliver food within 30 min",
      description:
        "Timely delivery is part of our promise to make your meals reach hot and fresh.",
    },
    {
      id: 3,
      title: "100% Reliable with Privacy",
      description:
        "Your data and your orders are handled with security and care. Your trust is our top priority.",
    },
  ];

  return (
    <div
      id="about"
      className="py-16 my-6 md:my-16 lg:my-26 grid lg:grid-cols-2 items-center justify-between lg:gap-8 px-6"
    >
      {/* Image section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="hidden lg:block"
      >
        <Image
          src={img}
          alt="About Us"
          width={600}
          height={800}
          className="rounded-xl object-cover w-full h-full"
        />
      </motion.div>

      {/* Text section */}
      <div className="flex flex-col text-center md:text-start gap-6">
        <AnimateHeading text="We deliver our products as fast as Superman can do " />
        <p className="text-md md:text-lg text-gray-700 dark:text-gray-300">
          This website is a platform where you can order food from your favorite
          places — quickly and securely.
        </p>
        <div className="flex flex-col gap-6 mt-4">
          {details.map((detail, index) => (
            <motion.div
              key={detail.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              className="flex items-center gap-4 md:gap-6 flex-col md:flex-row bg-gray-100 dark:bg-slate-800 p-4 rounded-lg"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
                0{detail.id}
              </h2>
              <div>
                <h3 className="text-xl font-semibold">{detail.title}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                  {detail.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
