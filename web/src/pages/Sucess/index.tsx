import React from 'react'

import {Link} from 'react-router-dom'

import './styles.css'

import Alert from '../../assets/alert.gif'

function Sucess(){
  return(
    <div className="alert-container">
      <div className="alert-content">
        <div className="alert-title">
        <header>
          <h1> Denúncia realizada com sucesso! </h1>
          <span> Obrigado por compartilhar e contribuir conosco. </span>
        </header>
        <div className="img-sucess">
          <img src={Alert} alt="Alert Sucess"/>
        </div>
      </div>
      <footer className="footer-btn">
        <button type="button" className="btn-next">
          <Link to="/">
            Continuar
          </Link>
        </button>
      </footer>
      </div>
    </div>
  )
}

export default Sucess;