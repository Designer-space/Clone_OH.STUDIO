import React from "react";
import { motion } from "framer-motion";
import { varient } from "../Varient";

const DoubleImg = (props) => {
	return (
		<motion.div
			variants={varient}
			initial='hidden'
			whileInView='show'
			transition={{ duration: 0.5 }}
			className='pointer-events-none select-none rounded-xl grid md:grid-cols-2 gap-6'>
			<div className=''>
				<img
					src={props.projectItem1}
					alt=''
					className='pointer-events-none select-none rounded-xl w-full h-full object-cover '
				/>
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

export default DoubleImg;
