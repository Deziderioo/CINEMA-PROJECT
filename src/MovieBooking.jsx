import React, { useState, useEffect } from 'react';
import Assento from './components/assento';
import style from './MovieBooking.module.css';
import Axios from 'axios';
import { Header } from './components/header/Header';

const ReservaAssentos = () => {
  const [assentos, setAssentos] = useState([]);
  const [assentosClicados, setAssentosClicados] = useState([]);

  useEffect(() => {
    const gerarAssentos = (quantidade) => {
      const novosAssentos = [];
      for (let i = 1; i <= quantidade; i++) {
        novosAssentos.push({ numero: i, reservado: false });
      }
      return novosAssentos;
    };

    const numeroTotalAssentos = 216;
    setAssentos(gerarAssentos(numeroTotalAssentos));
  }, []);

  const handleAssentoClicado = (numeroAssento) => {
    const novosAssentos = assentos.map((assento) =>
      assento.numero === numeroAssento ? { ...assento, reservado: !assento.reservado } : assento
    );
    setAssentos(novosAssentos);
    const assentosClicadosAtualizados = novosAssentos.filter(assento => assento.reservado).map(assento => assento.numero);
    setAssentosClicados(assentosClicadosAtualizados);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(assentosClicados);
  
    try {
      const response = await fetch('http://localhost:3001/api/toreserve', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ numerosAssentos: assentosClicados })
      });
  
      if (response.ok) {
        alert('Assentos reservados com sucesso');
      } else {
        const errorData = await response.json();
        alert(`Erro ao reservar assentos: ${errorData.error}`);
      }
    } catch (error) {
      console.error('Erro ao reservar assentos:', error);
      alert('Erro ao reservar assentos');
    }
  };
  
  
  
  
  return (
    <>
      <Header />
      <strong className={style.title}>Reserve seu assento</strong>
      <div className={style.wrapAll}>
        <div className={style.assentosContainer}>
          {assentos.map(assento => (
            <Assento
              key={assento.numero}
              numero={assento.numero}
              reservado={assento.reservado}
              onAssentoClicado={() => handleAssentoClicado(assento.numero)}
            />
          ))}
        </div>
        <div className={style.wrapButton}>
          <button onClick={handleSubmit}>Reserve</button>
        </div>
      </div>
    </>
  );
};

export default ReservaAssentos;
