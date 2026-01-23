import { strings } from "@/src/strings.js";
import Portfolio from "../components/Portfolio.tsx";

export default function Page(props: PageProps<"/">) {
  return (
    <Portfolio
      heading={<h1 className="h2 w-full! mb-2!">{strings.portfolio}</h1>}
    />
  );
}
