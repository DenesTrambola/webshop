import InterestedItem from "./InterestedItem";

const InterestedSection = () => {
  const categories = ["Means for cleaning wool", "Kerosene and gas lamps", "Antiparastic natural", "Woman's fur vests", "Ski, snowboard",
    "Post cards", "Diamond mosaic", "Stylus", "Ski, snowboard", "Accumulators for photo and video cameras",
    "Skates and accessories", "Ski and snowboard clothing", "Radio receivers", "Fishing sled", "Salt warmers",
    "Shorts, pants for hunting and fishing", "Tourist heaters", "Gloves for fishing", "Crowns"];

  return (
    <section id="interested">
      <h3>Might be interested</h3>

      <div id="main">
        {categories.map((category, index) => <InterestedItem key={category} category={category} image={`/images/categories/${index === 0 ? '1' : (index + 10)}.png`} />)}
      </div>
    </section>
  );
}

export default InterestedSection;
