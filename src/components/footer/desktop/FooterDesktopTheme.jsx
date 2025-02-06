import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons';

const FooterDesktopTheme = () => {
  return (
    <div id="theme">
      <a>
        <i><FontAwesomeIcon icon={faSun} /></i>
        <span>Theme - Light</span>

        <a id="themeMenu">
          <i><FontAwesomeIcon icon={faMoon} /></i>
          <span>Theme - Dark</span>
        </a>
      </a>
    </div>
  );
}

export default FooterDesktopTheme;
