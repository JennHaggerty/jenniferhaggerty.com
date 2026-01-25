import { site } from "../../src/site";
import Section from "../components/Section";
import { getSlugFromTitle } from "../../src/function";
import { strings } from "../../src/strings";

export default function Page() {
  const textMenu = site.menus.find((x) => x.id === "links");

  if (!textMenu) return;

  return (
    <Section>
      <h1 className="h2 w-full! mb-5!">{strings.links}</h1>
      <ul>
        {textMenu.items.map((item, i) => (
          <li
            className="flex w-full"
            key={`links-${i}-${getSlugFromTitle(item.content.toString())}`}
          >
            <a
              href={item.href}
              rel={item.rel}
              target={item.target}
              className="h-[75px] w-full text-center content-center m-auto"
            >
              {item.content}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
