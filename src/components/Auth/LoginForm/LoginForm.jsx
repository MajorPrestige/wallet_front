import { Formik } from "formik";
import * as yup from "yup";

import Logo from "components/Logo/Logo";
import { Button, StyledLink } from "styles/Shared.styled";
import {
	AuthContainer,
	LogoWrapper,
	FormWrapper,
	StyledForm,
	StyledLabel,
	StyledField,
	EmailLogo,
	PasswordLogo,
	AuthError,
	ButtonWrapper,
} from "../Auth.styled";

const LoginForm = () => {
	const validationSchema = yup.object().shape({
		email: yup.string().email("invalid email").required("Please, enter your email"),
		password: yup.string().required(`Please, enter your password`),
	});

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
					}}
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
								{((errors.password && values.password) || touched.password) && (
									<AuthError>{errors.password}</AuthError>
								)}
							</StyledLabel>
							<ButtonWrapper>
								<Button primary marginBotom="20px" type="submit" onClick={handleSubmit}>
                  LOG IN
								</Button>
								<StyledLink to="/signup" outlined="true">
									REGISTER
								</StyledLink>
							</ButtonWrapper>
						</StyledForm>
					)}
				</Formik>
			</FormWrapper>
		</AuthContainer>
	);
};

export default LoginForm;
