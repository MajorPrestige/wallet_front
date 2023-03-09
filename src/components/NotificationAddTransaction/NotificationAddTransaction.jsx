import { Text, Container } from './NotificationAddTransaction.styled';
import { Trans } from 'react-i18next';

const NotificationAddTransaction = () => {
  return (
    <Container>
      <Text>
        <Trans i18nKey="transaction.notification.text">
          Hello! <br /> To get started, please add the transaction.
        </Trans>
      </Text>
    </Container>
  );
};

export default NotificationAddTransaction;
