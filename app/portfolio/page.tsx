import { strings } from "@/src/strings";
import Portfolio from "../components/Portfolio";
import Section from "../components/Section";

export default function Page(props: PageProps<"/">) {
  return (
    <Section>
      <Portfolio
        heading={<h1 className="h2 w-full! mb-2!">{strings.portfolio}</h1>}
      />
    </Section>
  );
}
