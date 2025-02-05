import Ad from "../components/home/Ad";
import CreateCustomShop from "../components/home/CreateCustomShop";
import SidebarMenu from "../components/home/SidebarMenu";

const Home = () => {
  return (
    <main>
      <section id="menu-ad">
        <SidebarMenu />
        <Ad />
        <CreateCustomShop />
      </section>
    </main>
  );
}

export default Home;
