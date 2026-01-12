import { useEffect, useState } from "react";
import "./App.css";
import BlurIcon from "./assets/svgs/blur";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Portfolio from "./components/Portfolio/Portfolio";
import { site } from "./site";
import { renderDrip } from "./function";

const App = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  useEffect(() => {
    renderDrip();
  }, []);

  const textMenu = site.menus.find((x) => x.id === "text-nav");

  return (
    <>
      <Header>
        <div>
          <div className="flex justify-between min-md:mb-1 mt-0!">
            <h1 className="m-0!">{site.name}</h1>
            <p className="align-center max-sm:hidden h4 m-0! align-middle">
              Available for hire
            </p>
            <button
              onClick={() => setShowMenu(!showMenu)}
              className={`min-md:hidden ${showMenu ? "active" : ""}`}
            >
              Menu
            </button>
          </div>
          {showMenu && (
            <Nav
              ariaLive={showMenu ? "polite" : undefined}
              id={textMenu?.id}
              items={textMenu?.items}
              customClassname={`flex flex-col gap-2 py-3 ${textMenu?.customClass}`}
            />
          )}
          <Nav
            id={textMenu?.id}
            items={textMenu?.items}
            customClassname={`max-md:hidden! ${textMenu?.customClass}`}
          />
        </div>
      </Header>
      <main>
        <div className="lg:grid lg:grid-cols-2 mt-8 mb-20 md:my-20 gap-8">
          <div className="m-auto w-full">
            <h2 className="w-full!">{site.tagline}</h2>
            <h3 className="h4">{site.location}</h3>
          </div>
          <div>{site.description}</div>
        </div>
        <Portfolio />
      </main>
      <BlurIcon />
    </>
  );
};

export default App;
