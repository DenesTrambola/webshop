import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import UnlikedImg from "../../assets/icons/heart-basic.png";
import LikedImg from "../../assets/icons/heart-filled.png";
import { toggleLike } from "../../stores/slices/likedSlice";
import { addToCart } from "../../stores/slices/cartSlice";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const likedProducts = useSelector((state) => state.liked.likedProducts);

  const isLiked = likedProducts.includes(product.id);

  return (
    <div className="product-preview-item">
      <a>
        <img src={product.image} alt={product.name} loading="lazy" />
        <span>{product.name}</span>
      </a>

      <span className="ready">
        {product.isAvailable ? "Ready to ship" : "Out of stock"}
      </span>
      {product.price.old && (
        <small className="old-price">{product.price.old} ₴</small>
      )}
      <span className={product.price.old ? "new-price" : "price"}>
        {product.price.current} ₴
      </span>

      <div className="buy">
        <button onClick={dispatch(addToCart(product))} className="buy-btn">
          Buy
        </button>
        <img
          src={isLiked ? LikedImg : UnlikedImg}
          onClick={() => dispatch(toggleLike(product.id))}
          className="fav"
        />
      </div>

      <div className="info">
        <div className="loc">
          <small>{product.store}</small>
          <small>{product.country}</small>
        </div>

        <div className="rating">
          <i>
            <FontAwesomeIcon icon={faCheckDouble} />
          </i>
          <small>{product.rating}%</small>
        </div>
      </div>
    </div>
  );
};

export default Product;
