import { site } from "@/src/site";
import { strings } from "@/src/strings";
import Arrow from "./svgs/Arrow";
import { getSlugFromTitle } from "@/src/function";

interface Props {
  heading?: React.ReactElement | string | undefined;
}

const Portfolio = (props: Props) => {
  const { heading } = props;

  return (
    <div className="portfolio">
      {heading ? heading : <h2 className="title">{strings.portfolio}</h2>}
      <div className="portfolio-gallery">
        {site.portfolio.map((item, i) => (
          <a
            key={strings.portfolio + "=" + i}
            href={`/portfolio/${getSlugFromTitle(item.title)}`}
            rel={item.rel}
          >
            <div className="card">
              <div className="card-title h1">{item.title}</div>
              <img
                className="card-image"
                src={item.thumbnailImg}
                alt={item.imageAlt}
              />
              <div className="card-footer">
                Learn more <Arrow />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
