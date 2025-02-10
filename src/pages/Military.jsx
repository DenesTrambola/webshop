import TopImg from '../assets/img/military/top.webp';
import MilitaryGroup from '../components/military/MilitaryGroup';

const Military = () => {
  return (
    <main id='military-main'>
      <a><div id="top-image"><img id="top-img" src={TopImg} alt="MILITARY PROM" loading="lazy" /></div></a>

      <MilitaryGroup />
      <MilitaryGroup />
      <MilitaryGroup />
    </main>
  );
}

export default Military;
