import { cv, strings } from "../site/site";
import HeaderElement from "../components/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Augusta GA's portrait photographer | 30901",
  description:
    "Jennifer is a fine art portrait photographer from Germany living and working in Augusta, GA.",
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
      <HeaderElement />
      <div className="primary-bg min-h-screen">
        <div className=" max-w-[var(--max-width)] mx-auto">
          <div className="col-2-img-right">
            <div className="col col-text flex flex-col gap-2">
              <div className="flex max-sma:flex-col gap-3 center">
                <h1>About</h1>
                <h2>the Photographer</h2>
              </div>
              {cv.map((item, i) => (
                <div key={`cv-item-${i}`}>
                  {item.title}
                  {item.content}
                </div>
              ))}
            </div>
            <div className="col col-image">
              <img src={`/images/ophelia-1.jpg`} alt="Ophelia in the waters" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
