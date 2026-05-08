import { strings } from "../src/strings";
import Portfolio from "../components/Portfolio";
import { Metadata } from "next";
import { site } from "../src/site";

export const metadata: Metadata = {
  title: site.meta.title + " | Clients",
  description: site.meta.brandStatement,
};

export default function Page(props: PageProps<"/">) {
  return (
    <>
      <h1>{strings.portfolio}</h1>
      <Portfolio heading={<h2 className="title">Clients</h2>} />
    </>
  );
}
