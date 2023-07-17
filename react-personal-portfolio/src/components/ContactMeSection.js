
import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
	Box,
	Button,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Heading,
	Input,
	Select,
	Textarea,
	VStack,
	useBreakpointValue,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const ContactMeSection = () => {
	const { isLoading, response, submit } = useSubmit();
	const { onOpen } = useAlertContext();

	const isMobile = useBreakpointValue({ base: true, md: false });

	const formik = useFormik({
		initialValues: {
			firstName: "",
			email: "",
			type: "hireMe",
			comment: "",
		},
		onSubmit: (values) => {
			submit("", values);
		},
		validationSchema: Yup.object({
			firstName: Yup.string().required("Your name is required"),
			email: Yup.string()
				.email("Invalid email address")
				.required("Your email is required"),
			comment: Yup.string()
				.min(20, "Message must be at least 20 characters")
				.required("Your message is required"),
		}),
	});

	useEffect(() => {
		if (response) {
			onOpen(response.type, response.message);
			if (response.type === "success") {
				formik.resetForm();
			}
		}
	}, [response]);

	return (
		<FullScreenSection
			id="contactme-section"
			isDarkBackground
			backgroundColor="#334198"
			py={isMobile ? 8 : 16}
			spacing={8}
		>
			<VStack
				w={{ base: "100%", sm: "460px", md: "750px", lg: "970px", xl: "1200px" }}
				p={isMobile ? 8 : 8}
				alignItems="flex-start"
			>
				<Heading
					as="h1"
					size="xl"
					textAlign="center"
					alignSelf="center"
					color="white"
					mb={isMobile ? 6 : 8}
				>
					Contact me
				</Heading>
				<Box p={6} rounded="md" w="100%">
					<form onSubmit={formik.handleSubmit}>
						<VStack spacing={4}>
							<FormControl
								isInvalid={!!formik.errors.firstName && formik.touched.firstName}
							>
								<FormLabel htmlFor="firstName">Your name</FormLabel>
								<Input
									id="firstName"
									name="firstName"
									{...formik.getFieldProps("firstName")}
								/>
								<FormErrorMessage>
									{formik.errors.firstName}
								</FormErrorMessage>
							</FormControl>
							<FormControl
								isInvalid={!!formik.errors.email && formik.touched.email}
							>
								<FormLabel htmlFor="email">Your email address</FormLabel>
								<Input
									id="email"
									name="email"
									type="email"
									{...formik.getFieldProps("email")}
								/>
								<FormErrorMessage>{formik.errors.email}</FormErrorMessage>
							</FormControl>
							<FormControl>
								<FormLabel htmlFor="type">Your job offer</FormLabel>
								<Select
									id="type"
									name="type"
									{...formik.getFieldProps("type")}
									bg="#334198"
								>
									<option value="hireMe" style={{ color: '#334198' }}>Work for IT firm</option>
									<option value="freelance" style={{ color: '#334198' }}>Project on freelance</option>
									<option value="openSource" style={{ color: '#334198' }}>Open source session</option>
									<option value="techConsult" style={{ color: '#334198' }}>Technical consultant</option>
									<option value="webAnalyst" style={{ color: '#334198' }}>Web Analyst</option>
									<option value="webTutor" style={{ color: '#334198' }}>Web course tutor</option>
									<option value="other" style={{ color: '#334198' }}>Other</option>
								</Select>
							</FormControl>
							<FormControl
								isInvalid={!!formik.errors.comment && formik.touched.comment}
							>
								<FormLabel htmlFor="comment">Your message</FormLabel>
								<Textarea
									id="comment"
									name="comment"
									height={isMobile ? "120px" : "250px"}
									{...formik.getFieldProps("comment")}
								/>
								<FormErrorMessage>
									{formik.errors.comment}
								</FormErrorMessage>
							</FormControl>
							<Button
								type="submit"
								colorScheme="blue"
								width="full"
								isLoading={isLoading}
							>
								Submit
							</Button>
						</VStack>
					</form>
				</Box>
			</VStack>
		</FullScreenSection>
	);
};

export default ContactMeSection;
