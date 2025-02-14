import { useParams } from "react-router-dom";
import GetCategoryByUrl from "../utils/GetCategoryByUrl";
import Product from "../components/product/Product";
import useFetchProducts from "../hooks/useFetchProducts";

const Category = () => {
  const { category } = useParams();
  const fullCategory = GetCategoryByUrl(category);

  const {products, loading, error} = useFetchProducts(`http://localhost:5000/products?category=${fullCategory}`);

  return (
    <main id='category-main'>
      <h1 className="category-group-title">{fullCategory}</h1>

      <div id="category-items">
        {loading && <p>Loading products...</p>}
        {error && <p>Error: {error}</p>}

        {!loading && !error &&
          products.map(product => <Product key={product.id} product={product} />)
        }
      </div>
    </main>
  );
}

export default Category;
