// import React, { useState } from "react";
// import { Box, Heading, SimpleGrid, useBreakpointValue, LinkBox, LinkOverlay } from "@chakra-ui/react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import ProjectCard from "./ProjectCard";
// import projectsData from "../data/projectsData";
// import FullScreenSection from "./FullScreenSection";

// const ProjectsSection = () => {
// 	const isMobile = useBreakpointValue({ base: true, md: false });
// 	const [hoveredProject, setHoveredProject] = useState(null);

// 	const handleMouseEnter = (project) => {
// 		setHoveredProject(project);
// 	};

// 	const handleMouseLeave = () => {
// 		setHoveredProject(null);
// 	};

// 	return (
// 		<FullScreenSection
// 			backgroundColor="#3f51be"
// 			isDarkBackground
// 			p={8}
// 			alignItems="flex-start"
// 			spacing={8}
// 			id="projects-section"
// 		>
// 			<Heading as="h1" size="xl" textAlign="center" color="white" alignSelf="center" mt={10} mb={10}>
// 				Featured Projects
// 			</Heading>
// 			<Box mt={10} mb={10} pb={10}>
// 				<SimpleGrid columns={isMobile ? 1 : 2} spacing={8}>
// 					{projectsData.map(({ title, description, getImageSrc, url }) => (
// 						<LinkBox
// 							key={title}
// 							position="relative"
// 							onMouseEnter={() => handleMouseEnter(title)}
// 							onMouseLeave={handleMouseLeave}
// 							borderRadius={hoveredProject === title ? "md" : "lg"}
// 							overflow="hidden"
// 						>
// 							<LinkOverlay href={url} isExternal>
// 								<ProjectCard imageSrc={getImageSrc()} />
// 								{hoveredProject === title ? (
// 									<Box
// 										position="absolute"
// 										top={0}
// 										left={0}
// 										right={0}
// 										bottom={0}
// 										display="flex"
// 										justifyContent="center"
// 										alignItems="center"
// 										color="white"
// 										bg="rgba(0, 0, 0, 0.8)"
// 										opacity={1}
// 										p={4}
// 										transition="opacity 0.3s"
// 									>
// 										<Box textAlign="center">
// 											<Heading as="h3" size="lg" mb={2}>
// 												{title}
// 											</Heading>
// 											<Box>{description}</Box>
// 										</Box>
// 									</Box>
// 								) : (
// 									<Box
// 										position="absolute"
// 										top="50%"
// 										left="50%"
// 										transform="translate(-50%, -50%)"
// 										color="white"
// 										fontSize="2xl"
// 										opacity={0.7}
// 										transition="opacity 0.3s"
// 									>
// 										<FontAwesomeIcon icon={faArrowRight} size="1x" />
// 									</Box>
// 								)}
// 							</LinkOverlay>
// 						</LinkBox>
// 					))}
// 				</SimpleGrid>
// 			</Box>
// 		</FullScreenSection>
// 	);
// };

// export default ProjectsSection;




import React, { useState } from "react";
import { Box, Heading, SimpleGrid, useBreakpointValue, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ProjectCard from "./ProjectCard";
import projectsData from "../data/projectsData";
import FullScreenSection from "./FullScreenSection";

const ProjectsSection = () => {
	const isMobile = useBreakpointValue({ base: true, md: false });
	const [hoveredProject, setHoveredProject] = useState(null);

	const handleMouseEnter = (project) => {
		setHoveredProject(project);
	};

	const handleMouseLeave = () => {
		setHoveredProject(null);
	};

	return (
		<FullScreenSection
			backgroundColor="#3f51be"
			isDarkBackground
			p={8}
			alignItems="flex-start"
			spacing={8}
			id="projects-section"
		>
			<Heading as="h1" size="xl" textAlign="center" color="white" alignSelf="center" mt={10} mb={10}>
				Featured Projects
			</Heading>
			<Box mt={10} mb={10} pb={10}>
				<SimpleGrid columns={isMobile ? 1 : 2} spacing={8}>
					{projectsData.map(({ title, description, getImageSrc, url, caption }) => (
						<LinkBox
							key={title}
							position="relative"
							onMouseEnter={() => handleMouseEnter(title)}
							onMouseLeave={handleMouseLeave}
							borderRadius={hoveredProject === title ? "md" : "lg"}
							overflow="hidden"
						>
							<LinkOverlay href={url} isExternal>
								<ProjectCard imageSrc={getImageSrc()} />
								{hoveredProject === title ? (
									<Box
										position="absolute"
										top={0}
										left={0}
										right={0}
										bottom={0}
										display="flex"
										justifyContent="center"
										alignItems="center"
										color="white"
										bg="rgba(0, 0, 0, 0.8)"
										opacity={1}
										p={4}
										transition="opacity 0.3s"
									>
										<Box textAlign="center">
											<Heading as="h3" size="lg" mb={2}>
												{title}
											</Heading>
											<Box>{description}</Box>
										</Box>
									</Box>
								) : (
									<Box
										position="absolute"
										top="50%"
										left="50%"
										transform="translate(-50%, -50%)"
										color="white"
										fontSize="2xl"
										opacity={0.7}
										transition="opacity 0.3s"
									>
										<FontAwesomeIcon icon={faArrowRight} size="1x" />
									</Box>
								)}
							</LinkOverlay>
							<Box textAlign="center" color="white" bg="rgba(0, 0, 0, 0.8)" opacity={1} p={4}>
								<Heading as="h3" size="lg" mb={2}>
									{caption}
								</Heading>
							</Box>
						</LinkBox>
					))}
				</SimpleGrid>
			</Box>
		</FullScreenSection>
	);
};

export default ProjectsSection;
