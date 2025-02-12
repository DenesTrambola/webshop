import FooterDesktopLang from "./FooterDesktopLang";
import FooterDesktopQR from "./FooterDesktopQR";
import FooterDesktopSocial from "./FooterDesktopSocial";
import FooterDesktopNavs from "./FooterDesktopNavs";
import FooterDesktopTheme from "./FooterDesktopTheme";

const FooterDesktop = () => {
  return (
    <section id="desktop">
      <FooterDesktopNavs />

      <div id="other">
        <FooterDesktopQR />
        <FooterDesktopTheme />
        <FooterDesktopLang />
        <FooterDesktopSocial />
      </div>
    </section>
  );
}

export default FooterDesktop;
