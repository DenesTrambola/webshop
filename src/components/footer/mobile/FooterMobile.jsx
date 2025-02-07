import FooterMobileLang from "./FooterMobileLang";
import FooterMobileNavs from "./FooterMobileNavs";
import FooterMobileQR from "./FooterMobileQR";
import FooterMobileSocial from "./FooterMobileSocial";
import FooterMobileTheme from "./FooterMobileTheme";

const FooterMobile = () => {
  return (
    <section id="mobile">
      <FooterMobileNavs />
      <FooterMobileLang />

      <div id="other">
        <FooterMobileTheme />
        <FooterMobileQR />
      </div>

      <FooterMobileSocial />
    </section>
  );
}

export default FooterMobile;
