import React, { useState } from 'react';
import Assento from './components/assento';
import style from './MovieBooking.module.css';
import Axios from 'axios';
import { Header } from './components/header/Header';

const ReservaAssentos = () => {
  
  const gerarAssentos = (quantidade) => {
    const novosAssentos = [];
    for (let i = 1; i <= quantidade; i++) {
      novosAssentos.push({ numero: i, reservado: false });
    }
    return novosAssentos;
  };

  const numeroTotalAssentos = 216;

  const [assentos, setAssentos] = useState(gerarAssentos(numeroTotalAssentos));

  const reservarAssento = async (numeroAssento) => {
    try {
      await Axios.post(`http://localhost:3001/api/moviebooking/${numeroAssento}`);
      console.log(`Assento ${numeroAssento} reservado com sucesso!`);
    } catch (error) {
      console.error('Erro ao reservar o assento:', error);
    }
  };

  const handleAssentoClicado = (numeroAssento) => {
    const novosAssentos = assentos.map((assento) =>
      assento.numero === numeroAssento
        ? { ...assento, reservado: !assento.reservado }
        : assento
    );
    setAssentos(novosAssentos);
  };

 
  const handleReservarAssento = async (numeroAssento) => {
    try {
      await Axios.post(`http://localhost:3001/api/moviebooking/${numeroAssento}`);
      console.log(`Assento ${numeroAssento} reservado com sucesso!`);
    } catch (error) {
      console.error('Erro ao reservar o assento:', error);
    }
  };
  

  return (
    <>
      <Header />
      <strong className={style.title}>Reserve seu assento</strong>
      <div className={style.wrapAll}>
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
        <div className={style.wrapButton}>
          <button onClick={handleReservarAssento}>Reserve</button>
        </div>
      </div>
    </>
  );
};

export default ReservaAssentos;
