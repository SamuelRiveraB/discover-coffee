import Banner from "@/components/banner";
import Card from "@/components/card";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Banner />
      <Card
        title="Dark Horse Coffee"
        image="/static/images/hero-image.png"
        link="/coffee-store/${coffeeStoreId}"
      />
    </div>
  );
}
