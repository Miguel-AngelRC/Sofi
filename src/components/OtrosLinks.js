import React from 'react';
import '../styles/otrosLinks.css';

export default function OtrosLinks(){

    let listaLinks = [];                       // almacena todos las app para ser mostrados en la vista
    for (let i in links){           
        listaLinks.push(<a href={links[i][1]} target="_blank"  rel="noreferrer"><div key={i} className="link" >
                                <h2>{links[i][0]}</h2>              
                      </div></a> 
                    );
    }

    return(
        <>
            <h1 id="encabezado">Otras páginas de ayuda</h1>
            <div id="contendorLinks">
                {listaLinks}
            </div>
        </>
    );
}

let links = [
    [
        "Meditation",
        "https://www.meditation.com/"
    ],
    [
        "A Soft Murmur",
        "https://asoftmurmur.com/"
    ],
    [
        "This is sand",
        " https://thisissand.com/"
    ],
    [
        "Arte Seda",
        "http://weavesilk.com/"
    ],
];