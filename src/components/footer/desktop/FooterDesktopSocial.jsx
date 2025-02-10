import YouTubeIcon from '../../../assets/icons/social/youtube.webp';
import FacebookIcon from '../../../assets/icons/social/facebook.webp';
import InstagramIcon from '../../../assets/icons/social/instagram.webp';

const FooterDesktopSocial = () => {
  return (
    <div id="social">
      <div id="icons">
        <a><img src={YouTubeIcon} alt="YouTube" loading="lazy" /></a>
        <a><img src={FacebookIcon} alt="Facebook" loading="lazy" /></a>
        <a><img src={InstagramIcon} alt="Instagram" loading="lazy" /></a>
      </div>

      <span>&copy; prom.ua, 2008-2024</span>
    </div>
  );
}

export default FooterDesktopSocial;
