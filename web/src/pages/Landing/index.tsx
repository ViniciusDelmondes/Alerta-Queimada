import React from 'react'
import {Link} from 'react-router-dom' 

import './styles.css'

import Logo from '../../assets/Logo.png'
import Aviso from '../../assets/aviso.png'

function Landing(){
  return(
    <div className="home-container">
      <div className="home-content">
        <div className="home-column-first">
          <header>
            <h1> Bem vindo ao Alerta! Queimada </h1>
          </header>
          <main>
            <p>Você sabia que as queimadas são potencialmente prejudiciais à nossa saúde <br/> 
            e ao meio ambiente? Nos ajude a identificá-las mais rapidamente! </p>
          </main>
          <footer>
            <div className="btn-report">
              <button type="button">
                <Link to="/form">
                  Reportar
                </Link>
              </button>
            </div>
            <div className="btn-consult">
              <button type="button">
                <Link to="/consult">
                  Consultar
                </Link>
              </button>
            </div>
          </footer>
        </div>
        <div className="home-column-second">
          <header>
            <img className="logo_img" src={Logo} alt="Alerta! Queimada"/>
          </header>
        </div>
      </div>
    </div>
  )
}

export default Landing;