import React from "react";
import ProjectHeader from "../../ProjectsMixins/ProjectHeader";
import SingleImage from "../../ProjectsMixins/SingleImage";
import ProjectDetails from "../../ProjectsMixins/ProjectDetails";
import ProjectOverview from "../../ProjectsMixins/ProjectOverview";
import SideVideo from "../../ProjectsMixins/SideVideo";
import ContactSection from "../../Sections/ContactSection";
import FooterSection from "../../Sections/FooterSection";

const ProjectPropeller = ({ projectItem }) => {
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

				<SingleImage projectItem={projectItem.img2} />

				<ProjectOverview overView={projectItem.overView} />

				<SideVideo
					projectItem1={projectItem.video}
					projectItem2={projectItem.img3_1}
				/>

				<SingleImage projectItem={projectItem.img4} />

				<SideVideo
					projectItem1={projectItem.video}
					projectItem2={projectItem.img5_1}
				/>

				<SingleImage projectItem={projectItem.img6} />

				<SingleImage projectItem={projectItem.img7} />

				<SideVideo
					projectItem1={projectItem.img8_2}
					projectItem2={projectItem.img8_1}
				/>

				<SingleImage projectItem={projectItem.img9} />
			</div>
			<div className='h-[50vh]'>
				<ContactSection fontSize={"text-fluid-sub-header"} />
			</div>
			<FooterSection />
		</>
	);
};

export default ProjectPropeller;
