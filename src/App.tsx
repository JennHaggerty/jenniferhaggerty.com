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
        <div className="styles">
          <div>
            <div>
              <h2>Typography</h2>
            </div>
            <div>
              <h1>Headline h1</h1>
              <h2>Headline h2</h2>
              <h3>Headline h3</h3>
              <h4>Headline h4</h4>
              <h5>Headline h5</h5>
              <h6>Headline h6</h6>
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
          </div>

          <div>
            <div>
              <h2>Typography --Reference</h2>
            </div>
            <div>
              <h1>Universal Studios</h1>
              <h2>Halloween</h2>
              <p>
                HORR
                <a href="">O</a>R
              </p>
              <h5>'24</h5>
              <h4>Nights</h4>
              <h6>こんにちは世界</h6>
            </div>
          </div>

          <div>
            <div>
              <h2>Typography --Example</h2>
            </div>
            <div>
              <header>
                <div>
                  <h1>Jennifer Haggerty</h1>
                  <h2>Frontend / Interface Developer</h2>
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
                  compliant web applications for 10+ years. I take a
                  mobile-first code design approach that iOS and Android users
                  may enjoy. My favorite tools are JavaScript, <a>React</a>,
                  Next.js, TypeScript, SASS/SCSS, MySQL, and Github but you
                  could drop me into any stack.
                </p>
              </div>
              <div className="experience">
                <div className="header">
                  <h4>Interface Developer at CQL via Remote</h4>
                  <h5>1'23-12'24</h5>
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
