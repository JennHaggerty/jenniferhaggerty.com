import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import "./styles.css";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photographer & Web Developer in Augusta, GA 30901",
  description:
    "Jennifer bring photographic art and javaScript web development to the CSRA.",
  keywords:
    "photography, art, photographer, artist, web development, javaScript developer, georgia, augusta, ga, csra",
};

const App = () => {
  return (
    <html lang="en">
      <body className="">
        <main>
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
              Click on a link below to view work examples, portfolios, and
              client stories.
            </p>
          </div>
          <div className="flex max-sm:flex-col w-full gap-5 p-5 mt-5">
            <a
              href="/web-development"
              className=" h-[250px] md:h-[350px] lg:h-[550px] xl:h-[800px] text-[22px] w-full bg-center bg-cover transform transition duration-500 hover:scale-125 bg-[url(/images/featured-in-tech.jpg)]  rounded-xl"
            >
              <div className="h-full bg-black/50 text-center content-center text-[32px] lg:text-[40px] font-bold text-[#fff] rounded-xl capitalize">
                <h3>Web development</h3>
              </div>
            </a>
            <a
              href="/photography"
              className="h-[250px] md:h-[350px] lg:h-[550px] xl:h-[800px] text-[22px] w-full bg-center bg-cover transform transition duration-500 hover:scale-125 bg-[url(/images/winter-queen-2.jpg)]  rounded-xl"
            >
              <div className="h-full bg-black/50 text-center content-center text-[32px] lg:text-[40px] font-bold text-[#fff] rounded-xl capitalize">
                <h3>Photography & art</h3>
              </div>
            </a>
          </div>
        </main>
      </body>
      <GoogleTagManager gtmId="GTM-N4K289BV" />
      <GoogleAnalytics gaId="G-7CWF8DMRPZ" />
    </html>
  );
};

export default App;
