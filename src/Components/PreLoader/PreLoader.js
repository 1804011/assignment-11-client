import React from "react";
import { HashLoader } from "react-spinners";

const PreLoader = (props) => {
	const style = {
		height: "100vh",
	};
	return (
		<div
			className="d-flex w-100 container-fluid align-items-center justify-content-center"
			style={style}
		>
			<HashLoader loading={props.loading} size={250} color={"red"} />
		</div>
	);
};

export default PreLoader;
