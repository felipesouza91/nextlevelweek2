import React, { useState } from 'react';
import { View, Text } from 'react-native';
import {
  ScrollView,
  TextInput,
  BorderlessButton,
  RectButton,
} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage'
import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import { Feather } from '@expo/vector-icons';
import api from '../../services/api';
import { useFocusEffect } from '@react-navigation/native';


const TeacherList: React.FC = () => {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [subject, setSubject] = useState('');
  const [weekDay, setWeekDay] = useState('');
  const [time, setTime] = useState('');
  const [teachers, setTeachers] = useState(Array<Teacher>());

  useFocusEffect(
    React.useCallback(() => {
      loadFavorites();
    }, [])
  )

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if( response ) {
        const favoritedTeachers = JSON.parse(response)
        const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher ) => teacher.id)
        setFavorites(favoritedTeachersIds)
      }
    })
  }
  function handleToogleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible);
  }

  async function handleFiltersSubmit() {
    const response = await api.get('/classes', {
      params: {
        subject,
        week_day: weekDay,
        time,
      },
    });
    setTeachers(response.data);
    setIsFiltersVisible(!isFiltersVisible);
    loadFavorites()
  }
  return (
    <View style={styles.container}>
      <PageHeader
        title="Proffs disponiveis"
        headerRight={
          <BorderlessButton onPress={handleToogleFiltersVisible}>
            <Feather name="filter" size={20} color="#FFF" />
          </BorderlessButton>
        }
      >
        {isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Materia</Text>
            <TextInput
              placeholderTextColor="#c1bccc"
              style={styles.input}
              placeholder="Qual a materia"
              value={subject}
              onChangeText={setSubject}
            ></TextInput>
            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da Semana</Text>
                <TextInput
                  placeholderTextColor="#c1bccc"
                  style={styles.input}
                  placeholder="Qual o dia ?"
                  value={weekDay}
                  onChangeText={setWeekDay}
                ></TextInput>
              </View>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horario</Text>
                <TextInput
                  placeholderTextColor="#c1bccc"
                  style={styles.input}
                  placeholder="Qual horario ?"
                  value={time}
                  onChangeText={setTime}
                ></TextInput>
              </View>
            </View>
            <RectButton
              style={styles.submitButton}
              onPress={handleFiltersSubmit}
            >
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {teachers.map((teacher) => (
          <TeacherItem key={teacher.id}
            value={teacher}
            favorited={favorites.includes(teacher.id)}/>
        ))}
      </ScrollView>
    </View>
  );
};

export default TeacherList;
