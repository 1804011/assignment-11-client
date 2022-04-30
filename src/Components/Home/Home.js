import React from "react";
import Banner from "../Banner/Banner";
import Dealer from "../Dealer/Dealer";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Inventory from "../Inventory/Inventory";
import Question from "../Question/Question";

const Home = () => {
	return (
		<div className="home-container">
			<Banner></Banner>
			<Inventory></Inventory>
			<Dealer />
			<Question></Question>
			<Footer></Footer>
		</div>
	);
};

export default Home;
