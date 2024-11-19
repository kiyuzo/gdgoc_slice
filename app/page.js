import Image from "next/image";
import Topper from "./_components/topper";
import Navbar from "./_components/navbar";
import Shop from "./_components/shop"; 
import Bestseller from "./_components/bestseller";
import { CartWishlistProvider } from "./_components/CartWishlist";

export default function Home() {
  return (
    <CartWishlistProvider>
      <div className="bg-[#FAFAFA]">
        <Topper />
        <Navbar />
        <div className="container mx-auto px-4">
          <Shop />
          <Bestseller />
        </div>
      </div>
    </CartWishlistProvider>
  );
}