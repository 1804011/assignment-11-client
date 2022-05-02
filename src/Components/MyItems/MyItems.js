import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import ManageInventoryItem from "../ManageInventoryItem/ManageInventoryItem";
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
		// <div className="my-items-container">
		// 	<h1 className="text-center mb-5">My Items ({items.length})</h1>
		// 	{items.map((item) => (
		// 		<MyItem item={item} key={item._id} handleDelete={handleDelete}></MyItem>
		// 	))}
		// </div>
		<div className="manage-inventory-container d-flex flex-column align-items-center">
			<h2 className="text-center my-5">My Items ({items.length})</h2>
			<table>
				<tr className="table-header">
					<th className="px-5 py-3 text-center">Name</th>
					<th className="px-5 py-3 text-center">Image</th>
					<th className="px-5 py-3 text-center">Supplier</th>
					<th className="px-5 py-3 text-center">Quantity</th>
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
		</div>
	);
};

export default MyItems;
