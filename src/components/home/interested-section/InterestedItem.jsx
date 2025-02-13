const InterestedItem = ({category, image}) => {
  return (
    <div className="item">
      <a>
        <img src={image} loading="lazy" />
        <span>{category}</span>
      </a>
    </div>
  );
}

export default InterestedItem;
