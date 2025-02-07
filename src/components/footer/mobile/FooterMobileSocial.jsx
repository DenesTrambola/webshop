import YouTubeIcon from '../../../assets/icons/social/youtube.webp';
import FacebookIcon from '../../../assets/icons/social/facebook.webp';
import InstagramIcon from '../../../assets/icons/social/instagram.webp';

const FooterMobileSocial = () => {
  return (
    <div id="social">
      <id id="icons">
        <a><img src={YouTubeIcon} alt="YouTube" loading="lazy" /></a>
        <a><img src={FacebookIcon} alt="Facebook" loading="lazy" /></a>
        <a><img src={InstagramIcon} alt="Instagram" loading="lazy" /></a>
      </id>

      <span id="copy">&copy; prom.ua, 2008-2024</span>
    </div>
  );
}

export default FooterMobileSocial;
