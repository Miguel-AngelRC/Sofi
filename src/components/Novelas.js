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
                        Un fil??sofo c??nico vivi?? largo tiempo en la Corte del rey Pirro.
                        Pirro, que era un conquistador, una especie de Alejandro de los persas, estaba constantemente haciendo planes de invasi??n y de conquista.<br/>
                        Un d??a lleg?? donde el fil??sofo, qui??n se encontraba tumbado a la sombra de un ??rbol en el jard??n del palacio, y le dijo<br/>
                        -???He hecho un plan y ma??ana mismo salgo con mi ej??rcito. Vamos a cruzar el estrecho y a conquistar toda Grecia, todo el Peloponeso???.
                        <br/>A lo cual respondi?? el fil??sofo -???Muy bien. ??y despu??s qu??????.
                        <br/>-???Despu??s continuaremos adelante, hacia Italia???, respondi?? Pirro.
                        <br/>-????Y despu??s????, interrog?? nuevamente su interlocutor.
                        <br/>-???Pues seguiremos y procuraremos llegar hasta el final del mundo???.
                        <br/>-???Bueno, muy bien, ??y despu??s????.
                        <br/>??? ???Bueno, ya despu??s habr?? conquistado todo el mundo???.
                        <br/>?????Y entonces qu??????, volvi?? a preguntar el fil??sofo.
                        <br/>Y dijo Pirro: -???Entonces podr?? descansar???.
                        <br/>Ante lo cual el fil??sofo concluy?? -???Bueno, si de lo que se trata es de descansar, por qu?? no te sientas aqu?? conmigo bajo este ??rbol y empezamos directamente, sin tanto traj??n???.</p>
                    ],
                   [
                       "Cuento de la afiladora de lapices.",
                       <p>Una mujer decidi?? un d??a que su deseo m??s ferviente era convertirse en escritora. Sali?? temprano de su casa y compr?? 5000 l??pices y un brillante sacapuntas. Desde ese momento la familia deber??a hablar susurrando y andar de puntillas por la casa para no molestar a su novelista preferida. Esa misma tarde se sent?? en su escritorio, cogi?? del cesto uno de los l??pices, lo afil?? esmeradamente con el lustroso sacapuntas y se dispuso ufana a escribir su libro.
                        <br/><br/>
                       Pasaron las horas y mientras esperaba la inspiraci??n afil?? con dedicaci??n muchos otros l??pices con el reluciente sacapuntas. Al final del d??a no hab??a redactado una sola palabra. Todas las ma??anas afilaba sus l??pices y se preparaba para cumplir su sue??o de escribir un libro.
                       <br/><br/>
                       Un d??a se dio cuenta de que jam??s lograr??a empezarlo y termin?? de afilar con deleite y perfecci??n el resto de los l??pices que le quedaban con el radiante sacapuntas. Y as??, sin quererlo, se convirti?? en la campeona del mundo afilando l??pices, en la m??s experta afiladora de la Tierra.</p>
                   ],
                   [
                       "Historia del pastor y el cient??fico",
                       <p>Un cient??fico se trasladaba de viaje en un tren de Madrid a Asturias. En el compartimento se encontraba una segunda persona, pastor de ovejas que iba a visitar a su abuela enferma. El cient??fico aburrido le comenta al pastor: Buen hombre, este viaje se me est?? haciendo un poco aburrido. ??Querr??a usted participar en un juego de apuestas? Usted dir?? ??? le dice el pastor.
                           <br/><br/>
                       Yo le hago una pregunta, y si usted no la responde me de mil pesetas. Luego usted hace lo propio, y si yo no la respondo le doy las correspondientes mil pesetas. ??Le parece? El pastor le contesta: Mire, soy una persona de pueblo y no muy culta y usted se le ve que es una persona inteligente y de ciudad. Estar??a en desventaja. El cient??fico le dice: Est?? bien haremos otra cosa. Yo le hago una pregunta, y si usted no la responde me da mil pesetas. Luego usted hace lo propio, y si yo no la respondo le doy 20.000 pesetas. ??Le parece? Eso est?? mejor- dice el pastor.
                       <br/><br/>
                       Comienza el cient??fico: ??Cu??l es la combinaci??n qu??mica del acero compuesto? El pastor r??pidamente mete la mano en su bolsillo y le entrega las mil pesetas. Turno del pastor: ??Cu??l es el animal que camina con tres patas, pero que corre con dos? Tras unos minutos de larga espera y pensar el cient??fico, se saca las 20.000 pesetas y se las da al pastor. El cient??fico pregunta: ??Y cu??l es dichoso animalito? El pastor introduce su mano en el bolsillo y le da las mil pesetas.
                           
                       </p>
                   ],
                   [
                    "Historia del rat??n indeciso",
                    <p>Un rat??n entr?? de noche en una tienda. Ol??a todas las cosas buenas que hab??a all?? dentro: la mantequilla, el queso, el tocino, el chocolate, el pan???As?? que se levant?? sobre las patas traseras estirando el hocico y soltando un silbido de alegr??a. Pero, ??con qu?? deber??a empezar primero? Le iba a hincar el diente a un paquete de mantequilla cuando desde alg??n lado le lleg?? el aroma riqu??simo a tocino y desde otro lado el olor irresistible del queso.
                        <br/><br/>
                    A punto de empezar a devorar el queso le invadieron las fragancias del chorizo, y luego las de las zanahorias frescas. Iba a echarle el diente a las naranjas zanahorias cuando desde alg??n lado le lleg?? el aroma de las nueces, y desde otro lado volvi?? a oler tan rico a mantequilla. El pobre rat??n corr??a de un lado a otro, sab??a y no sab??a lo que ten??a que comer primero. Y de repente se hizo de d??a. La gente entr?? en la tienda y echaron de all?? al rat??n. Y ??ste les cont?? despu??s a los otros ratones: ???Nunca jam??s volver?? a esa tienda. ??Cuando quieres empezar a comer te echan fuera?????

                    </p>
                ],
                [
                       "Met??fora de las piedras",
                       <p>Un experto en gesti??n de empresas quiso sorprender a los participantes de su conferencia. Sac?? de debajo del escritorio un frasco grande de boca ancha. Lo coloc?? sobre la mesa, junto a una bandeja con piedras del tama??o de un pu??o y pregunt??: ??? ??Cuantas piedras piensan que caben en el frasco? Despu??s de que los asistentes hicieran sus conjeturas, empez?? a meter piedras hasta que llen?? el frasco. Luego pregunt??:- ??Est?? lleno? Todo el mundo lo mir?? y asinti??.
<br/><br/>
                       Entonces sac?? de debajo de la mesa un cubo con gravilla. Meti?? parte de la gravilla en el frasco y lo agit??. Las piedrecillas penetraron por los espacios que dejaban las piedras grandes. El experto sonri?? con iron??a y repiti??:- ??Est?? lleno? Esta vez los oyentes dudaron:- Tal vez no.- ??Bien! Y puso en la mesa un cubo con arena que comenz?? a volcar en el frasco. La arena se filtraba en los peque??os recovecos que dejaban las piedras y la grava.- ??Est?? bien lleno? pregunt?? de nuevo.- ??No!, exclamaron los asistentes. Bien, dijo, y cogi?? una jarra de agua de un litro que comenz?? a verter en el frasco. El frasco a??n no rebosaba.
                       <br/><br/>
                       -Bueno, ??qu?? hemos demostrado?, pregunt??. Un alumno respondi??:
                       <br/><br/>
                       ??? Que no importa lo llena que est?? tu agenda, si lo intentas, siempre puedes hacer que quepan m??s cosas.
                       <br/><br/>
                       -??No!, concluy?? el experto: Lo que esta lecci??n nos ense??a es que si no colocas las piedras grandes primero, nunca podr??s colocarlas despu??s.

                       </p>
                   ],
                   [
                    "Historia del pianista y la anfitriona",
                    <p>Un pianista famoso daba un recital en una fiesta. La anfitriona le dijo: Har??a lo que fuera por tocar como usted. El pianista la miro pensativo y replic??: no, no har??a lo que fuera. La anfitriona avergonzada frente a sus invitados dijo: s??, har??a cualquier cosa.
<br/><br/>
                    El pianista neg?? con la cabeza: le fascinar??a tocar como yo en este momento pero no estar??a dispuesta a practicar ocho horas diarias al d??a durante los pr??ximos 20 a??os para alcanzar este dominio.

                    </p>
                ],
                [
                    "El le??ador tenaz",
                    <p>Hab??a una vez un le??ador que se present?? a trabajar en una maderera. El sueldo era bueno y las condiciones de trabajo mejores a??n, as?? que el le??ador se propuso hacer un buen papel. El primer d??a se present?? al capataz, que le dio un hacha y le asign?? una zona del bosque. El hombre, entusiasmado, sali?? al bosque a talar. En un solo d??a cort?? dieciocho ??rboles.-Te felicito -le dijo el capataz-. Sigue as??.
<br/><br/>
                    Animado por las palabras del capataz, el le??ador se decidi?? a mejorar su propio trabajo al d??a siguiente. As?? que esa noche se acost?? bien temprano. A la ma??ana siguiente, se levant?? antes que nadie y se fue al bosque. A pesar de todo su empe??o, no consigui?? cortar m??s de quince ??rboles. -Debo estar cansado -pens??. Y decidi?? acostarse con la puesta de sol.
                    <br/><br/>
                    Al amanecer, se levant?? decidido a batir su marca de dieciocho ??rboles. Sin embargo, ese d??a no lleg?? ni a la mitad. Al d??a siguiente fueron siete, luego cinco, y el ??ltimo d??a estuvo toda la tarde tratando de talar su segundo ??rbol. Inquieto por lo que dir??a el capataz, el le??ador fue a contarle lo que le estaba pasando y a jurarle y perjurarle que se estaba esforzando hasta los l??mites del desfallecimiento. El capataz le pregunt??:
                    <br/><br/>
                    -??Cu??ndo afilaste tu hacha por ??ltima vez?
                    <br/><br/>
                    -Afilar, no he tenido tiempo para afilar. He estado demasiado ocupado talando ??rboles.

                    </p>
                ],
                [
                    "El cuento de la lechera",
                    <p>??rase una vez una joven lechera que llevaba un cubo de leche en la cabeza, camino al mercado para venderla. Durante el camino, la so??adora joven iba imaginando lo que podr??a lograr conseguir con la leche. Pens?? que en primer lugar y con el dinero de la venta comprar??a un canasto de huevos, los cuales una vez eclosionaran le permitir??a montar una peque??a granja de pollos. Una vez estos crecieran podr??a venderlos, lo que le dar??a dinero para comprarse un lech??n.<br/><br/>

                    Una vez este creciera la venta del animal bastar??a para comprarse una ternera, con la leche de la cual seguir??a obteniendo beneficios y a su vez podr??a tener terneros. Sin embargo, mientras iba pensando todas estas cosas la joven tropez??, lo que provoc?? que el c??ntaro cayera el suelo y se rompiera. Y con ??l, sus expectativas hacia lo que podr??a haber hecho con ella.

                    </p>
                ],
                [
                    "La sospecha",
                    <p>??rase una vez un le??ador el cual un d??a se dio cuenta que no ten??a su hacha. Sorprendido y con l??grimas en los ojos, se encontr?? cerca de su casa al vecino, quien como siempre lo hac??a le salud?? sonriente y amablemente.<br/><br/>

                    Mientras ??ste entraba en su casa, el le??ador de repente empez?? a sospechar y pensar que tal vez hubiese sido el vecino quien le hab??a robado el hacha. De hecho, ahora que lo pensaba bien su sonrisa parec??a nerviosa, ten??a una mirada extra??a e incluso hubiese dicho que le temblaban las manos. Bien pensado, el vecino ten??a la misma expresi??n que un ladr??n, caminaba como un ladr??n y hablaba como un ladr??n.
                    <br/><br/>
                    Todo ello iba pensando el le??ador, cada vez m??s convencido de haber encontrado al culpable del hurto, cuando de repente se di?? cuenta de que sus pasos le hab??an llevado de nuevo al bosque donde hab??a estado la noche anterior.
                    <br/><br/>
                    De pronto, tropez?? con algo duro y cay??. Cuando mir?? al suelo...encontr?? su hacha! El le??ador volvi?? de nuevo a su hogar con el hacha, arrepentido de sus sospechas, y cuando vio de nuevo a su vecino vio que su expresi??n, andar y manera de hablar eran (y hab??an sido en todo momento) las de siempre.

                    </p>
                ],
                [
                    "La gallina de los huevos de oro",
                    <p>??rase una vez una pareja de granjeros que, un d??a, descubrieron en uno de los nidos en los que criaban gallinas un huevo de oro macizo. La pareja fue observando que el ave produc??a tal prodigio d??a tras d??a, obteniendo cada d??a un huevo de oro.<br/><br/>

                    Reflexionando sobre qu?? era lo que hac??a que la gallina en cuesti??n tuviese esa habilidad, sospecharon que que ??sta pose??a oro en su interior. Para comprobarlo y obtener todo el oro de una vez, mataron a la gallina y la abrieron, descubriendo para su sorpresa que por dentro la prodigiosa ave era igual a las dem??s. Y tambi??n se dieron cuenta que, en su ambici??n, hab??an acabado con aquello que les hab??a estado enriqueciendo.

                    </p>
                ],
                [
                    "El maestro zen",
                    <p>??rase una vez, durante una guerra civil en la ??poca feudal, un peque??o poblado en el que viv??a un maestro zen. Un d??a, lleg?? a ellos la noticia de que un temible general se dirig??a en su direcci??n para invadir y tomar la zona. El d??a anterior a la llegada del ej??rcito toda la aldea huy??, con la excepci??n del anciano maestro. Cuando lleg?? el general, tras encontrar la aldea pr??cticamente desierta y sabiendo de la existencia del anciano, orden?? que el maestro zen se personase ante ??l, pero este no lo hizo.<br/><br/>

                    El general se dirigi?? r??pidamente hacia el templo donde el maestro descansaba. Furioso, el general sac?? su espada y se la acerc?? a la cara, grit??ndole que si no se daba cuenta de que estaba simplemente parado delante de quien podr??a atravesarle en un instante. Con total tranquilidad, el anciano maestro le contest?? que precisamente el general estaba ante alguien que pod??a ser atravesado en un instante. El general, sorprendido y confuso, termin?? haci??ndole una reverencia y march??ndose del lugar.

                    </p>
                ],
                [
                    "El zorro y las uvas",
                    <p>Hab??a una vez un zorro que caminaba, sediento, por el bosque. Mientras lo hac??a vio en lo alto de la rama de un ??rbol un racimo de uvas, las cuales dese?? al instante al servirle para refrescarse y apagar su sed. El zorro se acerc?? al ??rbol e intent?? alcanzar las uvas, pero estaban demasiado altas. Tras intentarlo una y otra vez sin conseguirlo, el zorro finalmente se rindi?? y se alej??. Viendo que un p??jaro hab??a visto todo el proceso se dijo en voz alta que en realidad no quer??a las uvas, dado a??n no estaban maduras, y que en realidad hab??a cesado el intento de alcanzarlas al comprobarlo.

                    </p>
                ],
                [
                    " El lobo y la grulla",
                    <p>??rase una vez un lobo el cual, comiendo carne, sufri?? el atasco de un hueso en su garganta. Esta empez?? a hinch??rsele y a generarla gran dolor, corriendo el lobo desesperado intentando sac??rselo o encontrar ayuda. Durante su camino encontr?? una grulla, a la cual tras explicarle la situaci??n suplic?? ayuda prometi??ndole darle lo que le pidiera. A pesar de que desconfiaba, la grulla acept?? con la condici??n de que el lobo cumpliera lo pactado. El ave procedi?? a introducir su cabeza por su garganta, consiguiendo que el hueso se desprendiera. Se retir?? y observ?? como el lobo se recuperaba, pudiendo ahora respirar con normalidad, tras lo cual le pidi?? que cumpliera con lo prometido. Sin embargo el lobo contest?? que suficiente recompensa era no haberla devorado pese a haberla tenido entre sus dientes.

                    </p>
                ],
                [
                    "El viejo, el ni??o y el burro",
                    <p>??rase una vez un abuelo y un nieto que decidieron emprender un viaje junto con un burro. Inicialmente el anciano hizo que el ni??o montara en el animal, con el fin de que no se cansara. Sin embargo, al llegar a una aldea, los lugare??os empezaron a comentar y criticar que el anciano tuviera que ir al pie mientras que el ni??o, m??s joven y vital, fuera montado. Las cr??ticas hicieron que finalmente abuelo y nieto cambiaran posiciones, yendo ahora el anciano montado sobre el burro y el ni??o caminando al lado.<br/><br/>

                    Sin embargo, al pasar por una segunda aldea, los lugare??os pusieron el grito en el cielo de que el pobre ni??o fuera caminando mientras el hombre mayor lo hac??a c??modamente montado. Ambos decidieron entonces montar en el animal. Pero al llegar a un tercer poblado los aldeanos criticaron durante a ambos, acus??ndoles de cargar en exceso al pobre burro.
                    <br/><br/>
                    Ante esto, el anciano y su nieto decidieron ir ambos a pie, caminando al lado del animal. Pero en un cuarto pueblo se rieron de ellos, dado que dispon??an de una montura y ninguno de ellos viajaba en ella. El abuelo aprovech?? la situaci??n para hacer ver a su nieto el hecho de que, hicieran lo que hicieran, siempre habr??a alguien a quien le parecer??a mal y que lo importante no era lo que otros dijeran, sino lo que creyera una mismo.

                    </p>
                ],
                [
                    "La felicidad escondida",
                    <p>En el inicio de los tiempos, antes de que la humanidad poblara la Tierra, los distintos dioses se reunieron con el fin de preparar la creaci??n del ser humano, a su imagen y semejanza. Sin embargo uno de ellos se di?? cuenta de que si los hac??an exactamente iguales a ellos, en realidad estar??an creando nuevos dioses, con lo que deber??an quitarle algo de tal manera que se diferenciara de ellos. Tras pensarlo detenidamente, otro de los presentes propuso quitarles la felicidad y esconderla en un lugar donde no pudieran encontrarla nunca.<br/><br/>

                    Otro de ellos propuso esconderla en el monte m??s alto, pero se dieron cuenta de que al tener fuerza, la humanidad podr??a llegar a subir y hallarla. Otro propuso que la ocultaran debajo del mar, pero dado que la humanidad poseer??a curiosidad podr??a llegar a construir algo para llegar a las profundidades marinas y encontrarla. Un tercero propuso llevar la felicidad a un planeta lejano, pero otros concluyeron que dado que el ser humano tendr?? inteligencia podr?? construir naves espaciales que puedan llegar a alcanzarla.
                    <br/><br/>
                    El ??ltimo de los dioses, que hab??a permanecido en silencio hasta entonces, tom?? la palabra para indicar que sab??a un lugar donde no la encontrar??an: propuso que escondieran la felicidad dentro del propio ser humano, de tal modo que este estar??a tan ocupado buscando fuera que jam??s la hallar??a. Estando todos de acuerdo con ello, as?? lo hicieron. Este el motivo por el cual el ser humano se pasa la vida buscando la felicidad, sin saber que en realidad est?? en s?? mismo.

                    </p>
                ],
                [
                    "El p??jaro v??ctima de la bondad",
                    <p>Hubo una vez una gaviota, la cual descendi?? volando a uno de los suburbios de la capital de Lu. El marqu??s de la zona se afan?? en agasajarla y darle la bienvenida en el templo, preparando para ella la mejor m??sica y grandes sacrificios. Sin embargo, el ave estaba aturdida y triste, no probando la carne o el vino. Tres d??as despu??s muri??. El marqu??s de Lu agasaj?? a la gaviota tal y como a ??l le hubiese gustado serlo, no como al ave le hubiese gustado

                    </p>
                ],
                [
                    " El caballo perdido del anciano sabio",
                    <p>??rase una vez un anciano campesino de gran sabidur??a, el cual viv??a con su hijo y que pose??a un caballo. Un d??a el corcel escap?? del lugar, algo que hizo que los vecinos fueran a consolarles ante su mala suerte. Pero ante sus palabras de consuelo, el anciano campesino les respondi?? que lo ??nico verdadero es que el caballo hab??a escapado, y si eso era buena o mala suerte ser??a el tiempo lo que lo dictaminar??a.<br/><br/>

                    Poco despu??s el caballo regres?? con sus due??os, acompa??ado de una hermosa yegua. Los vecinos corrieron a felicitarle por su buena suerte. Sin embargo, el anciano les respondi?? que en realidad lo ??nico que s?? era cierto era que el caballo hab??a regresado con la yegua, y si esto era malo o bueno el tiempo lo dir??a.
                    <br/><br/>
                    Tiempo despu??s el hijo del campesino intent?? montar a la yegua, a??n salvaje, de tal manera que se cay?? de la montura y se rompi?? la pierna. Seg??n el m??dico, la rutpura le provocar??a una cojera permanente. Los vecinos volvieron a consolar a ambos, pero tambi??n en esta ocasi??n el anciano campesino dictaminar??a que lo ??nico que se sab??a en verdad era que su hijo se hab??a roto una pierna, y que si ello era bueno o malo a??n estaba por verse.
                    <br/><br/>
                    Finalmente, lleg?? un d??a en que se inici?? una sangrienta guerra en la regi??n. Se empez?? a reclutar a todos los j??venes, pero al ver la cojera del hijo del campesino los soldados que fueron a reclutarle decidieron que no era apto para el combate, algo que provoc?? que no fuera reclutado y pudiera permanecer sin combatir.
                    <br/><br/>
                    La reflexi??n que el anciano le hizo ver a su hijo en base a todo lo ocurrido es que los hechos no son buenos o malos en s?? mismos, sino que lo son nuestras expectativas y percepci??n de ellos: la huida del caballo trajo a la yegua, lo que a su vez supuso la rotura de su pierna y asimismo ello condujo a una cojera permanente era lo que ahora le salvaba la vida.

                    </p>
                ],
                [
                    "El cojo y el ciego",
                    <p>Hubo una vez un cojo y un ciego que iban paseando juntos cuando se encontraron un r??o, el cual ambos deb??an cruzar. El cojo le dijo al ciego que ??l no podr??a llegar a la otra orilla, a lo que el ciego respondi?? que ??l s?? podr??a pasar pero ante su falta de visi??n podr??a resbalar.<br/><br/>

                    Ante ello, se les ocurri?? una gran idea: el hombre ciego ser??a quien llevar??a la marcha y sostendr??a a ambos con sus piernas, mientras que el hombre cojo ser??a los ojos de ambos y podr??a guiar a ambos durante el cruce. Subiendo el cojo encima del ciego, ambos procedieron a cruzar cuidadosamente el r??o, logr??ndolo con ??xito y consiguiendo alcanzar la otra orilla sin dificultades.

                    </p>
                ],
                [
                    "La leyenda de Toro Bravo y Nube Azul",
                    <p>Cuenta una leyenda de los Sioux que hubo una vez una joven pareja formada por Toro Bravo y Nube Azul, que se amaban profundamente. Queriendo permanecer unidos por siempre, ambos acudieron al anciano de la tribu con el fin de que les proporcionara un talism??n por tal de estar siempre juntos.<br/><br/>

                    El anciano indic?? a la joven Nube Azul que acudiera sola a la monta??a del norte y capturase con una red al mejor halc??n que all?? viviese, mientras que a Toro Bravo le dirigi?? a la monta??a del sur para atrapar al ??guila m??s poderosa. Ambos j??venes se esforzaron duramente y lograron capturar cada uno a la mejor ave de cada una de las monta??as.
                    <br/><br/>
                    Hecho esto, el anciano les indic?? que ataran las patas del halc??n y el ??guila entre s?? y luego las dejaran volar en libertad. As?? lo hicieron, pero al estar atadas ambas aves cayeron al suelo sin poder volar con normalidad. Tras varios intentos, ambas empezaron a agredirse entre s??. El anciano hizo a la pareja ver esto, y les indic?? que el talism??n era el aprendizaje de que deb??an volar juntos, pero nunca atados si no quer??an terminar da????ndose el uno al otro.

                    </p>
                ],
                [
                    "La Arena y la Piedra",
                    <p>Hab??a una vez dos amigos que caminaban por el desierto, tras haber perdido a sus camellos y habiendo pasado d??as sin probar bocado. Un d??a, surgi?? una discusi??n entre ellos en el que uno de los dos increp?? al otro por haber elegido la ruta equivocada (si bien la decisi??n hab??a sido conjunta) y en un arrebato de ira le di?? una bofetada. El agredido no dijo nada, pero escribi?? en la arena que en ese d??a su mejor amigo le hab??a pegado una bofetada (una reacci??n que sorprendi?? al primero).<br/><br/>

                    Posteriormente ambos llegaron a un oasis, en el cual decidieron ba??arse. En ello estaban cuando el anteriormente agredido empez?? a ahogarse, a lo que el otro respondi?? rescat??ndole. El joven le agradeci?? la ayuda y posteriormente, con un cuchillo, escribi?? sobre una piedra que su mejor amigo le hab??a salvado la vida.
                    <br/><br/>
                    El primero, curioso, le pregunt?? a su compa??ero por qu?? cuando le hab??a pegado el hab??a escrito en la arena y ahora lo hac??a en una piedra. El segundo le sonri?? y le contest?? que cuando alguien le hac??a algo malo intentaba escribirlo sobre la arena por tal de que la marca fuera borrada por el viento, mientras que cuando alguien hac??a algo bueno prefer??a dejarlo grabado en piedra, donde permanecer?? por siempre.

                    </p>
                ],
                [
                    "El zorro y el tigre",
                    <p>Hab??a una vez un enorme tigre que cazaba en los bosques de China. El poderoso animal se top?? y empez?? a atacar a un peque??o zorro, el cual ante el peligro ??nicamente tuvo como opci??n recurrir a la astucia. As??, el zorro le increp?? y le indic?? que no sab??a hacerle da??o puesto que ??l era el rey de los animales por designio del emperador del cielo.<br/><br/>

                    Asimismo le indic?? que si no le cre??a le acompa??ara: as?? ver??a como todos los animales hu??an atemorizados al verle llegar. El tigre as?? lo hizo, observando en efecto como a su paso los animales escapaban. Lo que no sab??a era que esto no era debido a que estuvieran confirmando las palabras del zorro (algo que el tigre acab?? por creer), sino que de hecho hu??an de la presencia del felino.

                    </p>
                ],
                [
                    "Los dos halcones",
                    <p>Hab??a una vez un rey el cual amaba los animales, que un d??a recibi?? como regalo dos hermosas cr??as de halc??n. El rey los entreg?? a un maestro cetrero para que los alimentara, cuidara y entrenara. Pas?? el tiempo y despu??s de unos meses en los que los halcones crecieron el cetrero pidi?? una audiencia con el rey para explicarle que si bien uno de los halcones hab??a alzado ya el vuelo con normalidad, el otro hab??a permanecido en la misma rama desde que lleg??, no emprendiendo el vuelo en ning??n momento. Ello preocup?? en gran medida al rey, que mand?? llamar a m??ltiples expertos para solucionar el problema del ave. Sin ??xito.<br/><br/>

                    Desesperado, decidi?? ofrecer una recompensa a quien lograra que el ave consiguiera volar. Al d??a siguiente el rey pudo ver c??mo el ave ya no estaba en su rama, sino que volaba libremente por la regi??n. El soberano mand?? llamar al autor de tal prodigio, encontr??ndose con que quien lo hab??a logrado era un joven campesino. Poco antes de entregarle su recompensa, el rey le pregunt?? c??mo lo hab??a logrado. El campesino le contest?? que simplemente hab??a partido la rama, no qued??ndole otra opci??n al halc??n que echar a volar.

                    </p>
                ],
                [
                    "El Bamb?? Japon??s",
                    <p>No hay que ser agricultor para saber que una buena cosecha requiere de buena semilla, buen abono y riego.Tambi??n es obvio que quien cultiva la tierra no se detiene impaciente frente a la semilla sembrada, y grita con todas sus fuerzas: ??Crece, maldita sea! Hay algo muy curioso que sucede con el bamb?? y que lo transforma en no apto para impacientes:<br/><br/>

                    Siembras la semilla, la abonas, y te ocupas de regarla constantemente.
                    <br/><br/>
                    Durante los primeros meses no sucede nada apreciable. En realidad no pasa nada con la semilla durante los primeros siete a??os, a tal punto que un cultivador inexperto estar??a convencido de haber comprado semillas inf??rtiles.
                    <br/><br/>
                    Sin embargo, durante el s??ptimo a??o, en un per??odo de s??lo seis semanas la planta de bamb?? crece ??m??s de 30 metros!
                    <br/><br/>
                   ??Tard?? s??lo seis semanas crecer?
                   <br/><br/>
                    No, la verdad es que se tom?? siete a??os y seis semanas en desarrollarse.
                    <br/><br/>
                    Durante los primeros siete a??os de aparente inactividad, este bamb?? estaba generando un complejo sistema de ra??ces que le permitir??an sostener el crecimiento que iba a tener despu??s de siete a??os.
                    <br/><br/>
                    Sin embargo, en la vida cotidiana, muchas personas tratan de encontrar soluciones r??pidas, triunfos apresurados, sin entender que el ??xito es simplemente resultado del crecimiento interno y que ??ste requiere tiempo.
                    </p>
                ],
                [
                    "El elefante encadenado",
                    <p>Cuando yo era chico me encantaban los circos, y lo que m??s me gustaba de los circos eran los animales. Tambi??n a m?? como a otros, despu??s me enter??, me llamaba la atenci??n el elefante. Durante la funci??n, la enorme bestia hacia despliegue de su tama??o, peso y fuerza descomunal??? pero despu??s de su actuaci??n y hasta un rato antes de volver al escenario, el elefante quedaba sujeto solamente por una cadena que aprisionaba una de sus patas clavada a una peque??a estaca clavada en el suelo. Sin embargo, la estaca era solo un min??sculo pedazo de madera apenas enterrado unos cent??metros en la tierra. Y aunque la cadena era gruesa y poderosa me parec??a obvio que ese animal capaz de arrancar un ??rbol de cuajo con su propia fuerza, podr??a, con facilidad, arrancar la estaca y huir.
                    <br/><br/>
                    El misterio es evidente: ??Qu?? lo mantiene entonces? ??Por qu?? no huye? Cuando ten??a 5 o 6 a??os yo todav??a en la sabidur??a de los grandes. Pregunt?? entonces a alg??n maestro, a alg??n padre, o a alg??n t??o por el misterio del elefante. Alguno de ellos me explic?? que el elefante no se escapaba porque estaba amaestrado. Hice entonces la pregunta obvia: -Si est?? amaestrado, ??por qu?? lo encadenan? No recuerdo haber recibido ninguna respuesta coherente. Con el tiempo me olvide del misterio del elefante y la estaca??? y s??lo lo recordaba cuando me encontraba con otros que tambi??n se hab??an hecho la misma pregunta.
                    <br/><br/>
                    Hace algunos a??os descubr?? que por suerte para m?? alguien hab??a sido lo bastante sabio como para encontrar la respuesta: El elefante del circo no se escapa porque ha estado atado a una estaca parecida desde muy, muy peque??o. Cerr?? los ojos y me imagin?? al peque??o reci??n nacido sujeto a la estaca. Estoy seguro de que en aquel momento el elefantito empuj??, tir??, sud??, tratando de soltarse. Y a pesar de todo su esfuerzo, no pudo. La estaca era ciertamente muy fuerte para ??l. Jurar??a que se durmi?? agotado, y que al d??a siguiente volvi?? a probar, y tambi??n al otro y al que le segu??a??? Hasta que un d??a, un terrible d??a para su historia, el animal acept?? su impotencia y se resign?? a su destino.
                    <br/><br/>
                    Este elefante enorme y poderoso, que vemos en el circo, no se escapa porque cree -pobre- que NO PUEDE. ??l tiene registro y recuerdo de su impotencia, de aquella impotencia que sinti?? poco despu??s de nacer. Y lo peor es que jam??s se ha vuelto a cuestionar seriamente ese registro. Jam??s??? jam??s??? intent?? poner a prueba su fuerza otra vez???

                    </p>
                ],
                [
                    "Cuento Budista: T?? Gobiernas tu Mente, no tu Mente a ti",
                    <p>Un estudiante de zen, se quejaba de que no pod??a meditar: sus pensamientos no se lo permit??an. Habl?? de esto con su maestro dici??ndole: ???Maestro, los pensamientos y las im??genes mentales no me dejan meditar; cuando se van unos segundos, luego vuelven con m??s fuerza. No puedo meditar. No me dejan en paz???. El maestro le dijo que esto depend??a de ??l mismo y que dejara de cavilar. No obstante, el estudiante segu??a lament??ndose de que los pensamientos no le dejaban en paz y que su mente estaba confusa. Cada vez que intentaba concentrarse, todo un tren de pensamientos y reflexiones cortas, a menudo in??tiles y triviales, irrump??an en su cabeza???
<br/><br/>
                    El maestro entonces le dijo: ???Bien. Aferra esa cuchara y tenla en tu mano. Ahora si??ntate y medita???. El disc??pulo obedeci??. Al cabo de un rato el maestro le orden??: ?????Deja la cuchara!???. El alumno as?? hizo y la cuchara cay?? obviamente al suelo. Mir?? a su maestro con estupor y ??ste le pregunt??: ???Entonces, ahora dime ??qui??n agarraba a qui??n, t?? a la cuchara, o la cuchara a ti?.

                    </p>
                ],
                [
                    "Acu??rdate de soltar el vaso",
                    <p>Un psic??logo, en una sesi??n grupal, levant?? un vaso de agua. Todo el mundo esperaba la t??pica pregunta: ?????Est?? medio lleno o medio vac??o???? Sin embargo, pregunt??: ??? ??Cu??nto pesa este vaso? Las respuestas variaron entre 200 y 250 gramos. El psic??logo respondi??: ??El peso absoluto no es importante. Depende de cu??nto tiempo lo sostengo. Si lo sostengo un minuto, no es problema. Si lo sostengo una hora, me doler?? el brazo. Si lo sostengo un d??a, mi brazo se entumecer?? y paralizar??. El peso del vaso no cambia, es siempre el mismo. Pero cuanto m??s tiempo lo sujeto, m??s pesado, y m??s dif??cil de soportar se vuelve.??
<br/><br/>
                    Y continu??: ??Las preocupaciones, los pensamientos negativos, los rencores, el resentimiento, son como el vaso de agua. Si piensas en ellos un rato, no pasa nada. Si piensas en ellos todo el d??a, empiezan a doler. Y si piensas en ellos toda la semana, acabar??s sinti??ndote paralizado, e incapaz de hacer nada.?? ??Acu??rdate de soltar el vaso!

                    </p>
                ],
                [
                    "Busca Dentro de ti",
                    <p>Cuentan que un d??a estaba Mullah en la calle, en cuatro patas, buscando algo, cuando se le acerc?? un amigo y le pregunt??: ??? Mullah, ??qu?? buscas? Y ??l le respondi??: ??? Perd?? mi llave. ??? Oh, Mullah, qu?? terrible. Te ayudar?? a encontrarla. Se arrodill?? y luego pregunt??: ??? ??D??nde la perdiste? ??? En mi casa. ??? Entonces, ??por qu?? la buscas aqu?? afuera? ??? Porque aqu?? hay m??s luz. Aunque les parezca c??mico, ??eso es lo que hacemos con nuestra vida! Creemos que todo lo que hay que buscar est?? ah?? afuera, a la luz, donde es f??cil encontrarlo, cuando las ??nicas respuestas est??n en el propio interior. Salgan a buscarlas afuera, que jam??s las hallar??n??? de Leo Buscaglia, libro: ??Vivir, amar y aprender??.

                    </p>
                ],
                [
                    "Todo Acto Genera Consecuencias",
                    <p>Ese a??o las lluvias hab??an sido particularmente intensas en toda la regi??n. Una gran corriente del r??o se  llev?? la choza de un campesino, pero cuando cesaron, hab??an dejado en la tierra una valiosa joya. El buen hombre vendi?? la alhaja y con la suma que le entregaron reconstruy?? su choza y el  resto se lo regal?? a un ni??o hu??rfano y desvalido del pueblo. La riada hab??a arrasado tambi??n  otro poblado y un campesino, para salvar la vida, tuvo que encaramarse a un tronco de ??rbol que  flotaba sobre las turbulentas aguas. Otro hombre, despavorido, le pidi?? socorro, pero el campesino se lo neg??, dici??ndose a s?? mismo: ???Si se sube ??ste al tronco, a lo mejor se vuelca y me  ahogo???.
<br/><br/>
                    Los a??os pasaron y estall?? la guerra en ese reino. Ambos campesinos fueron alistados. El campesino bondadoso fue herido de gravedad y conducido al hospital. El m??dico que le atendi?? con gran cari??o y eficacia era aquel muchachito hu??rfano al que  ??l hab??a ayudado. Lo reconoci?? y  puso toda su ciencia y amor al servicio del malherido. Logr?? salvarlo y se hicieron grandes amigos de por vida.
                    <br/><br/>
                    El campesino ego??sta tuvo por capit??n de la tropa al hombre a quien no hab??a auxiliado. Le envi?? a primera l??nea de combate y d??as despu??s hall?? la muerte en las trincheras.
                    <br/><br/>
                    Las consecuencias siguen, antes o despu??s, a los actos. La generosidad engendra generosidad y  el ego??smo, ego??smo. Debemos cultivar los cuatro b??lsamos de la mente: amor, compasi??n, alegr??a  por la dicha de los otros y ecuanimidad.

                    </p>
                ],
                [
                    "La Rosa y el Sapo",
                    <p>Hab??a una vez una rosa roja muy bella, se sent??a de maravilla al saber que era la rosa mas bella del jard??n. Sin embargo, se daba cuenta de que la gente la ve??a de lejos. Se dio cuenta de que al lado de ella siempre hab??a un sapo grande y oscuro, y que era por eso que nadie se acercaba a verla de cerca. Indignada ante lo descubierto le orden?? al sapo que se fuera de inmediato; el sapo muy obediente dijo: Est?? bien, si as?? lo quieres.
<br/><br/>
                    Poco tiempo despu??s el sapo pas?? por donde estaba la rosa y se sorprendi?? al ver la rosa totalmente marchita, sin hojas y sin p??talos. Le dijo entonces:
                    <br/><br/>
                    Vaya que te ves mal. ??Qu?? te pas???
                    <br/><br/>
                    La rosa contest??: Es que desde que te fuiste las hormigas me han comido d??a a d??a, y nunca pude volver a ser igual.
                    <br/><br/>
                    El sapo solo contest??: Pues claro, cuando yo estaba aqu?? me com??a a esas hormigas y por eso siempre eras la mas bella del jard??n.
                    <br/><br/>
                    Moraleja: Muchas veces despreciamos a los dem??s por creer que somos mas que ellos,mas bellos o simplemente que no nos ???sirven??? para nada. Todos tenemos algo que aprender de los dem??s o algo que ense??ar, y nadie debe despreciar a nadie. No vaya a ser que esa persona nos haga un bien del cual ni siquiera seamos conscientes.

                    </p>
                ],
                [
                    "F??bula de la Rana Sobre el ??nimo",
                    <p>Un grupo de ranas viajaba por el bosque y, de repente, dos de ellas cayeron en un hoyo profundo. Todas las dem??s ranas se reunieron alrededor el hoyo. Cuando vieron cuan hondo era el hoyo, le dijeron a las dos ranas en el fondo que para efectos pr??cticos, se deb??an dar por muertas ya que no saldr??an. Las dos ranas no hicieron caso a los comentarios de sus amigas y siguieron tratando de saltar fuera del hoyo con todas sus fuerzas. Las otras segu??an insistiendo que sus esfuerzos ser??an in??tiles.
                    <br/><br/>
                    Finalmente, una de las ranas puso atenci??n a lo que las dem??s dec??an y se rindi??. Ella se desplom?? y muri??. La otra rana continu?? saltando tan fuerte como le era posible. Una vez m??s, la multitud de ranas le gritaba y le hac??an se??as para que dejara de sufrir y que simplemente se dispusiera a morir, ya que no ten??a caso seguir luchando. Pero la rana saltaba cada vez con m??s fuerzas hasta que finalmente logr?? salir del hoyo. Cuando sali?? las otras ranas le dijeron: ??nos da gusto que hayas logrado salir, a pesar de lo que te gritamos??.
                    <br/><br/>
                    La rana les explic?? que era sorda, y que pens?? que las dem??s la estaban animando a esforzarse m??s y salir del hoyo. Moraleja: 1. La palabra tiene poder de vida y muerte. Una palabra de aliento compartida a alguien que se siente desanimado puede ayudar a levantarlo. 2. Una palabra destructiva dicha a alguien que se encuentre desanimado puede ser lo que acabe por destruirlo. Tengamos cuidado con lo que decimos. 3. Una persona especial es la que se da tiempo para animar a otros.

                    </p>
                ], 
                [
                    "El Asno con la Piel de Le??n",
                    <p>Cuando Bramadatta reinaba en Benar??s, hab??a un viejo mercader que viajaba de pueblo en pueblo, llevando sus mercanc??as a lomos de un asno. Este mercader se val??a de un ingenioso ardid para alimentar a su burro. Tan pronto como llegaba a un pueblo, lo descargaba y lo cubr??a enseguida con una piel de le??n; luego lo soltaba en un campo de arroz o alfalfa. El asno com??a hasta hincharse y los due??os de los campos no se atrev??an a echarle, ya que cre??an que se trataba de un le??n verdadero.
<br/><br/>
                    Un d??a el mercader lleg?? a un pueblo, y como hab??a hecho en los otros, solt?? al asno en un campo de verde alfalfa. El due??o, al ver lo que ??l supon??a un le??n huy??, aterrorizado, al pueblo, y cont?? a sus convecinos lo que estaba ocurriendo. Sin vacilar un momento, todos se armaron hasta los dientes y corrieron al encuentro del falso le??n.
                    Este, al ver acercarse a tanta gente lanz?? un sonoro rebuzno que descubri?? a los campesinos su disfraz, y que tuvo adem??s por consecuencia irritarlos mucho m??s. En un momento cayeron todos sobre ??l y lo molieron a palos de tal manera, que cuando al fin el mercader logr?? rescatarlo, estaba moribundo.
                    <br/><br/>
                    El hombre se tir?? de los pelos al ver que por su avaricia hab??a perdido a un compa??ero fiel y ??til, y mientras el pollino mor??a, el viejo iba diciendo:
                    ??? No es la piel lo que hace temible al le??n.

                    </p>
                ],
                [
                    "La Ventana del Hospital",
                    <p>Dos hombres, seriamente enfermos, ocupaban la misma habitaci??n en el hospital. A uno de ellos se le permit??a estar sentado una hora todas las tardes para que los pulmones drenaran sus fluidos. Su cama daba a la ??nica ventana de la habitaci??n.
<br/><br/>
                    El otro hombre ten??a que estar tumbado todo el tiempo. Los dos se hablaban mucho. De sus mujeres y familiares, de sus casas, trabajos, el servicio militar, d??nde hab??an estado de vacaciones.
                    <br/><br/>
                    Y todas las tardes el hombre que se pod??a sentar frente a la ventana, se pasaba el tiempo describiendo a su compa??ero lo qu?? ve??a por la ventana. ??ste, solamente viv??a para esos momentos donde su mundo se expand??a por toda la actividad y color del mundo exterior.
                    <br/><br/>
                    La ventana daba a un parque con un bonito lago. Patos y cisnes jugaban en el agua mientras los ni??os capitaneaban sus barcos teledirigidos. J??venes amantes andaban cogidos de la mano entre flores de cada color del arco iris. Grandes y ancestros ??rboles embellec??an el paisaje, y una fina l??nea del cielo sobre la ciudad se pod??a ver en la lejan??a.
                    <br/><br/>
                    Mientras el hombre de la ventana describ??a todo esto con exquisito detalle, el hombre al otro lado de la habitaci??n cerraba sus ojos e imaginaba la pict??rica escena.
                    <br/><br/>
                    Una c??lida tarde el hombre de la ventana describi?? un desfile en la calle. Aunque el otro hombre no pod??a o??r la banda de m??sica- se la imaginaba conforme el otro le iba narrando todo con pelos y se??ales. Los d??as y las semanas pasaron.
                    <br/><br/>
                    Una ma??ana, la enfermera entr?? para encontrase el cuerpo sin vida del hombre al lado de la ventana, el cual hab??a muerto tranquilamente mientras dorm??a. Se puso muy triste y llam?? al doctor para que se llevaran el cuerpo. Tan pronto como consider?? apropiado, el otro hombre pregunt?? si se pod??a trasladar al lado de la ventana. La enfermera acept?? gustosamente, y despu??s de asegurarse de que el hombre estaba c??modo, le dej?? solo.
                    <br/><br/>
                    Lentamente, dolorosamente, se apoy?? sobre un codo para echar su primer vistazo fuera de la ventana. Finalmente tendr??a la posibilidad de verlo todo con sus propios ojos.
                    <br/><br/>
                    Se retorci?? lentamente para mirar fuera de la ventana que estaba al lado de la cama. Daba a un enorme muro blanco. El hombre pregunt?? a la enfermera qu?? hab??a pretendido el difunto compa??ero cont??ndole aquel maravilloso mundo exterior.
                    <br/><br/>
                    Y ella dijo: ??? Quiz??s s??lo quer??a animarle.

                    </p>
                ],
                [
                    "El Cielo y el Infierno",
                    <p>En un reino lejano de Oriente se encontraban dos amigos que ten??an la curiosidad y el deseo de saber sobre el Bien y el Mal. Un d??a se acercaron a la caba??a del sabio Lang para hacerle algunas preguntas. Una vez dentro le preguntaron:
<br/><br/>
                    Anciano d??ganos: ??qu?? diferencia hay entre el cielo y el infierno???? El sabio contest??:   ??? Veo una monta??a de arroz reci??n cocinado, todav??a sale humo. Alrededor hay muchos hombres y mujeres con mucha hambre. Los palos que utilizan para comer son m??s largos que sus brazos. Por eso cuando cogen el arroz no pueden hacerlo llegar a sus bocas. La ansiedad y la frustraci??n cada vez van a m??s. M??s tarde, el sabio prosegu??a: ??? Veo tambi??n otra monta??a de arroz reci??n cocinado, todav??a sale humo. Alrededor hay muchas personas alegres que sonr??en con satisfacci??n. Sus palos son tambi??n m??s largos que sus brazos. Aun as??, han decidido darse de comer unos a otros.

                    </p>
                ],
                 
];

