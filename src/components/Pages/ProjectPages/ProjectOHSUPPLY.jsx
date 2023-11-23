import React from "react";
import ProjectHeader from "../../ProjectsMixins/ProjectHeader";
import SingleImage from "../../ProjectsMixins/SingleImage";
import ProjectDetails from "../../ProjectsMixins/ProjectDetails";
import ProjectOverview from "../../ProjectsMixins/ProjectOverview";
import ContactSection from "../../Sections/ContactSection";
import FooterSection from "../../Sections/FooterSection";

const ProjectOHSUPPLY = ({ projectItem }) => {
	return (
		<>
			<ProjectHeader
				heading={projectItem.heading}
				title={projectItem.title}
			/>
			<div className='max-w-[1400px] mx-auto px-5 md:px-10 flex flex-col gap-8'>
				<SingleImage projectItem={projectItem.img1} />

				<ProjectDetails
					client={projectItem.client}
					studio={projectItem.studio}
					role={projectItem.role}
					focus={projectItem.focus}
				/>

				<div className='pointer-events-none select-none rounded-xl grid grid-cols-3 gap-6'>
					<div className=''>
						<img
							src={projectItem.img2_1}
							alt=''
							className='pointer-events-none select-none rounded-xl w-full h-full object-cover '
						/>
					</div>
					<div className=''>
						<img
							src={projectItem.img2_2}
							alt=''
							className='pointer-events-none select-none rounded-xl w-full h-full object-cover '
						/>
					</div>
					<div className=''>
						<img
							src={projectItem.img2_3}
							alt=''
							className='pointer-events-none select-none rounded-xl w-full h-full object-cover '
						/>
					</div>
				</div>

				<ProjectOverview overView={projectItem.overView} />

				<SingleImage projectItem={projectItem.img3} />
			</div>
			<div className='h-[50vh]'>
				<ContactSection fontSize={"text-fluid-sub-header"} />
			</div>
			<FooterSection />
		</>
	);
};

export default ProjectOHSUPPLY;
