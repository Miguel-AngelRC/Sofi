import React, {useState}from 'react';
import '../styles/consejos.css';

export default function Consejos(props){
    let encabezado = "";
    const {tipo}=props;                             // tipo de consejo
    let listaConsejos = [];                         // lista de todos los consejos
    let listaApps = [];                             // lista de apps
    const [consejo,cambiarConsejo]= useState("");   // consejo en poppup
    const [titulo,cambiarTitulo]= useState("");     // titulo en popup
    const [clase,cambiarClase]=useState("");

    switch (tipo) {                                 // valicación de tipo
        case 8:
                encabezado = "Consejos para desestresarse";
                listaConsejos = desestresarse;
                listaApps = appDesestresarse;
            break;
        case 10:
                encabezado = "Consejos para dormir";
                listaConsejos = dormir;
                listaApps = appDormir
            break;
        case 11:
                encabezado = "Consejos para organizarse";
                listaConsejos = organizacion;
                listaApps = appOrganizacion;
            break;
        default:
            break;
    }

   

    const mostrar = (i)=>{                  // cambia valores para mostrar popup
        cambiarTitulo(listaConsejos[i][0]);
        cambiarConsejo(listaConsejos[i][1]);
        cambiarClase("#c"+i);
    };

    const cerrar = ()=>{                    // cambia valores para cerrar popup
        cambiarTitulo("");
        cambiarConsejo("");
    };

    let titulos = [];                       // almacena todos los titulos para ser mostrados en la vista
    let n=0;
    for (let i in listaConsejos){           // obtiene todos los titulos de la lista de consejos
        n+=1;
        titulos.push(<div id= {"n"+i} key={i} className="consejo" onClick={()=>{mostrar(i)} }>
                                <h2>{listaConsejos[i][0]}</h2>
                                <p>{n}</p>                     
                      </div>
                    );
    }

    let nombresApps = [];                       // almacena todos las app para ser mostrados en la vista
    for (let i in listaApps){           
        n+=1;
        nombresApps.push(<a href={listaApps[i][1]} target="_blank" rel="noreferrer"><div key={i} className="app" >
                                <h2>{listaApps[i][0]}</h2>              
                      </div></a> 
                    );
    }

    return(
        <>
        <h1 id="emcabezado">{encabezado}</h1>
        <div id="contenedorConsejos">
            
            {titulos}

           
            
            {
            consejo.length !== 0  ?  
                                <>
                                <div id="oscurecer"></div>
                                    <div id="popup">
                                        <div id="cerrar"><a href={clase}><p onClick={()=>{cerrar()}}>X</p></a></div>
                                        <h2>{titulo}</h2>
                                        <p>{consejo}</p>
                                    </div>
                                </>
                               
                            : 
                            <></>
            }
        </div>


        <h1 id="emcabezado">Aplicaciones relacionadas</h1>
        <div id="contenedorApps">
            {nombresApps}
        </div>
        </>
    );
}

export function Apps (){

}


let appDesestresarse = [
    [
        "Meyo",
        "https://meyo.io/"
    ],
    [
        "Gurumind",
        "https://gurumind.es/ "
    ],
    [
        "Breathe2relax",
        "https://onemindpsyberguide.org/apps/breathe2relax/"
    ], 
    [
        "Aura",
        "https://onemindpsyberguide.org/apps/aura-mindfulness-happiness/"
    ],
    [
        "Intimind",
        "https://intimind.es/"
    ],
    [
        "Prune",
        "http://www.prunegame.com/"
    ],
    [
        "My oasis",
        "https://play.google.com/store/apps/details?id=com.buffstudio.myoasis&hl=en_US"
    ],                  
];

let appDormir = [
    [
        "Sleep cycle",
        "https://www.sleepcycle.com/"
    ],
    [
        "Sleep boot",
        "https://sleepbot-sleep-cycle-alarm.uptodown.com/android"
    ],
    [
        "Sleep better",
        "https://play.google.com/store/apps/details?id=com.runtastic.android.sleepbetter.lite&hl=es_MX&gl=US"
    ],
    [
        "Headspace",
        "https://www.headspace.com/"
    ],
    [
        "Calm: meditation",
        "https://calm.uptodown.com/android#:~:text=Calm%20es%20una%20aplicaci%C3%B3n%20que,si%20todo%20va%20bien%2C%20felices"
    ],
];

let appOrganizacion = [
    [
        "Google Calendar",
        "https://play.google.com/store/apps/details?id=com.google.android.calendar"
    ],
    [
        "Google Keeps",
        "https://play.google.com/store/apps/details?id=com.google.android.keep"
    ],
    [
        "Trello",
        "https://play.google.com/store/apps/details?id=com.trello"
    ],
    [
        "Microsoft OneNote",
        "https://play.google.com/store/apps/details?id=com.microsoft.office.onenote"
    ],
    [
        "Evernote",
        "https://play.google.com/store/apps/details?id=com.evernote"
    ],
    [
        "Asana",
        "https://play.google.com/store/apps/details?id=com.asana.app"
    ],
    [
        "Notion",
        "https://play.google.com/store/apps/details?id=notion.id"
    ],
];


let desestresarse  = [
                    [
                        "Dormir más y mejor",
                        "Marca unas horas de sueño fijas (entre 7 y 8). Respeta la hora de ir a la cama y la hora de levantarte."
                    ],
                    [   "Organizarse",
                        "Mirar la agenda más a menudo, poner cada tarea en su lugar y cada cosa en su sitio puede funcionar para recuperar la falta de control."
                    ],
                    [   "Hacer ejercicio",
                        "Moverse más te hace soltar tensiones, desconectar de lo habitual y generar endorfinas."
                    ],
                    [   "Tomar una bebida o comer algo contigo mismo",
                        "Cuando no puedas más y el estrés te quiera tirar por tierra, haz una pausa."
                    ],
                    [   "Sonríe",
                        "La postura corporal como la expresión facial retroalimentan el estado de ánimo. Eso significa que si tu postura es tensa y tienes el ceño fruncido, alimentas el estrés, mientras que si adoptas una postura corporal relajada y una expresión facial amigable, alimentas la calma."
                    ],
                    [   "Disfruta del tiempo que pasas con familiares y amigos",
                        "Está comprobado que el apoyo social es un gran protector contra el estrés por lo que proporciona confianza."
                    ],
                    [   "Estírate",
                        "Mueve y relaja el cuerpo, realiza suaves movimientos con la cabeza para destensar los músculos cervicales, mueve los brazos y los hombros."
                    ],
                    [   "Realizar actividades placenteras para ti",
                        "Estas pueden ser disfrutar de la naturaleza, jugar con tu mascota, escribir, leer, entre muchas otras."
                    ],
                    [   "Acepta las cosas que no pueden ser cambiadas",
                        "Aprender a reconocer que hay circunstancias de la vida que no dependen de nosotros, o que son inmodificables pese a los esfuerzos que podamos invertir, es fundamental para optimizar el uso de nuestros recursos."
                    ],
                    [   "Meditar",
                        "Esto nos permite liberar la mente de pensamientos improductivos para que ésta descanse y se recupere. Es inevitable que de vez en cuando llegue un pensamiento a la cabeza. Lo que debemos hacer es no dejar que ese pensamiento nos lleve a otro, y nos meta en ese círculo vicioso que tanto nos estresa."
                    ],
                    [   "Respira despacio y profundo hasta llenar tus pulmones",
                        "Calmar tu cuerpo de esta manera, acabará con el estrés mental que sientes de inmediato."
                    ],
];

let organizacion   = [
    [
        "Tener un calendario",
        "Hacerse una idea de cuánto tiempo queda antes de enfrentarse a una prueba o entrega de un trabajo. Tener un calendario, sea digital o en papel, es la herramienta que más ayudarte. Se pueden apuntar exámenes o entregas, también se pueden apuntar otros eventos y hacernos ser conscientes de ellos, como lo son actividades extraescolares, citas u otros quehaceres."
    ],
    [
        "Crear rutina de estudio",
        "Se debe intentar estudiar cada día a partir de la misma hora; así se acostumbra al cuerpo a ponerse manos a la obra cada día. El estudiar es una cuestión de llevarlo a cabo hasta que se automatiza."
    ],
    [
        "Priorizar objetivos y evitar la multitarea",
        "Hay tareas que tienen que ser cumplidas antes que otras, y por ello se les debe dar mayor prioridad. Esto puede ser porque se acerca la fecha de la entrega o del examen."
    ],
    [
        "Fijar objetivos realistas a corto y largo plazo",
        "Tener presente cuántas asignaturas se deben estudiar, y cuántos son los temas que las constituyen. Una vez visto esto, se pueden fijar objetivos más realistas, tanto a corto como a largo plazo."
    ],
    [
        "Planificar descansos y ocio",
        "De la misma manera que se planifican las horas en las que se abre el libro, se debe decidir cuándo hacer una pausa, y que ésta dure siempre el mismo tiempo."
    ],
    [
        "Fuerza de voluntad",
        "La motivación a la hora de estudiar y la fuerza de voluntad son aspectos que influyen en nuestra forma de aprender: Si se ve como algo tedioso y aburrido, siempre se verá como algo poco deseable y no se logrará adquirir el hábito de estudio adecuadamente."
    ],
    [
        "Planificar con antelación",
        "Ya sea estudiando desde casa o yéndose a la biblioteca, se debe preparar todo el material con suficiente antelación, preferiblemente el día de antes, También es recomendable apuntar en un papel que se va a estudiar."
    ],
    [
        "Estudiar en el espacio adecuado",
        "El lugar más adecuado siempre será la biblioteca, preferiblemente a solas. Si se decide estudiar con amigos, se debe hacer un esfuerzo conjunto y no entretenerse los unos con los otros."
    ],
    [
        "Evitar interrupciones",
        "Si se decide estudiar en casa, debemos tener cuidado con las interrupciones de familiares o compañeros de piso, además de asegurarse de tener el móvil en silencio o, mejor, apagado. También, en caso de estudiar con un ordenador, evitar las redes sociales o páginas que puedan suponer algún tipo de entretenimiento."
    ],
    [
        "Coherencia en el reparto de tareas",
        "No todas las materias requieren del mismo tiempo de estudio, dada su diferente dificultad y extensión. También puede ser el caso que a uno le cueste más una asignatura. Primero se deben clasificar las materias en función de su dificultad, y decidir dedicarle más tiempo a las más difíciles para dejar las más fáciles para el final del día o de la semana. El tiempo a dedicar a cada asignatura dependerá de la proximidad de las fechas de examen o entrega."
    ],
    [
        "Ir de materias más complejas a más simple",
        "El cerebro, al igual que con los músculos, se acaba fatigando tras realizar una actividad. Es por ello que es mejor ir en descenso, de lo más agotador a lo menos. Lo que se puede hacer es dejar lo difícil para el inicio del día y lo más sencillo para antes de irse a dormir."
    ],
    [
        "Repasar, repasar y repasar",
        "Repasar una y otra vez lo estudiado. El repaso sirve para asentar los nuevos conocimientos, sino también hace que se sea más consciente de sus detalles y, en caso de haberlos, detectar posibles errores que se hayan cometido a la hora de elaborar los apuntes."
    ],
    
    [
        "Planifica tu jornada",
        "Definir una buena agenda de actividades permitirá priorizar con certeza y avanzar en las cosas más relevantes."
    ],
    [
        "Prioriza",
        "Es bastante común pensar que se tienen más cosas por hacer que las horas que tiene el día, por lo que al priorizar las actividades se asegura que las tareas más importantes no se queden sin resolver. Hay que procurar que el orden de las tareas a realizar obedezca a una adecuada jerarquización de objetivos."
    ],
    [
        "Delega tareas",
        "En caso de que seas líder o coordinador, no dudes en delegar tareas a otras personas, en ocasiones nosotros no podemos hacerlo todo."
    ],
    [
        "Finaliza lo que empiezas",
        "Siempre que inicies una tarea, asegúrate de tener la mente fija en que vas a concluir antes de iniciar otra."
    ],
    [
        "Valora tu tiempo",
        "Buscar hacer equipo y tener empatía con los demás para facilitar las tareas y así agilizar las actividades pendientes."
    ],
    [
        "Aprender a decir “no”",
        "Es recomendable evitar los problemas intrascendentes y saber decir que no, muchas veces los favores ni se agradecen ni se pagan; para una mejor administración del tiempo es clave no perder el control ni sobrecargar la agenda."
    ],
    [
        "Comunicación",
        "Un equipo de trabajo funciona de mejor forma y es capaz de aprovechar más el tiempo si existe una buena comunicación entre sus integrantes."
    ],
    [
        "Limpia tu área de trabajo",
        "Un área de trabajo ordenada ayuda a tener más orden y una mejor concentración."
    ],

];

let dormir  = [
    [
        "Dormir más y mejor",
        "Marca unas horas de sueño fijas (entre 7 y 8). Respeta la hora de ir a la cama y la hora de levantarte."
    ],

    [
        "Respeta los horarios de sueño",
        "Acuéstate y levántate a la misma hora todos los días. Trata de que la diferencia en las horas de sueño entre las noches de los días de semana y de los fines de semana no sea superior a una hora."
    ],
    [
        "No repose en la cama despierto",
        "Si no puede quedarse dormido después de 20 minutos, haga algo tranquilizante hasta que tenga sueño, como leer o escuchar música suave."
    ],
    [
        "Evita la exposición a la luz",
        "Procura evitar estar frente a cualquier tipo de pantalla (TV, PC, etc.) al menos una hora antes de irse a dormir."
    ],
    [
        "Haz su habitación cómoda",
        "Consiga un colchón fresco, mantenga la habitación ventilada y controle la luz y los sonidos que hay dentro de ella."
    ],
    [
        "Limita las siestas",
        "Si está teniendo problemas para dormir, reduzca las siestas breves. Así dormirás mejor por la noche."
    ],
    [
        "Practica la relajación",
        "Intenta antes de dormir beber algo tibio y sin cafeína como leche tibia o té de hierbas, tomar una ducha o un baño caliente, leer un libro o una revista, escuchar música suave o un audiolibro, contar hacia atrás a partir de 300, de 3 en 3, meditar o practicar ejercicios de respiración."
    ],
    [
        "Haz ejercicio",
        "El ejercicio regular te ayudará a dormir mejor. Solo asegúrate de planear correctamente tu entrenamiento."
    ],
    [
        "Se inteligente al comer",
        "Evita comidas pesadas antes de dormir. Intenta comer 2 o 3 horas antes de irte a dormir. Si sientes hambre justo antes de irse a la cama, come un refrigerio pequeño y saludable."
    ],
];