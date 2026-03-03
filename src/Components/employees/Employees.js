import React from "react";
import Axios from 'axios';
import {Link} from 'react-router-dom';
class Employees extends React.Component{
    constructor(props) {
      super(props)
    
      this.state = {
        employees: [],
        errorMessage: ''
      }
    }
    componentDidMount(){
        let dataURL = 'https://gist.githubusercontent.com/AnandP529/27852caccbe1a7f98998f575f6726195/raw/80866f3c10a61cb18fdfecf92f0c5156bbafa8c6/employees.json';
        Axios.get(dataURL).then((response)=>{
            this.setState({
                employees:response.data
            })
        }).catch((err)=>{
            this.setState({
                errorMessage:err
            })
        });
    }
    render(){
        return(
            <React.Fragment>
                <div className="container mt-3">
                        <div className="col">
                            <h2 className="h3 text-primary">Employees</h2>
                            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error perferendis nisi obcaecati, quo nobis beatae reprehenderit impedit dolorum molestias quos delectus hic ab maiores eligendi minus! Maxime labore soluta praesentium!</p>
                        </div>
                        <div className="row">
                            <div className="col">
                                {
                                    this.state.employees.length >0 ?
                                    <React.Fragment>
                                        <table className="table table-hover table-striped table-light text-center text-white">
                                            <thead className="bg-dark">
                                                <tr>
                                                    <th>Emp ID</th>
                                                    <th>Image</th>
                                                    <th>Title</th>
                                                    <th>Name</th>
                                                    <th>Age</th>
                                                    <th>Email</th>
                                                    <th>Address</th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-success text-white">
                                                {this.state.employees.map((employee) => (
                                                    <tr
                                                    key={employee.login.uuid}
                                                    style={{ cursor: "pointer" }}
                                                    onClick={() =>
                                                        this.props.navigate(
                                                        `/employees/${employee.login.uuid}`
                                                        )
                                                    }
                                                    >
                                                    <td>
                                                        {employee.login.uuid.substr(
                                                        employee.login.uuid.length - 4
                                                        )}
                                                    </td>

                                                    <td>
                                                        <img
                                                        src={employee.picture.large}
                                                        width="50"
                                                        height="50"
                                                        alt=""
                                                        className="rounded-circle"
                                                        />
                                                    </td>

                                                    <td>{employee.name.title}</td>
                                                    <td>
                                                        {employee.name.first} {employee.name.last}
                                                    </td>
                                                    <td>{employee.dob.age} yrs</td>
                                                    <td>{employee.email}</td>
                                                    <td>{employee.location.city}</td>
                                                    </tr>
                                                ))}
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
export default Employees;