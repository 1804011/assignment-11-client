import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./MyItem.css";
const MyItem = (props) => {
	const { img, name, _id } = props.item;
	const handleDelete = props.handleDelete;
	return (
		<div className="my-item-container d-flex align-items-center shadow">
			<div className="img-container">
				<img src={img} alt="img" />
			</div>
			<div className="left d-flex">
				<h5>{name}</h5>
				<button onClick={() => handleDelete(_id)}>
					<FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
				</button>
			</div>
		</div>
	);
};

export default MyItem;
