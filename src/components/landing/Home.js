import React from 'react'
import authService from "../../services/auth/auth.service";
import visitorService from "../../services/visitors/visitors.service";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Home() {
    const [allusers, setAllUsers] = useState([]);
    const [allvisitors, setAllVisitors] = useState([]);
    const [purpose, setVisitorPurpose] = useState([]);
    const [searchTitle, setSearchTitle] = useState("");
		const [currentVisitor, setCurrentVisitor] = useState([]);
		const [currentIndex, setCurrentIndex] = useState(-1);
    const navigate = useNavigate();

    const initialFormData = {
        fullname: "",
        address: "",
        user_id: "",
        purpose_id: "",
        phone_number: ""
    };


    const [formData, updateFormData] = React.useState(initialFormData);



    useEffect(() => {
        retrieveAllUsers();
        retrieveAllPurpose();
        retrieveAllVisitors();
    }, []);


    const handleChangeAddVisitor = (e) => {
        const { name, value } = e.target;
				console.log(value);
        updateFormData({ ...formData, [name]: value });
    };
    const handleChangeSearchVisitor = (e) => {
        const fullnameText = e.target.value;
        setSearchTitle(fullnameText);
    };

    const handleSubmitAddVisitor = (e) => {
        e.preventDefault()
        authService.addVisitor(formData).then(response => {
            if (response.data) {
                navigate("/home");
                window.location.reload();
            } else {
                console.log(response);
            }
        })
            .catch(err => {

            });
    }

    const retrieveAllUsers = () => {
        authService.getAllUsers()
            .then(res => {
                setAllUsers(res.data.data)
            })
            .catch(err => {
                console.log(err);
            })
    }

    const retrieveAllPurpose = () => {
        authService.getVisitorPurpose()
            .then(res => {
                setVisitorPurpose(res.data.data)
            })
            .catch(err => {
                console.log(err);
            })
    }

    const retrieveAllVisitors = () => {
        visitorService.getAllVisitors()
            .then(res => {
                setAllVisitors(res.data.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    const findByFullname = () => {
        visitorService.findByFullname(searchTitle)
            .then(response => {
                setAllVisitors(response.data.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const clockOut = () => {
			// console.log(visitor);
			visitorService.visitorClockout(currentVisitor)
			.then(response => {
				//console.log(response);
				navigate("/home");
        window.location.reload();
			})
			.catch(err => {
				console.log(err);
			});
    }

		const setActiveVisitor = (visitor,index) => {
			console.log(index);
			console.log(visitor);
			setCurrentVisitor(visitor);
			setCurrentIndex(index);
		}


    return (
        <div>
            <div className='row mt-5'>
                <div className='col-md-10 offset-md-1'>
                    <div className="card p-3 mb-3 bg-white rounded" style={{ boxShadow: "0 0 15px 0 lightblue" }}>
                        <h4 className='mb-4'>Statistics</h4>
                        <div className="row">
                            <div className='col-md-4'>
                                <div className="card text-white bg-primary mb-3">
                                    <div className="card-body d-flex flex-row">
                                        <div className="col-md-6" style={{ verticalAlign: "center" }}>
                                            <i className="fas fa-users" style={{ fontSize: "30px" }}></i>
                                        </div>
                                        <div className="col-md-6 text-right">
                                            <h3>20</h3>
                                            <span style={{ fontWeight: "bold" }}>Total Visitors</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className="card text-white bg-warning mb-3">
                                    <div className="card-body d-flex flex-row">
                                        <div className="col-md-6" style={{ verticalAlign: "center" }}>
                                            <i className="fas fa-sign-in-alt" style={{ fontSize: "30px" }}></i>
                                        </div>
                                        <div className="col-md-6 text-right">
                                            <h3>20</h3>
                                            <span style={{ fontWeight: "bold" }}>Signed In</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className="card text-white bg-danger mb-3">
                                    <div className="card-body d-flex flex-row">
                                        <div className="col-md-6" style={{ verticalAlign: "center" }}>
                                            <i className="fas fa-truck" style={{ fontSize: "30px" }}></i>
                                        </div>
                                        <div className="col-md-6 text-right">
                                            <h3>20</h3>
                                            <span style={{ fontWeight: "bold" }}>Deliveries</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-10 offset-md-1'>
                    <div className="card shadow-lg p-3 bg-white rounded" style={{ boxShadow: "0 0 15px 0 lightblue" }}>
                        <h4 className='mb-4'>Visitors List</h4>
                        <div className='row'>
                            <div className='col-md-6 col-sm-12 col-xs-12 mb-3'>
                                {/* <button type="button" className="btn btn-success" style={{ marginRight: "2px" }}><i className="fas fa-sign-in-alt"></i> Sign In</button> */}
                                <button onClick={clockOut} type="button" className="btn btn-danger" style={{ marginRight: "2px" }}><i className="fas fa-sign-out-alt"></i>Sign Out</button>
                                {/* <button type="button" className="btn btn-danger"><i className="fas fa-trash-alt"></i> Delete</button> */}
                            </div>
                            <div className='col-md-12 col-sm-12 col-xs-12 text-right mb-3'>
                                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">Fill in your details</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <form>
                                                    <div className="form-group">
                                                        <label></label>
                                                        <input onChange={handleChangeAddVisitor} name="fullname" className="form-control" id="fullname" placeholder='FullName' />
                                                    </div>
                                                    <div className="form-group">
                                                        <label></label>
                                                        <input onChange={handleChangeAddVisitor} name="address" className="form-control" id="address" placeholder='Address' />
                                                    </div>

																										<div className="form-group">
                                                        <label></label>
                                                        <input onChange={handleChangeAddVisitor} name="phone_number" className="form-control" id="phone_number" placeholder='Phone No.' />
                                                    </div>
                                                    <div className="form-group">
                                                        <label></label>
                                                        <select onChange={handleChangeAddVisitor} className="form-control" id="user-id" name="user_id">
                                                            <option>whom to visit</option>
                                                            {allusers.map(user => (
                                                                <option value={user.id} key={user.id}>{user.first_name + " " + user.last_name}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                    <div className="form-group">
                                                        <label></label>
                                                        <select onChange={handleChangeAddVisitor} className="form-control" id="purpose-id" name="purpose_id">
                                                            <option>Purpose of visit</option>
                                                            {purpose.map(pur => (
                                                                <option value={pur.id} key={pur.id}>{pur.purpose}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                <button onClick={handleSubmitAddVisitor} type="button" className="btn btn-primary">Save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*<div className='col-md-6 mb-3'>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1"><i className="fas fa-calendar"></i></span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="15 Aug 2022 - 20 Sept 2022" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                            </div>*/}
                            <div className='col-md-6 mb-3'>
                                <div className="input-group mb-3">

                                    <input onChange={handleChangeSearchVisitor} type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1" />
                                    <div className="input-group-prepend">
                                        <button onClick={findByFullname} className="btn btn-primary" id="basic-addon1"><i className="fas fa-search"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 mb-3 text-right'>
                                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"><i className="fas fa-plus"></i> Add Visitor</button>
                            </div>
                            <div className='col-md-12 mt-3'>
                                <div className='table-responsive'>
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Fullname</th>
                                                {/*<th scope="col">Company</th>*/}
																								<th scope="col">Phone</th>
                                                <th scope="col">Whom to see</th>
                                                {/*<th scope="col">Date</th>*/}
                                                <th scope="col">Time In</th>
                                                <th scope="col">Time Out</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {allvisitors &&
                                                allvisitors.map((visitor, index) => (
                                                    <tr onClick={(e) => setActiveVisitor(visitor, index)} key={visitor.id}
																										className={(index  === currentIndex  ? "active" : "")}>
																												<th scope="row">{index + 1}</th>
                                                        <td>{visitor.fullname}</td>
                                                        {/*<td>{visitor.address}</td>*/}
																												<td>{visitor.phone_number}</td>
                                                        <td>{visitor.first_name + " " + visitor.last_name}</td>
                                                        {/*<td>{visitor.date_added}</td>*/}
                                                        <td>{visitor.time_in}</td>
                                                        <td>{visitor.time_out}</td>
                                                    </tr>
                                                )
                                                )
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
