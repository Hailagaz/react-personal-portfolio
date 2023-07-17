import React, { useEffect, useRef, useState } from "react";
import { Box, HStack, IconButton, Link, useBreakpointValue } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareEnvelope, faList, faMessage } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faSquareGithub, faTelegram } from "@fortawesome/free-brands-svg-icons";

const socials = [
	{ icon: faSquareEnvelope, url: "mailto:not.real.mail@gmail.com" },
	{ icon: faLinkedin, url: "https://www.linkedin.com" },
	{ icon: faSquareGithub, url: "https://github.com" },
	{ icon: faTelegram, url: "https://web.telegram.org" },
];

const Header = () => {
	const headerRef = useRef(null);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		let prevScrollPos = window.scrollY;

		const handleScroll = () => {
			const currScrollPos = window.scrollY;
			const currHeaderElement = headerRef.current;

			if (!currHeaderElement) return;

			currHeaderElement.style.transform = prevScrollPos > currScrollPos ? "translateY(0)" : "translateY(-200px)";
			prevScrollPos = currScrollPos;
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleLinkClick = (event, anchor) => {
		event.preventDefault();
		const element = document.getElementById(`${anchor}-section`);
		if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
		setIsMobileMenuOpen(false);
	};

	const handleMenuToggle = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const isMobile = useBreakpointValue({ base: true, md: false });

	return (
		<Box
			position="fixed"
			top={0}
			left={0}
			right={0}
			translateY={0}
			transitionProperty="transform"
			transitionDuration=".3s"
			transitionTimingFunction="ease-in-out"
			backgroundColor="#263172"
			ref={headerRef}
			zIndex={5}
		>
			<Box color="white" maxWidth="1280px" margin="0 auto">
				<HStack
					px={isMobile ? 4 : 16}
					py={4}
					justifyContent={!isMobile ? "space-between" : "flex-end"}
					alignItems="center"
				>
					{isMobile && (
						<IconButton
							aria-label="Menu"
							icon={<HamburgerIcon />}
							variant="outline"
							mr={3.5}
							_hover={{ bg: "blue.300", color: "white" }}
							_active={{ bg: "blue.300", color: "white" }}
							onClick={handleMenuToggle}
						/>
					)}

					{isMobile && isMobileMenuOpen && (
						<Box
							position="absolute"
							top="100%"
							right={0}
							bg="blue.400"
							p={0}
							mr={0}
							borderRadius="md"
							shadow="md"
							display="flex"
							flexDirection="column"
							justifyContent="center"
							alignItems="center"
							gap={0}
							onClick={handleMenuToggle}
						>
							{socials.map(({ icon, url }) => (
								<Link
									key={url}
									href={url}
									isExternal
									width={100}
									display="flex"
									flexDirection="column"
									justifyContent="center"
									alignItems="center"
									p={3}
									_hover={{ bg: "blue.900", cursor: "pointer" }}
								>
									<FontAwesomeIcon icon={icon} size="2x" />
								</Link>
							))}
							<Box
								onClick={(e) => handleLinkClick(e, "projects")}
								width={100}
								display="flex"
								flexDirection="column"
								justifyContent="center"
								alignItems="center"
								p={3}
								_hover={{ bg: "blue.900", cursor: "pointer" }}
							>
								<FontAwesomeIcon icon={faList} size="2x" />
								<span style={{ display: "none" }}>Projects</span>
							</Box>
							<Box
								onClick={(e) => handleLinkClick(e, "contactme")}
								width={100}
								display="flex"
								flexDirection="column"
								justifyContent="center"
								alignItems="center"
								p={3}
								_hover={{ bg: "blue.900", cursor: "pointer" }}
							>
								<FontAwesomeIcon icon={faMessage} size="2x" />
								<span style={{ display: "none" }}>Contact Me</span>
							</Box>
						</Box>
					)}

					{!isMobile && (
						<HStack spacing={10}>
							{socials.map(({ icon, url }) => (
								<Link
									key={url}
									href={url}
									isExternal
									_hover={{ color: "blue.300", transform: 'scale(1.1)' }}
								>
									<FontAwesomeIcon icon={icon} size="2x" />
								</Link>
							))}
						</HStack>
					)}

					{!isMobile && (
						<HStack spacing={8}>
							<Link
								href="#projects-section"
								onClick={(e) => handleLinkClick(e, "projects")}
								_hover={{ color: "blue.300", transform: 'scale(1.1)' }}
							>
								Projects
							</Link>
							<Link
								href="#contact-section"
								onClick={(e) => handleLinkClick(e, "contactme")}
								_hover={{ color: "blue.300", transform: 'scale(1.1)' }}
							>
								Contact Me
							</Link>
						</HStack>
					)}
				</HStack>
			</Box>
		</Box>
	);
};

export default Header;