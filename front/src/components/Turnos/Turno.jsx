import styles from "./Turno.module.css";
import axios from 'axios';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Turno = ({ turns: { id, date, time, status } }) => {
  const [estado, setEstado] = useState(status);
  const navigate = useNavigate();
  const cancelTurn = async (id) => {
    await axios.put(`http://localhost:8080/turns/cancel/${id}`);
    setEstado("cancelled");
    // Puedes agregar lógica adicional aquí después de cancelar el turno si es necesario
  };

  const handleCancelTurn = () => {
    cancelTurn(id);
    navigate("/mis-turnos");
    // Puedes agregar lógica adicional aquí después de hacer clic en el botón de cancelar
  };

  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <h4>Fecha: {date}</h4>
        <h4>Hora: {time}</h4>
      </div>
      <div className={estado === 'active' ? styles.active : styles.canceled}>
        <h4>{estado}</h4>
      </div>
      {estado !== "cancelled" && (
        <button onClick={() => handleCancelTurn()}>Cancelar Turno</button>
      )}
    </div>
  );

};

export default Turno;
