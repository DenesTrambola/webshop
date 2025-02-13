import { useNavigate } from "react-router-dom";
import GetUrlByCategory from "../../../utils/GetUrlByCategory";

const InterestedItem = ({ category, image }) => {
  const navigation = useNavigate();

  const navToCategory = () => {
    navigation(`/category/${GetUrlByCategory(category)}`);
  }

  return (
    <div className="item">
      <a onClick={navToCategory}>
        <img src={image} loading="lazy" />
        <span>{category}</span>
      </a>
    </div>
  );
}

export default InterestedItem;
