import { useEffect, useState } from 'react';

import { pentaho } from '../../services/api';

import { parseCdf } from '../../utils/parseCdf;';

import Container from '../../components/Container';
import PageHeader from '../../components/PageHeader';

import { FiCoffee } from 'react-icons/fi';

import { ContainerHome, User, Role } from './styles';

import avatar from '../../assets/images/avatar.svg';

export default function Home() {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    (async () => {
      try {

        const response = await pentaho.get('plugin/pentaho-cdf/api/cdf-embed.js');
        const parsedResponse = parseCdf(response);

        setRoles(parsedResponse.roles);

      } catch(error) {
        console.log('$Error: ', error);
      }
    })();
  }, []);

  return (
    <Container>
      <PageHeader title='Bem-vindo(a) ao S.E.I' icon={<FiCoffee />} />
      <ContainerHome>

        <User>
          <img src={avatar} alt="Avatar do Colaborador" className="avatar" />
          <div className="user-roles">
            {roles.map((role) => (
              <Role key={role}>
                <strong>{role.toLocaleUpperCase()}</strong>
              </Role>
            ))}
          </div>
        </User>

      </ContainerHome>
    </Container>
  );
}
