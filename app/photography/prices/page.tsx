import { prices as recipes, settings, strings } from "../site/site";
import HeaderElement from "../components/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: settings.siteName + " | Prices",
  description:
    "Transparent pricing and creative artistry. 3 portrait packages to choose from.",
};

export default async function Page({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  return (
    <>
      <HeaderElement title={strings.prices} />

      <div className="primary-bg min-h-screen">
        <div className="flex flex-col gap-3 m-auto p-[2em] max-w-[var(--max-width)]">
          <div className="flex max-sm:flex-col gap-3 center">
            <h1>Pricing</h1>
            <h2>Packages</h2>
          </div>
          {recipes.map((recipe, i) => (
            <div key={`pricing-${i}`}>
              {i !== 0 && <hr />}

              <div className="flex justify-between mb-2">
                <div>
                  <h3 className="h2 text-4xl!">{recipe.name}</h3>

                  {recipe.time && (
                    <p>
                      {strings.sessionTime} <b>{recipe.time}</b>
                    </p>
                  )}

                  {recipe.delivery && (
                    <p>
                      {strings.imagesReadyIn} <b>{recipe.delivery}</b>
                    </p>
                  )}
                </div>

                {recipe.price && (
                  <p className="text-lg">
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                    }).format(recipe.price)}
                  </p>
                )}
              </div>

              {(recipe.addons || recipe.includes || recipe.image) && (
                <div className="flex max-sm:flex-col justify-between gap-5">
                  <div className="w-full flex flex-col gap-5">
                    {recipe.includes && (
                      <div>
                        <h4 className="h3">{strings.includes}</h4>
                        <ul className="flex flex-col gap-2">
                          {recipe.includes.map((item, i) => (
                            <li key={`includes-${i}`}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {recipe.addons && (
                      <div>
                        <h4 className="h3">{strings.addons}</h4>
                        <ul className="flex flex-col gap-2">
                          {recipe.addons.map((item, i) => (
                            <li
                              key={`addons-${i}`}
                              className="flex justify-between gap-3"
                            >
                              <span>{item.name}</span>
                              <span>
                                +
                                {new Intl.NumberFormat("en-US", {
                                  style: "currency",
                                  currency: "USD",
                                }).format(item.price)}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {recipe.tips && (
                      <div>
                        <h4 className="h3">{strings.tips}</h4>
                        <ul className="flex flex-col gap-2 list-disc">
                          {recipe.tips.map((item, i) => (
                            <li
                              key={`tips-${i}`}
                              className="flex justify-between gap-3"
                            >
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {recipe.options && (
                <ul className="w-full flex flex-col justify-between my-2 gap-2">
                  {recipe.options.map((item, i) => (
                    <li
                      key={`addons-${i}`}
                      className="flex justify-between gap-3"
                    >
                      <span>{item.name}</span>
                      <span className="text-lg">
                        {new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "USD",
                        }).format(item.price)}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div>
            <p>
              All pricing is for personal use only, for commercial projects and
              licensing <a href={settings.email}>email me directly</a>.
            </p>
          </div>
        </div>

        <p className="color-white text-center italic pb-2">
          Updated December 18, 2025
        </p>
      </div>
    </>
  );
}
