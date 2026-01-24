import { getSlugFromTitle } from "@/src/function.ts";
import { site } from "@/src/site.js";
import CTA from "@/app/components/CTA.tsx";
import Arrow from "@/app/components/svgs/Arrow.tsx";

export async function generateStaticParams() {
  return site.portfolio.map((item) => ({
    slug: getSlugFromTitle(item.title),
  }));
}

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

  if (!item) return;

  return (
    <>
      <div className="bg-white">
        <div className="relative">
          <div className="max-md:hidden absolute top-1/2 left-1/2 -translate-1/2 z-1">
            <h1 className="mx-0!">{item.title}</h1>
            <h2 className="mx-0!">{item.tagline}</h2>
          </div>
          <img
            className="max-md:max-h-[250px] md:max-h-[350px] lg:max-h-[550px] w-full object-cover md:grayscale"
            src={`/${item.featuredImg}`}
            alt={item.imageAlt}
          />
        </div>

        <div className="p-8">
          <div className="md:hidden">
            <h1 className="mx-0!">{item.title}</h1>
            <h2 className="mx-0!">{item.tagline}</h2>
          </div>

          <div className="md:flex gap-10">
            <div className="text-black my-5 md:w-2/3">{item.content}</div>

            <hr className="md:hidden" />

            <div className="text-black my-5 md:w-1/3">
              <dl className="flex flex-col gap-3">
                {item.href && (
                  <>
                    <dt className="uppercase">Website</dt>
                    <dd className="break-all">
                      <a href={item.href}>{item.href}</a>
                    </dd>
                  </>
                )}
                {item.tools && (
                  <>
                    <dt className="uppercase">Tools</dt>
                    <dd>
                      <ul className="flex flex-col">
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

        <div className="my-[60px]">
          <CTA />
        </div>

        <div className="w-full pt-2 bg-[var(--accent)]">
          <h3>More Stories</h3>
          <div className="flex  p-5 flex-col md:flex-row gap-3">
            {previousItem === undefined ? (
              <div className="md:w-1/2"></div>
            ) : (
              <a
                href={`/portfolio/${getSlugFromTitle(previousItem.title)}`}
                rel={previousItem.rel}
                className="md:w-1/2"
              >
                <div className="card h-full">
                  <div className="card-title h1 w-max! text-xl!">
                    {previousItem.title}
                  </div>
                  <img
                    className="card-image h-full!"
                    src={`/${previousItem.thumbnailImg}`}
                    alt={previousItem.imageAlt}
                  />
                  <div className="card-footer items-center w-full! flex bg-white/[90%] px-5 font-bold text-lg">
                    <Arrow customClass="m-0 p-0 rotate-180" /> Previous
                  </div>
                </div>
              </a>
            )}
            {nextItem === undefined ? (
              <div className="md:w-1/2"></div>
            ) : (
              <a
                href={`/portfolio/${getSlugFromTitle(nextItem.title)}`}
                rel={nextItem.rel}
                className="md:w-1/2"
              >
                <div className="card h-full">
                  <div className="card-title h1 w-max! text-xl!">
                    {nextItem.title}
                  </div>
                  <img
                    className="card-image h-full!"
                    src={`/${nextItem.thumbnailImg}`}
                    alt={nextItem.imageAlt}
                  />
                  <div className="card-footer items-center w-full! flex bg-white/[90%] px-5 font-bold text-lg justify-end">
                    Next <Arrow customClass="m-0 p-0" />
                  </div>
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
