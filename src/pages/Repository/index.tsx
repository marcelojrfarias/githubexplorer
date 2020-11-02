import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Header, RepositoryInfo, Issues } from './styles';
import logoImg from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FunctionComponent = () => {
  // const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="GitHub Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars1.githubusercontent.com/u/12167941?s=460&u=84c7ed5e7f7489703f46f2c4994b25b5761151fc&v=4"
            alt="Marcelo Farias"
          />
          <div>
            <strong>marcelojrfarias/calengrade</strong>
            <p>descricao do repositorio</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1888</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="issue">
          <div>
            <strong>Problema ao importar aula X</strong>
            <p>Ao tentar importar a aula...</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
        <Link to="issue">
          <div>
            <strong>Problema ao importar aula X</strong>
            <p>Ao tentar importar a aula...</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
        <Link to="issue">
          <div>
            <strong>Problema ao importar aula X</strong>
            <p>Ao tentar importar a aula...</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
        <Link to="issue">
          <div>
            <strong>Problema ao importar aula X</strong>
            <p>Ao tentar importar a aula...</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
