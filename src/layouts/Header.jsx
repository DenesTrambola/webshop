import TopImg from '../assets/img/header/top.webp';
import HeaderLogo from '../assets/img/header/header-logo.webp';
import SearchBar from '../components/header/SearchBar';
import Buttons from '../components/header/Buttons';
import SignInSection from '../components/header/SignInSection';

const Header = () => {
  return (
    <>
      <a><div id="top"><img src={TopImg} alt="Find out where your order is" loading="lazy" /></div></a>

      <header>
        <a><img src={HeaderLogo} id='header-logo' loading='lazy' /></a>

        <SearchBar />
        <Buttons />
      </header>

      <SignInSection />
    </>
  );
}

export default Header;
