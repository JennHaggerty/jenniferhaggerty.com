import { useState } from "react";
import "./App.css";
import StarIcon from "./assets/svgs/star";
import EmailIcon from "./assets/svgs/email";
import ResumeIcon from "./assets/svgs/resume";
import GithubIcon from "./assets/svgs/github";
import RssIcon from "./assets/svgs/rss";
import LinkedInIcon from "./assets/svgs/linkedin";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <main>
      <section>
        <h1>Style Guide</h1>
        <div className="flex flex-col md:flex-row justify-around">
          <div>
            <div>
              <h2>Typography</h2>
            </div>
            <div className="">
              <div className="h1">Headline h1</div>
              <div className="h2">Headline h2</div>
              <div className="h3">Headline h3</div>
              <div className="h4">Headline h4</div>
              <div className="h5">h5</div>
              <div className="h6">Headline h6</div>
            </div>
          </div>
          <div>
            <div>
              <h2>Typography --Reference</h2>
            </div>
            <div>
              <div className="h1">Universal Studios</div>
              <div className="h2">Halloween</div>
              <div className="h5">'24</div>
              <div className="h6">こんにちは世界</div>
              <p>
                HORR
                <a href="">O</a>R
              </p>
              <div className="h4">Nights</div>
            </div>
            <img
              className="flex"
              src="./src/assets/images/hhn24.jpg"
              alt="the universal halloween horror nights 2024 green flannel shirt"
            />
          </div>
        </div>
        <div>
          <h3>Extras</h3>
          <div>
            <a href="#">Link</a>
          </div>
          <p>
            Paragraph with a <a href="#">Link</a>.
          </p>
          <button onClick={() => setCount((count) => count + 1)}>
            button click count is {count}
          </button>
        </div>
      </section>
      <section>
        <div className="w-full">
          <div>
            <h2>Typography --Example</h2>
          </div>
          <div>
            <header>
              <div>
                <div className="h1">Jennifer Haggerty</div>
                <div className="h2">Frontend / Interface Developer</div>
              </div>
              <nav id="contact">
                <ul>
                  <li>
                    <a
                      href="mailto:thejenniferhaggerty@gmail.com"
                      aria-label="Email Jennifer"
                    >
                      <EmailIcon className="icon-link" />

                      <StarIcon className="star" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="./assets/jennifer_haggerty_interface_developer.pdf"
                      aria-label="Download Jennifer's resume"
                      target="_blank"
                    >
                      <ResumeIcon className="icon-link" />

                      <StarIcon className="star" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/JennHaggerty"
                      aria-label="Github"
                      rel="external"
                      target="_blank"
                    >
                      <GithubIcon className="icon-link" />

                      <StarIcon className="star" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://jennhaggerty.github.io"
                      aria-label="Follow the blog"
                      rel="external"
                      target="_blank"
                    >
                      <RssIcon className="icon-link" />

                      <StarIcon className="star" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/jennifer-haggerty-01915556"
                      aria-label="LinkedIn"
                      rel="external"
                      target="_blank"
                    >
                      <LinkedInIcon className="icon-link" />

                      <StarIcon className="star" />
                    </a>
                  </li>
                </ul>
              </nav>
            </header>
            <div>
              <h3>Summary</h3>
              <p>
                I have enjoyed creating and maintaining user-centric, ADA
                compliant web applications for 10+ years. I take a mobile-first
                code design approach that iOS and Android users may enjoy. My
                favorite tools are JavaScript, <a>React</a>, Next.js,
                TypeScript, SASS/SCSS, MySQL, and Github but you could drop me
                into any stack.
              </p>
            </div>
            <div className="experience">
              <h3>Experience</h3>
              <div>
                <div className="header">
                  <div>
                    <h4>Interface Developer at CQL Corp</h4>
                    <h5>1'23-12'24</h5>
                  </div>
                  <h6>remote</h6>
                </div>
                <p>
                  <ul>
                    <li>
                      Built bespoke React component libraries with TypeScript
                      using Salesforce to serve world-wide loyalty programs.
                    </li>
                    <li>
                      Customized Shopify Liquid themes with designer provided
                      Figma comps to ensure brand cohesion.
                    </li>
                    <li>
                      Integrated Google A/B tests with Salesforce promotions and
                      customer segments.
                    </li>
                    <li>
                      Established a turn-key solution using XML markup to
                      support automated import into the Salesforce ecosystem.
                    </li>
                    <li>
                      Addressed critical ADA Compliance HTML/CSS3 elements on
                      web and mobile design
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default App;
