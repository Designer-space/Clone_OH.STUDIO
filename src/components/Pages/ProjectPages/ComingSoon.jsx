import React from "react";
import { motion } from "framer-motion";
import { varient } from "../../Varient";

const ComingSoon = () => {
	return (
		<>
			<motion.div
				variants={varient}
				initial='hidden'
				whileInView='show'
				transition={{ duration: 0.5 }}
				className='h-screen flex flex-col gap-8 items-center justify-center'>
				<h1 className='font-secondary text-fluid-header text-center leading-tight max-w-[1140px] mx-auto px-5 md:px-10'>
					Coming Soon
				</h1>
			</motion.div>
		</>
	);
};

export default ComingSoon;
