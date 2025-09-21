import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import { site } from "./site";
import { strings } from "./strings";

const App = () => {
  return (
    <main>
      <Header>
        <div>
          <h1>{site.name}</h1>
          <h2>{site.tagline}</h2>
          <h3 className="h4">Augusta, GA</h3>
          <p>{site.description}</p>
        </div>
        <Nav
          id={site.menus.find((x) => x.location === "header")?.id}
          items={site.menus.find((x) => x.location === "header")?.items}
        />
      </Header>
      <>
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
                <img
                  className="bw-image"
                  src={item["image-src"]}
                  alt={item["image-alt"]}
                />
                <div className="section card-content">
                  <div className="card-title h1">{item.title}</div>
                  <div className="card-tagline h2">{item.tagline}</div>
                  <div className="card-badge h5">{item.date}</div>
                  <img
                    className="card-image"
                    src={item["image-src"]}
                    alt={item["image-alt"]}
                    aria-hidden="true"
                  />
                  <div className="h4">{item.location}</div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </>
    </main>
  );
};

export default App;
