import { getSlugFromTitle } from "@/src/function";
import { site } from "@/src/site";
import CTA from "@/app/components/CTA";
import Arrow from "@/app/components/svgs/Arrow";
import { Metadata } from "next";

export async function generateStaticParams() {
  return site.portfolio.map((item) => ({
    slug: getSlugFromTitle(item.title),
  }));
}

export const metadata: Metadata = {
  title: site.name,
  description: "A case study on web development",
};

export default async function Page({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const { slug } = await params;

  const items = site.portfolio;
  const item = items.find((p) => getSlugFromTitle(p.title) === slug);
  const itemIndex = items.findIndex((p) => getSlugFromTitle(p.title) === slug);
  const previousItem = items[itemIndex - 1];
  const nextItem = items[itemIndex + 1];

  const horizontalPadding = "px-3! lg:px-8!";
  const verticalPadding = "py-12!";
  const padding = horizontalPadding + " " + verticalPadding;

  if (!item) return;

  return (
    <div className="portfolio-page">
      <div className="header">
        <div className="desktop-title">
          <h1>{item.title}</h1>
          <h2>{item.tagline}</h2>
        </div>
        <img src={`/${item.featuredImg}`} alt={item.imageAlt} />
      </div>

      <div className={padding}>
        <div className="mobile-title">
          <h1>{item.title}</h1>
          <h2>{item.tagline}</h2>
        </div>

        <div className="content">
          <div className="left-column">{item.content}</div>

          <div className="right-column">
            <dl className="flex flex-col gap-2">
              {item.href && (
                <>
                  <dt className="font-bold">Website</dt>
                  <dd className="break-all">
                    <a href={item.href} target="_blank">
                      {item.href}
                    </a>
                  </dd>
                </>
              )}
              {item.tools && (
                <>
                  <dt className="font-bold">Tools</dt>
                  <dd>
                    <ul>
                      {item.tools.map((tool, i) => (
                        <li key={`${slug}-tool-${i}`}>{tool}</li>
                      ))}
                    </ul>
                  </dd>
                </>
              )}
            </dl>
          </div>
        </div>
      </div>

      <div className={padding}>
        <CTA />
      </div>

      <div className="footer">
        <h3 className={horizontalPadding}>More Stories</h3>
        <div className={`more-stories`}>
          {previousItem && (
            <a
              href={`/portfolio/${getSlugFromTitle(previousItem.title)}`}
              rel={previousItem.rel}
              className={nextItem ? "w-1/2" : "w-full"}
            >
              <div className="card">
                <div className="card-title h1">{previousItem.title}</div>
                <img
                  className="card-image"
                  src={`/${previousItem.featuredImg}`}
                  alt={previousItem.imageAlt}
                />
                <div className="card-footer">
                  <Arrow customClass="rotate-180" /> Previous
                </div>
              </div>
            </a>
          )}
          {nextItem && (
            <a
              href={`/portfolio/${getSlugFromTitle(nextItem.title)}`}
              rel={nextItem.rel}
              className={previousItem ? "w-1/2" : "w-full"}
            >
              <div className="card">
                <div className="card-title h1">{nextItem.title}</div>
                <img
                  className="card-image"
                  src={`/${nextItem.featuredImg}`}
                  alt={nextItem.imageAlt}
                />
                <div className="card-footer justify-end">
                  Next <Arrow />
                </div>
              </div>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
