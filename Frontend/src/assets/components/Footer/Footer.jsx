import React from "react";
import "../Footer/Footer.css"

function Footer (){
    return(
<footer id="fondo">
        <img className="icoFooter" src="/IMG/logo.png" alt="" />
        <div className="iconoContacto">
          <img src="/IMG/iconoCelularFooter.png" className="imgnone" alt="" />
          <a className="linkCorreo" href="">
            infobikestore@gmail.com
          </a>
          <img className="imgnone" src="/IMG/iconoCelularFooter.png" alt="" />
          <p>+57 322 5547865</p>
        </div>
        <div className="txtinfoSitio">
          <p className="p1">
            <h2>Info sitio:</h2>
          </p>
          <p className="p1">Terminos y Condiciones Promocion Actual</p>
          <p className="p1">Terminos y Condiciones Devoluciones</p>
          <p className="p1">Terminos y Condiciones Plan Separe</p>
          <p className="p1">Terminos y Condiciones Creditos ADDI</p>
          <p className="p1">Politica Tratamiento de Datos</p>
          <p className="p1">Politica de Privacidad</p>
          <p className="p1">Metodos de financiacion </p>
          <p className="p1">Terminos y Condiciones</p>
          <p className="p1">Derecho de Retracto</p>
          <p className="p1">SIC</p>
          <p className="p1">Trabaja Con Nosotros</p>
          <p className="p1">Quieres Ser Distribuidor?</p>
        </div>
        <div className="txtAyuda">
          <p className="p1">
            <h2>Ayuda:</h2>
          </p>
          <p className="p1">Cambios y Devoluciones</p>
          <p className="p1">Garantia</p>
          <p className="p1">Terminos y Condiciones Garantia Dinamic</p>
          <p className="p1">Contacto</p>
          <p className="p1">Preguntas Frecuentes</p>
          <p className="p1">Politica de Envios</p>
          <p className="p1">Guia de Tallas Bicicletas</p>
          <p className="p1">Tiendas</p>
          <p className="p1">Politicas del Crash Replacement</p>
          <p className="p1">Terminos del Servicio</p>
          <p className="p1">Politica del Rembolso</p>
        </div>
        <div className="txtContactanos">
          <p className="p1">
            <h2>Contactanos:</h2>
          </p>
          <p className="p1">
            <a className="linkNosotros" href="">
              Nosotros
            </a>
          </p>
          <p className="p1">Responsabilidad Social</p>
        </div>
      </footer>
      
    );
}

export default Footer;