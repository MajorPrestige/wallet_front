import RegistrationForm from "components/RegistrationForm/RegistrationForm";
import { StyledRegistrationForm, RegistrationHero } from "./RegistrationPage.styled";

const RegistrationPage = () => {
	return (
		<StyledRegistrationForm>
      <RegistrationHero />
			<RegistrationForm />
		</StyledRegistrationForm>
	);
};

export default RegistrationPage;
