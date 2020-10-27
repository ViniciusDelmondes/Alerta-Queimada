import React from 'react'
import {Link} from 'react-router-dom'

import './styles.css'

import Logo from '../../assets/Logo.png'
import Back from '../../assets/back.png'

interface SidebarProps{ 
  title: string;
}

const Sidebar: React.FC<SidebarProps> = ({title, children}) => {
  return(
    <div className="sidebar-container">
        <div className="sidebar-content">
          <aside>
            <Link to="/">
              <img src={Back} alt="Voltar"/>
            </Link>
            <header className="header-content">
              <img src={Logo} alt="Alerta! Queimada"/>
              <h2> {title} </h2>
            </header>
            <main>
              {children}
            </main>
            <footer className="footer-content">
              <span> Está próximo? Ligue para 180 </span>
            </footer>
          </aside>
        </div>
      </div>
  )
}

export default Sidebar;

