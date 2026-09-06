
import Categories from "@/components/Home/Categories/Categories";
import MainSlider from "@/components/Home/MainSlider/MainSlider";
import NewsletterSection from "@/components/Home/NewsletterSection/NewsletterSection";
import Products from "@/components/Home/Products/Products";
import PromoSection from "@/components/Home/PromoSection/PromoSection";
import StoreFeatures from "@/components/Home/StoreFeatures/StoreFeatures";

export default function Home() {
  return (
    <>
      {/* Main Slider */}
      <MainSlider />

      {/* Store Features */}
      <StoreFeatures />

      {/* Categories */}
      <Categories />

      {/* Promotions */}
      <PromoSection />

      {/* Products */}
      <Products />

      {/* Newsletter */}
      <NewsletterSection />
    </>
  );
}