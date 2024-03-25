import React from 'react';
import "..//style/registro"


function Registro() {
    return (
        <>
            <aside className="columna">
                <img className="imgrd" src="../IMG/logoredondeado.png" alt="" />
                <div className="forma">
                    <h5 className="texto">Pedaleamos para servirle</h5>
                </div>
            </aside>

            <div className="upper-form">
                <form action="" className="formulario">
                    <h2 className="clas">Registro</h2>

                    <input type="text" placeholder="Nombres" />
                    <input type="text" placeholder="Apellidos" />

                    <input type="text" placeholder="Correo electrónico" />
                    <input type="text" placeholder="Contraseña" />
                    <div className="ordenar2">
                        <input type="checkbox" id="condiciones" />
                        <small className="terminos">Aceptar términos y condiciones</small>
                    </div>
                    <div className="btn">
                        <a href="inicio.html"><button type="button">Registrarse</button></a>
                    </div>
                    <div className="bottom-form">
                        <div className="no-acount">¿Ya tienes cuenta?</div>
                        <a href="../HTML/inicio.html" className="signup">Iniciar sesión</a>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Registro;
