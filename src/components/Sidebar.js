import React from "react";
import { Link } from "react-router-dom";


export const SideBar = () => {
    return (
        <div className="Sidebar-container">

            {/* SideBar */}
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/* Sidebar Brand */}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="!#">
                    <div className="sidebar-brand-icon rotate-n-15">
                        {/* <i className="fas fa-laugh-wink"></i> */}
                    </div>
                    <div className="sidebar-brand-text mx-3">PROVIDENCE PUBLIC SCHOOl </div>
                </a>

                {/* Divider */}
                <hr className="sidebar-divider my-0" />

                {/* Nav Item - Dashboard */}
                <li className="nav-item active">
                    <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>&nbsp;
                        <span>Class IX Dashboard</span></a>
                </li>

                {/* Divider */}
                <hr className="sidebar-divider" />

                {/* Heading */}
                <div className="sidebar-heading">
                    Interface
                </div>

                {/*  Nav Item - Pages Collapse Menu  */}
                <li className="nav-item">
                    <a className="nav-link collapsed" href="!#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                        <i className="fas fa-fw fa-users"></i>&nbsp;
                        <span>Students</span>
                    </a>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Student Data:</h6>
                            <Link className="collapse-item" to="/student_info">Students Info</Link>
                            <Link className="collapse-item" to="/register_student">Register a student</Link>
                        </div>
                    </div>
                </li>

                {/*  Nav Item - Utilities Collapse Menu */}
                <li className="nav-item">
                    <a className="nav-link collapsed" href="!#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
                        <i className="fas fa-fw fa-user-tie"></i>&nbsp;
                        <span>Teachers</span>
                    </a>
                    <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Info:</h6>
                            <Link className="collapse-item" to="/homework">Homeworks</Link>
                            <Link className="collapse-item" to="/exam">Examinations</Link>
                        </div>
                    </div>
                </li>

                {/*  Divider  */}
                <hr className="sidebar-divider" />

                {/*  Heading */}
                <div className="sidebar-heading">
                    Addons
                </div>

                {/* Nav Item - Pages Collapse Menu */}
                {/* <li className="nav-item">
                    <a className="nav-link collapsed" href="!#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
                        <i className="fas fa-fw fa-folder"></i>&nbsp;
                        <span>Pages</span>
                    </a>
                    <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Login Screens:</h6>
                            <a className="collapse-item" href="!#">Login</a>
                            <a className="collapse-item" href="!#">Register</a>
                            <a className="collapse-item" href="!#">Forgot Password</a>
                            <div className="collapse-divider"></div>
                            <h6 className="collapse-header">Other Pages:</h6>
                            <a className="collapse-item" href="!#">404 Page</a>
                            <a className="collapse-item" href="!#">Blank Page</a>
                        </div>
                    </div>
                </li> */}

                {/* Nav Item - Charts  */}

                <li className="nav-item">
                    <Link className="nav-link" to="/events">
                        <i className="fas fa-fw fa-calendar-plus"></i>&nbsp;
                        <span>Upcoming Events</span></Link>
                </li>

                {/* Nav Item - Tables */}
                <li className="nav-item">
                    <Link className="nav-link" to="/timetable">
                        <i className="fas fa-fw fa-table"></i>&nbsp;
                        <span>Time Table</span></Link>
                </li>

                {/* Divider */}
                <hr className="sidebar-divider d-none d-md-block" />

                {/* Sidebar Toggler (Sidebar) */}
                <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" id="sidebarToggle"></button>
                </div>
            </ul>

            {/* End of Sidebar  */}
        </div>

    )
}