import { useEffect, useState } from 'react';

import Container from '../../components/Container';
import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';
import Card from '../../components/Card';
import Loader from '../../components/Loader';

import { api, pentaho } from '../../services/api';

import { FiBox, FiSearch, FiTablet } from 'react-icons/fi';
import { CardContainer, FilterSection } from './styles';

import { parseResource } from '../../utils/parseResource';
import { parseCdf } from '../../utils/parseCdf';

export default function Analytics() {
  const [module, setModule] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [resources, setResources] = useState([]);
  const [userRoles, setUserRoles] = useState([]);

  useEffect(() => {

    async function loadAnalyticsResources() {
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

    loadAnalyticsResources();

  }, []);

  const ANALYTICS_KEY = 3;

  const analyticsResourcesFilter = resources.filter((analytics) => analytics.status === 'ativo' && analytics.typeId === ANALYTICS_KEY);

  const modules = [...new Set(analyticsResourcesFilter.map(a => a.moduleDescription))];

  const analyticsResources = module === '' ? analyticsResourcesFilter.filter((resource) => resource.moduleDescription === resource.moduleDescription) : analyticsResourcesFilter.filter((resource) => resource.moduleDescription === module);

  const analyticsResourcesFilteredUserRoles = analyticsResources.filter(resource => resource.roles.split(', ').some(r => userRoles.includes(r)));

  return (
    <Container>
      <Loader isLoading={isLoading} />

      <PageHeader
        title='Analytics'
        icon={<FiTablet />}
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
        {analyticsResourcesFilteredUserRoles.map((resource) => (
          <Card
            key={resource.id}
            title={resource.name}
            description={resource.description}
            path={resource.path}
            icon={<FiBox />}
          />
        ))}
      </CardContainer>
    </Container>
  );
}
