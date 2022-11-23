import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


// Main Page Component
export const Content = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className="content-container">
            {/*  Page Heading  */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Class IX</h1>
                <a href="!#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
            </div>


            <div className="row">
                {/*Tasks Card Example */}
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-primary shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Classwork Tasks Submitted</div>
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-auto">
                                            <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
                                        </div>
                                        <div className="col">
                                            <div className="progress progress-sm mr-2">
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*Pending Portions Card Example */}
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-warning shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Pending Portions</div>
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-auto">
                                            <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">70%</div>
                                        </div>
                                        <div className="col">
                                            <div className="progress progress-sm mr-2">
                                                <div className="progress-bar bg-warning" role="progressbar" style={{ width: "70%" }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-book fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*Tech Fest Card Example */}
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-success shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Tech Fest Projects</div>
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-auto">
                                            <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">78%</div>
                                        </div>
                                        <div className="col">
                                            <div className="progress progress-sm mr-2">
                                                <div className="progress-bar bg-success" role="progressbar" style={{ width: "78%" }} aria-valuenow="78" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*Pending Books from Library Card Example */}
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-info shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Library Defaults</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">15</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-book-open fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>


            <div className="row">


                <div className="col-xl-8 col-lg-7">
                    <div className="card shadow mb-4">
                        {/*Card Header - Dropdown */}
                        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 className="m-0 font-weight-bold text-primary">Class Average Performance Overview</h6>
                            <div className="dropdown no-arrow">
                                <a className="dropdown-toggle" href="!#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                                    <div className="dropdown-header">Dropdown Header:</div>
                                    <a className="dropdown-item" href="!#">Action</a>
                                    <a className="dropdown-item" href="!#">Another action</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="!#">Something else here</a>
                                </div>
                            </div>
                        </div>
                        {/*Card Body */}
                        <div className="card-body">
                            <div className="chart-area">
                                <canvas id="myBarChart"></canvas>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-xl-4 col-lg-5">
                    <div className="card shadow mb-4">
                        {/*Card Header - Dropdown */}
                        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 className="m-0 font-weight-bold text-primary">Subject-wise Average Performance Analysis</h6>
                            <div className="dropdown no-arrow">
                                <a className="dropdown-toggle" href="!#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                                    <div className="dropdown-header">Dropdown Header:</div>
                                    <a className="dropdown-item" href="!#">Action</a>
                                    <a className="dropdown-item" href="!#">Another action</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="!#">Something else here</a>
                                </div>
                            </div>
                        </div>
                        {/*Card Body */}
                        <div className="card-body">
                            <div className="chart-pie pt-4 pb-2">
                                <canvas id="myPieChart"></canvas>
                            </div>
                            <div className="mt-4 text-center small">
                                <span className="mr-2">
                                    <i className="fas fa-circle text-primary"></i> Maths
                                </span>
                                <span className="mr-2">
                                    <i className="fas fa-circle text-success"></i> Biology
                                </span>
                                <span className="mr-2">
                                    <i className="fas fa-circle text-info"></i> Physics
                                </span>
                                <span className="mr-2">
                                    <i className="fas fa-circle text-warning"></i> Chemistry
                                </span>
                                <span className="mr-2">
                                    <i className="fas fa-circle text-danger"></i> Social Science
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="col-lg-6 mb-4">
                    {/*Card- Projects */}
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Techfest Projects </h6>
                        </div>
                        <div className="card-body">
                            <h4 className="small font-weight-bold">Windmill <span className="float-right">20%</span></h4>
                            <div className="progress mb-4">
                                <div className="progress-bar bg-danger" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <h4 className="small font-weight-bold">Commercial Vechicles Tracking<span className="float-right">40%</span></h4>
                            <div className="progress mb-4">
                                <div className="progress-bar bg-warning" role="progressbar" style={{ width: "40%" }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <h4 className="small font-weight-bold">Rainwater Harvesting<span className="float-right">60%</span></h4>
                            <div className="progress mb-4">
                                <div className="progress-bar" role="progressbar" style={{ width: "60%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <h4 className="small font-weight-bold">Aurdino car<span className="float-right">80%</span></h4>
                            <div className="progress mb-4">
                                <div className="progress-bar bg-info" role="progressbar" style={{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <h4 className="small font-weight-bold">Smart Solar Lamp<span className="float-right">64%</span></h4>
                            <div className="progress mb-4">
                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: "64%" }} aria-valuenow="64" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <h4 className="small font-weight-bold">Biowaste Diesel Production<span className="float-right">80%</span></h4>
                            <div className="progress mb-4">
                                <div className="progress-bar bg-info" role="progressbar" style={{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <h4 className="small font-weight-bold">smart Traffic Signalling System<span className="float-right">Complete!</span></h4>
                            <div className="progress mb-4">
                                <div className="progress-bar bg-success" role="progressbar" style={{ width: "100%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <h4 className="small font-weight-bold">Pollution Monitoring Software <span className="float-right">Complete!</span></h4>
                            <div className="progress">
                                <div className="progress-bar bg-success" role="progressbar" style={{ width: "100%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 mb-4">
                    <div className="card">
                        <div className="card-body p-0 d-flex">
                            <div className="dashboard-custom-date-picker">
                                <DatePicker inline selected={startDate} onChange={(date: Date) => setStartDate(date)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
