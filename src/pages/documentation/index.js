import { useEffect, useState } from 'react';

import Container from '../../components/Container';
import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';
import Card from '../../components/Card';
import Loader from '../../components/Loader';

import { api, pentaho } from '../../services/api';

import { FiBarChart2, FiSun, FiSearch } from 'react-icons/fi';
import { CardContainer, FilterSection } from './styles';

import { parseResource } from '../../utils/parseResource';
import { parseCdf } from '../../utils/parseCdf';

export default function Documentation() {
  const [module, setModule] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [resources, setResources] = useState([]);
  const [userRoles, setUserRoles] = useState([]);

  useEffect(() => {

    async function loadDashboardResources() {
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

    loadDashboardResources();

  }, []);

  const DOCUMENTATION_KEY = 5;

  const documentationResourcesFilter = resources.filter((documentation) => documentation.status === 'ativo' && documentation.typeId === DOCUMENTATION_KEY);

  const documentationResourcesFilteredUserRoles = documentationResourcesFilter.filter(resource => resource.roles.split(', ').some(r => userRoles.includes(r)));

  const modules = [...new Set(documentationResourcesFilteredUserRoles.map(a => a.moduleDescription))];

  const documentationResourcesFilteredModule = documentationResourcesFilteredUserRoles.filter((documentation) => documentation.moduleDescription === (module === '' ? documentation.moduleDescription : module));
  
  return (
    <Container>
      <Loader isLoading={isLoading} />

      <PageHeader
        title='Documentação'
        icon={<FiBarChart2 />}
      />
      <FilterSection>
        <Select
          autoFocus
          value={module}
          onChange={(event) => setModule(event.target.value)}
        >
          {modules.map((module) => (
            <option key={module}>{module}</option>
          ))}
        </Select>
        <FiSearch />
      </FilterSection>
      <CardContainer>
        {documentationResourcesFilteredModule.map((resource) => (
          <Card
            key={resource.id}
            title={resource.name}
            description={resource.description}
            path={resource.path}
            icon={<FiSun />}
          />
        ))}
      </CardContainer>
    </Container>
  );
}
