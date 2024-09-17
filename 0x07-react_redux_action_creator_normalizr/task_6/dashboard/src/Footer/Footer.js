import { getFullYear } from "../utlis/utils";
import { getFooterCopy } from "../utlis/utils";
import { AppContext } from "../App/AppContext";
import { useContext } from "react";

function Footer() {
  const { user } = useContext(AppContext);
  return (
    <footer>
      {user.isLoggedIn && (
        <p>
          <a href="https://www.youtube.com">Contact us</a>
        </p>
      )}
      <p>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </p>
    </footer>
  );
}

export default Footer;
