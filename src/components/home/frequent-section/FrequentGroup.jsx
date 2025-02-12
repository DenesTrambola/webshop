import FrequentGroupItem from "./FrequentGroupItem";
import FrequentGroupTitle from "./FrequentGroupTitle";

const FrequentGroup = ({ category, products }) => {
  return (
    <div className="group">
      <FrequentGroupTitle title={category} />

      <div className="items">
        {products.map(product => <FrequentGroupItem key={product.id} name={product.name} image={product.image} price={product.price} />)}
      </div>
    </div>
  );
}

export default FrequentGroup;
