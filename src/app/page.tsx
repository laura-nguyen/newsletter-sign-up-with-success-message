import illustration from "./../assets/images/illustration-sign-up-mobile.svg";
export default function Home() {
  function handleSubmit() {}

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <img src={illustration} alt="sign up mobile" />
      <h1>Stay updated!</h1>
      <p>Join 60,000+ product managers receiving monthly updates on:</p>
      <ul>
        <li>Product discovery and building what matters</li>
        <li>Measuring to ensure updates are a success</li>
        <li>Much more!</li>
      </ul>
      <form action="submit">
        <label htmlFor="email">Email address</label>
        <input type="email" placeholder="Email address" />
        <button type="submit">Subscribe to monthly newsletter</button>
      </form>
      Stay updated! Join 60,000+ product managers receiving monthly updates on:
      Product discovery and building what matters Measuring to ensure updates
      are a success And much more! Email address email@company.com Subscribe to
      monthly newsletter Thanks for subscribing! A confirmation email has been
      sent to ash@loremcompany.com. Please open it and click the button inside
      to confirm your subscription. Dismiss message
    </main>
  );
}
