import React from "react";
import { motion } from "framer-motion";
import { varient } from "../Varient";

const ProjectHeader = (props) => {
	return (
		<motion.div
			variants={varient}
			viewport={{ once: true }}
			initial='hidden'
			whileInView='show'
			transition={{ duration: 0.5 }}
			className='h-[70vh] flex flex-col gap-8 items-center justify-center'>
			<h1 className='font-secondary text-fluid-header text-center leading-tight max-w-[1140px] mx-auto px-5 md:px-10'>
				{props.heading}
			</h1>
			<p className='bg-accent-200/50 rounded-full px-3 py-1'>{props.title}</p>
		</motion.div>
	);
};

export default ProjectHeader;
