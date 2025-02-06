import QRcode from '../../../assets/img/footer/QRcode.webp';

const FooterDesktopQR = () => {
  return (
    <div id="qr">
      <img src={QRcode} alt="QR_code" loading="lazy" />
      <span>Scan the QR code to download the mobile app</span>
    </div>
  );
}

export default FooterDesktopQR;
