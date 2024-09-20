import React from "react";
import { MdArrowOutward } from "react-icons/md";
import "./pill.css";

const Pill = ({ children, clickable = false, to = null }) => {
	const pillClass = `pill${clickable ? " pill-action" : ""}`;

	const onPillClick = () => {
		if (clickable && to && typeof to === "string") {
			window.open(to, "_blank").focus();
		}
	};

	return (
		<div onClick={onPillClick} className={pillClass}>
			{children}
			{clickable && <MdArrowOutward />}
		</div>
	);
};

export default Pill;
