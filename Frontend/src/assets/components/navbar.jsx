import React from 'react';
import "../style/navbar.css"

function Navbar() {
    return (
        <main>
        <section className="contenido">
          <header className="header">
            <img src="../IMG/logobikestore.png" alt="BIKE STORE" className="logo" />
            <div className="container">
              <div className="btn">
                <input type="text" placeholder="Buscar" />
                <i className="fa fa-search"></i>
              </div>
            </div>
  
            <a href="/HTML/carrito.html"><img className="logo1" src="../IMG/Carritocompras.png" alt="Carrito de compras" /></a>
            <a href=""><img className="logo1" src="../IMG/iconusuario.png" alt="Icono de usuario" /></a>
          </header>
        </section>
  
        <header className="header2">
          <button id="abrir" className="abrir-menu"><i className="bi bi-list"></i></button>
          <nav className="nav" id="nav">
            <button className="cerrar-menu" id="cerrar"><i className="bi bi-x"></i></button>
            <ul className="nav-list">
              <li><a href="#">HOME</a></li>
              <li><a href="/HTML/bicicletas.html">BICICLETAS</a></li>
              <li><a href="/HTML/accesorio.html">ACCESORIOS</a></li>
              <li><a href="/HTML/vestuario.html">VESTUARIO</a></li>
              <li><a href="#">DESCUENTO</a></li>
              <li><a href="/HTML/contactanos.html">CONTACTANOS</a></li>
            </ul>
          </nav>
        </header>
      </main>

    );
}

export default Navbar;