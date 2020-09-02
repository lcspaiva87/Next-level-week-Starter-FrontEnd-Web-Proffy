import React from 'react';
import PageHeader from '../../components/PageHeader';
import './styles.css';
import Input from '../../components/Input';

import warnigicon from '../../assets/images/icons/warning.svg';
function TeacherForm() {
  return (
    <div id="page-teacher-form" >
    <PageHeader 
    title="Que incrível que você quer dar aula."
    description="o primeiro passo é preecher esse formulario"
    />
     
      <main>
        <fieldset>
          <legend>Seus dados</legend>
          <Input name="name" label="Nome Completo" />
          <Input name="avatar" label="avatar" />
          <Input name="Whatsapp" label="Whatsapp" />
          
      </fieldset>

      <fieldset>
          <legend>Sobre a aula</legend>
          <Input name="subject" label="Matéria" />
          <Input name="cost" label="Custo da sua hora por aula" />
         
          
      </fieldset>

        <footer>
          <p>
          <img src={warnigicon} alt="Aviso importante" />
          Importante! <br />
          Prencha todos os dados
         </p>
          
          <button type="button">Salvar Cadastro</button>
        </footer>
   </main>
  </div>
  )
}

export default TeacherForm;