import React from "react";
import Axios from 'axios';
import { Link } from "react-router-dom";

class Stocks extends React.Component{
    constructor(props) {
      super(props)
      this.state={
        stocks : [],
        errorMessage:''
      }
      
    }
    componentDidMount(){
        let dataURL= 'https://gist.githubusercontent.com/AnandP529/337ce8c1c8be46b1bb1535ce1d9bb62c/raw/d627e79be566e88c87dbff05ae5826c8254de48d/stocks-react';
        Axios.get(dataURL).then((response)=>{
            this.setState({
                stocks : response.data
            });
        }).catch((err)=>{
            this.setState({
                errorMessage:err
            });
        });
    }
    render(){
        return(
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <p className="h3">Stocks</p>
                            <p className="lead text-primary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Accusantium culpa consequatur molestiae soluta doloribus. Enim, aliquam illo! Laudantium, quia distinctio.</p>
                        </div>    
                    </div>
                    <div className="row">
                        <div className="col">
                                {
                                    this.state.stocks.length>0 ?
                                    <React.Fragment>
                                        <table className="table table-hover table-striped text-white table-light">
                                            <thead className="bg-dark text-white">
                                                <tr>
                                                    <th>Stock Id</th>  
                                                    <th>Stock Name</th>
                                                    <th>Stock Market</th>
                                                    <th>Stock Industry</th>
                                                    <th>Stock Symbol</th>
                                                    <th>Stock Sector</th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-success text-white">
                                                {
                                                    this.state.stocks.map((stock)=>{
                                                        return(
                                                            <tr key={stock.id}>
                                                                <td>{stock.id.substr(stock.id.length-4)}</td>
                                                                <td>
                                                                    <Link to={`/stocks/${stock.id}`}  className="text-primary font-weight-bold">{stock.name}</Link>
                                                                </td>
                                                                <td>{stock.market}</td>
                                                                <td>{stock.industry}</td>
                                                                <td>{stock.symbol}</td>
                                                                <td>{stock.sector}</td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </React.Fragment>:null
                                }
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default Stocks;