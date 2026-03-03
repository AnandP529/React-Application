import React from "react";
import Axios from 'axios';
import { Link } from "react-router-dom";

class EmployeeDetails extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
        selectedEmployee : {},
        errorMessage: ''
      }
    }

    componentDidMount(){
        let employeesId = this.props.params?.id;
        let dataURL = 'https://gist.githubusercontent.com/AnandP529/27852caccbe1a7f98998f575f6726195/raw/80866f3c10a61cb18fdfecf92f0c5156bbafa8c6/employees.json';
        
        Axios.get(dataURL).then((response)=>{
            let employees = response.data;
            let selectedEmployee = employees.find((employee)=>{
                return employee.login.uuid === employeesId
            });

            this.setState({
                selectedEmployee:selectedEmployee
            });

        }).catch((err)=>{
            this.setState({
                errorMessage:err
            })
        });
    }
    
    render() {
        return (
            <React.Fragment>
                <div className="container mt-5">
                    
                    {/* Heading Section */}
                    <div className="row mb-4">
                        <div className="col text-center">
                            <h3 className="text-primary font-weight-bold">
                                Employee Details
                            </h3>
                            <p className="text-muted">
                                Detailed information about the selected employee.
                            </p>
                        </div>
                    </div>

                    {/* Card Section */}
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            {
                                Object.keys(this.state.selectedEmployee).length !== 0 ?
                                <React.Fragment>
                                    <div className="card shadow-lg border-0">
                                    
                                    <div className="card-header bg-primary text-white text-center">
                                        <h4 className="mb-0">
                                            {this.state.selectedEmployee.name.title}{" "}
                                            {this.state.selectedEmployee.name.first}{" "}
                                            {this.state.selectedEmployee.name.last}
                                        </h4>
                                    </div>

                                    <div className="card-body">
                                        <div className="row align-items-center">
                                            
                                            {/* Image */}
                                            <div className="col-md-4 text-center mb-3 mb-md-0">
                                                <img 
                                                    src={this.state.selectedEmployee.picture.large} 
                                                    alt="employee"
                                                    className="img-fluid rounded-circle img-thumbnail shadow"
                                                    style={{width: "180px"}}
                                                />
                                            </div>

                                            {/* Details */}
                                            <div className="col-md-8">
                                                <ul className="list-group list-group-flush"> 
                                                    
                                                    <li className="list-group-item">
                                                        <strong>Age:</strong> {this.state.selectedEmployee.dob.age} Yrs.
                                                    </li>

                                                    <li className="list-group-item">
                                                        <strong>Email:</strong> {this.state.selectedEmployee.email}
                                                    </li>

                                                    <li className="list-group-item">
                                                        <strong>City:</strong> {this.state.selectedEmployee.location.city}
                                                    </li>

                                                    <li className="list-group-item">
                                                        <strong>State:</strong> {this.state.selectedEmployee.location.state}
                                                    </li>

                                                    <li className="list-group-item">
                                                        <strong>Mobile:</strong> {this.state.selectedEmployee.phone}
                                                    </li>

                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="card-footer text-center">
                                        <Link 
                                            to="/employees" 
                                            className="btn btn-primary btn-sm"
                                        >
                                            <i className="fa fa-arrow-left mr-1"></i>
                                            Back
                                        </Link>
                                    </div>
                                </div>
                                </React.Fragment>:null 
                                
                            
                            }
                        </div>
                    </div>

                </div>
            </React.Fragment>
        );
    }
}

export default EmployeeDetails;