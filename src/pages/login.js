import React, { useState } from 'react';
import axios from 'axios';

export default function Login() {

    const [name, setName] = useState({name: ''});
    const [pass, setPass] = useState({pass: ''});

    let handleChangeName = (e) => {
        let input = e.target.value;
        setName({name: input});
    }

    let handleChangePass = (e) => {
        let input = e.target.value;
        setPass({pass: input});
    }
    // verifing user
    let handleSubmit = (e) => {
        axios.post('/login', {
            name: {name},
            pass: {pass}
        })
        .then((res) => {
            console.log(res);
            if (res.data.Details === undefined) {
                alert('the provided credential doesn\'t match');
                window.location.href = '/'
            }else {
                alert('You are Logged In, Please Proceed to Dashboard!');
                const resp = JSON.stringify(res.data.Details);
                sessionStorage.setItem("Details", resp);
                window.location.href = './dashboard';
            }
        });
        e.preventDefault();
    }
    return (
        <>
            {/* Login Container Start*/}
            <div className="container-fluid row mt-5">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <div className="card bg-light mt-5 p-4 pt-5">
                        {/* Form For The Login */}
                            <form onSubmit={(e) => handleSubmit(e)} className="container form-group">
                                <div className="row form-group">
                                    <div className="col-md-4 col-4"></div>
                                    <div className="col-md-4 col-4 d-flex align-items-center justify-content-between">
                                        <img height="70" 
                                            width="70" 
                                            src="https://app.kudipot.com/logo.png" 
                                            className="rounded" 
                                        />
                                    </div>
                                    <div className="col-md-4 col-4"></div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-md-1 d-flex align-items-center justify-content-between">
                                        <span className="fas fa-user"></span>
                                    </div>
                                    <div className="col-md-11">
                                        <input type="text" className="form-control" onChange={(e) => handleChangeName(e)} placeholder="Admin Username" autoComplete="true"/>
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-md-1 d-flex align-items-center justify-content-between">
                                        <span className="fas fa-lock"></span>
                                    </div>
                                    <div className="col-md-11">
                                        <input type="password" className="form-control" onChange={(e) => handleChangePass(e)} placeholder="********************************" />
                                    </div>
                                </div>
                                <div className="mb-0">
                                    <button type="submit" className="btn btn-dark btn-block">Login</button>
                                </div>
                            </form>
                            {/* Form End */}
                    </div>
                </div>
                <div className="col-md-4"></div>
            </div>
            {/* Login End */}
        </>
    )
}
