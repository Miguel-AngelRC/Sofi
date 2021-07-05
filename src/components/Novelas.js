import React, {useState}from 'react';
import '../styles/novelas.css';

export default function Novelas(){
    const [novela,cambiarNovela]= useState("");   // Novela en poppup
    const [titulo,cambiarTitulo]= useState("");     // titulo en popup
    const [clase,cambiarClase]=useState("");
    

    const mostrar = (i)=>{                  // cambia valores para mostrar popup
        cambiarTitulo(listaNovelas[i][0]);
        cambiarNovela(listaNovelas[i][1]);
        cambiarClase("#n"+i);
        console.log(clase);
    };

    const cerrar = ()=>{                    // cambia valores para cerrar popup
        cambiarTitulo("");
        cambiarNovela("");
    };

    let titulos = [];                       // almacena todos los titulos para ser mostrados en la vista
    let n=0;
    for (let i in listaNovelas){           // obtiene todos los titulos de la lista de novelas
        n+=1;
        titulos.push(<a href="#popup"><div  id={"n"+i} key={i} className="novela" onClick={()=>{mostrar(i)} }>
                                <h2>{listaNovelas[i][0]}</h2>
                                <p>{n}</p>                    
                      </div>
                      </a>
                    );
    }

    return(
        <>
        <h1 id="emcabezado">Cuentos  cortos</h1>
        <div id="contenedorNovelas"> 
            {titulos}
        </div>
            
            {
            novela.length !== 0  ?  
                                <>
                                <div id="oscurecer"></div>
                                    <div id="popup">
                                    <div id="cerrar"><a href={clase}><p onClick={()=>{cerrar()}} >X</p></a></div>
                                        <h2>{titulo}</h2>
                                        <div id="contenido">{novela}</div>
                                    </div>
                                </>
                               
                            : 
                            <></>
            }
        
        </>
    );
}





let listaNovelas  = [
                    [
                        "El Rey Pirro y el filosofo",
                        <p> 
                        Un filósofo cínico vivió largo tiempo en la Corte del rey Pirro.
                        Pirro, que era un conquistador, una especie de Alejandro de los persas, estaba constantemente haciendo planes de invasión y de conquista.<br/>
                        Un día llegó donde el filósofo, quién se encontraba tumbado a la sombra de un árbol en el jardín del palacio, y le dijo<br/>
                        -“He hecho un plan y mañana mismo salgo con mi ejército. Vamos a cruzar el estrecho y a conquistar toda Grecia, todo el Peloponeso”.
                        <br/>A lo cual respondió el filósofo -“Muy bien. ¿y después qué?”.
                        <br/>-“Después continuaremos adelante, hacia Italia”, respondió Pirro.
                        <br/>-«¿Y después?”, interrogó nuevamente su interlocutor.
                        <br/>-“Pues seguiremos y procuraremos llegar hasta el final del mundo”.
                        <br/>-“Bueno, muy bien, ¿y después?”.
                        <br/>– “Bueno, ya después habré conquistado todo el mundo”.
                        <br/>“¿Y entonces qué?”, volvió a preguntar el filósofo.
                        <br/>Y dijo Pirro: -“Entonces podré descansar”.
                        <br/>Ante lo cual el filósofo concluyó -“Bueno, si de lo que se trata es de descansar, por qué no te sientas aquí conmigo bajo este árbol y empezamos directamente, sin tanto trajín”.</p>
                    ],
                   [
                       "Cuento de la afiladora de lapices.",
                       <p>Una mujer decidió un día que su deseo más ferviente era convertirse en escritora. Salió temprano de su casa y compró 5000 lápices y un brillante sacapuntas. Desde ese momento la familia debería hablar susurrando y andar de puntillas por la casa para no molestar a su novelista preferida. Esa misma tarde se sentó en su escritorio, cogió del cesto uno de los lápices, lo afiló esmeradamente con el lustroso sacapuntas y se dispuso ufana a escribir su libro.
                        <br/><br/>
                       Pasaron las horas y mientras esperaba la inspiración afiló con dedicación muchos otros lápices con el reluciente sacapuntas. Al final del día no había redactado una sola palabra. Todas las mañanas afilaba sus lápices y se preparaba para cumplir su sueño de escribir un libro.
                       <br/><br/>
                       Un día se dio cuenta de que jamás lograría empezarlo y terminó de afilar con deleite y perfección el resto de los lápices que le quedaban con el radiante sacapuntas. Y así, sin quererlo, se convirtió en la campeona del mundo afilando lápices, en la más experta afiladora de la Tierra.</p>
                   ],
                   [
                       "Historia del pastor y el científico",
                       <p>Un científico se trasladaba de viaje en un tren de Madrid a Asturias. En el compartimento se encontraba una segunda persona, pastor de ovejas que iba a visitar a su abuela enferma. El científico aburrido le comenta al pastor: Buen hombre, este viaje se me está haciendo un poco aburrido. ¿Querría usted participar en un juego de apuestas? Usted dirá – le dice el pastor.
                           <br/><br/>
                       Yo le hago una pregunta, y si usted no la responde me de mil pesetas. Luego usted hace lo propio, y si yo no la respondo le doy las correspondientes mil pesetas. ¿Le parece? El pastor le contesta: Mire, soy una persona de pueblo y no muy culta y usted se le ve que es una persona inteligente y de ciudad. Estaría en desventaja. El científico le dice: Está bien haremos otra cosa. Yo le hago una pregunta, y si usted no la responde me da mil pesetas. Luego usted hace lo propio, y si yo no la respondo le doy 20.000 pesetas. ¿Le parece? Eso está mejor- dice el pastor.
                       <br/><br/>
                       Comienza el científico: ¿Cuál es la combinación química del acero compuesto? El pastor rápidamente mete la mano en su bolsillo y le entrega las mil pesetas. Turno del pastor: ¿Cuál es el animal que camina con tres patas, pero que corre con dos? Tras unos minutos de larga espera y pensar el científico, se saca las 20.000 pesetas y se las da al pastor. El científico pregunta: ¿Y cuál es dichoso animalito? El pastor introduce su mano en el bolsillo y le da las mil pesetas.
                           
                       </p>
                   ],
                   [
                    "Historia del ratón indeciso",
                    <p>Un ratón entró de noche en una tienda. Olía todas las cosas buenas que había allí dentro: la mantequilla, el queso, el tocino, el chocolate, el pan…Así que se levantó sobre las patas traseras estirando el hocico y soltando un silbido de alegría. Pero, ¿con qué debería empezar primero? Le iba a hincar el diente a un paquete de mantequilla cuando desde algún lado le llegó el aroma riquísimo a tocino y desde otro lado el olor irresistible del queso.
                        <br/><br/>
                    A punto de empezar a devorar el queso le invadieron las fragancias del chorizo, y luego las de las zanahorias frescas. Iba a echarle el diente a las naranjas zanahorias cuando desde algún lado le llegó el aroma de las nueces, y desde otro lado volvió a oler tan rico a mantequilla. El pobre ratón corría de un lado a otro, sabía y no sabía lo que tenía que comer primero. Y de repente se hizo de día. La gente entró en la tienda y echaron de allí al ratón. Y éste les contó después a los otros ratones: “Nunca jamás volveré a esa tienda. ¡Cuando quieres empezar a comer te echan fuera¡”

                    </p>
                ],
                [
                       "Metáfora de las piedras",
                       <p>Un experto en gestión de empresas quiso sorprender a los participantes de su conferencia. Sacó de debajo del escritorio un frasco grande de boca ancha. Lo colocó sobre la mesa, junto a una bandeja con piedras del tamaño de un puño y preguntó: – ¿Cuantas piedras piensan que caben en el frasco? Después de que los asistentes hicieran sus conjeturas, empezó a meter piedras hasta que llenó el frasco. Luego preguntó:- ¿Está lleno? Todo el mundo lo miró y asintió.
<br/><br/>
                       Entonces sacó de debajo de la mesa un cubo con gravilla. Metió parte de la gravilla en el frasco y lo agitó. Las piedrecillas penetraron por los espacios que dejaban las piedras grandes. El experto sonrió con ironía y repitió:- ¿Está lleno? Esta vez los oyentes dudaron:- Tal vez no.- ¡Bien! Y puso en la mesa un cubo con arena que comenzó a volcar en el frasco. La arena se filtraba en los pequeños recovecos que dejaban las piedras y la grava.- ¿Está bien lleno? preguntó de nuevo.- ¡No!, exclamaron los asistentes. Bien, dijo, y cogió una jarra de agua de un litro que comenzó a verter en el frasco. El frasco aún no rebosaba.
                       <br/><br/>
                       -Bueno, ¿qué hemos demostrado?, preguntó. Un alumno respondió:
                       <br/><br/>
                       – Que no importa lo llena que esté tu agenda, si lo intentas, siempre puedes hacer que quepan más cosas.
                       <br/><br/>
                       -¡No!, concluyó el experto: Lo que esta lección nos enseña es que si no colocas las piedras grandes primero, nunca podrás colocarlas después.

                       </p>
                   ],
                   [
                    "Historia del pianista y la anfitriona",
                    <p>Un pianista famoso daba un recital en una fiesta. La anfitriona le dijo: Haría lo que fuera por tocar como usted. El pianista la miro pensativo y replicó: no, no haría lo que fuera. La anfitriona avergonzada frente a sus invitados dijo: sí, haría cualquier cosa.
<br/><br/>
                    El pianista negó con la cabeza: le fascinaría tocar como yo en este momento pero no estaría dispuesta a practicar ocho horas diarias al día durante los próximos 20 años para alcanzar este dominio.

                    </p>
                ],
                [
                    "El leñador tenaz",
                    <p>Había una vez un leñador que se presentó a trabajar en una maderera. El sueldo era bueno y las condiciones de trabajo mejores aún, así que el leñador se propuso hacer un buen papel. El primer día se presentó al capataz, que le dio un hacha y le asignó una zona del bosque. El hombre, entusiasmado, salió al bosque a talar. En un solo día cortó dieciocho árboles.-Te felicito -le dijo el capataz-. Sigue así.
<br/><br/>
                    Animado por las palabras del capataz, el leñador se decidió a mejorar su propio trabajo al día siguiente. Así que esa noche se acostó bien temprano. A la mañana siguiente, se levantó antes que nadie y se fue al bosque. A pesar de todo su empeño, no consiguió cortar más de quince árboles. -Debo estar cansado -pensó. Y decidió acostarse con la puesta de sol.
                    <br/><br/>
                    Al amanecer, se levantó decidido a batir su marca de dieciocho árboles. Sin embargo, ese día no llegó ni a la mitad. Al día siguiente fueron siete, luego cinco, y el último día estuvo toda la tarde tratando de talar su segundo árbol. Inquieto por lo que diría el capataz, el leñador fue a contarle lo que le estaba pasando y a jurarle y perjurarle que se estaba esforzando hasta los límites del desfallecimiento. El capataz le preguntó:
                    <br/><br/>
                    -¿Cuándo afilaste tu hacha por última vez?
                    <br/><br/>
                    -Afilar, no he tenido tiempo para afilar. He estado demasiado ocupado talando árboles.

                    </p>
                ],
                [
                    "El cuento de la lechera",
                    <p>Érase una vez una joven lechera que llevaba un cubo de leche en la cabeza, camino al mercado para venderla. Durante el camino, la soñadora joven iba imaginando lo que podría lograr conseguir con la leche. Pensó que en primer lugar y con el dinero de la venta compraría un canasto de huevos, los cuales una vez eclosionaran le permitiría montar una pequeña granja de pollos. Una vez estos crecieran podría venderlos, lo que le daría dinero para comprarse un lechón.<br/><br/>

                    Una vez este creciera la venta del animal bastaría para comprarse una ternera, con la leche de la cual seguiría obteniendo beneficios y a su vez podría tener terneros. Sin embargo, mientras iba pensando todas estas cosas la joven tropezó, lo que provocó que el cántaro cayera el suelo y se rompiera. Y con él, sus expectativas hacia lo que podría haber hecho con ella.

                    </p>
                ],
                [
                    "La sospecha",
                    <p>Érase una vez un leñador el cual un día se dio cuenta que no tenía su hacha. Sorprendido y con lágrimas en los ojos, se encontró cerca de su casa al vecino, quien como siempre lo hacía le saludó sonriente y amablemente.<br/><br/>

                    Mientras éste entraba en su casa, el leñador de repente empezó a sospechar y pensar que tal vez hubiese sido el vecino quien le había robado el hacha. De hecho, ahora que lo pensaba bien su sonrisa parecía nerviosa, tenía una mirada extraña e incluso hubiese dicho que le temblaban las manos. Bien pensado, el vecino tenía la misma expresión que un ladrón, caminaba como un ladrón y hablaba como un ladrón.
                    <br/><br/>
                    Todo ello iba pensando el leñador, cada vez más convencido de haber encontrado al culpable del hurto, cuando de repente se dió cuenta de que sus pasos le habían llevado de nuevo al bosque donde había estado la noche anterior.
                    <br/><br/>
                    De pronto, tropezó con algo duro y cayó. Cuando miró al suelo...encontró su hacha! El leñador volvió de nuevo a su hogar con el hacha, arrepentido de sus sospechas, y cuando vio de nuevo a su vecino vio que su expresión, andar y manera de hablar eran (y habían sido en todo momento) las de siempre.

                    </p>
                ],
                [
                    "La gallina de los huevos de oro",
                    <p>Érase una vez una pareja de granjeros que, un día, descubrieron en uno de los nidos en los que criaban gallinas un huevo de oro macizo. La pareja fue observando que el ave producía tal prodigio día tras día, obteniendo cada día un huevo de oro.<br/><br/>

                    Reflexionando sobre qué era lo que hacía que la gallina en cuestión tuviese esa habilidad, sospecharon que que ésta poseía oro en su interior. Para comprobarlo y obtener todo el oro de una vez, mataron a la gallina y la abrieron, descubriendo para su sorpresa que por dentro la prodigiosa ave era igual a las demás. Y también se dieron cuenta que, en su ambición, habían acabado con aquello que les había estado enriqueciendo.

                    </p>
                ],
                [
                    "El maestro zen",
                    <p>Érase una vez, durante una guerra civil en la época feudal, un pequeño poblado en el que vivía un maestro zen. Un día, llegó a ellos la noticia de que un temible general se dirigía en su dirección para invadir y tomar la zona. El día anterior a la llegada del ejército toda la aldea huyó, con la excepción del anciano maestro. Cuando llegó el general, tras encontrar la aldea prácticamente desierta y sabiendo de la existencia del anciano, ordenó que el maestro zen se personase ante él, pero este no lo hizo.<br/><br/>

                    El general se dirigió rápidamente hacia el templo donde el maestro descansaba. Furioso, el general sacó su espada y se la acercó a la cara, gritándole que si no se daba cuenta de que estaba simplemente parado delante de quien podría atravesarle en un instante. Con total tranquilidad, el anciano maestro le contestó que precisamente el general estaba ante alguien que podía ser atravesado en un instante. El general, sorprendido y confuso, terminó haciéndole una reverencia y marchándose del lugar.

                    </p>
                ],
                [
                    "El zorro y las uvas",
                    <p>Había una vez un zorro que caminaba, sediento, por el bosque. Mientras lo hacía vio en lo alto de la rama de un árbol un racimo de uvas, las cuales deseó al instante al servirle para refrescarse y apagar su sed. El zorro se acercó al árbol e intentó alcanzar las uvas, pero estaban demasiado altas. Tras intentarlo una y otra vez sin conseguirlo, el zorro finalmente se rindió y se alejó. Viendo que un pájaro había visto todo el proceso se dijo en voz alta que en realidad no quería las uvas, dado aún no estaban maduras, y que en realidad había cesado el intento de alcanzarlas al comprobarlo.

                    </p>
                ],
                [
                    " El lobo y la grulla",
                    <p>Érase una vez un lobo el cual, comiendo carne, sufrió el atasco de un hueso en su garganta. Esta empezó a hinchársele y a generarla gran dolor, corriendo el lobo desesperado intentando sacárselo o encontrar ayuda. Durante su camino encontró una grulla, a la cual tras explicarle la situación suplicó ayuda prometiéndole darle lo que le pidiera. A pesar de que desconfiaba, la grulla aceptó con la condición de que el lobo cumpliera lo pactado. El ave procedió a introducir su cabeza por su garganta, consiguiendo que el hueso se desprendiera. Se retiró y observó como el lobo se recuperaba, pudiendo ahora respirar con normalidad, tras lo cual le pidió que cumpliera con lo prometido. Sin embargo el lobo contestó que suficiente recompensa era no haberla devorado pese a haberla tenido entre sus dientes.

                    </p>
                ],
                [
                    "El viejo, el niño y el burro",
                    <p>Érase una vez un abuelo y un nieto que decidieron emprender un viaje junto con un burro. Inicialmente el anciano hizo que el niño montara en el animal, con el fin de que no se cansara. Sin embargo, al llegar a una aldea, los lugareños empezaron a comentar y criticar que el anciano tuviera que ir al pie mientras que el niño, más joven y vital, fuera montado. Las críticas hicieron que finalmente abuelo y nieto cambiaran posiciones, yendo ahora el anciano montado sobre el burro y el niño caminando al lado.<br/><br/>

                    Sin embargo, al pasar por una segunda aldea, los lugareños pusieron el grito en el cielo de que el pobre niño fuera caminando mientras el hombre mayor lo hacía cómodamente montado. Ambos decidieron entonces montar en el animal. Pero al llegar a un tercer poblado los aldeanos criticaron durante a ambos, acusándoles de cargar en exceso al pobre burro.
                    <br/><br/>
                    Ante esto, el anciano y su nieto decidieron ir ambos a pie, caminando al lado del animal. Pero en un cuarto pueblo se rieron de ellos, dado que disponían de una montura y ninguno de ellos viajaba en ella. El abuelo aprovechó la situación para hacer ver a su nieto el hecho de que, hicieran lo que hicieran, siempre habría alguien a quien le parecería mal y que lo importante no era lo que otros dijeran, sino lo que creyera una mismo.

                    </p>
                ],
                [
                    "La felicidad escondida",
                    <p>En el inicio de los tiempos, antes de que la humanidad poblara la Tierra, los distintos dioses se reunieron con el fin de preparar la creación del ser humano, a su imagen y semejanza. Sin embargo uno de ellos se dió cuenta de que si los hacían exactamente iguales a ellos, en realidad estarían creando nuevos dioses, con lo que deberían quitarle algo de tal manera que se diferenciara de ellos. Tras pensarlo detenidamente, otro de los presentes propuso quitarles la felicidad y esconderla en un lugar donde no pudieran encontrarla nunca.<br/><br/>

                    Otro de ellos propuso esconderla en el monte más alto, pero se dieron cuenta de que al tener fuerza, la humanidad podría llegar a subir y hallarla. Otro propuso que la ocultaran debajo del mar, pero dado que la humanidad poseería curiosidad podría llegar a construir algo para llegar a las profundidades marinas y encontrarla. Un tercero propuso llevar la felicidad a un planeta lejano, pero otros concluyeron que dado que el ser humano tendrá inteligencia podrá construir naves espaciales que puedan llegar a alcanzarla.
                    <br/><br/>
                    El último de los dioses, que había permanecido en silencio hasta entonces, tomó la palabra para indicar que sabía un lugar donde no la encontrarían: propuso que escondieran la felicidad dentro del propio ser humano, de tal modo que este estaría tan ocupado buscando fuera que jamás la hallaría. Estando todos de acuerdo con ello, así lo hicieron. Este el motivo por el cual el ser humano se pasa la vida buscando la felicidad, sin saber que en realidad está en sí mismo.

                    </p>
                ],
                [
                    "El pájaro víctima de la bondad",
                    <p>Hubo una vez una gaviota, la cual descendió volando a uno de los suburbios de la capital de Lu. El marqués de la zona se afanó en agasajarla y darle la bienvenida en el templo, preparando para ella la mejor música y grandes sacrificios. Sin embargo, el ave estaba aturdida y triste, no probando la carne o el vino. Tres días después murió. El marqués de Lu agasajó a la gaviota tal y como a él le hubiese gustado serlo, no como al ave le hubiese gustado

                    </p>
                ],
                [
                    " El caballo perdido del anciano sabio",
                    <p>Érase una vez un anciano campesino de gran sabiduría, el cual vivía con su hijo y que poseía un caballo. Un día el corcel escapó del lugar, algo que hizo que los vecinos fueran a consolarles ante su mala suerte. Pero ante sus palabras de consuelo, el anciano campesino les respondió que lo único verdadero es que el caballo había escapado, y si eso era buena o mala suerte sería el tiempo lo que lo dictaminaría.<br/><br/>

                    Poco después el caballo regresó con sus dueños, acompañado de una hermosa yegua. Los vecinos corrieron a felicitarle por su buena suerte. Sin embargo, el anciano les respondió que en realidad lo único que sí era cierto era que el caballo había regresado con la yegua, y si esto era malo o bueno el tiempo lo diría.
                    <br/><br/>
                    Tiempo después el hijo del campesino intentó montar a la yegua, aún salvaje, de tal manera que se cayó de la montura y se rompió la pierna. Según el médico, la rutpura le provocaría una cojera permanente. Los vecinos volvieron a consolar a ambos, pero también en esta ocasión el anciano campesino dictaminaría que lo único que se sabía en verdad era que su hijo se había roto una pierna, y que si ello era bueno o malo aún estaba por verse.
                    <br/><br/>
                    Finalmente, llegó un día en que se inició una sangrienta guerra en la región. Se empezó a reclutar a todos los jóvenes, pero al ver la cojera del hijo del campesino los soldados que fueron a reclutarle decidieron que no era apto para el combate, algo que provocó que no fuera reclutado y pudiera permanecer sin combatir.
                    <br/><br/>
                    La reflexión que el anciano le hizo ver a su hijo en base a todo lo ocurrido es que los hechos no son buenos o malos en sí mismos, sino que lo son nuestras expectativas y percepción de ellos: la huida del caballo trajo a la yegua, lo que a su vez supuso la rotura de su pierna y asimismo ello condujo a una cojera permanente era lo que ahora le salvaba la vida.

                    </p>
                ],
                [
                    "El cojo y el ciego",
                    <p>Hubo una vez un cojo y un ciego que iban paseando juntos cuando se encontraron un río, el cual ambos debían cruzar. El cojo le dijo al ciego que él no podría llegar a la otra orilla, a lo que el ciego respondió que él sí podría pasar pero ante su falta de visión podría resbalar.<br/><br/>

                    Ante ello, se les ocurrió una gran idea: el hombre ciego sería quien llevaría la marcha y sostendría a ambos con sus piernas, mientras que el hombre cojo sería los ojos de ambos y podría guiar a ambos durante el cruce. Subiendo el cojo encima del ciego, ambos procedieron a cruzar cuidadosamente el río, lográndolo con éxito y consiguiendo alcanzar la otra orilla sin dificultades.

                    </p>
                ],
                [
                    "La leyenda de Toro Bravo y Nube Azul",
                    <p>Cuenta una leyenda de los Sioux que hubo una vez una joven pareja formada por Toro Bravo y Nube Azul, que se amaban profundamente. Queriendo permanecer unidos por siempre, ambos acudieron al anciano de la tribu con el fin de que les proporcionara un talismán por tal de estar siempre juntos.<br/><br/>

                    El anciano indicó a la joven Nube Azul que acudiera sola a la montaña del norte y capturase con una red al mejor halcón que allí viviese, mientras que a Toro Bravo le dirigió a la montaña del sur para atrapar al águila más poderosa. Ambos jóvenes se esforzaron duramente y lograron capturar cada uno a la mejor ave de cada una de las montañas.
                    <br/><br/>
                    Hecho esto, el anciano les indicó que ataran las patas del halcón y el águila entre sí y luego las dejaran volar en libertad. Así lo hicieron, pero al estar atadas ambas aves cayeron al suelo sin poder volar con normalidad. Tras varios intentos, ambas empezaron a agredirse entre sí. El anciano hizo a la pareja ver esto, y les indicó que el talismán era el aprendizaje de que debían volar juntos, pero nunca atados si no querían terminar dañándose el uno al otro.

                    </p>
                ],
                [
                    "La Arena y la Piedra",
                    <p>Había una vez dos amigos que caminaban por el desierto, tras haber perdido a sus camellos y habiendo pasado días sin probar bocado. Un día, surgió una discusión entre ellos en el que uno de los dos increpó al otro por haber elegido la ruta equivocada (si bien la decisión había sido conjunta) y en un arrebato de ira le dió una bofetada. El agredido no dijo nada, pero escribió en la arena que en ese día su mejor amigo le había pegado una bofetada (una reacción que sorprendió al primero).<br/><br/>

                    Posteriormente ambos llegaron a un oasis, en el cual decidieron bañarse. En ello estaban cuando el anteriormente agredido empezó a ahogarse, a lo que el otro respondió rescatándole. El joven le agradeció la ayuda y posteriormente, con un cuchillo, escribió sobre una piedra que su mejor amigo le había salvado la vida.
                    <br/><br/>
                    El primero, curioso, le preguntó a su compañero por qué cuando le había pegado el había escrito en la arena y ahora lo hacía en una piedra. El segundo le sonrió y le contestó que cuando alguien le hacía algo malo intentaba escribirlo sobre la arena por tal de que la marca fuera borrada por el viento, mientras que cuando alguien hacía algo bueno prefería dejarlo grabado en piedra, donde permanecerá por siempre.

                    </p>
                ],
                [
                    "El zorro y el tigre",
                    <p>Había una vez un enorme tigre que cazaba en los bosques de China. El poderoso animal se topó y empezó a atacar a un pequeño zorro, el cual ante el peligro únicamente tuvo como opción recurrir a la astucia. Así, el zorro le increpó y le indicó que no sabía hacerle daño puesto que él era el rey de los animales por designio del emperador del cielo.<br/><br/>

                    Asimismo le indicó que si no le creía le acompañara: así vería como todos los animales huían atemorizados al verle llegar. El tigre así lo hizo, observando en efecto como a su paso los animales escapaban. Lo que no sabía era que esto no era debido a que estuvieran confirmando las palabras del zorro (algo que el tigre acabó por creer), sino que de hecho huían de la presencia del felino.

                    </p>
                ],
                [
                    "Los dos halcones",
                    <p>Había una vez un rey el cual amaba los animales, que un día recibió como regalo dos hermosas crías de halcón. El rey los entregó a un maestro cetrero para que los alimentara, cuidara y entrenara. Pasó el tiempo y después de unos meses en los que los halcones crecieron el cetrero pidió una audiencia con el rey para explicarle que si bien uno de los halcones había alzado ya el vuelo con normalidad, el otro había permanecido en la misma rama desde que llegó, no emprendiendo el vuelo en ningún momento. Ello preocupó en gran medida al rey, que mandó llamar a múltiples expertos para solucionar el problema del ave. Sin éxito.<br/><br/>

                    Desesperado, decidió ofrecer una recompensa a quien lograra que el ave consiguiera volar. Al día siguiente el rey pudo ver cómo el ave ya no estaba en su rama, sino que volaba libremente por la región. El soberano mandó llamar al autor de tal prodigio, encontrándose con que quien lo había logrado era un joven campesino. Poco antes de entregarle su recompensa, el rey le preguntó cómo lo había logrado. El campesino le contestó que simplemente había partido la rama, no quedándole otra opción al halcón que echar a volar.

                    </p>
                ],
                [
                    "El Bambú Japonés",
                    <p>No hay que ser agricultor para saber que una buena cosecha requiere de buena semilla, buen abono y riego.También es obvio que quien cultiva la tierra no se detiene impaciente frente a la semilla sembrada, y grita con todas sus fuerzas: ¡Crece, maldita sea! Hay algo muy curioso que sucede con el bambú y que lo transforma en no apto para impacientes:<br/><br/>

                    Siembras la semilla, la abonas, y te ocupas de regarla constantemente.
                    <br/><br/>
                    Durante los primeros meses no sucede nada apreciable. En realidad no pasa nada con la semilla durante los primeros siete años, a tal punto que un cultivador inexperto estaría convencido de haber comprado semillas infértiles.
                    <br/><br/>
                    Sin embargo, durante el séptimo año, en un período de sólo seis semanas la planta de bambú crece ¡más de 30 metros!
                    <br/><br/>
                   ¿Tardó sólo seis semanas crecer?
                   <br/><br/>
                    No, la verdad es que se tomó siete años y seis semanas en desarrollarse.
                    <br/><br/>
                    Durante los primeros siete años de aparente inactividad, este bambú estaba generando un complejo sistema de raíces que le permitirían sostener el crecimiento que iba a tener después de siete años.
                    <br/><br/>
                    Sin embargo, en la vida cotidiana, muchas personas tratan de encontrar soluciones rápidas, triunfos apresurados, sin entender que el éxito es simplemente resultado del crecimiento interno y que éste requiere tiempo.
                    </p>
                ],
                [
                    "El elefante encadenado",
                    <p>Cuando yo era chico me encantaban los circos, y lo que más me gustaba de los circos eran los animales. También a mí como a otros, después me enteré, me llamaba la atención el elefante. Durante la función, la enorme bestia hacia despliegue de su tamaño, peso y fuerza descomunal… pero después de su actuación y hasta un rato antes de volver al escenario, el elefante quedaba sujeto solamente por una cadena que aprisionaba una de sus patas clavada a una pequeña estaca clavada en el suelo. Sin embargo, la estaca era solo un minúsculo pedazo de madera apenas enterrado unos centímetros en la tierra. Y aunque la cadena era gruesa y poderosa me parecía obvio que ese animal capaz de arrancar un árbol de cuajo con su propia fuerza, podría, con facilidad, arrancar la estaca y huir.
                    <br/><br/>
                    El misterio es evidente: ¿Qué lo mantiene entonces? ¿Por qué no huye? Cuando tenía 5 o 6 años yo todavía en la sabiduría de los grandes. Pregunté entonces a algún maestro, a algún padre, o a algún tío por el misterio del elefante. Alguno de ellos me explicó que el elefante no se escapaba porque estaba amaestrado. Hice entonces la pregunta obvia: -Si está amaestrado, ¿por qué lo encadenan? No recuerdo haber recibido ninguna respuesta coherente. Con el tiempo me olvide del misterio del elefante y la estaca… y sólo lo recordaba cuando me encontraba con otros que también se habían hecho la misma pregunta.
                    <br/><br/>
                    Hace algunos años descubrí que por suerte para mí alguien había sido lo bastante sabio como para encontrar la respuesta: El elefante del circo no se escapa porque ha estado atado a una estaca parecida desde muy, muy pequeño. Cerré los ojos y me imaginé al pequeño recién nacido sujeto a la estaca. Estoy seguro de que en aquel momento el elefantito empujó, tiró, sudó, tratando de soltarse. Y a pesar de todo su esfuerzo, no pudo. La estaca era ciertamente muy fuerte para él. Juraría que se durmió agotado, y que al día siguiente volvió a probar, y también al otro y al que le seguía… Hasta que un día, un terrible día para su historia, el animal aceptó su impotencia y se resignó a su destino.
                    <br/><br/>
                    Este elefante enorme y poderoso, que vemos en el circo, no se escapa porque cree -pobre- que NO PUEDE. Él tiene registro y recuerdo de su impotencia, de aquella impotencia que sintió poco después de nacer. Y lo peor es que jamás se ha vuelto a cuestionar seriamente ese registro. Jamás… jamás… intentó poner a prueba su fuerza otra vez…

                    </p>
                ],
                [
                    "Cuento Budista: Tú Gobiernas tu Mente, no tu Mente a ti",
                    <p>Un estudiante de zen, se quejaba de que no podía meditar: sus pensamientos no se lo permitían. Habló de esto con su maestro diciéndole: “Maestro, los pensamientos y las imágenes mentales no me dejan meditar; cuando se van unos segundos, luego vuelven con más fuerza. No puedo meditar. No me dejan en paz”. El maestro le dijo que esto dependía de él mismo y que dejara de cavilar. No obstante, el estudiante seguía lamentándose de que los pensamientos no le dejaban en paz y que su mente estaba confusa. Cada vez que intentaba concentrarse, todo un tren de pensamientos y reflexiones cortas, a menudo inútiles y triviales, irrumpían en su cabeza…
<br/><br/>
                    El maestro entonces le dijo: “Bien. Aferra esa cuchara y tenla en tu mano. Ahora siéntate y medita”. El discípulo obedeció. Al cabo de un rato el maestro le ordenó: ”¡Deja la cuchara!”. El alumno así hizo y la cuchara cayó obviamente al suelo. Miró a su maestro con estupor y éste le preguntó: “Entonces, ahora dime ¿quién agarraba a quién, tú a la cuchara, o la cuchara a ti?.

                    </p>
                ],
                [
                    "Acuérdate de soltar el vaso",
                    <p>Un psicólogo, en una sesión grupal, levantó un vaso de agua. Todo el mundo esperaba la típica pregunta: “¿Está medio lleno o medio vacío?” Sin embargo, preguntó: – ¿Cuánto pesa este vaso? Las respuestas variaron entre 200 y 250 gramos. El psicólogo respondió: «El peso absoluto no es importante. Depende de cuánto tiempo lo sostengo. Si lo sostengo un minuto, no es problema. Si lo sostengo una hora, me dolerá el brazo. Si lo sostengo un día, mi brazo se entumecerá y paralizará. El peso del vaso no cambia, es siempre el mismo. Pero cuanto más tiempo lo sujeto, más pesado, y más difícil de soportar se vuelve.»
<br/><br/>
                    Y continuó: «Las preocupaciones, los pensamientos negativos, los rencores, el resentimiento, son como el vaso de agua. Si piensas en ellos un rato, no pasa nada. Si piensas en ellos todo el día, empiezan a doler. Y si piensas en ellos toda la semana, acabarás sintiéndote paralizado, e incapaz de hacer nada.» ¡Acuérdate de soltar el vaso!

                    </p>
                ],
                [
                    "Busca Dentro de ti",
                    <p>Cuentan que un día estaba Mullah en la calle, en cuatro patas, buscando algo, cuando se le acercó un amigo y le preguntó: – Mullah, ¿qué buscas? Y él le respondió: – Perdí mi llave. – Oh, Mullah, qué terrible. Te ayudaré a encontrarla. Se arrodilló y luego preguntó: – ¿Dónde la perdiste? – En mi casa. – Entonces, ¿por qué la buscas aquí afuera? – Porque aquí hay más luz. Aunque les parezca cómico, ¡eso es lo que hacemos con nuestra vida! Creemos que todo lo que hay que buscar está ahí afuera, a la luz, donde es fácil encontrarlo, cuando las únicas respuestas están en el propio interior. Salgan a buscarlas afuera, que jamás las hallarán… de Leo Buscaglia, libro: «Vivir, amar y aprender».

                    </p>
                ],
                [
                    "Todo Acto Genera Consecuencias",
                    <p>Ese año las lluvias habían sido particularmente intensas en toda la región. Una gran corriente del río se  llevó la choza de un campesino, pero cuando cesaron, habían dejado en la tierra una valiosa joya. El buen hombre vendió la alhaja y con la suma que le entregaron reconstruyó su choza y el  resto se lo regaló a un niño huérfano y desvalido del pueblo. La riada había arrasado también  otro poblado y un campesino, para salvar la vida, tuvo que encaramarse a un tronco de árbol que  flotaba sobre las turbulentas aguas. Otro hombre, despavorido, le pidió socorro, pero el campesino se lo negó, diciéndose a sí mismo: “Si se sube éste al tronco, a lo mejor se vuelca y me  ahogo”.
<br/><br/>
                    Los años pasaron y estalló la guerra en ese reino. Ambos campesinos fueron alistados. El campesino bondadoso fue herido de gravedad y conducido al hospital. El médico que le atendió con gran cariño y eficacia era aquel muchachito huérfano al que  él había ayudado. Lo reconoció y  puso toda su ciencia y amor al servicio del malherido. Logró salvarlo y se hicieron grandes amigos de por vida.
                    <br/><br/>
                    El campesino egoísta tuvo por capitán de la tropa al hombre a quien no había auxiliado. Le envió a primera línea de combate y días después halló la muerte en las trincheras.
                    <br/><br/>
                    Las consecuencias siguen, antes o después, a los actos. La generosidad engendra generosidad y  el egoísmo, egoísmo. Debemos cultivar los cuatro bálsamos de la mente: amor, compasión, alegría  por la dicha de los otros y ecuanimidad.

                    </p>
                ],
                [
                    "La Rosa y el Sapo",
                    <p>Había una vez una rosa roja muy bella, se sentía de maravilla al saber que era la rosa mas bella del jardín. Sin embargo, se daba cuenta de que la gente la veía de lejos. Se dio cuenta de que al lado de ella siempre había un sapo grande y oscuro, y que era por eso que nadie se acercaba a verla de cerca. Indignada ante lo descubierto le ordenó al sapo que se fuera de inmediato; el sapo muy obediente dijo: Está bien, si así lo quieres.
<br/><br/>
                    Poco tiempo después el sapo pasó por donde estaba la rosa y se sorprendió al ver la rosa totalmente marchita, sin hojas y sin pétalos. Le dijo entonces:
                    <br/><br/>
                    Vaya que te ves mal. ¿Qué te pasó?
                    <br/><br/>
                    La rosa contestó: Es que desde que te fuiste las hormigas me han comido día a día, y nunca pude volver a ser igual.
                    <br/><br/>
                    El sapo solo contestó: Pues claro, cuando yo estaba aquí me comía a esas hormigas y por eso siempre eras la mas bella del jardín.
                    <br/><br/>
                    Moraleja: Muchas veces despreciamos a los demás por creer que somos mas que ellos,mas bellos o simplemente que no nos “sirven” para nada. Todos tenemos algo que aprender de los demás o algo que enseñar, y nadie debe despreciar a nadie. No vaya a ser que esa persona nos haga un bien del cual ni siquiera seamos conscientes.

                    </p>
                ],
                [
                    "Fábula de la Rana Sobre el Ánimo",
                    <p>Un grupo de ranas viajaba por el bosque y, de repente, dos de ellas cayeron en un hoyo profundo. Todas las demás ranas se reunieron alrededor el hoyo. Cuando vieron cuan hondo era el hoyo, le dijeron a las dos ranas en el fondo que para efectos prácticos, se debían dar por muertas ya que no saldrían. Las dos ranas no hicieron caso a los comentarios de sus amigas y siguieron tratando de saltar fuera del hoyo con todas sus fuerzas. Las otras seguían insistiendo que sus esfuerzos serían inútiles.
                    <br/><br/>
                    Finalmente, una de las ranas puso atención a lo que las demás decían y se rindió. Ella se desplomó y murió. La otra rana continuó saltando tan fuerte como le era posible. Una vez más, la multitud de ranas le gritaba y le hacían señas para que dejara de sufrir y que simplemente se dispusiera a morir, ya que no tenía caso seguir luchando. Pero la rana saltaba cada vez con más fuerzas hasta que finalmente logró salir del hoyo. Cuando salió las otras ranas le dijeron: «nos da gusto que hayas logrado salir, a pesar de lo que te gritamos».
                    <br/><br/>
                    La rana les explicó que era sorda, y que pensó que las demás la estaban animando a esforzarse más y salir del hoyo. Moraleja: 1. La palabra tiene poder de vida y muerte. Una palabra de aliento compartida a alguien que se siente desanimado puede ayudar a levantarlo. 2. Una palabra destructiva dicha a alguien que se encuentre desanimado puede ser lo que acabe por destruirlo. Tengamos cuidado con lo que decimos. 3. Una persona especial es la que se da tiempo para animar a otros.

                    </p>
                ], 
                [
                    "El Asno con la Piel de León",
                    <p>Cuando Bramadatta reinaba en Benarés, había un viejo mercader que viajaba de pueblo en pueblo, llevando sus mercancías a lomos de un asno. Este mercader se valía de un ingenioso ardid para alimentar a su burro. Tan pronto como llegaba a un pueblo, lo descargaba y lo cubría enseguida con una piel de león; luego lo soltaba en un campo de arroz o alfalfa. El asno comía hasta hincharse y los dueños de los campos no se atrevían a echarle, ya que creían que se trataba de un león verdadero.
<br/><br/>
                    Un día el mercader llegó a un pueblo, y como había hecho en los otros, soltó al asno en un campo de verde alfalfa. El dueño, al ver lo que él suponía un león huyó, aterrorizado, al pueblo, y contó a sus convecinos lo que estaba ocurriendo. Sin vacilar un momento, todos se armaron hasta los dientes y corrieron al encuentro del falso león.
                    Este, al ver acercarse a tanta gente lanzó un sonoro rebuzno que descubrió a los campesinos su disfraz, y que tuvo además por consecuencia irritarlos mucho más. En un momento cayeron todos sobre él y lo molieron a palos de tal manera, que cuando al fin el mercader logró rescatarlo, estaba moribundo.
                    <br/><br/>
                    El hombre se tiró de los pelos al ver que por su avaricia había perdido a un compañero fiel y útil, y mientras el pollino moría, el viejo iba diciendo:
                    – No es la piel lo que hace temible al león.

                    </p>
                ],
                [
                    "La Ventana del Hospital",
                    <p>Dos hombres, seriamente enfermos, ocupaban la misma habitación en el hospital. A uno de ellos se le permitía estar sentado una hora todas las tardes para que los pulmones drenaran sus fluidos. Su cama daba a la única ventana de la habitación.
<br/><br/>
                    El otro hombre tenía que estar tumbado todo el tiempo. Los dos se hablaban mucho. De sus mujeres y familiares, de sus casas, trabajos, el servicio militar, dónde habían estado de vacaciones.
                    <br/><br/>
                    Y todas las tardes el hombre que se podía sentar frente a la ventana, se pasaba el tiempo describiendo a su compañero lo qué veía por la ventana. Éste, solamente vivía para esos momentos donde su mundo se expandía por toda la actividad y color del mundo exterior.
                    <br/><br/>
                    La ventana daba a un parque con un bonito lago. Patos y cisnes jugaban en el agua mientras los niños capitaneaban sus barcos teledirigidos. Jóvenes amantes andaban cogidos de la mano entre flores de cada color del arco iris. Grandes y ancestros árboles embellecían el paisaje, y una fina línea del cielo sobre la ciudad se podía ver en la lejanía.
                    <br/><br/>
                    Mientras el hombre de la ventana describía todo esto con exquisito detalle, el hombre al otro lado de la habitación cerraba sus ojos e imaginaba la pictórica escena.
                    <br/><br/>
                    Una cálida tarde el hombre de la ventana describió un desfile en la calle. Aunque el otro hombre no podía oír la banda de música- se la imaginaba conforme el otro le iba narrando todo con pelos y señales. Los días y las semanas pasaron.
                    <br/><br/>
                    Una mañana, la enfermera entró para encontrase el cuerpo sin vida del hombre al lado de la ventana, el cual había muerto tranquilamente mientras dormía. Se puso muy triste y llamó al doctor para que se llevaran el cuerpo. Tan pronto como consideró apropiado, el otro hombre preguntó si se podía trasladar al lado de la ventana. La enfermera aceptó gustosamente, y después de asegurarse de que el hombre estaba cómodo, le dejó solo.
                    <br/><br/>
                    Lentamente, dolorosamente, se apoyó sobre un codo para echar su primer vistazo fuera de la ventana. Finalmente tendría la posibilidad de verlo todo con sus propios ojos.
                    <br/><br/>
                    Se retorció lentamente para mirar fuera de la ventana que estaba al lado de la cama. Daba a un enorme muro blanco. El hombre preguntó a la enfermera qué había pretendido el difunto compañero contándole aquel maravilloso mundo exterior.
                    <br/><br/>
                    Y ella dijo: – Quizás sólo quería animarle.

                    </p>
                ],
                [
                    "El Cielo y el Infierno",
                    <p>En un reino lejano de Oriente se encontraban dos amigos que tenían la curiosidad y el deseo de saber sobre el Bien y el Mal. Un día se acercaron a la cabaña del sabio Lang para hacerle algunas preguntas. Una vez dentro le preguntaron:
<br/><br/>
                    Anciano díganos: ¿qué diferencia hay entre el cielo y el infierno?… El sabio contestó:   – Veo una montaña de arroz recién cocinado, todavía sale humo. Alrededor hay muchos hombres y mujeres con mucha hambre. Los palos que utilizan para comer son más largos que sus brazos. Por eso cuando cogen el arroz no pueden hacerlo llegar a sus bocas. La ansiedad y la frustración cada vez van a más. Más tarde, el sabio proseguía: – Veo también otra montaña de arroz recién cocinado, todavía sale humo. Alrededor hay muchas personas alegres que sonríen con satisfacción. Sus palos son también más largos que sus brazos. Aun así, han decidido darse de comer unos a otros.

                    </p>
                ],
                 
];

