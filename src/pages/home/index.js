import { useEffect, useState } from 'react';

import { pentaho } from '../../services/api';

import { parseCdf } from '../../utils/parseCdf';

import Container from '../../components/Container';
import PageHeader from '../../components/PageHeader';
import Loader from '../../components/Loader';

import { FiCoffee } from 'react-icons/fi';

import { ContainerHome, User, Role } from './styles';

import avatar from '../../assets/images/avatar.svg';

export default function Home() {
  const [roles, setRoles] = useState([]);
  const [user, setUser] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadUserProfile() {
      try {
        setIsLoading(true);

        const response = await pentaho.get('plugin/pentaho-cdf/api/cdf-embed.js');
        const parsedResponse = await parseCdf(response.data);

        setRoles(parsedResponse.roles);
        setUser(parsedResponse.user);

      } catch(error) {
        console.log('$Error: ', error);

      } finally {
        setIsLoading(false);
      }
    }

    loadUserProfile();
  }, []);

  const today = new Date(1732935600000);

  console.log(today.toLocaleDateString());

  return (
    <Container>
      <Loader isLoading={isLoading} />

      <PageHeader title={`Olá ${user}, bem-vindo(a) ao SEI`} icon={<FiCoffee />} />
      <ContainerHome>

        <User>
          <img src={avatar} alt="Avatar do Colaborador" className="avatar" />
          <div className="user-roles">
            {(roles.length === 0 && !isLoading) && <strong>Olá {user.toUpperCase()} não há recursos cadastrados para você, quaisquer dúvidas contatar o administrador.</strong>}
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
