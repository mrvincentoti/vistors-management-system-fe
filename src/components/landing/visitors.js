import React, { useState, useEffect } from "react";
import authService from "../../services/auth/auth.service";
import visitorService from "../../services/visitors/visitors.service";

export default function Visitors() {
    const user = authService.getCurrentUser();
		const [allvisitors, setAllVisitors] = useState([]);
    const [purpose, setVisitorPurpose] = useState([]);
		useEffect(() => {
        
			authService.getVisitorPurpose()
			.then(res => { 
					setVisitorPurpose(res.data.data)
			})
			.catch(err => {
					console.log(err);
			})
	}, []);

	useEffect(() => {
		visitorService.allVisitors()
		.then(res => {
			console.log(res.data);
			setAllVisitors(res.data.data);
		})
		.catch(err => {
			console.log(err);
		})
	}, []);

    return (
			<div>
				<div className="card p-3 mb-3 bg-white rounded  form-control-lg card-body d-flex flex-row" style={{ boxShadow: "0 0 15px 0 lightblue" }}>
				<span style={{ fontWeight: "bold" }}>LAYER 3 VISITORS LIST</span>

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
							

						</div>
					</div> */}
				</div>
					
				{/* <div className="table-responsive col-md-6">
				<h2 className="card-body">DAILY CLOCKED OUT</h2>
         <table className="table table-striped table table-hover">
									<thead className=" table-hover">
											<tr className="bg-warning">
													<th scope="col">#</th>
													<th scope="col">Fullname</th>
													<th scope="col">Company</th>
													<th scope="col">Added By</th>
													<th scope="col">Date</th>
													<th scope="col">Time In</th>
													<th scope="col">Time Out</th>
													<th scope="col"></th>
											</tr>
									</thead>
									<tbody>
											<tr>
													<th scope="row">1</th>
													<td>Mark</td>
													<td>Otto</td>
													<td>@mdo</td>
													<td>Mark</td>
													<td>Otto</td>
													<td>@mdo</td>
													<td>@mdo</td>
											</tr>
									</tbody>
							</table>
         </div> */}
				

				
				
				{/* <div class="row">
         <div class="table-responsive col-md-6">
					<h2 className="card-body">DAILY CLOCKED IN </h2>
         <table className="table table-striped table table-hover">
									<thead class=" table-hover">
											<tr className="bg-primary">
													<th scope="col">#</th>
													<th scope="col">Fullname</th>
													<th scope="col">Company</th>
													<th scope="col">Added By</th>
													<th scope="col">Date</th>
													<th scope="col">Time In</th>
													<th scope="col">Time Out</th>
													<th scope="col"></th>
											</tr>
									</thead>
									<tbody>
											<tr>
													<th scope="row">1</th>
													<td>Mark</td>
													<td>Otto</td>
													<td>@mdo</td>
													<td>Mark</td>
													<td>Otto</td>
													<td>@mdo</td>
													<td>@mdo</td>
											</tr>
									</tbody>
							</table>
         </div> */}
        
         {/* </div>  */}
				 
				
		  </div>
);
}
                           