import Ad from "../components/home/Ad";
import CreateCustomShop from "../components/home/CreateCustomShop";
import FrequentSection from "../components/home/frequent-section/FrequentSection";
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
    </main>
  );
}

export default Home;
