import React from "react";
import "./Inventory.css";
import { useState, useEffect } from "react";
import InventoryItem from "../InventoryItem/InventoryItem";
import { Link } from "react-router-dom";
const Inventory = () => {
	const [items, setItems] = useState([]);
	useEffect(() => {
		fetch("http://localhost:5000/inventory-items?limit=6")
			.then((res) => res.json())
			.then((data) => setItems(data));
	}, []);
	return (
		<div className="inventory-container pb-4">
			<h2 className="text-center my-4">Inventory Services</h2>
			<div className="items-container">
				{items.map((item) => (
					<InventoryItem data={item} key={item._id}></InventoryItem>
				))}
			</div>
			<button className="btn btn-primary">
				<Link
					to="manage-inventory"
					style={{ color: "white", textDecoration: "none" }}
				>
					Manage inventory
				</Link>
			</button>
		</div>
	);
};

export default Inventory;
