import { useNavigate } from "react-router-dom";

const SidebarMenu = () => {
  const navigate = useNavigate();

  const navToCategory = (category) => {
    navigate(`/category/${category}`);
  }

  return (
    <nav id="menu">
      <a onClick={() => navToCategory('military')}>Military</a>
      <a onClick={() => navToCategory('supermarket-prom')}>Supermarket Prom</a>
      <a onClick={() => navToCategory('beauty-and-health')} className="hasSubmenu">Beauty and health</a>
      <a onClick={() => navToCategory('house-and-garden')} className="hasSubmenu">House and garden</a>
      <a onClick={() => navToCategory('clothes-and-shoes')} className="hasSubmenu">Clothes and shoes</a>
      <a onClick={() => navToCategory('engineering-and-electrical-engineering')} className="hasSubmenu">Engineering and electrical engineering</a>
      <a onClick={() => navToCategory('goods-for-children')} className="hasSubmenu">Goods for children</a>
      <a onClick={() => navToCategory('auto-moto')} className="hasSubmenu">Auto, moto</a>
      <a onClick={() => navToCategory('gifts-hobbies-books')} className="hasSubmenu">Gifts, hobbies, books</a>
      <a onClick={() => navToCategory('accessories-and-decorations')} className="hasSubmenu">Accessories and decorations</a>
      <a onClick={() => navToCategory('materials-for-repair')} className="hasSubmenu">Materials for repair</a>
      <a onClick={() => navToCategory('sports-and-recreation')} className="hasSubmenu">Sports and recreation</a>
      <a onClick={() => navToCategory('medicines-and-medical-products')} className="hasSubmenu">Medicines and medical products</a>
      <a onClick={() => navToCategory('pets-and-pet-products')} className="hasSubmenu">Pets and pet products</a>
      <a onClick={() => navToCategory('stationery')} className="hasSubmenu">Stationery</a>
      <a onClick={() => navToCategory('overalls-and-shoes')} className="hasSubmenu">Overalls and shoes</a>
      <a onClick={() => navToCategory('wedding-goods')} className="hasSubmenu">Wedding goods</a>
      <a onClick={() => navToCategory('foods-products-drinks')} className="hasSubmenu">Foods products, drinks</a>
      <a onClick={() => navToCategory('voentorg')} className="hasSubmenu">Voentorg</a>
      <a onClick={() => navToCategory('tools')} className="hasSubmenu">Tools</a>
      <a onClick={() => navToCategory('antiques-and-collectibles')} className="hasSubmenu">Antiques and collectibles</a>
      <a onClick={() => navToCategory('construction')} className="hasSubmenu">Construction</a>
      <a onClick={() => navToCategory('goods-for-business')}>Goods for business</a>
      <a onClick={() => navToCategory('services')}>Services</a>
    </nav>
  );
}

export default SidebarMenu;
