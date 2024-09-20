import React from "react";
import "./hero.css";
import { motion } from "framer-motion";

const Hero = () => {
	return (
		<motion.div
			animate={{ opacity: 1, y: 0 }}
			initial={{ opacity: 0, y: 20 }}
			transition={{ delay: 0.5, ease: "easeInOut" }}
			className="hero"
		>
			<motion.div className="text-content">
				<h1>
					Hello{" "}
					<motion.span
						style={{ display: "inline-block" }}
						initial={{ rotate: 0 }}
						animate={{ rotate: [0, 20, -20, 0] }}
						transition={{
							duration: 0.6,
							delay: 2.1,
						}}
					>
						👋
					</motion.span>
				</h1>
				<div>
					<div className="vertical-line" />
					<div className="name-wrap">
						<h2>
							I'm <span>Anthony Vidovic</span>
						</h2>
						<motion.span>
							<motion.p
								initial={{ opacity: 0, x: 50 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{
									duration: 0.6,
									ease: "easeInOut",
									delay: 1,
								}}
							>
								My passion lies in creating{" "}
								<span>beautiful</span>, user-centered software.
							</motion.p>
						</motion.span>
					</div>
				</div>
			</motion.div>
			<div className="blob-container">
				<img
					className="profile-photo"
					src="profile-pic.jpeg"
					alt="Profile Picture"
				/>
			</div>
		</motion.div>
	);
};

export default Hero;
