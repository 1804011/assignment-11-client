import React from "react";
import Banner from "../Banner/Banner";
import Header from "../Header/Header";
import Inventory from "../Inventory/Inventory";

const Home = () => {
	return (
		<div className="home-container">
			<Header></Header>
			<Banner></Banner>
			<Inventory></Inventory>
		</div>
	);
};

export default Home;
