import FrequentGroupItem from "./FrequentGroupItem";
import FrequentGroupTitle from "./FrequentGroupTitle";

const FrequentGroup = ({ category, image, products }) => {
  return (
    <div className="group">
      <FrequentGroupTitle category={category} image={image} />

      <div className="items">
        {products.map(product => <FrequentGroupItem key={product.id} name={product.name} image={product.image} price={product.price} />)}
      </div>
    </div>
  );
}

export default FrequentGroup;
