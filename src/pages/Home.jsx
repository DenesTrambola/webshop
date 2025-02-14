import { useEffect, useState } from "react";
import Ad from "../components/home/Ad";
import CreateCustomShop from "../components/home/CreateCustomShop";
import CustomShopSection from "../components/home/custom-shop-section/CustomShopSection";
import ForYouSection from "../components/home/foryou-section/ForYouSection";
import FrequentSection from "../components/home/frequent-section/FrequentSection";
import InterestedSection from "../components/home/interested-section/InterestedSection";
import SearchesSection from "../components/home/searches-section/SearchesSection";
import SidebarMenu from "../components/home/SidebarMenu";
import useFetchProducts from "../hooks/useFetchProducts";

const Home = () => {
  const {products, loading, error} = useFetchProducts("http://localhost:5000/products");

  return (
    <main id="home-main">
      <section id="menu-ad">
        <SidebarMenu />
        <Ad />
        <CreateCustomShop />
      </section>

      {loading && <p>Loading products...</p>}
      {error && <p>Error: {error}</p>}

      {!loading && !error && (
        <>
          <FrequentSection products={products} />
          <InterestedSection />
          <ForYouSection products={products} />
        </>
      )}

      <SearchesSection />
      <CustomShopSection />
    </main>
  );
}

export default Home;
