const FrequentGroupTitle = ({ title, image }) => {
  return (
    <div className="title">
      <a>
        <img src={image} className="example" loading="lazy" />
        <span>{title}</span>
        <span className="arrow">{'>'}</span>
      </a>
    </div>
  );
}

export default FrequentGroupTitle;
