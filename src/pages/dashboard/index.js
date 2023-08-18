import { useEffect, useState } from 'react';

import Container from '../../components/Container';
import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';
import Card from '../../components/Card';
import Loader from '../../components/Loader';

import { api, pentaho } from '../../services/api';

import { FiBarChart2, FiBox, FiSearch } from 'react-icons/fi';
import { CardContainer, FilterSection } from './styles';

import { parseResource } from '../../utils/parseResource';
import { parseCdf } from '../../utils/parseCdf';

export default function Dashboard() {
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

  const DAHSBOARD_KEY = 2;

  const dashboardResourcesFilter = resources.filter((dashboard) => dashboard.status === 'ativo' && dashboard.typeId === DAHSBOARD_KEY);

  const modules = [...new Set(dashboardResourcesFilter.map(a => a.moduleDescription))];

  const dashboardResources = module === '' ? dashboardResourcesFilter.filter((resource) => resource.moduleDescription === resource.moduleDescription) : dashboardResourcesFilter.filter((resource) => resource.moduleDescription === module);

  const dashboardResourcesFilteredUserRoles = dashboardResources.filter(resource => resource.roles.split(', ').some(r => userRoles.includes(r)));

  return (
    <Container>
      <Loader isLoading={isLoading} />

      <PageHeader
        title='Dashboard'
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
        {dashboardResourcesFilteredUserRoles.map((resource) => (
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
