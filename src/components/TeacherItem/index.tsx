import React from 'react';
import './styles.css'
import Whatsappicon from '../../assets/images/icons/whatsapp.svg'
function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/40870393?s=400&u=bce6992e05f8b991acb399816c75b54ea3574d06&v=4t" alt="" />
        <div>
          <strong>lucas</strong>
          <span>fisica</span>
        </div>
      </header>
      <p>Entusiasta das melhores tecnologias de química avançada.
      <br /><br />
      Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões</p>
      <footer>
        <p>Preço/Hora
        <strong>R$80,00</strong>
        </p>
        <button type="button">
          <img src={Whatsappicon} alt="Whatsapp" />
        Entra em Contato
      </button>
      </footer>
    </article>
  );
}
  
export default TeacherItem;