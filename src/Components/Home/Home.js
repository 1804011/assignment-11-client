import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Banner from "../Banner/Banner";
import Dealer from "../Dealer/Dealer";
import Footer from "../Footer/Footer";
import Inventory from "../Inventory/Inventory";
import PreLoader from "../PreLoader/PreLoader";
import Question from "../Question/Question";

const Home = ({ loading, setLoading }) => {
	return (
		<div
			className="home-container"
			onLoad={() => {
				setTimeout(() => {
					setLoading(false);
				}, 2000);
			}}
		>
			<div className={loading ? "d-block" : "d-none"}>
				<PreLoader loading={loading}></PreLoader>
			</div>
			<div className={loading ? "d-none" : "d-block"}>
				<Banner></Banner>
				<Inventory></Inventory>
				<Dealer />
				<Question></Question>
				<Footer></Footer>
			</div>
		</div>
	);
};

export default Home;
