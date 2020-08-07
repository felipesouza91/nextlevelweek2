import React from 'react';
import PageHeader from '../../components/PageHeader';

import './styles.css';
import Input from '../../components/Input';

const TeacherForm: React.FC = () => {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader 
        title="Que incrivel que voce quer dar aulas"
        description="O primeiro passo e preencher esse formulário de inscrição"
      />
      <main>
        <fieldset>
          <legend>Seu dados</legend>
          <Input type="text" label="Nome Completo" name="name" />
          <Input type="text" label="Avatar" name="avatar" />
          <Input type="text" label="Whatsapp" name="whatsapp" />
        </fieldset>
      </main>
    </div>
  );
};

export default TeacherForm;
