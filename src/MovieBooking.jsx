import React, { useState } from 'react';
import Assento from './components/assento';
import style from './MovieBooking.module.css'
import { Header } from './components/header/Header';

const ReservaAssentos = () => {
  // Array de objetos representando cada assento
  const gerarAssentos = (quantidade) => {
    const novosAssentos = [];
    for (let i = 1; i <= quantidade; i++) {
      novosAssentos.push({ numero: i, reservado: false });
    }
    return novosAssentos;
  };

  const numeroTotalAssentos = 100;

  const [assentos, setAssentos] = useState(gerarAssentos(numeroTotalAssentos));

  // Função para lidar com o clique em um assento
  const handleAssentoClicado = (numeroAssento) => {
    // Lógica para reservar ou liberar o assento
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
