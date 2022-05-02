import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import MyItem from "../MyItem/MyItem";
import "./MyItems.css";
const MyItems = () => {
	const [items, setItems] = useState([]);
	const [user] = useAuthState(auth);
	const handleDelete = (id) => {
		const deleteConfirm = window.confirm("Do you want to delete?");
		if (deleteConfirm) {
			fetch(`http://localhost:5000/my-items/${id}`, {
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
	useEffect(() => {
		fetch(`http://localhost:5000/inventory-items/${user?.email}`)
			.then((res) => res.json())
			.then((data) => setItems(data));
	}, []);
	return (
		<div className="my-items-container">
			<h1 className="text-center mb-5">My Items ({items.length})</h1>
			{items.map((item) => (
				<MyItem item={item} key={item._id} handleDelete={handleDelete}></MyItem>
			))}
		</div>
	);
};

export default MyItems;
