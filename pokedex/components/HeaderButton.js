import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Button,
  ActivityIndicator,
} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import { setupPlayer, addTracks } from './trackPlayerServices';

function HeaderButton() {

  const [isPlayerReady, setIsPlayerReady] = useState(false);

  useEffect(() => {
    async function setup() {
      let isSetup = await setupPlayer();

      const queue = await TrackPlayer.getQueue();
      if(isSetup && queue.length <= 0) {
        await addTracks();
      }

      setIsPlayerReady(isSetup);
    }

    setup();
  }, []);

  if(!isPlayerReady) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#bbb"/>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Play" color="black" onPress={() => TrackPlayer.play()}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#ff0000',
    borderRadius:25,
  },
});

export default HeaderButton;