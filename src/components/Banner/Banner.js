import React from "react";

function Banner({ children, classes }) {
	return <div className={`banner ${classes}`}>{children}</div>;
}

export default Banner;
