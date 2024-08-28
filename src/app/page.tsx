import Image from "next/image";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* <Image
        src="/assets/images/illustration-sign-up-mobile.svg"
        alt="logo"
        width={500}
        height={500}
        className="block md:hidden"
      ></Image> */}
      <img
        src="/assets/images/illustration-sign-up-mobile.svg"
        alt=""
        className="block w-full md:hidden"
      />
      <h1 className="text-3xl font-semibold">Stay updated!</h1>
      <p>Join 60,000+ product managers receiving monthly updates on:</p>
      <ul>
        <li>Product discovery and building what matters</li>
        <li>Measuring to ensure updates are a success</li>
        <li>Much more!</li>
      </ul>
      <form action="submit">
        <label htmlFor="email">Email address</label>
        <input type="email" placeholder="email@company.com" />
        <button type="submit" className="text-white bg-dark-slate-grey">
          Subscribe to monthly newsletter
        </button>
      </form>
      {/* Thanks for subscribing! A confirmation email has been sent to
      ash@loremcompany.com. Please open it and click the button inside to
      confirm your subscription. Dismiss message */}
    </main>
  );
}
