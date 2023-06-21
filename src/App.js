import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario/Formulario';
import Time from './components/Time/Time';

function App() {

  const [colaboradores, setColaboradores] = useState([]);

  const cadastrarColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
    console.log(colaborador, colaboradores);
  }

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9',
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5',
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9',
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
    },
  ];

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map((time) => time.nome)} aoColaboradorCadastrado={(colaborador) => { cadastrarColaborador(colaborador) }} />
      {times.map((time) => {
        return (
          <Time titulo={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria} key={time.nome} />
        )
      })}
    </div>
  );
}

export default App;
