import { strings } from "@/src/strings";
import Portfolio from "../components/Portfolio";

export default function Page(props: PageProps<"/">) {
  return (
    <Portfolio heading={<h1 className="h2 title">{strings.portfolio}</h1>} />
  );
}
