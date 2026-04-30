import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import "./styles.css";
import "./globals.css";

const App = () => {
  return (
    <html lang="en">
      <body>
        <div className="text-center">
          <h1>Jennifer Haggerty</h1>
          <h2>About me</h2>
          <p>
            I am a freelance web developer and fine art photographer working out
            of Augusta, GA. Click on a link below to view work examples,
            portfolios, and client stories.
          </p>
        </div>
        <div className="flex max-sm:flex-col w-full gap-5 p-5">
          <a
            href="/web-development"
            className="h-[250px] w-full bg-[red] content-center text-center"
          >
            <span className="">Web Development</span>
          </a>
          <a
            href="/photography"
            className="h-[250px] w-full bg-[red] content-center text-center"
          >
            <span className="">Photography & Art</span>
          </a>
        </div>
      </body>
      <GoogleTagManager gtmId="GTM-N4K289BV" />
      <GoogleAnalytics gaId="G-7CWF8DMRPZ" />
    </html>
  );
};

export default App;
