import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./experience.css";

const Experience = () => {
	const targetRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
	});

	const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

	const sectionStyle = {
		position: "relative",
		height: "200vh",
		backgroundColor: "#1f2937",
	};

	const stickyContainerStyle = {
		position: "sticky",
		top: 0,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "100vh",
		overflow: "hidden",
	};

	const cards = [
		{ url: "/imgs/abstract/1.jpg", title: "Title 1", id: 1 },
		{ url: "/imgs/abstract/2.jpg", title: "Title 2", id: 2 },
		{ url: "/imgs/abstract/3.jpg", title: "Title 3", id: 3 },
		{ url: "/imgs/abstract/4.jpg", title: "Title 4", id: 4 },
		{ url: "/imgs/abstract/5.jpg", title: "Title 5", id: 5 },
	];

	return (
		<div style={{ backgroundColor: "#1f2937" }}>
			<div
				style={{
					display: "flex",
					height: "12rem",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<span
					style={{
						fontWeight: "600",
						textTransform: "uppercase",
						color: "#6b7280",
					}}
				>
					Scroll down
				</span>
			</div>
			<section ref={targetRef} style={sectionStyle}>
				<div style={stickyContainerStyle}>
					<motion.div style={{ x, display: "flex" }}>
						{cards.map((card) => (
							<Card card={card} key={card.id} />
						))}
					</motion.div>
				</div>
			</section>
			<div
				style={{
					display: "flex",
					height: "12rem",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<span
					style={{
						fontWeight: "600",
						textTransform: "uppercase",
						color: "#6b7280",
					}}
				>
					Scroll up
				</span>
			</div>
		</div>
	);
};

export default Experience;

const Card = ({ card }) => {
	const cardStyle = {
		height: "100vh",
		width: "100vw",
		position: "relative",
		overflow: "hidden",
		backgroundColor: "#e5e7eb",
		border: "1px solid #ccc",
	};

	return (
		<div style={cardStyle}>
			<p>{card.title}</p>
		</div>
	);
};
