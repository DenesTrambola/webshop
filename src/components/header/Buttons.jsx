import {
  faHouse,
  faGripLines,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import {
  faUser,
  faHeart,
  faCommentDots,
} from "@fortawesome/free-regular-svg-icons";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../stores/slices/authSlice";
import { useNavigate } from "react-router-dom";

const Buttons = () => {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginHandler = () => {
    if (user) dispatch(logout());
    navigate("/login");
  };

  const cartHandler = () => {
    navigate("/cart");
  };

  return (
    <div id="buttons">
      <Button
        icon={faUser}
        text={user?.username ?? "Login"}
        id="login"
        clickHandler={loginHandler}
      />
      <Button icon={faHeart} text="Chosen" id="fav" />
      <Button icon={faHouse} text="Home" id="home" clickHandler={null} />
      <Button
        icon={faGripLines}
        text="Catalogue"
        id="catalog"
        clickHandler={null}
      />
      <Button
        icon={faCartShopping}
        text="Cart"
        id="cart"
        clickHandler={cartHandler}
      />
      <Button icon={faCommentDots} text="Chats" id="chat" clickHandler={null} />
      <Button icon={faUser} text="Account" id="profile" clickHandler={null} />
    </div>
  );
};

export default Buttons;
