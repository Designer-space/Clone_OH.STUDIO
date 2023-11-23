import React from "react";
import { motion } from "framer-motion";
import { varient } from "../Varient";

const SingleVideo = (props) => {
	return (
		<motion.div
			variants={varient}
			viewport={{ once: true }}
			initial='hidden'
			whileInView='show'
			transition={{ duration: 0.5 }}
			className='pointer-events-none select-none rounded-xl'>
			<video
				src={props.projectItem}
				autoPlay
				loop
				muted
				className='pointer-events-none select-none rounded-xl w-full h-full object-cover'></video>
		</motion.div>
	);
};

export default SingleVideo;
