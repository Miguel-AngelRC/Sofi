import React,{useState} from 'react';
import '../styles/videos.css'

export default function Videos (props){
    const {tiempo,tipo}=props;
    const [arrVideos,cambiarArr] = useState([]);
    const [tiemp,cambiarTiemp] = useState(0);
    const [numero,cambiarNum] = useState(-1);

    //Obtener video escogido
    const selecVideo = (arr,tiemp,num)=>{
        cambiarArr(arr);
        cambiarTiemp(tiemp)
        cambiarNum(num);
    };


    return(
            <>
                <Lista tipo={tipo} tiempo={tiempo} selecVideo={selecVideo}/>
                <ColocarVideo tipo={tipo} arrVideos={arrVideos} tiempo={tiemp} numero={numero}/>                
            </>
        );
}

export function Lista (props){
    const {tipo,tiempo,selecVideo}=props;         // tipo y tiempo de video
    let lista = [];                              // contendra la lista de videos para mostrar en forma de barra
    let arrVideos;                              // se asigna el arreglo que corresponde segun la actividad

    //Se busca que tipo es
    switch (tipo) {
        case 1: /*Meditacion*/
            arrVideos = meditacion;
        break;
        case 2: /*respitacion*/
            arrVideos = respiracion;
        break;
        case 3: /*ejercicio*/
            arrVideos = ejercicio;
        break;
        case 5: /*Musica Relajante*/
            arrVideos = musicaRelajante;
        break;
        case 7: /*Historias*/
            arrVideos = historias;
        break;
        
        default: 
            break;
    }

    if(tipo !== 5 ){
        const videoSeleccionado = (arr,tiempo,num)=>{
            selecVideo(arr,tiempo,num);  
        };

        // extrae la lista de videos de arrVideos y los coloca en la variable lista 
        for (let i in arrVideos){
            let aux = []; 
            if (i <= tiempo)
                for(let j in arrVideos[i]){
                    let titulo = arrVideos[i][j][0];

                    aux.push(
                                <p key={i.toString()+j.toString()} onClick={()=>{videoSeleccionado(arrVideos,i,j)}} > 
                                    {titulo} 
                                </p>
                            );
           }
           lista.push(
            <div key={i.toString()} className="lista">
                {i <= tiempo? <h2>{i} minutos</h2>: <></>}
                {aux}
            </div>
        );
    }

    // retorna la lista
    return(
            <div id="contedorLista">
                <h1>Lista</h1>
                {lista}
            </div>
        );
    }else{
        const videoSeleccionado = (arr,tiempo,num)=>{
            selecVideo(arr,tiempo,num);  
        };

        // extrae la lista de videos de arrVideos y los coloca en la variable lista 
        for (let i in arrVideos){
            let aux = []; 
            if (i <= tiempo)
                for(let j in arrVideos[i]){
                    let titulo = arrVideos[i][j][0];

                    aux.push(
                                <p key={i.toString()+j.toString()} onClick={()=>{videoSeleccionado(arrVideos,i,j)}} > 
                                    {titulo} 
                                </p>
                            );
           }
           lista.push(
            <div key={i.toString()} className="lista">
                {aux}
            </div>
        );
    }

    // retorna la lista
    return(
            <div id="contedorLista">
                <h1>Lista</h1>
                {lista}
            </div>
        );
    }
}



export function ColocarVideo(props){
    const {tipo,arrVideos,tiempo,numero}=props;
    let aux;

    switch (tipo) {
        case 1: /*Meditacion*/
            aux = meditacion;
        break;
        case 2: /*respitacion*/
            aux = respiracion;
        break;
        case 3: /*ejercicio*/
            aux = ejercicio;
        break;
        case 5: /*Musica Relajante*/
            aux = musicaRelajante;
        break;
        case 7: /*Historias*/
            aux = historias;
        break;
        default: 
            break;
    }


    if(arrVideos.length===0 || arrVideos !== aux){
        return(
            <div id="video" >
                <div id="msjVideo">Seleccione un vídeo de la lista</div>
            </div>
        );
    }else{
        return(
            <div id="video">
                {arrVideos[tiempo][numero][1]}
            </div>
        );
    }
}


/* Enlaces de videos */

let meditacion = {
    5:[
        ["Meditación 1",
        <iframe key={1} width="560" height="315" src="https://www.youtube.com/embed/lpfZHSkzF54?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>],

        ["Meditación 2",
        <iframe key={1} width="560" height="315" src="https://www.youtube.com/embed/EHAdnzBDip0?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>],
        
        ["Meditación 3",
        <iframe width="560" height="315" src="https://www.youtube.com/embed/LDZQH0Tp4IE?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>],
    ],
    10:[
        ["Meditación 1",
        <iframe key={1} width="560" height="315" src="https://www.youtube.com/embed/z8ZZq9Z4Row?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>],

        ["Meditación 2",
        <iframe width="560" height="315" src="https://www.youtube.com/embed/WjO_098iXOw?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>],

        ["Meditación 3",
        <iframe width="560" height="315" src="https://www.youtube.com/embed/eVjnAlD4wwQ?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>],
    ],
    15:[
        ["Meditación 1",
        <iframe key={1} width="560" height="315" src="https://www.youtube.com/embed/-OQWTMrPTPE?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>],

        ["Meditación 2",
        <iframe key={1} width="560" height="315" src="https://www.youtube.com/embed/6sfk28wys7I?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>],

        ["Meditación 3",
        <iframe width="560" height="315" src="https://www.youtube.com/embed/rL1XMrvRgWg?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>],
    ]
};

let respiracion = {
    5:[
        ["Respiración 1",
        <iframe width="560" height="315" src="https://www.youtube.com/embed/PhhYvS0RjzI?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>],

        ["Respiración 2",
        <iframe width="560" height="315" src="https://www.youtube.com/embed/rAMFm8nbj_8?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>],

        ["Respiración 3",
        <iframe width="560" height="315" src="https://www.youtube.com/embed/dbYCCb8tgSA?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>],
    ],
    10:[
        ["Respiración 1",
        <iframe key={1} width="560" height="315" src="https://www.youtube.com/embed/6u9-zcD4ZaE?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>],

        ["Respiración 2",
        <iframe width="560" height="315" src="https://www.youtube.com/embed/sbVKvUPU_lY?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>],

        ["Respiración 3",
        <iframe width="560" height="315" src="https://www.youtube.com/embed/GTERW6tNMy0?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>],
    ],
    15:[
        
        ["Respiración 1",
        <iframe width="560" height="315" src="https://www.youtube.com/embed/h9eQ03k4C_0?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>],
    
        ["Respiración 2",
        <iframe width="560" height="315" src="https://www.youtube.com/embed/sbVKvUPU_lY?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>],

        ["Respiración 3",
        <iframe width="560" height="315" src="https://www.youtube.com/embed/UwN9IwUms10?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>],
    ]
};

let ejercicio = {
    5:[
        ["Calentamiento",
        <iframe key={1} width="560" height="315" src="https://www.youtube.com/embed/8DyncYCOgsU?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>],

        ["Abdominales de pie",
        <iframe key={1} width="560" height="315" src="https://www.youtube.com/embed/LUwwjgC2_M0?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>],

        ["Cardio",
        <iframe key={1} width="560" height="315" src="https://www.youtube.com/embed/FWA6b4GDHGE?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>], 
    ],
    10:[
        ["Calentamiento ",
        <iframe key={1} width="560" height="315" src="https://www.youtube.com/embed/D-m0wB31hBc?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>],

        ["Cardio rápido",
        <iframe key={1} width="560" height="315" src="https://www.youtube.com/embed/Z5JDn0TriMo?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>],

        ["Cardio para principiantes",
        <iframe key={1} width="560" height="315" src="https://www.youtube.com/embed/O5GGLiDYhKM?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>],
    ],
    15:[
        ["Ejercicios de pie",
        <iframe key={1} width="560" height="315" src="https://www.youtube.com/embed/qculzq9XTOk?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>],

        ["Quemar grasa",
        <iframe key={1} width="560" height="315" src="https://www.youtube.com/embed/BVW5iUeJ6yQ?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>],

        ["Cardio para reducir cintura",
        <iframe key={1} width="560" height="315" src="https://www.youtube.com/embed/H8nJ662uQUc?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>],

        ["Cardio para principiantes",
        <iframe key={1} width="560" height="315" src="https://www.youtube.com/embed/L4u2F-W-dLQ?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>],
    ]
    
};


let historias = {
    5:[
        ["¡Yo no me sé rendir!",
        <iframe width="560" height="315" src="https://www.youtube.com/embed/DJAVgwlljvA?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>],

        ["¿Cuándo dejar ir a alguien?",
        <iframe width="560" height="315" src="https://www.youtube.com/embed/2pfkksjJSjA?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>],

        ["El precio de ser diferente ",
        <iframe width="560" height="315" src="https://www.youtube.com/embed/8P1z2K3Zv6g?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>],

        ["3 segundos para cambiar tu vida",
        <iframe width="560" height="315" src="https://www.youtube.com/embed/A74eNsWbjNY?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>],

        ["Tengo amigos",
        <iframe width="560" height="315" src="https://www.youtube.com/embed/jaBF3wccgfI?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>],

        ["Momento difícil",
        <iframe width="560" height="315" src="https://www.youtube.com/embed/LLdz2Jo6DUQ?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>],

        ["Soledad ",
        <iframe width="560" height="315" src="https://www.youtube.com/embed/0XHjEDiafcM?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>],

        ["Imitar ",
        <iframe width="560" height="315" src="https://www.youtube.com/embed/W4So-xqJ7tk?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>],

        ["Historia al revés",
        <iframe width="560" height="315" src="https://www.youtube.com/embed/3672-AKcv_I?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>],

        ["Eres pobre, no seas víctima",
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ifGozkcnsn0?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>],

        ["El dinero te hace feliz",
        <iframe width="560" height="315" src="https://www.youtube.com/embed/71mNvoz7M5w?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>],

        ["¡Te sientes vacío!",
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Dfu3qDU8LEE?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>],
    ],
    10:[
        ["¿Por qué carajo no puedo cambiar?",
        <iframe width="560" height="315" src="https://www.youtube.com/embed/4EWyKZKsXl4?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>],

        ["Cuando sabes cuánto vales, dejas de dar descuentos",
        <iframe width="560" height="315" src="https://www.youtube.com/embed/vq0owvyIPHk?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>],

        ["Hogar vs familia",
        <iframe width="560" height="315" src="https://www.youtube.com/embed/rNs1B6UIJ10?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>],
    ],
    15:[
        ["Mis primeros pasos en el emprendimiento",
        <iframe width="560" height="315" src="https://www.youtube.com/embed/d28CrzMNlY4?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>],

        ["Humanidad",
        <iframe width="560" height="315" src="https://www.youtube.com/embed/qWlAnWzU5JM?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>],

        ["Disciplina",
        <iframe width="560" height="315" src="https://www.youtube.com/embed/d6KleH5mLms?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>],

        ["Nostalgia absurda - parte 1",
        <iframe width="560" height="315" src="https://www.youtube.com/embed/t6Ypy8elADA?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>],
        
        ["Nostalgia absurda - parte 2",
        <iframe width="560" height="315" src="https://www.youtube.com/embed/I3fm_FIeNXQ?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>],
    ]
    
};

let musicaRelajante = {
    5:[
        ["Música Para Estudiar",
        <iframe width="560" height="315" src="https://www.youtube.com/embed/OJ5FiH-dl30?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>],

        ["1 A.M Study Session",
        <iframe width="560" height="315" src="https://www.youtube.com/embed/lTRiuFIWV54?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>],

        ["Lofi hip hop mix",
        <iframe width="560" height="315" src="https://www.youtube.com/embed/-FlxM_0S2lA?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>],

        ["Música para Estudiar y Concentrarse",
        <iframe width="560" height="315" src="https://www.youtube.com/embed/5zjDLZy0Q_U?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>],

        ["Música relajante",
        <iframe width="560" height="315" src="https://www.youtube.com/embed/cOlx7efzNog?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>],

        ["Música relajante 2",
        <iframe width="560" height="315" src="https://www.youtube.com/embed/LL3oJRfB3BQ?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>],

        ["Hip hop instrumental",
        <iframe width="560" height="315" src="https://www.youtube.com/embed/4KQgVf6JCxk?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullFcreen></iframe>],
        
        ["Calm Your Anxiety",
        <iframe width="560" height="315" src="https://www.youtube.com/embed/zPyg4N7bcHM?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullFcreen></iframe>],

        ["Relax Your Mind",
        <iframe width="560" height="315" src="https://www.youtube.com/embed/RN2uB2KhNKk?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullFcreen></iframe>],

        ["Leer y Estudiar",
        <iframe width="560" height="315" src="https://www.youtube.com/embed/XT92zJzc-sQ?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullFcreen></iframe>],

        ["Ondas beta",
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Q8JIO106JlM?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullFcreen></iframe>],
    ],    
};