"use client";
export default function Home() {
  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log(e.target.value);
  };
  return (
    <main className="flex min-h-screen flex-col gap-4">
      <img
        src="/assets/images/illustration-sign-up-mobile.svg"
        alt=""
        className="block w-full md:hidden"
      />
      <section className="p-6 flex flex-col gap-6">
        <h1 className="text-[2.25rem] font-bold">Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul className="list-image-[url('/assets/images/icon-list.svg')] text-sm flex flex-col gap-2 ml-6">
          <li>Product discovery and building what matters</li>
          <li>Measuring to ensure updates are a success</li>
          <li>And much more!</li>
        </ul>

        <form onSubmit={handleSubmit} className="flex flex-col">
          <label className="text-xs font-bold mb-2" htmlFor="email">
            Email address
          </label>
          <input
            type="email"
            className="border-[1px] charcoal-grey rounded-md p-4 text-sm"
            placeholder="email@company.com"
          />
          <button
            type="submit"
            className="text-white bg-dark-slate-grey p-4 text-sm rounded-md mt-6 font-semibold"
          >
            Subscribe to monthly newsletter
          </button>
        </form>
      </section>
      {/* Thanks for subscribing! A confirmation email has been sent to
      ash@loremcompany.com. Please open it and click the button inside to
      confirm your subscription. Dismiss message */}
    </main>
  );
}
