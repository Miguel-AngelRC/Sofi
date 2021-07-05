import React, { useEffect, useState } from "react";
import "../styles/temporizador.css";

function Temporizador(props) {
  const {tiempo,hacernada}=props;
  const [timeLeft, setTimeLeft] = useState(tiempo);

  useEffect(() => {
      setTimeout(() => {
        setTimeLeft(timeLeft-1000);
      }, 1000);
  });

    const formato = (tiempo)=>{
    let minutos = Math.floor(tiempo / (1000*60));
    let segundos = Math.floor(tiempo / 1000 % 60);

    if(minutos<10)
      minutos = "0"+minutos;
  
      if(segundos<10)
      segundos = "0"+segundos;

    return minutos+":"+segundos;
  };
  
  return (
    <div id="temporizador">
      {hacernada? <h2>No hagas nada</h2> :<h2>Tiempo restante</h2> }
      {timeLeft >0 ? <div className="tiempo">{formato(timeLeft)}</div> : <div className="tiempo">El tiempo ha terminado, continua con tus deberes.</div>}
    </div>
  );
}

export default Temporizador ;