import React, { useState, useEffect } from "react";
import visitorService from "../../services/visitors/visitors.service";

export default function Visitors() {
	const [allvisitors, setAllVisitors] = useState([]);
	const [searchTitle, setSearchTitle] = useState("");

	useEffect(() => {
		retrieveVisitors();
	}, []);

	const retrieveVisitors = () => {
		visitorService.allVisitors()
			.then(res => {
				setAllVisitors(res.data.data);
			})
			.catch(err => {
				console.log(err);
			})
	};

	const onChangeSearchTitle = e => {
		const searchTitle = e.target.value;
		setSearchTitle(searchTitle);
	};

	const findByTitle = () => {
		visitorService.findByFullname(searchTitle)
			.then(response => {
				setAllVisitors(response.data.data);
			})
			.catch(e => {
				console.log(e);
			});
	};

	return (
		<div>
			<div className="card p-3 mb-3 bg-white rounded  form-control-lg card-body d-flex flex-row" style={{ boxShadow: "0 0 15px 0 lightblue" }}>
				<span style={{ fontWeight: "bold" }}>VISITORS CLOCK IN HISTORY</span>
			</div>
			<div className="row">
				<div className="col-md-10 offset-md-1">
					<div className="card" style={{ boxShadow: "0 0 15px 0 lightblue" }}>
						<div className="row">
							<div className="col-md-4">
								<div className="input-group mb-3" style={{ padding: "15px" }}>
									<input
										type="text"
										className="form-control"
										placeholder="Search by title"
										value={searchTitle}
										onChange={onChangeSearchTitle}
									/>
									<div className="input-group-append">
										<button
											className="btn btn-outline-secondary"
											type="button"
											onClick={findByTitle}
										>
											Search
										</button>
									</div>
								</div>
							</div>
							</div>
							</div>
							</div>
							</div>
							<div className="col-md-12">
								<div className='table-responsive'>
									<table className="table table-striped">
										<thead>
											<tr>
												<th scope="col">#</th>
												<th scope="col">Fullname</th>
												<th scope="col">Address</th>
												<th scope="col">Whom to See</th>
												<th scope="col">Date</th>
												<th scope="col">Time In</th>
												<th scope="col">Time Out</th>
												<th scope="col"></th>
											</tr>
				</div>
				</div>
				</div>
        <div className="row">
					<div className="col-md-12">
						<div className="card" style={{ boxShadow: "0 0 15px 0 lightblue" }}>
						<div className='table-responsive'>
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Fullname</th>
                                                <th scope="col">Address</th>
                                                <th scope="col">Whom to See</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Time In</th>
                                                <th scope="col">Time Out</th>
                                                <th scope="col"></th>
                                            </tr>
																						
                                        </thead>
																				<tbody>
																				{
																						allvisitors.map((visitor,i) => (
																							<tr><th scope="row">{i + 1}</th>
                                                <td>{visitor.fullname}</td>
                                                <td>{visitor.address}</td>
                                                <td>{visitor.first_name + " " + visitor.last_name}</td>
                                                <td>{visitor.date_added}</td>
                                                <td>{visitor.time_in}</td>
                                                <td>{visitor.time_out}</td>
												<td className='text-right'>
                                                            <a type="button" className="btn btn-primary text-white" style={{ marginRight: "2px" }}><i className="fas fa-sign-out-alt">Sign In</i></a>
                                                        </td>
                                            </tr>
																						)
																						)
																					}
																						</tbody>
                                        <tbody>
																					
                           
                                        </tbody>
                                    </table>
                                </div>
						</div>
					</div>
					{/* <div className="col-md-3">
						<div className="card" style={{ boxShadow: "0 0 15px 0 lightblue" }}>
						<div className='table-responsive'>
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">VISITOR'S DETAILS</th>

                                            </tr>
                                        </thead>
																				<tbody>
																					<td>sdf</td>
																				</tbody>
                                        <tbody>
																					
                           
                                        </tbody>
                                    </table>
                                </div>
							

=======
										</thead>
										<tbody>
											{
												allvisitors.map((visitor, i) => (
													<tr key={visitor.id}>
														<th scope="row">{i + 1}</th>
														<td>{visitor.fullname}</td>
														<td>{visitor.address}</td>
														<td>{visitor.first_name + " " + visitor.last_name}</td>
														<td>{visitor.date_added}</td>
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
>>>>>>> ff49e786411fb2d31fbab2b2eb64f66b119cbede
						</div>
					</div> */}
				</div>
			</div>
		</div>

	);
}
