import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";

const ForYouItem = ({ product }) => {
  return (
    <div className="item">
      <a>
        <img src={product.image} alt={product.name} loading="lazy" />
        <span>{product.name}</span>
      </a>

      <span className="ready">{product.isAvailable ? "Ready to ship" : "Out of stock"}</span>
      {product.price.old && <small className="old-price">{product.price.old} ₴</small>}
      <span className="new-price">{product.price.current} ₴</span>

      <div className="buy">
        <button>Buy</button>
        <input type="checkbox" className="fav" />
      </div>

      <div className="info">
        <div className="loc">
          <small>{product.storeId}</small>
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

export default ForYouItem;
