import { faHouse, faGripLines, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faUser, faHeart, faCommentDots } from '@fortawesome/free-regular-svg-icons'
import Button from './Button';

const Buttons = () => {
  return (
    <div id="buttons">
      <Button icon={faUser} text="Login" id="login" />
      <Button icon={faHeart} text="Chosen" id="fav" />
      <Button icon={faHouse} text="Home" id="home" />
      <Button icon={faGripLines} text="Catalogue" id="catalog" />
      <Button icon={faCartShopping} text="Cart" id="cart" />
      <Button icon={faCommentDots} text="Chats" id="chat" />
      <Button icon={faUser} text="Account" id="profile" />
    </div>
  );
}

export default Buttons;
