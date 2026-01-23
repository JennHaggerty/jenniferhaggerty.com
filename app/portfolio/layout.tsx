import { site } from "@/src/site.js";
import Section from "../components/Section.tsx";

export default function Layout(props: LayoutProps<"/">) {
  return (
    <>
      <Section>{props.children}</Section>

      <Section customClass={`md:flex mb-10`}>
        <h2 className="m-0! md:w-3/4! align-center">
          Ready to get the site you have always wanted?
        </h2>
        <a
          href={`mailto:${site.adminEmail}`}
          className="md:w-1/4! block! text-2xl! text-center align-center min-h-[150px]"
        >
          Get started here
        </a>
      </Section>
    </>
  );
}
