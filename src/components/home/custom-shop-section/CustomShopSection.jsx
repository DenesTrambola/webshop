import CustomShopImg from '../../../assets/img/home/custom-shop/custom-shop.svg';

const CustomShopSection = () => {
  return (
    <section id="searches">
      <div id="custom">
        <div id="custom-shop">
          <img src={CustomShopImg} loading="lazy" />

          <div id="start">
            <span id="text">Do you want to sell on Prom?</span>
            <button>Start today</button>
          </div>
        </div>

        <div id="links">
          <a><span>Go to the company's office</span></a>
          <a><span>Go to personal office</span></a>
        </div>
      </div>
    </section>
  );
}

export default CustomShopSection;
