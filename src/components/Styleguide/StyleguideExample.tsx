import EmailIcon from "../../assets/svgs/email";
import GithubIcon from "../../assets/svgs/github";
import LinkedInIcon from "../../assets/svgs/linkedin";
import ResumeIcon from "../../assets/svgs/resume";
import RssIcon from "../../assets/svgs/rss";
import StarIcon from "../../assets/svgs/star";

const StyleguideExample = () => {
  return (
    <div>
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
            I have enjoyed creating and maintaining user-centric, ADA compliant
            web applications for 10+ years. I take a mobile-first code design
            approach that iOS and Android users may enjoy. My favorite tools are
            JavaScript, <a>React</a>, Next.js, TypeScript, SASS/SCSS, MySQL, and
            Github but you could drop me into any stack.
          </p>
        </div>
        <div className="portfolio">
          <h3>Portfolio</h3>
          <div>
            <div className="header ">
              <div>
                <h4>Paula's Choice</h4>
                <h5>'23-'24</h5>
              </div>
              <h6>SFCC</h6>
            </div>
            <p>
              <ul>
                <li>I did a thing.</li>
                <li>I built this thing specifically (or the proto)</li>
                <li>Loved working with React/TS on this component.</li>
                <li>
                  Participated in the tech meetings mostly, some business.
                </li>
                <li>
                  Addressed critical ADA Compliance elements on web and mobile
                  design
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyleguideExample;
