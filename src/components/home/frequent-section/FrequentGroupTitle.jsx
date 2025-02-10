import Title1 from '../../../assets/img/home/frequent/title1.png';

const FrequentGroupTitle = () => {
  return (
    <div className="title">
      <a>
        <img src={Title1} className="example" loading="lazy" />
        <span>Means for cleaning wool</span>
        <span className="arrow">{'>'}</span>
      </a>
    </div>
  );
}

export default FrequentGroupTitle;
