import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import ButtonAddTransactions from 'components/ButtonAddTransactions/ButtonAddTransactions.jsx';
import ModalAddTransactions from 'components/ModalAddTransactions/ModalAddTransactions';
import Balance from 'components/Balance/Balance';
import Currency from 'components/Currency/Currency';
import Header from 'components/Header/Header';
import Navigation from 'components/Navigation/Navigation';
import Table from 'components/Table/Table';
import { Container } from 'styles/Shared.styled';
import {
  BackgroundContainer,
  BlurContainer,
  Flex,
  Wrap,
} from '../DashboardPage.styled';

const HomePage = () => {
  const isTablet = useMediaQuery({ minWidth: 768 });
  const [modalWindow, setModalWindow] = useState(false);
  const openModalHandler = () => setModalWindow(true);

  return (
    <BackgroundContainer>
      <BlurContainer>
        <Header />
        <Container>
          <Flex>
            <Wrap>
              <Navigation current="home" />
              <Balance />
            </Wrap>
            {isTablet && <Currency />}
          </Flex>
          <Table />
        </Container>
      </BlurContainer>
      <ButtonAddTransactions modalHandler={openModalHandler} />
      {modalWindow && <ModalAddTransactions />}
    </BackgroundContainer>
  );
};

export default HomePage;
