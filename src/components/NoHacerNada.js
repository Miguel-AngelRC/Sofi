import Temporizador from './Temporizador';
import '../styles/noHacerNada.css'

export default function NoHacerNada(props){
    const {tiempo} =props;

    let tiemp;

    switch (tiempo) {
        case 5:
                tiemp=300000;
            break;
        case 10:
                tiemp=600000;
            break;
        case 15:
                tiemp=900000;
            break;
        default: 
                tiemp=300000;
    }

   

    var timeout;
    const seDetectoMovimiento = ()=>{
        let msj = document.getElementById("msj");
        if(msj){
            clearTimeout(timeout);
            msj.className = "msjMoviT";
            document.body.style.background="#000";

            timeout = setTimeout(function(){
                msj.className = "";
                document.body.style.background="";
            }, 1000);
        }
    }

    document.addEventListener("mousemove", seDetectoMovimiento);

    window.onkeydown = ()=> {seDetectoMovimiento()};
    
    return(
        <div id="msjNada" >
            <Temporizador tiempo={tiemp} hacernada={true} />
            <div id="msj" className="msjMoviF">Relajate no hagas nada</div>
        </div>
    );
} 