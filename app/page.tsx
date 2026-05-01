import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import "./styles.css";
import "./globals.css";

const App = () => {
  return (
    <html lang="en">
      <body className="">
        <div className="text-center pt-5">
          <h1 className="text-[40px] lg:text-[50px] font-bold">
            Jennifer Haggerty
          </h1>
          <h2 className="text-[16px] capitalize mt-5">About me</h2>
          <p className="text-[18px]">
            I am a freelance web developer and photographic artist in Augusta,
            GA.{" "}
          </p>
          <p>
            {" "}
            Click on a link below to view work examples, portfolios, and client
            stories.
          </p>
        </div>
        <div className="flex max-sm:flex-col w-full gap-5 p-5 mt-5">
          <a
            href="/web-development"
            className=" h-[250px] md:h-[350px] lg:h-[550px] xl:h-[800px] text-[22px] w-full bg-center bg-cover transform transition duration-500 hover:scale-125 bg-[url(/images/featured-in-tech.jpg)]  rounded-xl"
          >
            <div className="h-full bg-black/50 text-center content-center text-[32px] lg:text-[40px] font-bold text-[#fff] rounded-xl capitalize">
              Web development
            </div>
          </a>
          <a
            href="/photography"
            className="h-[250px] md:h-[350px] lg:h-[550px] xl:h-[800px] text-[22px] w-full bg-center bg-cover transform transition duration-500 hover:scale-125 bg-[url(/images/winter-queen-2.jpg)]  rounded-xl"
          >
            <div className="h-full bg-black/50 text-center content-center text-[32px] lg:text-[40px] font-bold text-[#fff] rounded-xl capitalize">
              Photography & art
            </div>
          </a>
        </div>
      </body>
      <GoogleTagManager gtmId="GTM-N4K289BV" />
      <GoogleAnalytics gaId="G-7CWF8DMRPZ" />
    </html>
  );
};

export default App;
