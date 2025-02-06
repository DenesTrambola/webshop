import FooterDesktopLang from "./FooterDesktopLang";
import FooterDesktopQR from "./FooterDesktopQR";
import FooterDesktopSocial from "./FooterDesktopSocial";
import FooterDesktopTable from "./FooterDesktopTable";
import FooterDesktopTheme from "./FooterDesktopTheme";

const FooterDesktop = () => {
  return (
    <section id="desktop">
      <FooterDesktopTable />

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
