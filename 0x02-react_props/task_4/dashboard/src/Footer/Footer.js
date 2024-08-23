import "./Footer.css";
import { getFullYear } from "../utlis/utils";
import { getFooterCopy } from "../utlis/utils";

function Footer() {
  return (
    <footer className="App-footer">
      <p>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </p>
    </footer>
  );
}

export default Footer;
