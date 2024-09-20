import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import "./header.css";

const Header = () => {
	const onClick = (to) => {
		if (to && typeof to === "string") {
			window.open(to, "_blank").focus();
		}
	};

	return (
		<div className="social-container">
			<h1>AV</h1>
			<div>
				<p>Catch Up</p>
				<div
					style={{
						width: "30px",
						height: "2px",
						backgroundColor: "black",
					}}
				/>
				<FaLinkedinIn
					size={20}
					onClick={() =>
						onClick("https://www.linkedin.com/in/anthonyvidovic/")
					}
				/>
				<FaGithub
					size={20}
					onClick={() => onClick("https://github.com/anthonyvid")}
				/>
			</div>
		</div>
	);
};

export default Header;
