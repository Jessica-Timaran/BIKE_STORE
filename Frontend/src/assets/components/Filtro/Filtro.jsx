import React from 'react';
import "../Filtro/filtro.css"


function Filtro() {
    return (
        <div className="contenedor2">
        <div className="cuadro">
          <h2>Categorías</h2>
          <div>
            <input type="checkbox" id="ruta" value="Bicicletas De Ruta" />
            <label htmlFor="ruta">Bicicletas De Ruta</label>
          </div>
          <div>
            <input type="checkbox" id="urbana" value="Bicicletas Urbanas" />
            <label htmlFor="urbana">Bicicletas Urbanas</label>
          </div>
          <div>
            <input type="checkbox" id="montana" value="Bicicletas De Montaña" />
            <label htmlFor="montana">Bicicletas De Montaña</label>
          </div>
  
          <h2>Etiquetas</h2>
          <div>
            <input type="checkbox" id="outlet" value="Outlet" />
            <label htmlFor="outlet">Outlet</label>
          </div>
  
          <h2>Marca</h2>
          <div>
            <input type="checkbox" id="bmc" value="BMC" />
            <label htmlFor="bmc">BMC</label>
          </div>
          <div>
            <input type="checkbox" id="scott" value="Scott" />
            <label htmlFor="scott">Scott</label>
          </div>
          <div>
            <input type="checkbox" id="specialized" value="Specialized" />
            <label htmlFor="specialized">Specialized</label>
          </div>
  
          <h2>Precio</h2>
          <div>
            <label htmlFor="minPrice">Min:</label>
            <input type="number" id="minPrice" min="10" max="50" />
          </div>
          <div>
            <label htmlFor="maxPrice">Max:</label>
            <input type="number" id="maxPrice" min="10" max="50" />
          </div>
  
          <button onClick={() => filtrar()}>Filtrar</button>
        </div>
      </div>
    );
  }
  
export default Filtro;