import { getSlugFromTitle } from "@/src/function.ts";
import { site } from "@/src/site.js";

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
  const item = site.portfolio.find((p) => getSlugFromTitle(p.title) === slug);

  if (!item) return;

  return (
    <div className=" bg-white">
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

      <div className="p-5">
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
                  <dd>
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
    </div>
  );
}
