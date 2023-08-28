import { useEffect, useState } from 'react';

import Container from '../../components/Container';
import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';
import Card from '../../components/Card';
import Loader from '../../components/Loader';

import { api, pentaho } from '../../services/api';

import { FiBox, FiSearch } from 'react-icons/fi';
import { CardContainer, FilterSection } from './styles';

import { parseResource } from '../../utils/parseResource';
import { parseCdf } from '../../utils/parseCdf';
import Default from '../../components/Default';

export default function Analyzer() {
  const [module, setModule] = useState('00 - CONTROLE');
  const [isLoading, setIsLoading] = useState(true);
  const [resources, setResources] = useState([]);
  const [userRoles, setUserRoles] = useState([]);

  const ANALYZER_KEY = 1;

  useEffect(() => {

    async function loadAnalyzerResources() {
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

    loadAnalyzerResources();

  }, []);

  const analyzerResourcesFilter = resources.filter((analyzer) => analyzer.status === 'ativo' && analyzer.typeId === ANALYZER_KEY);

  const analyzerResourcesFilteredUserRoles = analyzerResourcesFilter.filter(resource => resource.roles.split(', ').some(r => userRoles.includes(r)));

  const modules = [...new Set(analyzerResourcesFilteredUserRoles.map(a => a.moduleDescription))];

  const analyzerResourcesFilteredModule = analyzerResourcesFilteredUserRoles.filter((analyzer) => analyzer.moduleDescription === module);

  return (
    <Container>
      <Loader isLoading={isLoading} />

      <PageHeader
        title='Analyzer'
        icon={<FiBox />}
      />

      {analyzerResourcesFilteredModule.length < 1 ? (<Default message='Não existem recursos disponíveis para você.' />) : (
        <>
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
            {analyzerResourcesFilteredModule.map((resource) => (
              <Card
                key={resource.id}
                title={resource.name}
                description={resource.description}
                path={resource.path}
                icon={<FiBox />}
              />
            ))}
          </CardContainer>
        </>
      )}

    </Container>
  );
}
