import FrequentGroupItem from "./FrequentGroupItem";
import FrequentGroupTitle from "./FrequentGroupTitle";

const FrequentGroup = () => {
  return (
    <div className="group">
      <FrequentGroupTitle />

      <div className="items">
        <FrequentGroupItem />
        <FrequentGroupItem />
        <FrequentGroupItem />
      </div>
    </div>
  );
}

export default FrequentGroup;
