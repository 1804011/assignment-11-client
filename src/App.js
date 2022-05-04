import "./App.css";
import Header from "./Components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import ManageItem from "./Components/ManageItem/ManageItem";
import AddItem from "./Components/AddItem/AddItem";
import ManageInventory from "./Components/ManageInventory/ManageInventory";
import MyItems from "./Components/MyItems/MyItems";
import { useState } from "react";
import PreLoader from "./Components/PreLoader/PreLoader";

function App() {
	const [loading, setLoading] = useState(true);
	return (
		<div
			onLoad={() =>
				setTimeout(() => {
					setLoading(false);
				}, 2000)
			}
		>
			<div className={loading ? "d-block" : "d-none"}>
				<PreLoader loading={loading}></PreLoader>
			</div>
			<Header className={loading ? "d-none" : "d-block"}></Header>
			<Routes className={loading ? "d-none" : "d-block"}>
				<Route path="/" element={<Home />}></Route>
				<Route path="about" element={"about"}></Route>
				<Route path="login" element={<Login />}></Route>
				<Route path="manage-inventory" element={<ManageInventory />}></Route>
				<Route path="register" element={<Signup />}></Route>
				<Route
					path="add-item"
					element={
						<RequireAuth>
							<AddItem></AddItem>
						</RequireAuth>
					}
				></Route>
				<Route
					path="my-items"
					element={
						<RequireAuth>
							<MyItems />
						</RequireAuth>
					}
				></Route>
				<Route
					path="inventory/:id"
					element={
						<RequireAuth>
							<ManageItem></ManageItem>
						</RequireAuth>
					}
				></Route>
				<Route path="*" element={<h1>404 not found</h1>}></Route>
			</Routes>
		</div>
	);
}

export default App;
