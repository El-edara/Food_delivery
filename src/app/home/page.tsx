import Hero from "@/components/Hero";
import RestaurantSection from "@/components/restaurants/RestaurantSection";
import { restaurants } from "../../../db/data";
import HowItWork from "@/components/content-components/HowItWork";
import About from "@/components/content-components/About";
import Features from "@/components/content-components/Features";
import ClientReview from "@/components/content-components/client-review/ClientReview";
import MobileApp from "@/components/content-components/MobileApp";
import ScrollToTopButton from "@/components/ScrollToTop";

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Popular Restaurants */}
      <RestaurantSection
        title="Popular Restaurants"
        restaurants={restaurants.slice(3, 11)}
      />

      {/* New Restaurants (same data for demo) */}
      <RestaurantSection
        title="New Restaurants"
        restaurants={restaurants.slice(0, 4).reverse()} // Reversed for demo
        showFilters={false}
      />

      {/* Cuisine-specific Section */}
      <RestaurantSection
        title="Best Italian Food"
        restaurants={restaurants
          .filter((r) => r.cuisine === "Italian")
          .slice(0, 4)}
        showFilters={false}
      />

      <HowItWork />
      <About />
      <Features />
      <ClientReview />
      <MobileApp />
      <ScrollToTopButton />
    </div>
  );
};

export default HomePage;
