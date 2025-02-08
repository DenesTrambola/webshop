import Img1_1 from '../../assets/img/military/1-1.png';

const MilitaryItem = () => {
  return (
    <div className="military-item">
      <img src={Img1_1} loading="lazy" />
      <span>Thermal wash</span>
    </div>
  );
}

export default MilitaryItem;
