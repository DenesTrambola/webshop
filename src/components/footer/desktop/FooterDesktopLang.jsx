import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const FooterDesktopLang = () => {
  return (
    <div id="lang">
      <a>
        <i><FontAwesomeIcon icon={faGlobe} /></i>
        <span>English</span>

        <div id="lang-menu">
          <a>
            <i><FontAwesomeIcon icon={faGlobe} /></i>
            <span>Русский</span>
          </a>

          <a>
            <i><FontAwesomeIcon icon={faGlobe} /></i>
            <span>Українська</span>
          </a>

          <a>
            <i><FontAwesomeIcon icon={faGlobe} /></i>
            <span>Magyar</span>
          </a>
        </div>
      </a>
    </div>
  );
}

export default FooterDesktopLang;
