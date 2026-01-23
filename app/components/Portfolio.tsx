import { site } from "@/src/site.js";
import { strings } from "@/src/strings.js";
import Arrow from "./svgs/Arrow.tsx";
import { getSlugFromTitle } from "@/src/function.ts";

interface Props {
  heading?: React.ReactElement;
}

const Portfolio = (props: Props) => {
  const { heading } = props;

  return (
    <div>
      {heading && heading}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-3 md:gap-2">
        {site.portfolio.map((item, i) => (
          <a
            key={strings.portfolio + "=" + i}
            href={`/portfolio/${getSlugFromTitle(item.title)}`}
            rel={item.rel}
          >
            <div className="card h-full">
              <div className="card-title h1 w-max! text-xl!">{item.title}</div>
              <img
                className="card-image"
                src={item.thumbnailImg}
                alt={item.imageAlt}
              />
              <div className="card-footer items-center w-full! flex bg-white/[90%] px-5 font-bold text-lg">
                Learn more <Arrow customClass="m-0 p-0" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
