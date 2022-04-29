import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import inventory from "../../images/inventory.png";
import { Link } from "react-router-dom";
const navLinkStyle = {
	color: "white",
	fontWeight: "600",
};
const Header = () => {
	return (
		<div className="header-container">
			<Navbar
				collapseOnSelect
				expand="lg"
				style={{
					background:
						"linear-gradient(to bottom, #370b6f, #00429b, #006dba, #0095ce, #2dbcdc)",
					background: "linear-gradient(40deg,indigo,purple)",
				}}
				variant="dark"
				sticky="top"
			>
				<Container>
					<Navbar.Brand>
						<Link to="/">
							<img src={inventory} height={30} width={30} />
						</Link>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="ms-auto">
							<Nav.Link as={Link} to="/" style={navLinkStyle}>
								Home
							</Nav.Link>
							<Nav.Link as={Link} to="/manage-inventory" style={navLinkStyle}>
								Manage Inventory
							</Nav.Link>
							<Nav.Link as={Link} to="/about" style={navLinkStyle}>
								About
							</Nav.Link>
							<Nav.Link as={Link} to="/login" style={navLinkStyle}>
								Login
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default Header;
