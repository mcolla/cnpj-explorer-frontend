import React, { useState, useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom';

import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/rojemac.png';
import bgPj from '../../assets/bg-pessoa-juridica-mc.png';

import api from '../../services/api';

import { Title, Form, Hr, PessoasJuridicas, Error } from './styles';

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

const Dashboard: React.FC = () => {
  const [newPJ, setNewPJ] = useState('');
  const [inputError, setInputError] = useState('');
  const [pessoasJuridicas, setPessoasJuridicas] = useState<PessoaJuridica[]>(() => {
    const storagedPessoasJuridicas = localStorage.getItem('@pessoajuridica:pessoasjuridicas');

    if(storagedPessoasJuridicas){
      return JSON.parse(storagedPessoasJuridicas);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('@pessoajuridica:pessoasjuridicas', JSON.stringify(pessoasJuridicas))
  }, [pessoasJuridicas])

  async function handleAddPessoaFisica(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    if (!newPJ) {
      setInputError('Digite o CNPJ para a pesquisa');
      return;
    }

    try {
      const response = await api.get<PessoaJuridica>(`pessoasjuridicas/${newPJ}`);

      const pessoaJuridica = response.data;

      setPessoasJuridicas([...pessoasJuridicas, pessoaJuridica])
      setNewPJ('');
      setInputError('');
    } catch {
      setInputError('Erro ao pesquisar este repositório');
    }
  }

  return (
    <>
      <img src={logoImg} alt="Explorer"/>
      <Title>Dashboard - Pessoas jurídicas</Title>

      <Form hasError={!!inputError} onSubmit={handleAddPessoaFisica}>
        <input
          value={newPJ}
          onChange={(e) => setNewPJ(e.target.value)}
          placeholder="Digite o CNPJ"/>
        <button type="submit">Pesquisar</button>
      </Form>
      { inputError && <Error>{inputError}</Error>}
      <Hr />
      <PessoasJuridicas>
        {pessoasJuridicas.map(pj => (
          <Link key={pj.cnpj} to={`/pessoajuridica/${pj.cnpj}`}>
            <img
              src={bgPj}
              alt={pj.name}
            />
            <div>
              <strong>{pj.cnpj}</strong>
              <p>{pj.name}</p>
            </div>
            <FiChevronRight size={20}/>
          </Link>
        ))}
      </PessoasJuridicas>
    </>
  );
}

export default Dashboard;
