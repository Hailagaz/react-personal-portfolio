import React, { useState } from "react";
import { Avatar, Heading, VStack, useBreakpointValue, Box, Link, SimpleGrid } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import landingData from "../data/landingData";

const greeting = "Front-End Developer: Creating Web Interfaces to elevate user interaction";
const bio = ["I am a skilled Front-End Developer with 2 years of experience. I have a strong track record of turning design concepts into user-friendly websites that enhance engagement. My achievements include boosting user interaction on high-traffic e-commerce sites by 20%, improving mobile user experience, resulting in a 15% conversion rate increase, and optimizing site performance to reduce bounce rates by 25%. I'm proficient in HTML, CSS, and JavaScript, with an eye for design and a knack for troubleshooting technical issues, ensuring high-quality, responsive web interfaces."];

const CarouselItem = ({ technology, size }) => (
	<Box
		display="flex"
		flexDirection="column"
		justifyContent="center"
		alignItems="center"
		p={4}
		backgroundColor="#6573cc"
		borderRadius="md"
		boxShadow="md"
		cursor="pointer"
		margin="0 8px"
		height="100%"
		transition="all 0.5s"
		_hover={{ bg: "blue.300", color: "white", transform: 'scale(1.1)' }}
	>
		<img src={technology.image} alt={technology.name} width={size} height={size} />
		<Heading as="h3" size="md" textAlign="center" noOfLines={1} mt={2} display="none">
			{technology.name}
		</Heading>
	</Box>
);

const LandingSection = () => {
	const isMobile = useBreakpointValue({ base: true, md: false });

	const avatarSize = isMobile ? "sm" : "md";
	const headingSize = isMobile ? "md" : "xl";

	const [isLoading, setIsLoading] = useState(false);

	return (
		<FullScreenSection
			as="section"
			justifyContent="center"
			alignItems="center"
			isDarkBackground
			backgroundColor="#6573cc"
			py={isMobile ? 8 : 16}
		>
			<VStack spacing={isMobile ? 6 : 8} alignItems="center" marginTop={isMobile ? 36 : 24}>
				{/* <Avatar src="https://i.pravatar.cc/150?img=11" size={avatarSize} name="Oleh" alt="Profile Picture" /> */}
				<Heading as="h1" size={headingSize} textAlign="center" noOfLines={4}>
					{greeting}
				</Heading>
				<VStack spacing={isMobile ? 4 : 6}>
					{bio.map((line, index) => (
						<Heading key={index} as="h2" size={avatarSize} noOfLines={20} paddingInline={3}>
							{line}
						</Heading>
					))}
				</VStack>
				{!isLoading ? (
					<Box width="80%">
						<SimpleGrid columns={isMobile ? 3 : 6} spacing={4} mt={4}>
							{landingData.map((technology, index) => (
								<Link key={index} href={technology.url} isExternal>
									<CarouselItem technology={technology} size={isMobile ? 80 : 100} />
								</Link>
							))}
						</SimpleGrid>
					</Box>
				) : (
					<Box>Loading...</Box>
				)}
			</VStack>
		</FullScreenSection>
	);
};

export default LandingSection;
