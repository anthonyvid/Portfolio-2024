import React, { useState } from "react";
import "./contact.css";
import { motion } from "framer-motion";
import {
	FaArrowUp,
	FaGithub,
	FaLinkedin,
	FaRegCopyright,
} from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const Contact = () => {
	const email = "anthonyvidovic@gmail.com";
	const [isCopied, setIsCopied] = useState(false);
	const [isAnimating, setIsAnimating] = useState(false);

	const animation = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	const handleCopy = () => {
		if (isAnimating) return;

		navigator.clipboard.writeText(email);
		setIsCopied(true);
		setIsAnimating(true);

		setTimeout(() => {
			setIsCopied(false);
			setIsAnimating(false);
		}, 2000);
	};

	const emailVariants = {
		visible: { opacity: 1, scale: 1 },
		copied: {
			opacity: 1,
			scale: 1.1,
			transition: { type: "spring", stiffness: 200 },
		},
	};

	const onLinkClick = (to) => {
		if (to && typeof to === "string") {
			window.open(to, "_blank").focus();
		}
	};

	return (
		<div className="contact">
			<div className="top-section">
				<div>
					<motion.h3
						initial="hidden"
						whileInView="visible"
						variants={animation}
						transition={{ duration: 0.5 }}
					>
						03
					</motion.h3>
					<motion.h1
						initial="hidden"
						whileInView="visible"
						variants={animation}
						transition={{ duration: 0.5 }}
					>
						Let's Connect
					</motion.h1>
				</div>
			</div>

			<div className="click-to-copy">
				<i>click on me</i>
				<IoIosArrowDown />
			</div>

			<div className="email-div" onClick={handleCopy}>
				<motion.h2
					initial="visible"
					animate={isCopied ? "copied" : "visible"}
					variants={emailVariants}
					style={{ display: "inline-block" }}
				>
					{isCopied ? "Copied!" : email}
				</motion.h2>
			</div>

			<div className="top-div">
				<FaGithub
					onClick={() => onLinkClick("https://github.com/anthonyvid")}
				/>
				<FaLinkedin
					onClick={() =>
						onLinkClick(
							"https://www.linkedin.com/in/anthonyvidovic/"
						)
					}
				/>
			</div>

			<div className="bottom-div">
				<motion.p
					className="copywright"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
				>
					<FaRegCopyright />
					2024
				</motion.p>
				<div>
					<p>Back to top</p>
					<div onClick={scrollToTop}>
						<FaArrowUp />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
