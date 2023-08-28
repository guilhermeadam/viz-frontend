import noNotification from '../../assets/images/notification.gif';
import noResource from '../../assets/images/blocked.gif';

import { Container } from './styles';

export default function Default({ message, type }) {
  return (
    <Container>
      <img src={type === 'notification' ? noNotification : noResource} alt="Usuário sem permissões" />
      <strong>{message}</strong>
    </Container>
  );
}
