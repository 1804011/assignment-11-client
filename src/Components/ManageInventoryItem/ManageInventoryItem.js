import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ManageInventoryItem.css";
const ManageInventoryItem = (props) => {
	const { name, img, quantity, supplier, price, _id } = props.data;
	const handleDelete = props.handleDelete;
	return (
		<tr className="manage-inventory-item">
			<td className="text-center py-2">{name}</td>
			<td className="text-center py-2">
				<img src={img} height={60} width={60} alt="" />
			</td>
			<td className="text-center py-2 excluded">{supplier}</td>
			<td className="text-center py-2 excluded">{quantity}</td>
			<td className="text-center py-2">{price}</td>
			<td className="text-center py-2">
				<button onClick={() => handleDelete(_id)}>
					<FontAwesomeIcon icon={faTrashAlt} />
				</button>
			</td>
		</tr>
	);
};

export default ManageInventoryItem;
