import React from "react";
import { motion } from "framer-motion";
import { varient } from "../Varient";

const SideVideo = (props) => {
	return (
		<motion.div
			variants={varient}
			viewport={{ once: true }}
			initial='hidden'
			whileInView='show'
			transition={{ duration: 0.5 }}
			className='pointer-events-none select-none rounded-xl grid md:grid-cols-2 gap-6'>
			<div className=''>
				<video
					src={props.projectItem1}
					autoPlay
					loop
					muted
					className='pointer-events-none select-none rounded-xl w-full h-full object-cover'></video>
			</div>
			<div className=''>
				<img
					src={props.projectItem2}
					alt=''
					className='pointer-events-none select-none rounded-xl w-full h-full object-cover '
				/>
			</div>
		</motion.div>
	);
};

export default SideVideo;
