import MenuBar from "./MenuBar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="page-wrapper compact-wrapper" id="pageWrapper">
        <MenuBar />
        <div className="page-body-wrapper sidebar-icon">
          <div className="page-body" style={{ marginLeft: "0" }}>
            {children}
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default Layout;
