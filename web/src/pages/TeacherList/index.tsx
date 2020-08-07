import React from 'react';


import './styles.css';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';

const TeacherList: React.FC = () => {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Esses são os proffys disponiveis">
        <form action="" id="search-teachers">
          <Input type="text" label="Materia" name="subject"/>
          <Input type="text" label="Dia da semana" name="week-day"/>
          <Input type="time" label="Hora" name="time"/>
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  );
};

export default TeacherList;
