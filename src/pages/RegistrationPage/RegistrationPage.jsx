import { useMediaQuery } from 'react-responsive';

import RegistrationForm from "components/RegistrationForm/RegistrationForm";
import { StyledRegistrationForm, RegistrationHero, RegistrationImg } from "./RegistrationPage.styled";
import { Title } from 'styles/Shared.styled';
import FinanceTab from 'images/registration/FinanceTab.png';
import FinanceTab2x from 'images/registration/FinanceTab@2x.png';
import FinanceDesk from 'images/registration/FinanceDesk.png';
import FinanceDesk2x from 'images/registration/FinanceDesk@2x.png';

const RegistrationPage = () => {
	const isntMobile = useMediaQuery({ minWidth: 768 });

	return (
		<StyledRegistrationForm>
			{isntMobile && <RegistrationHero>
				<div>
					<picture>
						<source
							media="(min-width: 1280px)"
							srcSet={`${FinanceDesk} 1x, ${FinanceDesk2x} 2x`}
							type="image/png"
						/>
						<source
							media="(min-width: 768px)"
							srcSet={`${FinanceTab} 1x, ${FinanceTab2x} 2x`}
							type="image/png"
						/>
						<RegistrationImg src={FinanceTab} alt="Finance App" />
					</picture>
				</div>
					<Title>Finance App</Title>
			</RegistrationHero>}
			<RegistrationForm />
		</StyledRegistrationForm>
	);
};

export default RegistrationPage;
