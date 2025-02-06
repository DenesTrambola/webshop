import Item1_1 from '../../../assets/img/home/frequent/item1-1.png';

const FrequentGroupItem = () => {
  return (
    <div className="item">
      <a>
        <img src={Item1_1} loading='lazy' />
        <span className="name">Hair removal brush</span>
        <small className="old-price">555 ₴</small>
        <span className="new-price">282 ₴</span>
      </a>
    </div>
  );
}

export default FrequentGroupItem;
