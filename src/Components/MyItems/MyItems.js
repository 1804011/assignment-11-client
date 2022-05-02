import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import MyItem from "../MyItem/MyItem";
import "./MyItems.css";
const MyItems = () => {
	const [items, setItems] = useState([]);
	const [user] = useAuthState(auth);
	useEffect(() => {
		fetch(`http://localhost:5000/inventory-items/${user?.email}`)
			.then((res) => res.json())
			.then((data) => setItems(data));
	}, []);
	return (
		<div className="my-items-container">
			{items.map((item) => (
				<MyItem item={item}></MyItem>
			))}
		</div>
	);
};

export default MyItems;
