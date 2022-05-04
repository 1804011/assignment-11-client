import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ManageInventoryItem from "../ManageInventoryItem/ManageInventoryItem";
import "./ManageInventory.css";
const ManageInventory = () => {
	const [items, setItems] = useState([]);
	useEffect(() => {
		fetch("http://localhost:5000/inventory-items")
			.then((res) => res.json())
			.then((data) => setItems(data));
	}, []);
	const handleDelete = (id) => {
		const confirmDelete = window.confirm("Do you want to delete?");
		if (confirmDelete) {
			fetch(`http://localhost:5000/manage-inventory/${id}`, {
				method: "DELETE",
				headers: {
					"content-type": "application/json",
				},
			})
				.then((res) => res.json())
				.then((data) => {
					if (data?.acknowledged) {
						const newArr = items.filter((item) => item._id !== id);
						setItems(newArr);
					}
				});
		}
	};
	return (
		<div className="manage-inventory-container d-flex flex-column align-items-center">
			<h2 className="text-center my-5">
				Manage Inventory Items ({items.length})
			</h2>
			<table>
				<tr className="table-header">
					<th className="px-5 py-3 text-center">Name</th>
					<th className="px-5 py-3 text-center">Image</th>
					<th className="px-5 py-3 text-center  excluded">Supplier</th>
					<th className="px-5 py-3 text-center excluded">Quantity</th>
					<th className="px-5 py-3 text-center">Price</th>
					<th className="px-5 py-3 text-center">Action</th>
				</tr>
				{items.map((item) => (
					<ManageInventoryItem
						key={item._id}
						data={item}
						handleDelete={handleDelete}
					></ManageInventoryItem>
				))}
			</table>
			<button className="btn btn-primary add-btn">
				<Link to="/add-item" style={{ textDecoration: "none", color: "white" }}>
					Add new item
				</Link>
			</button>
		</div>
	);
};

export default ManageInventory;
