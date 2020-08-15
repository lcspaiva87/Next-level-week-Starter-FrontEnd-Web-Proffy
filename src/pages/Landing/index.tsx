import React from 'react';
import LogoImg from '../../assets/images/logo.svg';
import LandingImg from '../../assets/images/landing.svg';

import { Link } from 'react-router-dom';
import studyicon from '../../assets/images/icons/study.svg';
import giveClassesyicon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import './styles.css';

function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content">
        <div className="logo-container">
          <img src={LogoImg} alt="proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>
        <img src={LandingImg}
          alt="Plataforma de Estudos"
          className="hero-image" />
        <div className="buttons-container">
          <Link to="study" className="study">
            <img src={studyicon} alt="Estudar" />
            Estudar
          </Link>
          
          
          <Link to="give-classes" className="give-classes">
            <img src={giveClassesyicon}
              alt="Estudar" />
            Dar Aula
          </Link>
        </div>
        <span className="total-connections">
          Total de 200 conexões já realizadas
           <img src={purpleHeartIcon} alt="coração roxo"/>
        </span>
      </div>
    </div>
  );
}

export default Landing;