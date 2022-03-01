import Battery from "../../Components/Index/Battery";
import Motors from "../../Components/Index/Motors";
import ProximitySensor from "../../Components/Index/ProximitySensor";
import SolarPanel from "../../Components/Index/SolarPanel";
import Layout from "../../Components/Layouts/Layout";

const Index = () => {
  const updateHandler = () => {
    console.log("update handler");
  };

  const batteryHandler1 = () => {
    console.log("batteryHandler1");
  };
  const batteryHandler2 = () => {
    console.log("batteryHandler2");
  };

  const solarPanelHandler1 = () => {
    console.log("solarPanelHandler1");
  };

  const solarPanelHandler2 = () => {
    console.log("solarPanelHandler2");
  };

  const motorsHandler1 = () => {
    console.log("motorsHandler1");
  };

  const motorsHandler2 = () => {
    console.log("motorsHandler2");
  };

  const motorsHandler3 = () => {
    console.log("motorsHandler3");
  };

  const motorsHandler4 = () => {
    console.log("motorsHandler4");
  };

  return (
    <Layout>
      <div className="container">
        <div className="d-flex justify-content-center bg-white mb-3 pt-3">
          <div className="mr-3">
            <button className="btn btn-primary" onClick={() => updateHandler()}>
              Update
            </button>
          </div>

          <div className="mb-3 ml-3 w-50">
            <input
              className="form-control"
              type="text"
              placeholder="Placeholder"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-lg-6 ">
            <Battery
              batteryHandler1={batteryHandler1}
              batteryHandler2={batteryHandler2}
            />
          </div>
          <div className="col-sm-12 col-lg-6 ">
            <ProximitySensor />
          </div>
          <div className="col-sm-12 col-lg-6 ">
            <SolarPanel
              solarPanelHandler1={solarPanelHandler1}
              solarPanelHandler2={solarPanelHandler2}
            />
          </div>
          <div className="col-sm-12 col-lg-6 ">
            <Motors
              motorsHandler1={motorsHandler1}
              motorsHandler2={motorsHandler2}
              motorsHandler3={motorsHandler3}
              motorsHandler4={motorsHandler4}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Index;
