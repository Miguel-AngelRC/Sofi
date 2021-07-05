import React, {useState} from "react";
import Menu from './Menu';
import Temporizador from './Temporizador';
import Actividades from './Actividades';
import "../styles/inicio.css";

export default function Inicio(){
    const [actividad,cambiarActividad] = useState(-1);
    const [tiempo,cambiarTiempo] = useState(0);

    const numActividad = (num)=>{
        cambiarActividad(num);
    };

    const cantTiempo = (tiempo)=>{
        cambiarTiempo(tiempo);
    };


    return (
        <>
            <BotonMenu numActividad={numActividad} tiempo={tiempo}/>
            <ElegirTiempo actividad={actividad} tiemp={cantTiempo}/>
            {actividad === -1 ? null : <Actividades actividad={actividad} tiempo={tiempo} />}

        </>
    );
}

export function BotonMenu(props){
    const {numActividad,tiempo} = props;
    const [estado,cambiarEstado] = useState(false);


    const validar = ()=>{
        if(tiempo!==0)
            cambiarEstado(!estado);
        else
            alert("Por favor escoga primero los minutos.")
    }

   

    return(
        <>
            <header className="App-header">
              <h1 id="titulo">Sofi</h1>
            </header>

            <nav id="btnMenu" onClick={validar}>
                <hr/><hr/><hr/>
            </nav>

            {/*Ocultar y mostrar menu*/}
            {estado ? <Menu numActividad={numActividad} ocultarMenu={()=>{cambiarEstado(!estado)}}/>: <></> } 
            
        </>
    );
}


export function ElegirTiempo(props){
    const {actividad,tiemp} = props;
    const [estado,cambiarEstado] = useState(true); //estado mostrar/ocultar botones
    const [tiempo,cambiarTiempo] = useState(0);

    const validar = (temp) =>{
        tiemp(temp);

        switch (temp) {
            case 5:
                    cambiarTiempo(300000)
                break;
            case 10:
                    cambiarTiempo(600000)
                break;
            case 15:
                    cambiarTiempo(900000)
                break;
            default: 
                    cambiarTiempo(300000)
        }
        cambiarEstado(false) // estado para ocultar botones de tiempo
    };


if(actividad!==5 && actividad!==6)
    return(
        <>
            {estado
            ?
                <section id="setTiempo">
                    <h1>Bienvenido</h1>   
                    <p>¿Cuántos minutos de descanso?</p>
                    <div>
                        <button onClick={ ()=> {validar(5)}} >5</button>
                        <button onClick={ ()=> {validar(10)}} >10</button>
                        <button onClick={ ()=> {validar(15)}} >15</button>
                    </div>
                </section>
            :
                <></>
            }
            {tiempo!==0 ? <Temporizador tiempo={tiempo} hacernada={false}/> :<></>}            
        </>
    );
else if (actividad===5)
    return(
    <>
        {estado
        ?
            <section id="setTiempo">
                <h1>Bienvenido</h1>   
                <p>¿Cuántos minutos de descanso?</p>
                <div>
                    <button onClick={ ()=> {validar(5)}} >5</button>
                    <button onClick={ ()=> {validar(10)}} >10</button>
                    <button onClick={ ()=> {validar(15)}} >15</button>
                </div>
            </section>
        :
            <></>
        }
        <div id="temporizador"><h2>Actividad sin limite de tiempo</h2></div>         
    </>
    );
else 
    return(
    <>
        {estado
        ?
            <section id="setTiempo">
                <h1>Bienvenido</h1>   
                <p>¿Cuántos minutos de descanso?</p>
                <div>
                    <button onClick={ ()=> {validar(5)}} >5</button>
                    <button onClick={ ()=> {validar(10)}} >10</button>
                    <button onClick={ ()=> {validar(15)}} >15</button>
                </div>
            </section>
        :
            <></>
        }      
    </>
    );
}


