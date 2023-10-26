import React from "react";
import { motion } from "framer-motion";
import { varient } from "../Varient";

const ProjectOverview = (props) => {
	return (
		<motion.div
			variants={varient}
			initial='hidden'
			whileInView='show'
			transition={{ duration: 0.5 }}
			className='my-12 space-y-2 font-secondary text-sm'>
			<span className='text-accent-900/60'>Overview</span>
			<p className='max-w-[510px] leading-tight text-accent-900/70'>
				{props.overView}
			</p>
		</motion.div>
	);
};

export default ProjectOverview;
