import React from "react";
import { motion } from "framer-motion";
import { Tooltip } from "../Tooltip/Tooltip";
import { FaJava, FaJs, FaNodeJs, FaReact, FaSass } from "react-icons/fa";
import {
	SiExpress,
	SiJest,
	SiMongodb,
	SiPlaywright,
	SiRedux,
	SiTypescript,
	SiVitest,
} from "react-icons/si";
import { AiOutlinePython } from "react-icons/ai";
import { IoCarSportOutline } from "react-icons/io5";
import { PiSoccerBallDuotone } from "react-icons/pi";

import "./about.css";

const About = () => {
	const animation = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<div className="about">
			<motion.div
				className="top-section"
				initial="hidden"
				whileInView="visible"
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
			>
				<div>
					<motion.h3
						initial="hidden"
						whileInView="visible"
						variants={animation}
						transition={{ duration: 0.5 }}
					>
						01
					</motion.h3>
					<motion.h1
						initial="hidden"
						whileInView="visible"
						variants={animation}
						transition={{ duration: 0.5 }}
					>
						About
					</motion.h1>
				</div>
				<p>
					I’m a 5th-year software engineering student at the
					University of Guelph, with a passion for front-end
					development and creating applications that are both
					beautiful and functional. I thrive in collaborative
					environments where teams work together to achieve
					exceptional results. When I’m not coding, you’ll find me
					working on cars or playing soccer. Feel free to reach
					out—I’m always up for a chat about tech, cars, or anything
					in between!
				</p>
			</motion.div>

			<div className="skills">
				<motion.div
					initial="hidden"
					whileInView="visible"
					variants={animation}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="languages"
				>
					<h2>Languages</h2>
					<div>
						<Tooltip text="JavaScript">
							<FaJs />
						</Tooltip>
						<Tooltip text="TypeScript">
							<SiTypescript size={35} />
						</Tooltip>
						<Tooltip text="Java">
							<FaJava />
						</Tooltip>
						<Tooltip text="Python">
							<AiOutlinePython />
						</Tooltip>
						<Tooltip text="C">
							<img src="c.svg" width={35} height={35} />
						</Tooltip>
					</div>
				</motion.div>

				<motion.div
					initial="hidden"
					whileInView="visible"
					variants={animation}
					transition={{ duration: 0.5, delay: 0.4 }}
					className="technologies"
				>
					<h2>Technologies</h2>
					<div className="technologies-icons">
						<Tooltip text="React">
							<FaReact />
						</Tooltip>
						<Tooltip text="Redux">
							<SiRedux />
						</Tooltip>
						<Tooltip text="Node.Js">
							<FaNodeJs />
						</Tooltip>
						<Tooltip text="Express.Js">
							<SiExpress />
						</Tooltip>
						<Tooltip text="Sass">
							<FaSass />
						</Tooltip>
						<Tooltip text="Jest">
							<SiJest />
						</Tooltip>
						<Tooltip text="Playwright">
							<SiPlaywright />
						</Tooltip>
						<Tooltip text="Vitest">
							<SiVitest />
						</Tooltip>
						<Tooltip text="MongoDB">
							<SiMongodb />
						</Tooltip>
					</div>
				</motion.div>

				<motion.div
					initial="hidden"
					whileInView="visible"
					variants={animation}
					transition={{ duration: 0.5, delay: 0.6 }}
					className="personal"
				>
					<h2>Outside The Editor</h2>
					<div>
						<Tooltip text={"I love cars!"}>
							<IoCarSportOutline />
						</Tooltip>
						<Tooltip text="Soccer since I was little">
							<PiSoccerBallDuotone />
						</Tooltip>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default About;
