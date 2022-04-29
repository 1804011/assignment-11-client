import React from "react";
import "./Inventory.css";
import { useState, useEffect } from "react";
import InventoryItem from "../InventoryItem/InventoryItem";
const Inventory = () => {
	const [items, setItems] = useState([]);
	useEffect(() => {
		fetch("items.json")
			.then((res) => res.json())
			.then((data) => setItems(data));
	}, []);
	return (
		<div className="inventory-container">
			<h2 className="text-center my-4">Inventory Services</h2>
			<div className="items-container">
				{items.map((item) => (
					<InventoryItem data={item}></InventoryItem>
				))}
			</div>
		</div>
	);
};

export default Inventory;
