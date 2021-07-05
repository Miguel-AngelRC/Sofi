import "../styles/menu.css";

export default function Menu (props){
    const {numActividad,ocultarMenu} = props; /* funcion del componente padre 'Menu'*/

    const ejecutar = (num)=>{
        ocultarMenu();
        numActividad(num);
    };

    return(
              <div id="menu">
                <div className="actividades" onClick={()=>{ejecutar(1)}}> Meditación </div>
                <div className="actividades" onClick={()=>{ejecutar(2)}}> Respiración </div>
                <div className="actividades" onClick={()=>{ejecutar(3)}}> Ejercicio físico </div>
                <div className="actividades" onClick={()=>{ejecutar(5)}}> Música relajante </div>
                <div className="actividades" onClick={()=>{ejecutar(6)}}> No hacer nada </div>
                <div className="actividades" onClick={()=>{ejecutar(7)}}> Charlas motivadoras </div>
                <div className="actividades" onClick={()=>{ejecutar(9)}}> Cuentos cortos </div>
                <div className="actividades" onClick={()=>{ejecutar(8)}}> Consejos para desestresarse </div>
                <div className="actividades" onClick={()=>{ejecutar(10)}}> Consejos para dormir </div>
                <div className="actividades" onClick={()=>{ejecutar(11)}}> Consejos para organizarse </div>
                <div className="actividades" onClick={()=>{ejecutar(12)}}> Otras páginas </div>
            </div> 
    );
}
