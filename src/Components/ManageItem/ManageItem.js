import React from "react";
import { useParams } from "react-router-dom";
import "./ManageItem.css";
const ManageItem = (props) => {
	const { id } = useParams();
	return <div className="manage-item-container">manage item:{id}</div>;
};

export default ManageItem;
