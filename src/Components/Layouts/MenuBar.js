import logo from "../../assets/images/logo/logo.png";
import logoDark from "../../assets/images/logo/dark-logo.png";

//react router dom
import { Link } from "react-router-dom";

const MenuBar = () => {
  return (
    <div className="page-main-header">
      <div className="main-header-right row m-0">
        <div className="main-header-left">
          <div className="logo-wrapper">
            <Link to="/">
              <img
                className="img-fluid"
                src={logo}
                alt="lvc-logo"
                style={{ maxWidth: "67px" }}
              />
            </Link>
          </div>
          <div className="dark-logo-wrapper">
            <Link to="/">
              <img className="img-fluid" src={logoDark} alt="" />
            </Link>
          </div>
        </div>

        <div className="d-lg-none mobile-toggle pull-right w-auto">
          <i data-feather="more-horizontal" />
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
