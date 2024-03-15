import React from 'react';
import "../style/catalogo.css"

function Catalogo() {
    return (
        <div className="catalogo">
            <div className="bicicleta" data-categoria="Bicicletas De Ruta" data-marca="BMC" data-precio="400">
                <img src="../IMG/bici_1.png" alt="Bicicleta 1" />
                <h2>Bicicleta de Ruta</h2>
                <p> $400</p>
                <button>Comprar</button>
            </div>

            <div className="bicicleta" data-categoria="Bicicletas De Montaña" data-marca="BMC" data-precio="400">
                <img src="../IMG/bici_1.png" alt="Bicicleta 2" />
                <h2>Bicicleta de Montaña</h2>
                <p> $400</p>
                <button>Comprar</button>
            </div>

            <div className="bicicleta">
                <img src="../IMG/bici_1.png" alt="Bicicleta 2" />
                <h2>Bicicleta de Carretera</h2>
                <p> $400</p>
                <button>Comprar</button>
            </div>

            <div className="bicicleta">
                <img src="../IMG/bici_1.png" alt="Bicicleta 2" />
                <h2>Bicicleta de Carretera</h2>
                <p> $400</p>
                <button>Comprar</button>
            </div>

            <div className="bicicleta">
                <img src="../IMG/bici_1.png" alt="Bicicleta 2" />
                <h2>Bicicleta de Carretera</h2>
                <p> $400</p>
                <button>Comprar</button>
            </div>

            <div className="bicicleta">
                <img src="../IMG/bici_1.png" alt="Bicicleta 2" />
                <h2>Bicicleta de Carretera</h2>
                <p> $400</p>
                <button>Comprar</button>
            </div>
            <div className="bicicleta">
                <img src="../IMG/bici_1.png" alt="Bicicleta 2" />
                <h2>Bicicleta de Carretera</h2>
                <p> $400</p>
                <button>Comprar</button>
            </div>

        </div>

    );
}

export default Catalogo;