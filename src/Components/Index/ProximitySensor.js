import "./index.css";
const ProximitySensor = () => {
  return (
    <div className="card height-equal">
      <div className="calender-widget">
        <img src={`https://via.placeholder.com/600x250`} />
        <div className="title">
          <h6 className="mt-2">Proximity Sensor</h6>
        </div>
        <div className="cal-desc text-center card-body pb-0">
          <div className="d-flex justify-content-center">
            <div className="mr-3 w-20">
              <p>Rail</p>
            </div>

            <div className="mb-3 ml-3 w-50 ">
              <label className="switch">
                <input type="checkbox" /> <div></div>
              </label>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="mr-3 w-20">
              <p>Dock</p>
            </div>

            <div className="mb-3 ml-3 w-50 ">
              <label className="switch">
                <input type="checkbox" /> <div></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProximitySensor;
