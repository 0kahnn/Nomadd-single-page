import "./index.css";
const Battery = ({ batteryHandler1, batteryHandler2 }) => {
  return (
    <div className="card height-equal">
      <div className="calender-widget">
        <img src={`https://via.placeholder.com/600x250`} />
        <div className="title">
          <h6 className="mt-2">Battery</h6>
        </div>
        <div className="cal-desc text-center card-body pb-0">
          <div className="d-flex justify-content-center">
            <div className="mr-3 ">
              <button
                className="btn btn-primary"
                onClick={() => batteryHandler1()}
              >
                Button
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
          <div className="d-flex justify-content-center">
            <div className="mr-3 ">
              <button
                className="btn btn-primary"
                onClick={() => batteryHandler2()}
              >
                Button
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
        </div>
      </div>
    </div>
  );
};
export default Battery;
