import React, { useState, FormEvent } from 'react';


import './styles.css';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';

export interface Teacher {
  id: number;
        subject: string;
        cost:number;
        user_id: number;
        name:string;
        avatar:string;
        whatsapp:string;
        bio: string;
}

const TeacherList: React.FC = () => {
  const [subject, setSubject ] = useState('');
  const [week_day, setWeedDay ] = useState('');
  const [time, setTime ] = useState('');
  const [teachers, setTeachres] = useState(Array<Teacher>());
  async function handleSearch(e: FormEvent) {
    e.preventDefault()
    const response = await api.get('/classes', {params: {
      subject,week_day, time
    }})
    setTeachres(response.data)
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Esses são os proffys disponiveis">
        <form onSubmit={handleSearch} id="search-teachers">
          <Select 
            value={subject}
            onChange={e => setSubject(e.target.value)}
            label="Materia"
            name="subject"
            options={[
            {value: 'Artes', label: 'Artes'},
            {value: 'Matematica', label: 'Matematica'},
            {value: 'Geografia', label: 'Geografia'},
            {value: 'Portugues', label: 'Portugues'},
            {value: 'Historia', label: 'Historia'}
          ]} />
          <Select 
            value={week_day}
            onChange={e => setWeedDay(e.target.value)}
            label="Dia da semana" 
            name="week_day" 
            options={[
            {value: '0', label: 'Domingo'},
            {value: '1', label: 'Segunda-feira'},
            {value: '2', label: 'Terça-feira'},
            {value: '3', label: 'Quarta-feira'},
            {value: '4', label: 'Quinta-feira'},
            {value: '5', label: 'Sexta-feira'},
            {value: '6', label: 'Sabado'}
          ]} />
          <Input type="time" label="Hora" name="time" value={time} onChange={e => setTime(e.target.value)}/>
          <button type="submit">Buscar</button>
        </form>
      </PageHeader>

      <main>
        {teachers.map( teacher => <TeacherItem key={teacher.id} value={teacher}/>)}
      </main>
    </div>
  );
};

export default TeacherList;
