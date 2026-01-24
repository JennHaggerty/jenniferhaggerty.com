import { site } from "@/src/site.js";
import Section from "../components/Section.tsx";

export default function Layout(props: LayoutProps<"/">) {
  return <Section>{props.children}</Section>;
}
