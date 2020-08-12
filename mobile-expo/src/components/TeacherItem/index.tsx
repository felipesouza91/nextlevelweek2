import React from 'react';
import { View, Image, Text, Linking } from 'react-native';

import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavorteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

export interface Teacher {
  id: number;
  subject: string;
  cost: number;
  user_id: number;
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
}

interface TeacherItemProps {
  value: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ value }) => {
  function handleLinkToWhatsApp() {
    Linking.openURL(`whatsapp://send?phone=${value.whatsapp}`)
  }

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image style={styles.avatar} source={{ uri: value.avatar }} />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>{value.name}</Text>
          <Text style={styles.subject}>{value.subject}</Text>
        </View>
      </View>
      <Text style={styles.bio}>{value.bio}</Text>
      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/Hora {'   '}
          <Text style={styles.priceValue}>R$ {value.cost}</Text>
        </Text>
        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/*
            <Image source={heartOutlineIcon} />
            */}
            <Image source={unfavorteIcon} />
          </RectButton>
          <RectButton style={styles.contactButton} onPress={handleLinkToWhatsApp}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
};

export default TeacherItem;
