import React from "react";
import { motion } from "framer-motion";
import { varient } from "../Varient";

const ContactSection = ({ fontSize }) => {
	return (
		<motion.div
			variants={varient}
			initial='hidden'
			whileInView='show'
			transition={{ duration: 0.5 }}
			className='h-full flex flex-col items-center justify-center font-secondary leading-tight'>
			<h1 className={`${fontSize} tracking-tight text-center`}>
				Let's work together.
			</h1>
			<a
				href='mailto:'
				className={`${fontSize} text-accent-400 hover:text-accent-400/50 focus:text-accent-200 transition-colors duration-200`}>
				Get in touch
			</a>
		</motion.div>
	);
};

export default ContactSection;
