import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';
import ForYou1 from '../../../assets/img/home/foryou/foryou1.png'

const ForYouItem = () => {
  return (
    <div className="item">
      <a>
        <img src={ForYou1} loading="lazy" />
        <span>Notebook Pixus Vix Lite (4897058531602) wn</span>
      </a>

      <span className="ready">Ready to ship</span>
      <small className="old-price">9 553.75 ₴</small>
      <span className="new-price">8 120.69 ₴</span>

      <div className="buy">
        <button>Buy</button>
        <input type="checkbox" className="fav" />
      </div>

      <div className="info">
        <div className="loc">
          <small>wiinshop</small>
          <small>Ukraine</small>
        </div>

        <div className="rating">
          <i><FontAwesomeIcon icon={faCheckDouble} /></i>
          <small>98%</small>
        </div>
      </div>
    </div>
  );
}

export default ForYouItem;
