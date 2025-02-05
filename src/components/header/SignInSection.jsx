import SignInHand from '../../assets/img/header/sign-in-hand.webp';

const SignInSection = () => {
  return (
    <section id="sign-in">
      <img src={SignInHand} loading="lazy" />

      <div id="text">
        <big>Hi!</big>
        <small>Log in and use Prom to the fullest!</small>
      </div>

      <div id="buttons">
        <button id="login">Login</button>
        <button id="signup">Sign Up</button>
      </div>
    </section>
  );
}

export default SignInSection;
