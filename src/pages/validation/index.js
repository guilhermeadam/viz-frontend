import { useEffect, useState } from 'react';

import Container from '../../components/Container';
import PageHeader from '../../components/PageHeader';
import Loader from '../../components/Loader';

import { api, pentaho } from '../../services/api';

import { FiCheckCircle } from 'react-icons/fi';

import { parseResource } from '../../utils/parseResource';
import { parseCdf } from '../../utils/parseCdf';

import Default from '../../components/Default';
import Process from '../../components/Process';

export default function Documentation() {
  const [isLoading, setIsLoading] = useState(true);
  const [resources, setResources] = useState([]);
  const [userRoles, setUserRoles] = useState([]);

  useEffect(() => {

    async function loadProcessResources() {
      try {
        setIsLoading(true);

        const responseApi = await api.get('getrecurso');
        const parsedResource = responseApi.data.resultset.map(resource => parseResource(resource));

        const responsePentaho = await pentaho.get('plugin/pentaho-cdf/api/cdf-embed.js');
        const parsedResponsePentaho = await parseCdf(responsePentaho.data);

        setResources(parsedResource);
        setUserRoles(parsedResponsePentaho.roles);
      }
      catch(error) {
        console.log('$Error: ', error);
      }
      finally {
        setIsLoading(false);
      }
    }

    loadProcessResources();

  }, []);

  const PROCESS_KEY = 4;

  const processResourcesFilter = resources.filter((process) => process.status === 'ativo' && process.typeId === PROCESS_KEY && process.path.includes('validacao')); 

  const processResourcesFilteredUserRoles = processResourcesFilter.filter(resource => resource.roles.split(', ').some(r => userRoles.includes(r)));

  return (
    <Container>
      <Loader isLoading={isLoading} />

      <PageHeader
        title='Validação'
        icon={<FiCheckCircle />}
      />

      {processResourcesFilteredUserRoles.length < 1 ? (<Default message='Não existem recursos disponíveis para você.' />) : (
        <>
          {processResourcesFilteredUserRoles.map((process) => (
            <Process
              key={process.id}
              processTitle={process.name}
              processDescription={process.description}
              processType='validacao'
              processPath={process.path}
            />
          ))}
        </>
      )}
    </Container>
  );
}
