import MilitaryItem from "./MilitaryItem";

const MilitaryGroup = () => {
  return (
    <section className="military-group">
      <span className="military-group-title">Military Group Title</span>

      <div className="military-items">
        <MilitaryItem />
        <MilitaryItem />
        <MilitaryItem />
        <MilitaryItem />
        <MilitaryItem />
        <MilitaryItem />
        <MilitaryItem />
        <MilitaryItem />
      </div>
    </section>
  );
}

export default MilitaryGroup;
