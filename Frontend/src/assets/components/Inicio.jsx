import React from 'react';
import "../style/inicio.css"


function Inicio() {
    return (


<main>
    <aside className="columna">
        <img className="imgrd" src="../IMG/logoredondeado.png" alt="" />
        <div className="forma">
            <h5 className="texto">Pedaleamos para servirle</h5>
        </div>
    </aside>

    <div className="upper-form">
        <form action="" className="formulario">
            <h2>Iniciar sesión</h2>
            <input type="text" placeholder="Correo electrónico" />
            <input type="password" placeholder="Contraseña" />
            <a href="../HTML/olvidocontra.html" className="recuperar">
                <h5>¿Olvidaste tu contraseña?</h5>
            </a>
            <div className="btn">
                <a href="home.html">
                    <button type="button">Iniciar sesión</button>
                </a>
            </div>
            <div className="bottom-form">
                <div className="no-acount">¿No tienes cuenta?</div>
                <a href="../HTML/registro.html" className="signup">Registrarse</a>
            </div>
        </form>
    </div>
</main>


    );
}

export default Inicio;