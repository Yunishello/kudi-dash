import React from 'react';
import { Routes, Link, Route } from 'react-router-dom';

export default function SideNav() {
    return (
        <>
        <hr/>
            <Link to="dashboard" className="text-decoration-none">
                <div className="row px-3 justify-content-between align-items-center">
                    <div className="col-md-2">
                        <span className="fas fa-tachometer-alt text-secondary"></span>
                    </div>
                    <div className="col-md-10 py-2">
                        <span className="text-secondary text-decoration-none text-uppercase">Dashboard</span>
                    </div>
                </div>
            </Link>
            <hr />
            <Link to="dashboard" className="text-decoration-none">
                <div className="row px-3 justify-content-between align-items-center">
                    <div className="col-md-2">
                        <span className="fas fa-users text-secondary"></span>
                    </div>
                    <div className="col-md-10 py-2">
                        <span className="text-secondary text-decoration-none text-uppercase">Users</span>
                    </div>
                </div>
            </Link>
            <hr />
            <Link to="dashboard" className="text-decoration-none">
                <div className="row px-3 justify-content-between align-items-center">
                    <div className="col-md-2">
                        <span className="fas fa-list text-secondary"></span>
                    </div>
                    <div className="col-md-10 py-2">
                        <span className="text-secondary text-decoration-none text-uppercase">Transactions</span>
                    </div>
                </div>
            </Link>
            <hr />
            <Link to="dashboard" className="text-decoration-none">
                <div className="row px-3 justify-content-between align-items-center">
                    <div className="col-md-2">
                        <span className="fas fa-user-cog text-secondary"></span>
                    </div>
                    <div className="col-md-10 py-2">
                        <span className="text-secondary text-decoration-none text-uppercase">Add Admin</span>
                    </div>
                </div>
            </Link>
            <hr />
            <Link to="dashboard" className="text-decoration-none">
                <div className="row px-3 justify-content-between align-items-center">
                    <div className="col-md-2">
                        <span className="fas fa-user text-secondary"></span>
                    </div>
                    <div className="col-md-10 py-2">
                        <span className="text-secondary text-decoration-none text-uppercase">My Profile</span>
                    </div>
                </div>
            </Link>
            <hr/>
            <Link to="dashboard" className="text-decoration-none">
                <div className="row px-3 pb-3 justify-content-between align-items-center">
                    <div className="col-md-2">
                        <span className="fas fa-sign-out-alt text-secondary"></span>
                    </div>
                    <div className="col-md-10 py-2">
                        <span className="text-secondary text-decoration-none text-uppercase">Logout</span>
                    </div>
                </div>
            </Link>
        </>
    )
}
