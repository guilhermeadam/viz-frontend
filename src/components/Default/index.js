import defaultAvatar from '../../assets/images/warning-user.svg';

import { Container } from './styles';

export default function Default({ message }) {
  return (
    <Container>
      <img src={defaultAvatar} alt="Usuário sem permissões" />
      <strong>{message}</strong>
    </Container>
  );
}
