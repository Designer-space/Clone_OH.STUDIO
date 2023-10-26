import React from "react";
import { motion } from "framer-motion";
import { varient } from "../Varient";

const SingleImage = (props) => {
	return (
		<motion.div
			variants={varient}
			initial='hidden'
			whileInView='show'
			transition={{ duration: 0.5 }}
			className='pointer-events-none select-none rounded-xl'>
			<img
				src={props.projectItem}
				alt=''
				className='pointer-events-none select-none rounded-xl w-full h-full object-cover '
			/>
		</motion.div>
	);
};

export default SingleImage;
