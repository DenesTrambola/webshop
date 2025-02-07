import QRcode from '../../../assets/img/footer/QRcode.webp';

const FooterMobileQR = () => {
  return (
    <div id="qr">
      <img src={QRcode} alt="QR_code" />
      <span>Scan the QR code to download the mobile app</span>
    </div>
  );
}

export default FooterMobileQR;
