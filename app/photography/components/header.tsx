import { settings } from "../site/site";
import Nav from "./nav";

interface Props {
  title?: string;
}

const HeaderElement = (props: Props) => {
  const { title } = props;

  return (
    <div className="header">
      <div className="outline w-full">
        <div className="flex flex-col m-auto align-middle gap-3">
          <div className="h1">{settings.siteName}</div>
          <Nav customClass="flex gap-5 m-auto align-middle" id="main" />
        </div>
      </div>
    </div>
  );
};

export default HeaderElement;
