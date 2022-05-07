import React, { useEffect, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import "./ManageItem.css";
const ManageItem = (props) => {
	const { id } = useParams();
	const restockRef = useRef("");
	const [item, setItem] = useState({});
	useEffect(() => {
		fetch(` https://radiant-fortress-71796.herokuapp.com/inventory/${id}`)
			.then((res) => res.json())
			.then((data) => {
				setItem(data);
			});
	}, []);
	const { img, name, supplier, price, quantity } = item;
	const handleSubmit = (e) => {
		e.preventDefault();
		const restock = parseInt(restockRef.current.value);
		if (restock <= 0) return;
		fetch(` https://radiant-fortress-71796.herokuapp.com/inventory/${id}`, {
			method: "PUT",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({
				quantity: quantity + restock,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data?.acknowledged) {
					setItem({ ...item, quantity: quantity + restock });
					restockRef.current.value = "";
				}
			});
	};
	const handleDeliver = () => {
		fetch(` https://radiant-fortress-71796.herokuapp.com/inventory/${id}`, {
			method: "PUT",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({
				quantity: quantity - 1,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data?.acknowledged) {
					setItem({ ...item, quantity: quantity - 1 });
				}
			});
	};
	return (
		<div className="manage-item-container">
			<div className="manage-item d-flex shadow-lg">
				<div className="img-container">
					<img src={img} alt="img" />
				</div>
				<div className="info-container p-3">
					<h3 className="m-0 p-0">{name}</h3>
					<h6 className="p-0 m-0">
						<small>{supplier}</small>
					</h6>
					<p className="mt-3 mb-0">Stock Size: {quantity}</p>
					<h6 className="p-0 m-0 mb-2">Price: ${price}</h6>
					<button
						className="btn btn-primary mb-2"
						onClick={handleDeliver}
						disabled={quantity <= 0}
					>
						{quantity <= 0 ? "Sold" : "Deliver"}
					</button>
					<form onSubmit={handleSubmit}>
						<label htmlFor="restock">Add To Stock: </label>
						<input
							type="number"
							name="restock"
							id="restock"
							className="py-1"
							min={1}
							ref={restockRef}
							required
						/>
						<input type="submit" value="Add" className="py-2" />
					</form>
					<button className="btn btn-primary inventory">
						<Link
							to="/manage-inventory "
							style={{ color: "white", textDecoration: "none" }}
						>
							Manage Inventory
						</Link>
					</button>
				</div>
			</div>
		</div>
	);
};

export default ManageItem;
