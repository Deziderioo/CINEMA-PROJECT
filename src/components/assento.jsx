import React from 'react';
import styles from './assento.module.css'; // Importe os estilos do arquivo CSS modular

const Assento = ({ numero, reservado, onAssentoClicado }) => {
  return (
    <div 
      className={`${styles.assento} ${reservado ? styles.reservado : ''}`}
      onClick={() => onAssentoClicado(numero)}
    >
      {numero}
    </div>
  );
};

export default Assento;
