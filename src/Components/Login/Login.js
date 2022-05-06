import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useRef } from "react";
import "./Login.css";
import auth from "../../firebase.init";
import google from "../../images/google.png";

import {
	useSendPasswordResetEmail,
	useSignInWithEmailAndPassword,
	useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Spinner } from "react-bootstrap";
import { toast } from "react-toastify";
const Login = () => {
	const emailRef = useRef("");
	const passwordRef = useRef("");
	const navigate = useNavigate("");

	const [signInWithEmailAndPassword, user, loading, error] =
		useSignInWithEmailAndPassword(auth);
	const [signInWithGoogle, googleUser, googleLoading, googleError] =
		useSignInWithGoogle(auth);
	const [sendPasswordResetEmail, sending, sendingError] =
		useSendPasswordResetEmail(auth);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const email = emailRef.current?.value;
		const password = passwordRef.current?.value;

		await signInWithEmailAndPassword(email, password);
		fetch(" https://radiant-fortress-71796.herokuapp.com/login", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({ email }),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				localStorage.setItem("accessToken", JSON.stringify(data?.accessToken));
			});
	};
	const handleGoogleBtn = () => {
		signInWithGoogle();
	};
	const location = useLocation();
	let from = location.state?.from?.pathname || "/";
	if (user || googleUser) {
		navigate(from, { replace: true });
	}
	if (sending) {
		toast("Password reset email send");
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
					<div className="input mt-3">
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
						<div className="d-flex my-1 align-items-center">
							<span>
								<small>Forgot Password? </small>
							</span>
							<button
								type="button"
								className="btn p-0 m-0"
								onClick={() => {
									sendPasswordResetEmail(emailRef.current.value);
								}}
							>
								<small className="ps-1 text-primary">Reset Password</small>
							</button>
						</div>
					</div>
					{loading && (
						<div className="d-flex justify-content-center my-2">
							<Spinner animation="border" role="status">
								<span className="visually-hidden">Loading...</span>
							</Spinner>
						</div>
					)}
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
				<p className="text-center">----- or -----</p>
				<button
					onClick={handleGoogleBtn}
					className="d-flex py-1 btn align-items-center justify-content-center shadow border-rounded"
				>
					<img src={google} height={36} width={36} alt="google" />
					<span>Continue With Google</span>
				</button>
				<p className="m-0 text-center text-danger">
					{googleError && <small>googleError?.message</small>}
				</p>
			</div>
		</div>
	);
};

export default Login;
