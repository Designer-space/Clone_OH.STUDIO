import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import ProjectsData from "../../../projectData";
import ContactSection from "../Sections/ContactSection";
import FooterSection from "../Sections/FooterSection";
import ProjectAire from "./ProjectPages/ProjectAire";
import ProjectCorrelated from "./ProjectPages/ProjectCorrelated";
import ProjectChannel_5 from "./ProjectPages/ProjectChannel_5";
import ProjectRonald_Abram from "./ProjectPages/ProjectRonald_Abram";
import ProjectPropeller from "./ProjectPages/ProjectPropeller";
import ProjectSchuh from "./ProjectPages/ProjectSchuh";
import ProjectPaperstreet from "./ProjectPages/ProjectPaperstreet";
import ProjectOHSUPPLY from "./ProjectPages/ProjectOHSUPPLY";
import ProjectMonokel_Eyewear from "./ProjectPages/ProjectMonokel_Eyewear";
import ProjectNYCB from "./ProjectPages/ProjectNYCB";
import ComingSoon from "./ProjectPages/ComingSoon";

const ProjectPage = () => {
	const params = useParams();
	useEffect(() => {
		document.title = params.id;
	}, []);

	const projectItem = ProjectsData.find((project) => {
		return project.title === params.id;
	});

	return (
		<>
			<NavLink to={"/"}>
				<div className='fixed w-full flex justify-center p-5 md:p-[30px] bg-gradient-to-b from-white font-primary'>
					<div className='w-12 h-12 bg-accent-200 flex items-center justify-center rounded-full group hover:bg-accent-900 transition-all duration-300'>
						<svg
							className='stroke-black group-hover:stroke-white'
							xmlns='http://www.w3.org/2000/svg'
							width='18'
							height='18'
							viewBox='0 0 24 24'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'>
							<line
								x1='18'
								y1='6'
								x2='6'
								y2='18'></line>
							<line
								x1='6'
								y1='6'
								x2='18'
								y2='18'></line>
						</svg>
					</div>
				</div>
			</NavLink>
			<div className='pt-[90px] md:pt-[110px] font-primary text-sm'>
				{(() => {
					switch (params.id) {
						case "Aire":
							return <ProjectAire projectItem={projectItem} />;

						case "Correlated":
							return <ProjectCorrelated projectItem={projectItem} />;

						case "Channel 5":
							return <ProjectChannel_5 projectItem={projectItem} />;

						case "Ronald Abram":
							return <ProjectRonald_Abram projectItem={projectItem} />;

						case "Propeller":
							return <ProjectPropeller projectItem={projectItem} />;

						case "Schuh":
							return <ProjectSchuh projectItem={projectItem} />;

						case "Paperstreet":
							return <ProjectPaperstreet projectItem={projectItem} />;

						case "OH.SUPPLY":
							return <ProjectOHSUPPLY projectItem={projectItem} />;

						case "Monokel Eyewear":
							return <ProjectMonokel_Eyewear projectItem={projectItem} />;

						case "NYCB":
							return <ProjectNYCB projectItem={projectItem} />;

						default:
							return <ComingSoon />;
					}
				})()}

				{params.id === "Lawtrades"
					? ""
					: params.id === "Baselworld"
					? ""
					: `<div className="h-[50vh]">
            <ContactSection fontSize={ 'text-fluid-sub-header' } />
          </div>
          <FooterSection />`}

				{/* <div className="h-[50vh]">
          <ContactSection fontSize={ 'text-fluid-sub-header' } />
        </div>
        <FooterSection /> */}
			</div>
		</>
	);
};

export default ProjectPage;
