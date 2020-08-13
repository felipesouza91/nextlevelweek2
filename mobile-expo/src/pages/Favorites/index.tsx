import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native'
import styles from './styles';
import PageHeader from '../../components/PageHeader';
import { ScrollView } from 'react-native-gesture-handler';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import AsyncStorage from '@react-native-community/async-storage';

const Favorites: React.FC = () => {
  const [favoriteList, setFavoriteList ] = useState(Array<Teacher>());
  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if( response ) {
        const favoritedTeachers = JSON.parse(response)
        setFavoriteList(favoritedTeachers)
      }
    })
  }

  useFocusEffect(
    React.useCallback(() => {
      loadFavorites();
    }, [])
  )
  
  return (
    <View style={styles.container}>
      <PageHeader title="Meus Proffs favoritos" />
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {favoriteList.map( teacher => 
          <TeacherItem 
            key={teacher.id}
            value={teacher}
            favorited={true}
            />)}
        
      </ScrollView>
    </View>
  );
};

export default Favorites;
