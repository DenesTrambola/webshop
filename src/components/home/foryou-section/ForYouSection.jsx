import { useState } from "react";
import ForYouItem from "./ForYouItem";

const ForYouSection = ({products}) => {
  const moreValue = 12;

  const [visibleProducts, setVisibleProducts] = useState(moreValue);

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
