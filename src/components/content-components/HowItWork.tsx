import Image from "next/image";
import AnimateHeading from "./AnimateHeading";

const HowItWork = () => {
  const steps = [
    {
      id: 1,
      title: "Browse Restaurants",
      desc: "Find your favorite meals nearby in seconds.",
      img: "/images/w3.png",
    },
    {
      id: 2,
      title: "Choose Your Meal",
      desc: "Pick dishes from curated menus and explore new flavors.",
      img: "/images/w2.png",
    },
    {
      id: 3,
      title: "Fast Delivery",
      desc: "Track your order in real-time and get it delivered hot!",
      img: "/images/w1.png",
    },
  ];

  return (
    <div className="py-16 my-6 lg:my-12 bg-gray-50 shadow-sm dark:bg-slate-900 rounded-xs">
      <AnimateHeading text="Let's see how it works" />
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-3 px-4">
        {steps.map((step) => (
          <div
            key={step.id}
            className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 text-center transition hover:shadow-lg"
          >
            <div className="text-4xl font-bold text-blue-600 mb-3">
              0{step.id}
            </div>
            <Image
              src={step.img}
              alt={step.title}
              width={100}
              height={100}
              className="mx-auto mb-4 rounded-md w-42 object-cover "
            />
            <h2 className="text-xl font-semibold mb-2 transition-colors">
              {step.title}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {step.desc}
            </p>
            <button className="mt-4 px-4 py-2 bg-blue-500 dark:bg-blue-700 text-white rounded-md hover:bg-blue-600 dark:hover:bg-blue-800 cursor-pointer transition">
              Start Earning &rarr;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default HowItWork;
