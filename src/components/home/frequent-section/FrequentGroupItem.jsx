const FrequentGroupItem = ({name, image, price}) => {
  return (
    <div className="item">
      <a>
        <img src={image} loading='lazy' />
        <span className="name">{name}</span>
        {price.old && <small className="old-price">{price.old} ₴</small>}
        <span className={price.old ? 'new-price' : 'price'}>{price.current} ₴</span>
      </a>
    </div>
  );
}

export default FrequentGroupItem;
