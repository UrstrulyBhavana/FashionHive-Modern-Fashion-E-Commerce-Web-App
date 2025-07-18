import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Swal from 'sweetalert2';
import { useHistory } from "react-router-dom";

const RegisterArea = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const status = useSelector((state) => state.user.status);
    const userData = useSelector((state) => state.user.user);

    const register = () => {
        if (status) {
            Swal.fire({
                icon: 'question',
                title: `Hello, ${userData.name}`,
                html: 'You are already registered. <br /> You can go to <b>Dashboard</b> or <b>Shop</b> page.',
            }).then((result) => {
                if (result.isConfirmed) {
                    history.push('/my-account');
                }
            });
        } else {
            const cleanName = username.trim().charAt(0).toUpperCase() + username.trim().slice(1);

            dispatch({
                type: "user/register",
                payload: {
                    user: cleanName,
                    email: email,
                    pass: password
                }
            });
            Swal.fire({
                icon: 'success',
                title: 'Registration Successful',
                text: `Welcome ${cleanName}`
            }).then(() => {
                history.push("/my-account");
            });
        }
    };

    useEffect(() => {
        if (status) {
            setUsername('');
            setEmail('');
            setPassword('');
        }
    }, [status]);


    return (
        <section id="login_area" className="ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3 col-md-12 col-sm-12 col-12">
                        <div className="account_form">
                            <h3 className="text-center mb-4 text-dark fw-bold">Register</h3>
                            <form onSubmit={(e) => { e.preventDefault(); register(); }}>
                                <div className="default-form-box">
                                    <label>Username <span className="text-danger">*</span></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={username}
                                        onChange={e => setUsername(e.target.value)}
                                        placeholder="Enter your name"
                                        autoComplete="off"
                                        required
                                    />
                                </div>
                                <div className="default-form-box">
                                    <label>Email <span className="text-danger">*</span></label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        autoComplete="off"
                                        required
                                    />
                                </div>
                                <div className="default-form-box">
                                    <label>Password <span className="text-danger">*</span></label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        placeholder="Create a strong password"
                                        autoComplete="off"
                                        minLength="8"
                                        required
                                    />
                                </div>
                                <div className="login_submit">
                                    <button className="theme-btn-one btn-black-overlay btn_md" type="submit">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RegisterArea;

