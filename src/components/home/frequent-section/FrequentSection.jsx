import { useEffect, useState } from "react";
import FrequentGroup from "./FrequentGroup";

const FrequentSection = () => {
  const categories = ["Means for cleaning wool", "Polishers", "Men's socks", "Medical gloves", "Pasta",
    "Children's mashed potatoes", "Plant-based dairy products", "Furniture polishes", "Means for animal hygiene", "Jewerly for piercing"];

  const [products, setProducts] = useState([]);

  useEffect(() => {
      fetch("http://localhost:5000/products")
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((error) => console.error("Error loading products: ", error));
    }, []);

  return (
    <section id="frequent">
      <h3>Often bought</h3>

      <div id="main">

        {categories.map(category => <FrequentGroup
          key={category}
          category={category}
          products={products
            .filter(product => product.category === category)
            .slice(0, 3)}
        />)}

      </div>
    </section>
  );
}

export default FrequentSection;
