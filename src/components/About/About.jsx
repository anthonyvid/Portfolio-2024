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
	SiScala,
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
					I’m a software developer at Hootsuite with a passion for
					building things—whether it’s products, tools, or ideas that
					help people and solve real problems. I love taking projects
					from concept to reality and thrive in fast-moving
					environments where I can wear multiple hats and make
					meaningful impact.
					<br />
					<br />
					I studied Software Engineering at the University of Guelph,
					where I explored everything from full-stack development to
					launching internal tools and UI libraries during my
					internships. That hands-on experience showed me how much I
					enjoy not just coding, but creating things that others
					actually use.
					<br />
					<br />
					Outside of work, I’m usually finding ways to spend time
					outdoors—whether it’s hiking, exploring new places, or just
					staying active. I’m always happy to connect—especially if
					it’s about startups, side projects, or anything worth
					building.
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
					<div className="technologies-icons">
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
						<Tooltip text="Scala">
							<SiScala />
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
