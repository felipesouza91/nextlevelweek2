import React from 'react';

import whatsapp from '../../assets/images/icons/whatsapp.svg'
import './styles.css';

const TeacherItem: React.FC = () => {
  return   (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/44868529?s=460&u=de09358b2b3c24b0c949a4785d1db6625e5edfe1&v=4"
          alt="Profile Image"/>
        <div>
          <strong>Felipe Souza</strong>
          <span>Quimica</span>
        </div>
      </header>
      <p>
        Lorem consectetur adipisicing elit. <br/> <br/>
        Magni vitae omnis quasi ex, aliquid, nulla harum commodi iure delectus, non ipsum ut officia ipsa
        Magni vitae omnis quasi ex, aliquid, nulla harum commodi iure delectus, non ipsum ut officia ipsa.
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
            <img src={whatsapp} alt="WhatsApp"/>
            Entrar em contato
        </button>
      </footer> 
  </article>
  );
}

export default TeacherItem;