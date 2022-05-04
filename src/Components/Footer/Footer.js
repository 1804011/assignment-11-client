import React from "react";
import "./Footer.css";
import { Button, InputGroup, FormControl } from "react-bootstrap";
const Footer = () => {
	const date = new Date();
	const year = date.getFullYear();
	return (
		<div className="footer-container">
			<div className="email d-flex">
				<div className="left">
					<h4>Sign Up Our Newsletter</h4>
					<p>
						We Offer An Informative Monthly Technology Newsletter - Check It
						Out.
					</p>
				</div>
				<div className="right  ">
					<form>
						<InputGroup>
							<FormControl
								placeholder="Enter Your Email"
								aria-label="Recipient's username"
								aria-describedby="basic-addon2"
							/>
							<Button
								variant="outline-secondary"
								id="button-addon2"
								style={{ color: "white" }}
							>
								Button
							</Button>
						</InputGroup>
					</form>
				</div>
			</div>

			<div className="copyright d-flex justify-content-between">
				<div> &copy; {year} Electronics Inventory - All Rights Reserved.</div>
				<div>Terms & Conditions | Privacy Policy</div>
			</div>
		</div>
	);
};

export default Footer;
