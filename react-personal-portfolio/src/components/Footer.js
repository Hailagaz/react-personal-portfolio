import React from "react";
import { Box, Flex } from "@chakra-ui/react";

const Footer = () => {
	return (
		<Box backgroundColor="#263172">
			<footer>
				<Flex
					margin="0 auto"
					px={12}
					color="white"
					justifyContent="center"
					alignItems="center"
					maxWidth="1024px"
					height={16}
				>
					<p>&copy; 2023 Hail. All rights reserved.</p>
				</Flex>
			</footer>
		</Box>
	);
};

export default Footer;
