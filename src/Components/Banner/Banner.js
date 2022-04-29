import React from "react";
import banner from "../../images/banner.png";
import "./Banner.css";

const Banner = () => {
	return (
		<div className="banner-container">
			<div className="content d-flex">
				<div className="banner-text">
					<h2>Laptop and mobile Inventory Management System</h2>
					<p>
						we offers stock management of different devices such as mobile
						laptops and other electronics devices
					</p>
				</div>
				<div className="banner-img">
					<img src={banner} />
				</div>
			</div>
		</div>
	);
};

export default Banner;
