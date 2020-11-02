import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FunctionComponent = () => {
  return (
    <>
      <img src={logoImg} alt="GitHub Explorer" />
      <Title>Explore repositórios no GitHub</Title>
      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/12167941?s=460&u=84c7ed5e7f7489703f46f2c4994b25b5761151fc&v=4"
            alt="Marcelo Farias"
          />
          <div>
            <strong>Calengrade</strong>
            <p>
              Ferramenta para gerar arquivo de calendário (.ics) a partir da
              grade de aulas (.json).
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/12167941?s=460&u=84c7ed5e7f7489703f46f2c4994b25b5761151fc&v=4"
            alt="Marcelo Farias"
          />
          <div>
            <strong>Calengrade</strong>
            <p>
              Ferramenta para gerar arquivo de calendário (.ics) a partir da
              grade de aulas (.json).
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/12167941?s=460&u=84c7ed5e7f7489703f46f2c4994b25b5761151fc&v=4"
            alt="Marcelo Farias"
          />
          <div>
            <strong>Calengrade</strong>
            <p>
              Ferramenta para gerar arquivo de calendário (.ics) a partir da
              grade de aulas (.json).
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
