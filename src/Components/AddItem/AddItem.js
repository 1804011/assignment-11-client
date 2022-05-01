import React, { useRef } from "react";
import "./AddItem.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const AddItem = () => {
	const nameRef = useRef("");
	const priceRef = useRef("");
	const imgRef = useRef("");
	const supplierRef = useRef("");
	const quantityRef = useRef("");
	const descriptionRef = useRef("");
	const [user] = useAuthState(auth);
	const handleSubmit = (e) => {
		e.preventDefault();
		const name = nameRef.current.value;
		const price = priceRef.current.value;
		const img = imgRef.current.value;
		const supplier = supplierRef.current.value;
		const quantity = quantityRef.current.value;
		const description = descriptionRef.current.value;
		const data = {
			name,
			price,
			img,
			supplier,
			quantity,
			description,
			email: user?.email,
		};
		fetch("https://radiant-fortress-71796.herokuapp.com/inventory-items", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data?.acknowledged) {
					alert("successfully added the item");
					nameRef.current.value =
						priceRef.current.value =
						descriptionRef.current.value =
						quantityRef.current.value =
						supplierRef.current.value =
						imgRef.current.value =
							"";
				}
			});
	};
	return (
		<div className="add-item-container">
			<div className="add-item shadow-lg">
				<form onSubmit={handleSubmit}>
					<div className="input">
						<label htmlFor="name">Item Name</label>
						<input type="text" name="name" id="name" ref={nameRef} required />
					</div>
					<div className="input">
						<label htmlFor="img">Item Image url</label>
						<input type="url" name="img" id="img" ref={imgRef} required />
					</div>
					<div className="input">
						<label htmlFor="quantity">Initial Stock Quantity</label>
						<input
							type="number"
							name="quantity"
							id="quantity"
							ref={quantityRef}
							required
						/>
					</div>
					<div className="input">
						<label htmlFor="supplier">Supplier Name</label>
						<input
							type="text"
							name="supplier"
							id="supplier"
							ref={supplierRef}
							required
						/>
					</div>
					<div className="input">
						<label htmlFor="price">Price</label>
						<input
							type="number"
							name="price"
							id="price"
							ref={priceRef}
							required
						/>
					</div>
					<div className="input">
						<label htmlFor="description">Description</label>
						<textarea
							name="description"
							id="description"
							cols="30"
							rows="10"
							placeholder="Enter description"
							ref={descriptionRef}
							required
						></textarea>
					</div>
					<div className="input">
						<input type="submit" value="Add" className="mt-3 py-2" />
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddItem;
