import React, { useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

const LoginArea = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const status = useSelector((state) => state.user.status);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

      useEffect(() => {
        if (!status) {
            setEmail("");
            setPassword("");
        }
    }, [status]);

     const login = () => {
        if (status) {
            Swal.fire({ icon: 'info', title: 'Already Logged In', text: 'You are already logged in.' });
            return;
        }

        const namePart = email.split('@')[0];
        const name = namePart.charAt(0).toUpperCase() + namePart.slice(1);

        dispatch({
            type: "user/login",
            payload: { name, email, pass: password }
        });

        setEmail("");
        setPassword("");

        Swal.fire({ icon: 'success', title: 'Login Successful', text: `Welcome ${name}` });
        history.push("/my-account");
    };

    return (
        <section id="login_area" className="ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3 col-md-12 col-sm-12 col-12">
                        <div className="account_form">
                            <h3 className="text-center mb-4 text-dark fw-bold">Login</h3>
                            <form onSubmit={(e) => { 
                                e.preventDefault(); 
                                login();
                             }}
                            >
                                <div className="default-form-box">
                                    <label>Email <span className="text-danger">*</span></label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        autoComplete="off"
                                    />
                                </div>
                                <div className="default-form-box">
                                    <label>Password <span className="text-danger">*</span></label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter your password"
                                        minLength="6"
                                        autoComplete="new-password"
                                    />
                                </div>

                                <div className="login_submit">
                                    <button className="theme-btn-one btn-black-overlay btn_md" type="submit">Login</button>
                                </div>

                                <div className="remember_area">
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="rememberMe" />
                                        <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                                    </div>
                                </div>
                                <Link to="/register" className="theme-btn-one btn-outline-black btn_sm mt-3">Create Your Account?</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginArea;
