import FooterDesktop from "../components/footer/desktop/FooterDesktop";
import FooterMobile from "../components/footer/mobile/FooterMobile";

const Footer = () => {
  return (
    <>
      <footer>
        <FooterDesktop />
        <FooterMobile />
      </footer>

      <a id="bottom"><div/></a>
    </>
  );
}

export default Footer;
