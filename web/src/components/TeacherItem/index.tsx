import React from 'react';
import { Teacher } from '../../pages/TeacherList'
import whatsapp from '../../assets/images/icons/whatsapp.svg'
import './styles.css';
import api from '../../services/api';

interface TeacherItemProps {
  value: Teacher
}

const TeacherItem: React.FC<TeacherItemProps> = ({ value}) => {

  async function createNewConnection() {
    await api.post("/connections", { user_id: value.id})
  }

  return   (
    <article className="teacher-item">
      <header>
        <img src={value.avatar} alt="Profile Image"/>
        <div>
          <strong>{value.name}</strong>
          <span>{value.subject}</span>
        </div>
      </header>
      <p>
        {value.bio}
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ {value.cost}</strong>
        </p>
        <a href={`https://wa.me/${value.whatsapp}`} target="_blank" onClick={createNewConnection}>
            <img src={whatsapp} alt="WhatsApp"/>
            Entrar em contato
        </a>
      </footer> 
  </article>
  );
}

export default TeacherItem;