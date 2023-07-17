import React, { useState, useEffect } from "react";
import { Box, IconButton } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ScrollButton = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollHeight = window.pageYOffset;
			const windowHeight = window.innerHeight;
			const fullHeight = document.documentElement.scrollHeight;

			if (scrollHeight > windowHeight) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}

			if (scrollHeight + windowHeight === fullHeight) {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleScrollTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<Box
			position="fixed"
			bottom={4}
			right={4}
			opacity={isVisible ? 1 : 0}
			transition="opacity 0.3s"
			zIndex="9999"
		>
			<IconButton
				aria-label="Scroll Top"
				icon={<FontAwesomeIcon icon={faArrowUp} />}
				onClick={handleScrollTop}
				bg="blue.300"
				color="white"
				borderRadius="50%"
				size="lg"
			/>
		</Box>
	);
};

export default ScrollButton;
