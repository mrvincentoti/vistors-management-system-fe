import React, { useEffect, useState } from 'react'
import authService from "../../services/auth/auth.service";
import visitorService from "../../services/visitors/visitors.service";
import { useNavigate } from "react-router-dom";
import Select from 'react-select';



const Welcome = ({ sendCurrentPage }) => {
    const navigate = useNavigate();
    const [allusers, setAllUsers] = useState([]);
    const [purpose, setVisitorPurpose] = useState([]);
    const [query] = useState("");
    const [data, setData] = useState([]);
    const [currentId, setCurrentId] = useState([]);
    const [currentTag, setCurrentTag] = useState([]);
    const [message, setMessage] = useState("");


    useEffect(() => {
        visitorService.signedInVisitors(query)
            .then(response => {
                setData(response.data.data);
            })
    }, [query]);

    useEffect(() => {
        retrieveAllUsers();
        retrieveAllPurpose();
        sendCurrentPage("welcome");
    }, []);

    const initialFormData = {
        fullname: "",
        address: "",
        user_id: "",
        purpose_id: "",
        phone_number: ""
    };


    const [formData, updateFormData] = React.useState(initialFormData);


	const handleChangeAddVisitor = (e) => {
		const { name, value } = e.target;
		console.log(name, value);
		updateFormData({ ...formData, [name]: value });
	};

	const handleChangeAddVisitor2 = (user) => {
		const { name, value } = user;
		updateFormData({ ...formData, [name]: value });
	};
	
	const handleSubmitAddVisitor = (e) => {
		e.preventDefault()
		authService.addVisitor(formData).then(response => {
				if (response.data) {
						navigate("/welcome");
						window.location.reload();
						window.location.reload("/home");
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

    const clockOut = () => {
        visitorService.clockoutTagNumber(currentId, currentTag)
            .then(response => {
                if (response.data.message === 'updated successfully') {
                    navigate("/welcome");
                    window.location.reload();
                    window.location.reload("/home");
                } else {
                    setMessage(response.data.message);
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    const visitorId = (id) => {
        visitorService.getVisitorByVisitorId(id)
            .then(response => {
                setCurrentId(response.data.data[0])
            })
    }

		

    const handleCurrentTag = (e) => {
        setCurrentTag(e.target.value)
    }



    return (
        <div className='p-3 rounded mt-5 mb-5'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 card' style={{ padding: "50px", boxShadow: "0 0 15px 0 lightblue" }}>
                    <div className='row mt-1 mb-5'>
                        {/* <div className='col-md-6 text-center'>
                            <div className='logo'>
                                <img
                                    className='mb-4 layer3-logo'
                                    src="data:image/jpeg;base64,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"
                                    alt="Layer3" />
                            </div>
                            <div className='welcome d-none d-sm-block'>
                                <h1>Welcome!</h1>
                                <span>Scan QR Code <br />for touch free sign in</span>
                            </div>
                            <div className='welcome d-block d-sm-none d-md-none d-xl-none mb-5 mt-5'>
                                <h1>Welcome!</h1>
                            </div>
                            <div className='qrcode d-none d-sm-block'>
                                <img src='/dist/img/qr.png' style={{ width: "70%" }} />
                            </div>
                        </div> */}
                        <div className='col-md-12 my-auto text-center'>
                            <div className='logo'>
                                <img
                                    className='mb-4 layer3-logo'
                                    src="data:image/jpeg;base64,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"
                                    alt="Layer3" />
                            </div>
                            <div className='row'>
                                {/* <div className='col-md-12 col-sm-12 col-xs-12 mb-5'>
                                    <span style={{ fontWeight: "bold" }}>Alternatively, select from the following options:</span>
                                </div> */}

                                {/* Sign-in Modal & Button */}
                                <div className=' text-right mb-3'>
                                    <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-xl" role="document">
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
																															
																														<Select placeholder={<div>whom to see</div>} className='text-left'
                                                                options={allusers.map(user => (
                                                                    { label: user.first_name+ " " +user.last_name, value: user.id , name: "user_id"}
                                                                ))}

                                                                onChange={user => handleChangeAddVisitor2(user)}

                                                            />
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
                                <div className='col-md-12 col-sm-12 col-xs-12 mb-5'>
                                    <h1>Welcome!</h1>
                                </div>
                                <div className='col-md-12 col-sm-12 col-xs-12 mb-2'>
                                    <button data-toggle="modal" data-target="#exampleModal" type="button" className="btn btn-primary btn-lg btn-block" style={{ height: "80px" }}>SIGN IN</button>
                                </div>



                                {/* Sign-out Modal & Button */}

                                <div className=' text-right mb-3'>
                                    <div className="modal fade" id="exampleModal1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-xl" role="document">
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
                                                            <Select
                                                                options={data.map(pur => (
                                                                    { label: pur.fullname, value: pur.id }
                                                                ))}

                                                                onChange={pur => visitorId(pur.value)}

                                                            />

                                                        </div>
                                                        <div className="form-group">
                                                            <label></label>
                                                            <input onChange={(e) => { handleCurrentTag(e) }} name="number" className="form-control" id="tag_number" placeholder='Tag No.' />
                                                        </div>

                                                    </form>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                    <button onClick={clockOut} type="button" className="btn btn-primary">Sign Out</button>
                                                </div>
                                                {message && (
                                                    <div className="form-group mt-3 text-center">
                                                        <div className="alert alert-danger" role="alert">
                                                            {message}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                <div className='col-md-12 col-sm-12 col-xs-12'>
                                    <button data-toggle="modal" data-target="#exampleModal1" type="button" className="btn btn-danger btn-lg btn-block" style={{ height: "80px" }}>SIGN OUT</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome;
