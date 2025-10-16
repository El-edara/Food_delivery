export type RestaurantProps = {
  id: string;
  name: string;
  image: string;
  rating: number;
  cuisine: string;
  deliveryTime: number;
  deliveryFee: number;
  minOrder: number;
  description: string;
  isOpen: boolean;
  price?: number;
};
