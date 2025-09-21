import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import { site } from "./site";
import { strings } from "./strings";

const App = () => {
  return (
    <>
      <Header>
        <h1>{site.name}</h1>
        <h2>{site.tagline}</h2>
        <h3 className="h4">Augusta, GA</h3>
        <Nav
          id={site.menus.find((x) => x.location === "header")?.id}
          items={site.menus.find((x) => x.location === "header")?.items}
        />
      </Header>
      <main>
        <>
          <h3>{strings.summary}</h3>
          <p>{site.description}</p>
        </>
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
                    className="card-image"
                    src={item["image-src"]}
                    alt={item["image-alt"]}
                  />
                  <div className="section">
                    <div className="h5 badge">{item.tagline}</div>
                    <img
                      className="card-image"
                      src={item["image-src"]}
                      alt={item["image-alt"]}
                    />
                    <div className="h4">{item.title}</div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </>
      </main>
    </>
  );
};

export default App;
