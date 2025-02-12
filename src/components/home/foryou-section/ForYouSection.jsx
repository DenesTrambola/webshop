import { useState, useEffect } from "react";
import ForYouItem from "./ForYouItem";

const ForYouSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(0, 18)))
      .catch((error) => console.error("Error loading products:", error));
  }, []);

  return (
    <section id="fy">
      <h3>For You</h3>

      <div id="main">
        {products.map((product) => (
          <ForYouItem key={product.id} product={product} />
        ))}
      </div>

      <button id="more">Show more</button>
    </section>
  );
};

export default ForYouSection;
