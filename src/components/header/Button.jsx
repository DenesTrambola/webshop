import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({icon, text, id}) => {
  return (
    <div className="button" id={id}>
      <a>
        <i><FontAwesomeIcon icon={icon} /></i>
        <span>{ text }</span>
      </a>
    </div>
  )
}

export default Button;
