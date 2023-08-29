import { handleOpenResource } from '../../utils/handleOpenResource';

import validation from '../../assets/images/validation.svg';
import liberation from '../../assets/images/liberation.svg';

import { Container, ProcessImage, ProcessDescription, ProcessTitle } from './styles';
import Button from '../Button';

export default function Process({
  processTitle = '',
  processDescription = '',
  processType,
  processPath
}) {
  return (
    <Container>
      <ProcessImage src={processType === 'validacao' ? validation : liberation} />
      <ProcessDescription>
        <ProcessTitle>
          <h1>
            {processType === 'validacao' ? 'Validação de Módulos' : 'Liberação de Módulos'}
          </h1>
        </ProcessTitle>
        <Button onClick={() => handleOpenResource(processTitle, processDescription, processPath)}>
          <strong>
            {processType === 'validacao' ? 'Validar' : 'Liberar'}
          </strong>
        </Button>
      </ProcessDescription>
    </Container>
  );
}