import { useState, useEffect } from "react";
import ForYouItem from "./ForYouItem";


// TODO: fetch only products that are visible


const ForYouSection = () => {
  const moreValue = 12;

  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(moreValue);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error loading products: ", error));
  }, []);

  const showMoreHandler = () => {
    setVisibleProducts(prev => prev +=
      ((visibleProducts + moreValue > products.length)
        ? (products.length - visibleProducts)
        : moreValue));
  };

  return (
    <section id="fy">
      <h3>For You</h3>

      <div id="main">
        {products.slice(0, visibleProducts).map((product) => (
          <ForYouItem key={product.id} product={product} />
        ))}
      </div>

      <button id="more" onClick={showMoreHandler}>Show more</button>
    </section>
  );
};

export default ForYouSection;
