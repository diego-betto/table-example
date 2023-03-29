import logo from './logo.svg';
import './App.css';

import TableRow from './TableRow'
import { useState } from 'react';

const dati = [
  {
    nome: 'Pinco',
    razza: 'JR',
    eta: 12,
    image: 'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQQ-n9bsPiXZL3SW5KusfdTLqpD7n_wAjhOix_IVYebqtWU2AcMfqOHrvaVrBcTlcViFBmyGN6mbbl4HIs'
  },
  {
    nome: 'Pallino',
    razza: 'Border Collie',
    eta: 4,
    image: 'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTZppXc4KaRDrQxjbPCmRswqVjGYKVmTvL5QoHGr_YIH2zhbVNqEYD8JHuVwLPfU9GBBHaCW8GG71npunc'
  },
  {
    nome: 'Frena',
    razza: 'Pastore del Caucaso',
    eta: 8,
    image: 'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQDUHlMeCe_KlEEWqScWsfLuXGpWbImjQDSmNIkIcRNyphIiIXmP4lHlWVVNwiMJpVX-4PnCEsqYBYUWsc'
  }
]

const valoreDiDefaultDelCampo = 'Valore di default'

function App() {
  /*let titolo = 'Elenco animali';

  function cambiaTitolo() {
    titolo = 'Vista elenco animali'
    console.log('nuovo titolo', titolo)
  }*/

  // Hook
  const [titolo, setTitolo] = useState('');
  const [sidebar, setSidebar] = useState(false);
  const [mostraFoto, setMostraFoto] = useState(false);
  const [filtroEta, setFiltroEta] = useState(false);

/*
  function cambiaTitolo(nuovoTitolo) {
    setTitolo(nuovoTitolo)
  }*/

  const aggiornaTitolo = (evento) => {
    setTitolo(evento.target.value)

/*
    if (evento.target.value === '') {
      setTitolo(valoreDiDefaultDelCampo)
    } else {
      setTitolo(evento.target.value)
    }*/      
  }

  console.log('titolo', titolo, titolo !== '')
  return (
    <div className="App">
      <h1>{titolo}</h1>
      <h2>{`Ecco il nuovo titolo ${titolo}`}</h2>      

      <button onClick={() => setTitolo('Nuovo titolo')}>Cambia titolo</button>
      <button onClick={() => setSidebar(!sidebar)}>
        {sidebar ? 'Nascondi' : 'Mostra'} Elenco
        </button>

      <input type="text" onChange={aggiornaTitolo}/>

      <label>
        <input type="checkbox" onChange={(evento) => setMostraFoto(evento.target.checked)} />
        Foto
      </label>

      <label>
        <input type="checkbox" onChange={(evento) => setFiltroEta(evento.target.checked)} />
        Età
      </label>

      {
        sidebar &&
        <table border="1">
          <thead>
            <tr>
              <th>Azioni</th>
              <th>Nome</th>
              <th>Razza</th>
              <th>Età</th>
              <th>Foto</th>
            </tr>
          </thead>

          <tbody>
            {
              dati
              .filter(animale => 
                (
                  filtroEta && (animale.eta > 6)
                  || !filtroEta 
                ) &&
                (
                  titolo !== '' && animale.nome.indexOf(titolo) !== -1 
                  || titolo === ''
                )
              )
              .map(animale => <TableRow 
                {...animale} 
                showFoto={mostraFoto}
              />)
            }

          </tbody>
        </table>
      }
    </div>
  );
}

export default App;
