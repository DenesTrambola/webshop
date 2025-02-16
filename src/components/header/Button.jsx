import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({ icon, text, id, clickHandler }) => {
  return (
    <div className="button" id={id}>
      <a onClick={clickHandler}>
        <i>
          <FontAwesomeIcon icon={icon} />
        </i>
        <span>{text}</span>
      </a>
    </div>
  );
};

export default Button;
