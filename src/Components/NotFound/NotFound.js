import react from "react";
import "./NotFound.css";
const NotFound = () => {
	return (
		<div className="not-found">
			<h1 className="text-center">404</h1>
			<h1 className="text-center">PAGE NOT FOUND</h1>
			<p className="text-center">
				The page you are looking for is removed or its not available.
			</p>
		</div>
	);
};
export default NotFound;
