import Ad from "../components/home/Ad";
import CreateCustomShop from "../components/home/CreateCustomShop";
import ForYouSection from "../components/home/foryou-section/ForYouSection";
import FrequentSection from "../components/home/frequent-section/FrequentSection";
import InterestedSection from "../components/home/interested-section/InterestedSection";
import SearchesSection from "../components/home/searches-section/SearchesSection";
import SidebarMenu from "../components/home/SidebarMenu";

const Home = () => {
  return (
    <main>
      <section id="menu-ad">
        <SidebarMenu />
        <Ad />
        <CreateCustomShop />
      </section>

      <FrequentSection />
      <InterestedSection />
      <ForYouSection />
      <SearchesSection />
    </main>
  );
}

export default Home;
