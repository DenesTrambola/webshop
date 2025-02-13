import FrequentGroup from "./FrequentGroup";

const FrequentSection = ({products}) => {
  const categories = ["Means for cleaning wool", "Polishers", "Men's socks", "Medical gloves", "Pasta",
    "Children's mashed potatoes", "Plant-based dairy products", "Furniture polishers", "Means for animal hygiene", "Jewerly for piercing"];

  return (
    <section id="frequent">
      <h3>Often bought</h3>

      <div id="main">

        {categories.map((category, index) => <FrequentGroup
          key={category}
          category={category}
          image={`/images/categories/${index + 1}.png`}
          products={products
            .filter(product => product.category === category)
            .slice(0, 3)}
        />)}

      </div>
    </section>
  );
}

export default FrequentSection;
