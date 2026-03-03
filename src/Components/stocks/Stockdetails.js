import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class StockDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedStock: null, 
      errorMessage: ""
    };
  }

  componentDidMount() {
    let stockId = this.props.params?.id;

    let dataURL =
      "https://gist.githubusercontent.com/AnandP529/337ce8c1c8be46b1bb1535ce1d9bb62c/raw/d627e79be566e88c87dbff05ae5826c8254de48d/stocks-react";

    axios
      .get(dataURL)
      .then((response) => {
        let stocks = response.data;

        let selectedStock = stocks.find((stock) => {
          return stock.id.toString() === stockId;
        });

        this.setState({
          selectedStock: selectedStock || null   // 🔥 prevent undefined
        });
      })
      .catch((err) => {
        this.setState({
          errorMessage: err.message
        });
      });
  }

  render() {
    const { selectedStock, errorMessage } = this.state;

    return (
      <React.Fragment>
        <div className="container mt-5">

          {/* Heading Section */}
          <div className="row mb-4">
            <div className="col text-center">
              <h3 className="text-primary font-weight-bold">
                Stock Details
              </h3>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, corrupti.
              </p>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-8">

              {/* 🔥 Show error if exists */}
              {errorMessage && (
                <div className="alert alert-danger">
                  {errorMessage}
                </div>
              )}

              {/* 🔥 Show card only if stock exists */}
              <div className="row">
                <div className="col">
                    {
                        selectedStock ? 
                        <React.Fragment>
                            <div className="card shadow-lg border-0">

                            <div className="card-header bg-primary text-white text-center">
                                <h4 className="mb-0">
                                {selectedStock.name}
                                </h4>
                            </div>

                            <div className="card-body">
                                <div className="row">

                                <div className="col-md-12">
                                    <ul className="list-group list-group-flush">

                                    <li className="list-group-item">
                                        <strong>Stock ID:</strong> {selectedStock.id}
                                    </li>

                                    <li className="list-group-item">
                                        <strong>Market:</strong> {selectedStock.market}
                                    </li>

                                    <li className="list-group-item">
                                        <strong>Industry:</strong> {selectedStock.industry}
                                    </li>

                                    <li className="list-group-item">
                                        <strong>Symbol:</strong> {selectedStock.symbol}
                                    </li>

                                    <li className="list-group-item">
                                        <strong>Sector:</strong> {selectedStock.sector}
                                    </li>

                                    </ul>
                                </div>

                                </div>
                            </div>

                            <div className="card-footer text-center">
                                <Link
                                to="/stocks"
                                className="btn btn-primary btn-sm"
                                >
                                <i className="fa fa-arrow-left mr-1"></i>
                                Back
                                </Link>
                            </div>

                            </div>
                        </React.Fragment> : null
                    }
                </div>
              </div>
              
            

            </div>
          </div>

        </div>
      </React.Fragment>
    );
  }
}

export default StockDetails;