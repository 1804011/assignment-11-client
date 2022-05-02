import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./MyItem.css";
const MyItem = ({ item }) => {
	const { img, name } = item;
	return (
		<div className="my-item-container d-flex align-items-center shadow">
			<div className="img-container">
				<img src={img} alt="img" />
			</div>
			<div className="left d-flex">
				<h5>{name}</h5>
				<button>
					<FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
				</button>
			</div>
		</div>
	);
};

export default MyItem;
