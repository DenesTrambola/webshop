import { useNavigate } from "react-router-dom";
import GetUrlByCategory from "../../../utils/GetUrlByCategory";

const FrequentGroupTitle = ({ category, image }) => {
  const navigation = useNavigate();

  const navToCategory = () => {
    console.log(category);
    navigation(`/category/${GetUrlByCategory(category)}`);
  }

  return (
    <div className="title">
      <a onClick={navToCategory}>
        <img src={image} className="example" loading="lazy" />
        <span>{category}</span>
        <span className="arrow">{'>'}</span>
      </a>
    </div>
  );
}

export default FrequentGroupTitle;
