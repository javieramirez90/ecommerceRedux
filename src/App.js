import React from 'react';
import Router from './Router';
import './App.css';
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <nav className="uk-navbar-container" uk-navbar="true">
        <div className="uk-navbar-left">

            <ul className="uk-navbar-nav">
                <li className="uk-active"><a href="#">Fixterstore</a></li>
                <li><Link to="/all-products">Catálogo</Link></li>
            </ul>

        </div>

        <div className="uk-navbar-right">

            <ul className="uk-navbar-nav">
                <li className="uk-active"><a to="#">Iniciar sesión</a></li>
                <li>
                    <a to="#">Xavier Ramírez</a>
                    <div className="uk-navbar-dropdown">
                        <ul className="uk-nav uk-navbar-dropdown-nav">
                            <li className="uk-active"><a to="#">Perfil</a></li>
                            <li><Link to="/new-product">Nuevo producto</Link></li>
                            <li><Link to="/all-products">Catálogo</Link></li>
                            <li><Link to="#">Cerrar sesión</Link></li>
                        </ul>
                    </div>
                </li>
            </ul>

        </div>
    </nav>
    <Router/>
    </div>
  );
}

export default App;
