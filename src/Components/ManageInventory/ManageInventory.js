import React, { useEffect, useState } from "react";
import "./ManageInventory.css";
const ManageInventory = () => {
	const [items, setItems] = useState([]);
	useEffect(() => {
		fetch("http://localhost:5000/inventory-items")
			.then((res) => res.json())
			.then((data) => setItems(data));
	}, []);
	return <div className="manage-inventory-container">items:{items.length}</div>;
};

export default ManageInventory;
