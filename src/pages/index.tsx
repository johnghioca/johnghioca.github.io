import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-gray-600 text-white font-sans">
      <Head>
        <title>John Ghioca | Portfolio</title>
      </Head>
      <header className="bg-black">
        <div className="xl:max-w-6xl xl:mx-auto xl:flex xl:items-center xl:justify-between">
          <div className="h-16 flex items-center justify-between mx-5 md:mx-12 xl:mx-0">
            <h1
              className="h-10 bg-no-repeat font-serif font-bold indent-12 leading-10 text-2xl
          bg-[url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAACZFBMVEUAn98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An98An9////8I4/tjAAAAzHRSTlMAAQIDBAUGBwkKCw0PEBESExQVFhcYGRobHB0eHyAhIiMlJicoKSorLC4vMDEyMzU3ODk8PT4/QEJDREVGSExNTlFSU1RVVldYWVpbXF1eX2FlZmdoaWpsbW5vcHFzdHV3eHl6e3x+f4CBgoSFhoeIiYqLjI2Oj5KUlZaXmJmdnqCho6SlpqeoqaqrrK6vsLGys7i6u72+wcLDxMbJyszOz9DR0tPU1dbX2Nna29zd3uHi4+Tl5ujp6uvs7e7v8PHy9PX29/r7/P3+/wCSkOtyAAADtklEQVR42mNhQAZC+qw/3z/6zPQbIXQaSrMgKdNxZ7x37+5nBr3/lxkwAEIhZ7nEsXVfQCyNpwx4FNqVni34ATX5Dh6FObFVe6FMLlNJZh0Q48qhBRgK63wSrsGE5LibH+VHMzBsbsY0scon4h5cSInjO8NHIP0Y0+qogCyEOgZthp843KhSsOgMkpASw38cCvvfT2FgYJR+AhXSYGBkuAVhijG/QFIYLl4AZPznS5sFFlHk/guTDBLY+B+hkCn/xTEQ65p1cy2IVmOARWA/c/17JKt9WJZDmLNn1zcCKS2YwsRLuShuDGHYDWWX7XwzFckvD3NRPCOq8fgNlP2+vvHLQjZtBsZ/DLpA7j5UXxsyIJLKdo/sTxd4QCbewwweLYa7CF7FwXKPY1aMTAy7WzEUyjK8QfC+T/z6oWobL8SRnny3bjz6B1fIz/ABSd9SBoZveTN+y4AMVFRkYPh0ffnNWy9ArmXhZpBW+vTtFzSQ/zMw/r/UqZerDmT//MXKxmduzvDp2ZYrd6+x/GUwNFdkE2H5/v3Xb7CVvFytDIW/9gBNXwbiMrJzsvFw/GZj+c5wbrOUvKayqhTcR0dWlYHi+scnpMxlz/KRQXPtgwcHGRgENVRU1JQYLzQ/ZhCd6o3uaUGWVwwq0OA+fpyBQUH4LChOVFrQMiiDLMt1Bi3xl3D+A4Xu5eeAycwByLacg1DnpcNyHpgBV8MFfGsZToMUgoCu2y64uBYPy5MrOl5whcHl5ydch5jMwLC75TQ8lentZWHYpaNtCvVaZuL0+RDWXaDC6p+dabDM7LeQhWFjNntOPJhbZJ12AcxgZLgPzNUMTS2JUH3hm91YGL7Pz9CMWMHAwBHAGczABw47NoZfDAyHGBhqUzRugPiNHl2gMFgQKF50/iaD0BWg6gVBEIVcDAz7gRE6Wx7kL8+lxeYghf/qZjJMiH737BlQ7EPQOlCh8lqeYfNDcCoHKZy7YT4kVM9PyxKelQ0OzNcxIIXc1x0/LYKlEoZb75Ngwb9AIkhudjUopV93TFjAwPRH8lPRQ6iHXeZxqiHKng7GQIm5vSsZGJ4yxHx6IfCPvegSVJ1Nz30V5NKsHWh8sd2iky8Z+Co+XfqcC80einnW+5xRy8cZV/PkTU1P7HYClrncTWB17Ba+dgztVegl7uFTKeEcFhZFF67eYX6pxiUio2/OwrBnwisMhQw/p671d1TitrYGskNAAj82rr2DrbBnYHgxc6a+roq0JPe/vy9f3Lh0/g9yggQAVP08BycrMXQAAAAASUVORK5CYII=)]"
            >
              John Ghioca
            </h1>
            <button
              className="block w-7 h-7 cursor-pointer xl:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {!isOpen && (
                <svg
                  viewBox="0 0 100 100"
                  fill="white"
                  aria-label="Open mobile menu"
                >
                  <rect y="15" width="100" height="10" rx="8"></rect>
                  <rect y="45" width="100" height="10" rx="8"></rect>
                  <rect y="75" width="100" height="10" rx="8"></rect>
                </svg>
              )}
              {isOpen && (
                <svg
                  className="p-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  overflow="visible"
                  stroke="white"
                  stroke-width="10"
                  stroke-linecap="round"
                  aria-label="Close mobile menu"
                >
                  <line x2="100" y2="100" />
                  <line x1="100" y2="100" />
                </svg>
              )}
            </button>
          </div>
          <nav className="xl:w-1/2">
            <ul
              className={`${
                isOpen ? "max-h-56" : "max-h-0"
              } overflow-hidden transition-[max-height] duration-300 xl:max-h-none xl:flex`}
            >
              <li className="block xl:grow">
                <a
                  href="#portfolio-header"
                  className="block bg-[#069] hover:bg-[#00a0dc] focus:bg-[#00a0dc] h-12 leading-12 font-bold text-center transition-[background] duration-600 border-b-black border-b border-solid xl:bg-transparent xl:border-0 xl:h-16 xl:leading-16 -outline-offset-2 xl:rounded-sm"
                >
                  PORTFOLIO
                </a>
              </li>
              <li className="block xl:grow">
                <a
                  href="#about-header"
                  className="block bg-[#069] hover:bg-[#00a0dc] focus:bg-[#00a0dc] h-12 leading-12 font-bold text-center transition-[background] duration-600 border-b-black border-b border-solid xl:bg-transparent xl:border-0 xl:h-16 xl:leading-16 -outline-offset-2 xl:rounded-sm"
                >
                  ABOUT
                </a>
              </li>
              <li className="block xl:grow">
                <a
                  href="#contact-header"
                  className="block bg-[#069] hover:bg-[#00a0dc] focus:bg-[#00a0dc] h-12 leading-12 font-bold text-center transition-[background] duration-600 border-b-black border-b border-solid xl:bg-transparent xl:border-0 xl:h-16 xl:leading-16 -outline-offset-2 xl:rounded-sm"
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <div className="mx-5 md:mx-12 xl:max-w-6xl xl:mx-auto">
          <section
            id="home-header"
            className="bg-black mt-14 p-4 rounded-lg md:mt-18 md:p-8"
          >
            <h2 className="text-3xl font-serif font-bold text-center mx-0 my-5">
              HELLO, MY&nbsp;NAME&nbsp;IS
              <span className="text-[#00a0dc] block">JOHN&nbsp;GHIOCA</span>
            </h2>
            <p className="text-lg text-balance text-center my-5">
              I&apos;m a web developer using popular libraries, such as{" "}
              <span className="text-[#00a0dc] font-bold">React</span> and{" "}
              <span className="text-[#00a0dc] font-bold">Express.js</span>, to
              create websites and apps. Check out some of the companies
              I&apos;ve worked with below.
            </p>
          </section>
          <section
            id="portfolio-header"
            className="bg-black mt-14 p-4 rounded-lg md:mt-18 md:p-8"
          >
            <h2 className="font-serif font-bold text-2xl">PORTFOLIO</h2>
          </section>
          <section
            id="about-header"
            className="bg-black mt-14 p-4 rounded-lg md:mt-18 md:p-8"
          >
            <h2 className="font-serif font-bold  text-2xl">ABOUT</h2>
            <p className="mx-0 my-4">
              While in college I majored in computer science and minored in
              mathematics. Currently I am working at an ad agency creating
              websites that allows the user to experience a site suited for the
              device they are using. I write valid markup that follows current
              web standards in order to ensure visitors have access to the
              content on the page.
            </p>
            <p className="mx-0 my-4">
              From mobile to desktop, I can provide an optimized page for any
              screen size with responsive web design. Feel free to contact me
              below if you would like to get in touch.
            </p>
          </section>
          <section
            id="contact-header"
            className="bg-black mt-14 p-4 rounded-lg md:mt-18 md:p-8"
          >
            <h2 className="font-serif font-bold text-2xl">CONTACT</h2>
            <form
              className="m-0 px-0 pt-4 md:grid md:grid-cols-2 md:gap-x-10  md:gap-y-2"
              action="https://formspree.io/f/mnqwvegb"
              method="post"
            >
              <fieldset className="mb-4 m-0 p-0 border-0">
                <label htmlFor="name" className="block font-bold">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  required
                  className="bg-white text-black w-full pl-2 m-0 px-0 py-1 border-0 rounded-sm"
                />
              </fieldset>
              <fieldset className="mb-4 m-0 p-0 border-0">
                <label htmlFor="email" className="block font-bold">
                  Your Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email@domain.com"
                  required
                  className="bg-white text-black w-full pl-2 m-0 px-0 py-1 border-0 rounded-sm"
                />
              </fieldset>
              <fieldset className="m-0 p-0 border-0">
                <label htmlFor="message" className="block font-bold">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  required
                  className="bg-white overflow-auto block text-black resize-y w-full pl-2 m-0 px-0 py-1 border-0 rounded-sm md:min-h-20"
                ></textarea>
              </fieldset>
              <fieldset className="m-0 p-0 border-0 md:col-span-2">
                <p className="mx-0 mb-4">
                  <small>*All fields are required.</small>
                </p>
                <button
                  className="bg-[#069] hover:bg-[#00a0dc] focus:bg-[#00a0dc] transition-[background] w-30 duration-600 rounded-sm cursor-pointer h-9 leading-9 font-bold inline-block align-middle m-0 px-4 py-0 border-0"
                  type="submit"
                >
                  Send
                </button>
              </fieldset>
            </form>
          </section>
        </div>
      </main>
      <footer className="bg-black mt-14 md:mt-18">
        <div className="text-white text-center mx-5 py-3 md:mx-12 xl:max-w-6xl xl:mx-auto">
          <small>© 2017-{currentYear} John Ghioca</small>
        </div>
      </footer>
    </div>
  );
}
