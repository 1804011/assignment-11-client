import "./App.css";
import Header from "./Components/Header/Header";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import ManageItem from "./Components/ManageItem/ManageItem";
import AddItem from "./Components/AddItem/AddItem";
import ManageInventory from "./Components/ManageInventory/ManageInventory";
import MyItems from "./Components/MyItems/MyItems";
import { useEffect, useState } from "react";
import PreLoader from "./Components/PreLoader/PreLoader";
import About from "./Components/About/About";
import Blogs from "./Components/Blogs/Blogs";
import NotFound from "./Components/NotFound/NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
	const [loading, setLoading] = useState(true);
	const location = useLocation();

	return (
		<div>
			{(location.pathname != "/" || !loading) && <Header></Header>}
			<Routes>
				<Route
					path="/"
					element={<Home loading={loading} setLoading={setLoading}></Home>}
				></Route>
				<Route path="about" element={<About />}></Route>
				<Route path="login" element={<Login />}></Route>
				<Route
					path="manage-inventory"
					element={
						<RequireAuth>
							<ManageInventory />
						</RequireAuth>
					}
				></Route>
				<Route path="register" element={<Signup />}></Route>
				<Route path="blogs" element={<Blogs />}></Route>
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
				<Route path="*" element={<NotFound />}></Route>
			</Routes>
			<ToastContainer />
		</div>
	);
}

export default App;
