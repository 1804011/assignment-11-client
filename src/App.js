import "./App.css";
import Header from "./Components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="about" element={"about"}></Route>
				<Route path="login" element={"login"}></Route>
				<Route path="manage-inventory" element={"manage-inventory"}></Route>
			</Routes>
		</div>
	);
}

export default App;
