import { site } from "../../site";
import { strings } from "../../strings";

const Portfolio = () => (
  <section>
    <h3>{strings.portfolio}</h3>
    <ul className="grid-list">
      {site.portfolio.map((item, i) => (
        <li key={strings.portfolio + "=" + i}>
          <a
            className="card"
            href={item.href}
            target={item.target}
            rel={item.rel}
          >
            <div className="section card-content">
              <div className="card-title h1">{item.title}</div>
              <div className="card-tagline h2">{item.tagline}</div>
              <img
                className="card-image"
                src={item["image-src"]}
                alt={item["image-alt"]}
              />
            </div>
          </a>
        </li>
      ))}
    </ul>
  </section>
);

export default Portfolio;
