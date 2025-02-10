import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons';

const FooterMobileTheme = () => {
  return (
    <div id="theme">
      <i><FontAwesomeIcon icon={faSun} /></i>
      <a><i><FontAwesomeIcon icon={faMoon} /></i></a>
    </div>
  );
}

export default FooterMobileTheme;
