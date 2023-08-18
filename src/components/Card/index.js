import { Container, TitleContainer } from './styles';

import { handleOpenResource } from '../../utils/handleOpenResource';

export default function Card({
  title, description, path, icon
}) {
  return (
    <Container onClick={() => handleOpenResource(title, description, path)}>
      <TitleContainer>
        {icon}
        <strong>{title}</strong>
      </TitleContainer>
      <span>{description}</span>
    </Container>
  );
}
