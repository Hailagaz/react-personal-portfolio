import React from "react";
import { Box, Image } from "@chakra-ui/react";

const ProjectCard = ({ imageSrc }) => {
	return (
		<Box position="relative">
			<Image src={imageSrc} alt="Project Image" borderRadius="md" />
		</Box>
	);
};

export default ProjectCard;
