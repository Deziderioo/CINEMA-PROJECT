import React, { useState } from 'react';
import Assento from './components/assento';
import style from './MovieBooking.module.css'
import { Header } from './components/header/Header';


const ReservaAssentos = () => {
  
  const gerarAssentos = (quantidade) => {
    const novosAssentos = [];
    for (let i = 1; i <= quantidade; i++) {
      novosAssentos.push({ numero: i, reservado: false });
    }
    return novosAssentos;
  };

  const numeroTotalAssentos = 147;

  const [assentos, setAssentos] = useState(gerarAssentos(numeroTotalAssentos));

 
  const handleAssentoClicado = (numeroAssento) => {

    const novosAssentos = assentos.map((assento) =>
      assento.numero === numeroAssento
        ? { ...assento, reservado: !assento.reservado }
        : assento
    );
    setAssentos(novosAssentos);
  };

  return (
    <>

    <Header/>

      <strong className={style.title}>reserve seu assento</strong>
      <div className={style.assentosContainer}>
        {assentos.map((assento) => (
          <Assento
            key={assento.numero}
            numero={assento.numero}
            reservado={assento.reservado}
            onAssentoClicado={handleAssentoClicado}
          />
        ))}
      </div>
     </>
  );
};


export default ReservaAssentos;
