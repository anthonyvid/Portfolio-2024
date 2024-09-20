import React from "react";
import { motion } from "framer-motion";
import Pill from "../Pill/Pill";
import { Tooltip } from "../Tooltip/Tooltip";
import { FaCss3, FaHtml5, FaJs, FaNodeJs, FaSass } from "react-icons/fa";
import { SiExpress, SiMongodb, SiPusher } from "react-icons/si";
import { TbBrandTwilio } from "react-icons/tb";
import "./projects.css";
import { AiOutlinePython } from "react-icons/ai";

const Projects = () => {
	const projectAnimation = {
		hidden: { opacity: 0, y: 50, scale: 0.9 },
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				duration: 0.5,
				staggerChildren: 0.2,
			},
		},
	};

	const childAnimation = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
	};

	const headerAnimation = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	};

	return (
		<div className="projects">
			<div className="top-section">
				<div>
					<motion.h3
						initial="hidden"
						whileInView="visible"
						variants={headerAnimation}
					>
						02
					</motion.h3>
					<motion.h1
						initial="hidden"
						whileInView="visible"
						variants={headerAnimation}
					>
						Projects
					</motion.h1>
				</div>
			</div>

			<div className="project-container">
				<motion.div
					className="project"
					initial="hidden"
					whileInView="visible"
					viewport={{ amount: 0.2 }}
					variants={projectAnimation}
				>
					<img
						className="project-img"
						alt="TicketScout Project"
						src="ticketscout.png"
					/>
					<div className="project-info">
						{/* Project Title */}
						<motion.h1 variants={childAnimation}>
							TicketScout
						</motion.h1>

						{/* Pills */}
						<motion.div className="pills" variants={childAnimation}>
							<Pill
								clickable
								to={"https://ticketscout-ji8f.onrender.com/"}
							>
								Live Site
							</Pill>
							<Pill
								clickable
								to={"https://github.com/anthonyvid/TicketScout"}
							>
								GitHub
							</Pill>
							<Pill>FullStack</Pill>
							<Pill>UI/UX</Pill>
							<Pill
								clickable
								to={
									"https://github.com/anthonyvid/TicketScout-v2-client"
								}
							>
								TicketScoutV2
							</Pill>
						</motion.div>

						<motion.div className="icons" variants={childAnimation}>
							<Tooltip text="JavaScript">
								<FaJs />
							</Tooltip>
							<Tooltip text="HTML">
								<FaHtml5 />
							</Tooltip>
							<Tooltip text="Sass">
								<FaSass />
							</Tooltip>
							<Tooltip text="MongoDB">
								<SiMongodb />
							</Tooltip>
							<Tooltip text="Node.Js">
								<FaNodeJs />
							</Tooltip>
							<Tooltip text="Express.Js">
								<SiExpress />
							</Tooltip>
							<Tooltip text="Pusher Websockets">
								<SiPusher />
							</Tooltip>
							<Tooltip text="Twilio SMS Integration">
								<TbBrandTwilio />
							</Tooltip>
							<Tooltip text="Shippo Integration">
								<img src="goshippo-icon.svg" alt="Shippo" />
							</Tooltip>
						</motion.div>
						<motion.p variants={childAnimation}>
							<span>TicketScout</span> is a <span>Node.js</span>{" "}
							web application, powered by <span>Express</span>,
							designed to help small businesses track and manage
							tickets, payments, and customers. This streamlined
							tool allows service providers to efficiently manage
							their customer interactions and financial
							transactions, making it ideal for businesses that
							rely on client services.
						</motion.p>
					</div>
				</motion.div>

				<motion.div
					className="project"
					initial="hidden"
					whileInView="visible"
					viewport={{ amount: 0.2 }}
					variants={projectAnimation}
				>
					<img
						className="project-img project-img-rect"
						alt="Svg Toolkit Project"
						src="svg_app.png"
					/>
					<div className="project-info">
						<motion.h1 variants={childAnimation}>
							Svg Toolkit
						</motion.h1>
						<motion.div className="pills" variants={childAnimation}>
							<Pill
								clickable
								to={
									"https://github.com/anthonyvid/SVG-Viewer-and-Editor"
								}
							>
								GitHub
							</Pill>
							<Pill>FullStack</Pill>
							<Pill>UI/UX</Pill>
							<Pill>Group Project</Pill>
						</motion.div>
						<motion.div className="icons" variants={childAnimation}>
							<Tooltip text="JavaScript">
								<FaJs />
							</Tooltip>
							<Tooltip text="HTML">
								<FaHtml5 />
							</Tooltip>
							<Tooltip text="CSS">
								<FaCss3 />
							</Tooltip>
							<Tooltip text="Node.Js">
								<FaNodeJs />
							</Tooltip>
							<Tooltip text="Express.Js">
								<SiExpress />
							</Tooltip>
							<Tooltip text="C">
								<img
									src="c.svg"
									width={35}
									height={35}
									alt="C language"
								/>
							</Tooltip>
						</motion.div>
						<motion.p variants={childAnimation}>
							An application developed during my fourth term that
							allows users to create, edit, and manipulate SVG
							files with ease. This tool provides a versatile
							interface for working with scalable vector graphics,
							enabling precise and intuitive design modifications.
						</motion.p>
					</div>
				</motion.div>

				<motion.div
					className="project"
					initial="hidden"
					whileInView="visible"
					viewport={{ amount: 0.2 }}
					variants={projectAnimation}
				>
					<img
						className="project-img project-img-rect"
						alt="COVID-19 Data Analyzer Project"
						src="covid2.png"
					/>
					<div className="project-info">
						<motion.h1 variants={childAnimation}>
							Covid-19 Data Analyzer
						</motion.h1>
						<motion.div className="pills" variants={childAnimation}>
							<Pill
								clickable
								to={
									"https://github.com/anthonyvid/CovidDataTracker"
								}
							>
								GitHub
							</Pill>
							<Pill>FullStack</Pill>
							<Pill>Group Project</Pill>
						</motion.div>
						<motion.div className="icons" variants={childAnimation}>
							<Tooltip text="Python">
								<AiOutlinePython />
							</Tooltip>
							<Tooltip text="Matplotlib">
								<img src="matplotlib.svg" alt="Matplotlib" />
							</Tooltip>
						</motion.div>
						<motion.p variants={childAnimation}>
							Contributed to the development of a data processing
							and analysis system to effectively collect, analyze,
							and visually represent COVID-19 data, facilitating a
							deeper understanding of the pandemic's impact on our
							lives and economy.
						</motion.p>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default Projects;
