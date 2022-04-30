import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import "./Login.css";
import auth from "../../firebase.init";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
const Login = () => {
	const emailRef = useRef("");
	const passwordRef = useRef("");
	const navigate = useNavigate("");
	const [signInWithEmailAndPassword, user, loading, error] =
		useSignInWithEmailAndPassword(auth);
	const handleSubmit = (e) => {
		e.preventDefault();
		const email = emailRef.current.value;
		const password = passwordRef.current.value;
		signInWithEmailAndPassword(email, password);
	};
	if (user) {
		navigate("/");
	}

	return (
		<div className="login-container">
			<div className="login-form shadow-lg">
				<form onSubmit={handleSubmit}>
					<div className="input">
						<h6>Email</h6>
						<input
							type="text"
							name="email"
							id="email"
							required
							ref={emailRef}
						/>
						<span className="error text-danger">
							{error?.message.includes("user") && "*user not found"}
						</span>
					</div>
					<div className="input">
						<h6>Password</h6>
						<input
							type="password"
							name="password"
							id="email"
							required
							ref={passwordRef}
						/>
						<span className="error text-danger">
							{error && !error?.message.includes("user") && "*wrong password"}
						</span>
					</div>
					<input type="submit" value="Login" className="py-2" />
				</form>
				<p className="text-center">
					<small>
						New to this site?
						<span className="ms-1">
							<Link to="/register" style={{ textDecoration: "none" }}>
								Register
							</Link>
						</span>
					</small>
				</p>
			</div>
		</div>
	);
};

export default Login;
