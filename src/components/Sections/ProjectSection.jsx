import React from "react";
import Card from "../Card";
import { motion } from "framer-motion";
import { varient } from "../Varient";
import ProjectsData from "../project";

const ProjectSection = () => {
	return (
		<motion.section
			variants={varient}
			initial='hidden'
			animate='show'
			className='max-w-[1400px] p-5 md:p-10 mx-auto grid md:grid-cols-2 gap-y-12 md:gap-x-5 md:gap-y-10 '>
			{ProjectsData.map((card, index) => {
				return (
					<Card
						key={index}
						img={card.images}
						title={card.title}
						type={card.fileType}
					/>
				);
			})}
		</motion.section>
	);
};

export default ProjectSection;
