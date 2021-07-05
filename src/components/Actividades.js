import React from "react";
import Videos from './Videos';
import NoHacerNada from './NoHacerNada';
import Consejos from './Consejos';
import Novelas from './Novelas';
import OtrosLinks from './OtrosLinks';

export default function Actividades (props){
    const {actividad,tiempo}=props;

    

    switch (actividad) {
        case 1: /*Meditacion*/
            return (<><Videos tipo={actividad} tiempo={tiempo} /></>);
        case 2: /*respitacion*/
            return (<><Videos tipo={actividad} tiempo={tiempo}/></>);
        case 3: /*ejercicio*/
            return (<><Videos tipo={actividad} tiempo={tiempo}/></>);
        case 4: /*musica*/
            return (<></>);
        case 5: /*pantalla relajate*/
            return (<><Videos tipo={actividad} tiempo={tiempo}/></>);
        case 6: /*No hacer nada*/
            return (<><NoHacerNada tiempo={tiempo}/></>);
        case 7: /*Historias*/
            return (<><Videos tipo={actividad} tiempo={tiempo}/></>);
        case 8: /*Consejos para estres*/
            return (<><Consejos tipo={actividad} /></>);
        case 9: /*Cuentos  cortos*/
            return (<><Novelas/></>);
        case 10: /*Consejos para dormir*/
            return (<><Consejos tipo={actividad} /></>);
        case 11: /*Consejos para organización*/
            return (<><Consejos tipo={actividad} /></>);
        case 12: /*Otros links*/
            return (<><OtrosLinks/></>);
        default:
            return (<></>);
    }
}
