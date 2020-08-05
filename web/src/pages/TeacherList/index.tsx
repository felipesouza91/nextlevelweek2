import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import PageHeader from '../../components/PageHeader';

const TeacherList: React.FC = () => {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Esses são os proffys disponiveis">
        <form action="" id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Materia</label>
            <input type="text" id="subject" />
          </div>
          <div className="input-block">
            <label htmlFor="week-day">Dia da semana</label>
            <input type="text" id="week-day" />
          </div>
          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </div>
        </form>
      </PageHeader>
    </div>
  );
};

export default TeacherList;
