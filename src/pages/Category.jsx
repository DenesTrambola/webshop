import { useParams } from "react-router-dom";
import GetCategoryByUrl from "../utils/GetCategoryByUrl";
import Product from "../components/product/Product";
import { useEffect, useState } from "react";

const Category = () => {
  const { category } = useParams();
  const fullCategory = GetCategoryByUrl(category);

  const [products, setProducts] = useState([]);

  useEffect(() => {
      fetch("http://localhost:5000/products")
        .then((res) => res.json())
        .then((data) => {
          const filteredProducts = data.filter(product => product.category === fullCategory);
          setProducts(filteredProducts);
        })
        .catch((error) => console.error("Error loading products: ", error));
    }, []);

  return (
    <main id='category-main'>
      <h1 className="category-group-title">{fullCategory}</h1>

      <div id="category-items">
        {products.map(product => <Product product={product} />)}
      </div>
    </main>
  );
}

export default Category;
