import React, { useState } from "react";
import "./tooltip.css";

export const Tooltip = ({ children, text }) => {
	const [show, setShow] = useState(false);

	return (
		<div
			className="my-tooltip"
			onMouseEnter={() => setShow(true)}
			onMouseLeave={() => setShow(false)}
		>
			{children}
			{show && <div className="tooltip">{text}</div>}
		</div>
	);
};
