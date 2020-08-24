import React, { useState, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/rojemac.png';
import bgPj from '../../assets/bg-pessoa-juridica-mc.png';

import api from '../../services/api';

import { Title, Header, PJInfo, PJDetalhes } from './styles';

interface PessoaJuridica {
  cnpj: string;
  name: string;
  logradouro: string;
  numero: string;
  complemento: string;
  municipio: string;
  uf: string;
  cep: string;
  telefone: string;
  email: string;
}

interface PJParams {
  cnpj: string;
}

const PessoaJuridica: React.FC = () => {
  const [dadosPJ, setDadosPJ] = useState<PessoaJuridica | null>(null);

  const { params } = useRouteMatch<PJParams>();

  useEffect(() => {
    api.get(`pessoasjuridicas/${params.cnpj}`).then((response) => {
      console.log(response.data);
    });

    /*async function loadData() {
      const response = await api.get(`pessoasjuridicas/${params.cnpj}`);
      const dadosCNPJ = response.data;

      return dadosCNPJ;
    }
    loadData();*/
  }, [params.cnpj]);

  return (
    <>
      <Header>
        <img src={logoImg} alt="Explorer"/>
        <Link to="/">
          <FiChevronLeft size={16}/>
          voltar
        </Link>
      </Header>
      <Title>Pessoa jurídica - {params.cnpj}</Title>
      <PJInfo>
        <header>
          <img src={bgPj}/>
          <div>
  <strong>Nome</strong>
            <p>Endereço</p>
          </div>
        </header>
      </PJInfo>
      <PJDetalhes>
          <Link  to={`/pessoajuridica/`}>
            <img
              width="40"
              src={bgPj}
            />
            <div>
              <strong>Telefone</strong>
              <p>Email</p>
            </div>
            <FiChevronRight size={20}/>
          </Link>
      </PJDetalhes>

    </>
  );
}

export default PessoaJuridica;
