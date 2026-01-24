import Section from "../components/Section";

export default function Layout(props: LayoutProps<"/">) {
  return <Section>{props.children}</Section>;
}
