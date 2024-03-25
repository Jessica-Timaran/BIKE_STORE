import React from 'react';
import "../FondoBici/fondobici.css"
import bici_1 from "../../img/bicicleta.png";

function FondoBici(){
  return (
    <body>
        
      <div className="contenedor">
        <img src= {bici_1}  className="imagen_bici" alt="Bicicleta Fondo" />
        <div className="texto-superpuesto">BICICLETAS</div>
      </div>

      </body>

    );
}

export default FondoBici;