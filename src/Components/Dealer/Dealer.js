import React from "react";
import "./Dealer.css";
import dell from "../../images/dell.png";
import hp from "../../images/hp.png";
import apple from "../../images/apple.png";
import huawei from "../../images/huawei.png";
const Dealer = () => {
	return (
		<div className="dealer-container ">
			<h2 className="mx-auto text-center ">Our Dealers</h2>
			<div className="dealer d-flex flex-wrap justify-content-center">
				<img src={dell} alt="" width={175} height={175} className="mx-4 " />
				<img src={hp} alt="" width={175} height={175} className="mx-4 " />
				<img src={apple} alt="" width={175} height={175} className="mx-4 " />
				<img src={huawei} alt="" width={175} height={175} className="mx-4 " />
			</div>
		</div>
	);
};

export default Dealer;
