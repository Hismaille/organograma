import { useState } from 'react';
import Banner from './componente/Banner/Banner';
import Formulario from './componente/Formulario/Formulario';
import Rodape from './componente/Rodape/Rodape';
import Time from './componente/Time/Time';


function App() {

  const times = [
    {
      nome: 'Produtor',
      corPrimaria: '#1c1c1c',
      corSecundaria: '#d3d3d3'
    },
    {
      nome: 'Designer',
      corPrimaria: '#836FFF',
      corSecundaria: '#708090'
    },
    {
      nome: 'Artista',
      corPrimaria: '#00CED1',
      corSecundaria: '#66CDAA'
    },
    {
      nome: 'Programador',
      corPrimaria: '#00FA9A',
      corSecundaria: '#556B2F'
    },
    {
      nome: 'Testador',
      corPrimaria: '#DAA520',
      corSecundaria: '#DEB887'
    },
    {
      nome: 'Marketing / RP e vendas',
      corPrimaria: '#9370DB',
      corSecundaria: '#DA70D6'
    },
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className='App'>
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />

      {times.map(time => <Time
        key={time.nome}
        nome={time.nome}
        corPrimaria={time.corPrimaria}
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time == time.nome)}
      />)}

      <Rodape />
    </div>
  )





}



export default App;