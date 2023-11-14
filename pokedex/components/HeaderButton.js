import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import TrackPlayer from 'react-native-track-player';
import pokerap from "../assets/pokerap.mp3"
const HeaderButton = ({ onPress }) => {
  const handlePress = async () => {
    // Vérifiez si le lecteur audio est déjà initialisé
    const isInit = await TrackPlayer.isInit();

    // Initialisez le lecteur audio si ce n'est pas déjà fait
    if (!isInit) {
      await TrackPlayer.setupPlayer({});
    }

    // Ajoutez votre morceau audio à la file d'attente (remplacez par votre propre configuration)
    await TrackPlayer.add({
      id: '1',
      url: pokerap,
      title: 'Nom de votre piste',
    });

    // Démarrez la lecture
    await TrackPlayer.play();
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.button}>
      <Text style={styles.buttonText}>Play Sound</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginRight: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default HeaderButton;
