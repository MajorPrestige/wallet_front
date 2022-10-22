import { Formik } from "formik";
// import { Link } from "react-router-dom";
import * as yup from "yup";

import Logo from "components/Logo/Logo";
import { AuthContainer, Button } from "styles/Shared.styled";
import {
	FormWrapper,
	LogoWrapper,
	StyledForm,
	StyledLabel,
	StyledField,
	EmailLogo,
	PasswordLogo,
	UserLogo,
	AuthError,
	ButtonWrapper,
	PasswordCheck,
} from "./RegistrationForm.styled";

const RegistrationForm = () => {
	const validationSchema = yup.object().shape({
		email: yup.string().email("invalid email").required("Please, enter your email"),
		password: yup
			.string()
			.required(`Please, enter your password`)
			.min(6, "At least 6 characters")
			.max(12, "up to 12 characters"),
		confirmPassword: yup
			.string()
			.oneOf([yup.ref("password")], "Passwords do not match.")
			.required(`Please, confirm your password`),
		firstName: yup.string().max(12, "up to 12 characters").required(`Please, enter your name`),
	});

	const checkPassword = password => {
		if (password) {
			if (
				password.length > 5 &&
				((password !== password.toLowerCase() && password !== password.toUpperCase()) ||
					(/\d/.test(password) && /[a-zA-Z]/.test(password)))
			) {
				if (
					password !== password.toLowerCase() &&
					password !== password.toUpperCase() &&
					/\d/.test(password) &&
					/[a-zA-Z]/.test(password)
				) {
					return "strong";
				}

				return "normal";
			}

			return "week";
		}
	};

	return (
		<AuthContainer>
			<FormWrapper>
				<LogoWrapper>
					<Logo />
				</LogoWrapper>

				<Formik
					initialValues={{
						email: "",
						password: "",
						confirmPassword: "",
						firstName: "",
					}}
					validateOnChange
					validationSchema={validationSchema}
					onSubmit={values => console.log(values)}
				>
					{({ values, errors, touched, handleChange, handleSubmit }) => (
						<StyledForm>
							<StyledLabel>
								<StyledField
									name="email"
									type="email"
									placeholder="E-mail"
									value={values.name}
									onChange={handleChange}
								/>
								<EmailLogo />
								{touched.email && errors.email && <AuthError>{errors.email}</AuthError>}
							</StyledLabel>
							<StyledLabel>
								<StyledField
									name="password"
									type="password"
									placeholder="Password"
									value={values.name}
									required={true}
									onChange={handleChange}
								/>
								<PasswordLogo />
								{values.password && (
									<PasswordCheck security={checkPassword(values.password)}>
										<span></span>
										<span></span>
										<span></span>
									</PasswordCheck>
								)}
								{touched.password && errors.password && <AuthError>{errors.password}</AuthError>}
							</StyledLabel>
							<StyledLabel>
								<StyledField
									name="confirmPassword"
									type="password"
									placeholder="Confirm password"
									value={values.name}
									onChange={handleChange}
								/>
								<PasswordLogo />
								{touched.confirmPassword && errors.confirmPassword && (
									<AuthError>{errors.confirmPassword}</AuthError>
								)}
							</StyledLabel>
							<StyledLabel>
								<StyledField
									name="firstName"
									type="text"
									placeholder="First name"
									value={values.name}
									onChange={handleChange}
								/>
								<UserLogo />
								{touched.firstName && errors.firstName && <AuthError>{errors.firstName}</AuthError>}
							</StyledLabel>
							<ButtonWrapper>
								<Button primary marginBotom="20px" type="submit" onClick={handleSubmit}>
									REGISTER
								</Button>
								<Button type="submit" outlined>
									LOG IN
								</Button>
							</ButtonWrapper>
						</StyledForm>
					)}
				</Formik>
			</FormWrapper>
		</AuthContainer>
	);
};

export default RegistrationForm;
