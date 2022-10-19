import { Formik, Form, Field } from "formik";
// import { Link } from "react-router-dom";
import * as yup from "yup";

import Logo from "components/Logo/Logo";
import { ReactComponent as EmailLogo } from "images/svgs/email.svg";
import { ReactComponent as PasswordLogo } from "images/svgs/password.svg";
import { ReactComponent as UserLogo } from "images/svgs/user.svg";


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

	return (
		<div>
			<Logo />
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
					
					<Form>
						<label>
							<EmailLogo />
							<Field
								name="email"
								type="email"
								placeholder="E-mail"
								value={values.name}
								onChange={handleChange}
							/>
							{touched.email && errors.email && <p>{errors.email}</p>}
						</label>
						<label>
							<PasswordLogo />
							<Field
								name="password"
								type="password"
								placeholder="Password"
								value={values.name}
								required={true}
								onChange={handleChange}
							/>
							{touched.password && errors.password && <p>{errors.password}</p>}
						</label>
						<label>
							<PasswordLogo />
							<Field
								name="confirmPassword"
								type="password"
								placeholder="Confirm password"
								value={values.name}
								onChange={handleChange}
							/>
							{touched.confirmPassword && errors.confirmPassword && <p>{errors.confirmPassword}</p>}
						</label>
						<label>
							<UserLogo />
							<Field
								name="firstName"
								type="text"
								placeholder="First name"
								value={values.name}
								onChange={handleChange}
							/>
							{touched.firstName && errors.firstName && <p>{errors.firstName}</p>}
						</label>
						<div>
							<button type="submit" onClick={handleSubmit}>
								REGISTER
							</button>
							<button>LOG IN</button>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default RegistrationForm;
