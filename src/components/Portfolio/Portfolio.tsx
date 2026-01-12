import Arrow from "../../assets/svgs/arrow";
import { site } from "../../site";
import { strings } from "../../strings";

const Portfolio = () => (
  <div>
    <h3 className="h2 w-full! mb-2!">{strings.portfolio}</h3>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-2">
      {site.portfolio.map((item, i) => (
        <a
          key={strings.portfolio + "=" + i}
          href={item.href}
          target={item.target}
          rel={item.rel}
        >
          <div className="card h-full">
            <span className="card-title h1 w-max!">{item.title}</span>
            <img
              className="card-image"
              src={item["image-src"]}
              alt={item["image-alt"]}
            />
            <div className="card-footer items-center w-full! flex bg-white/[90%] px-5">
              Learn more <Arrow className="m-0 p-0" />
            </div>
          </div>
        </a>
      ))}
    </div>
  </div>
);

export default Portfolio;
