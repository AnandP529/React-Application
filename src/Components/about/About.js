import React from "react";

class About extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container mt-5">

          {/* Page Title */}
          <div className="row mb-4">
            <div className="col text-center">
              <h2 className="text-primary font-weight-bold">
                About This Application
              </h2>
              <p className="text-muted">
                React Router | Class Components | Axios | Bootstrap 4
              </p>
            </div>
          </div>

          {/* Content Section */}
          <div className="row justify-content-center">
            <div className="col-md-10">

              <div className="card shadow-lg border-0">

                <div className="card-header bg-dark text-white">
                  <h4 className="mb-0">
                    <i className="fa fa-info-circle mr-2"></i>
                    Project Overview
                  </h4>
                </div>

                <div className="card-body">

                  <p className="lead">
                    This is a React application built using class components,
                    React Router v6, Axios for API calls, and Bootstrap 4 for styling.
                  </p>

                  <hr />

                  <div className="row text-center mt-4">

                    <div className="col-md-4 mb-3">
                      <div className="p-3 border rounded shadow-sm">
                        <i className="fa fa-users fa-2x text-primary mb-2"></i>
                        <h5>Employees Module</h5>
                        <p className="text-muted small">
                          Displays employee list and detailed information using dynamic routing.
                        </p>
                      </div>
                    </div>

                    <div className="col-md-4 mb-3">
                      <div className="p-3 border rounded shadow-sm">
                        <i className="fa fa-line-chart fa-2x text-success mb-2"></i>
                        <h5>Stocks Module</h5>
                        <p className="text-muted small">
                          Displays stock market data with dynamic stock detail pages.
                        </p>
                      </div>
                    </div>

                    <div className="col-md-4 mb-3">
                      <div className="p-3 border rounded shadow-sm">
                        <i className="fa fa-code fa-2x text-danger mb-2"></i>
                        <h5>React Routing</h5>
                        <p className="text-muted small">
                          Uses React Router v6 with wrapper functions for class components.
                        </p>
                      </div>
                    </div>

                  </div>

                </div>

                <div className="card-footer text-center bg-light">
                  <small className="text-muted">
                    © 2026 React Practice Project | Built with ❤️ using React
                  </small>
                </div>

              </div>

            </div>
          </div>

        </div>
      </React.Fragment>
    );
  }
}

export default About;