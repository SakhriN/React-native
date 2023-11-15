import TrackPlayer, {
    AppKilledPlaybackBehavior,
    Capability,
    RepeatMode,
  } from 'react-native-track-player';
  
  export async function setupPlayer() {
    try {
      await TrackPlayer.getCurrentTrack();
      return true; // Le lecteur est déjà initialisé
    } catch (error) {
      try {
        await TrackPlayer.setupPlayer();
        await TrackPlayer.updateOptions({
          android: {
            appKilledPlaybackBehavior:
              AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification,
          },
          capabilities: [
            Capability.Play,
            Capability.Pause,
            Capability.SkipToNext,
            Capability.SkipToPrevious,
            Capability.SeekTo,
          ],
          compactCapabilities: [
            Capability.Play,
            Capability.Pause,
            Capability.SkipToNext,
          ],
          progressUpdateEventInterval: 2,
        });
        return true; // Initialisation réussie
      } catch (error) {
        console.error('Erreur lors de la configuration du lecteur audio:', error);
        return false; // Échec de l'initialisation
      }
    }
  }
  
  export async function addTracks() {
    try {
      await TrackPlayer.add([
        {
          id: '1',
          url: require('../assets/pokerap.mp3'),
          title: 'Pokerap de folie de la 1ere génération',
          artist: 'Des beaux gosses',
          duration: 60,
        },
      ]);
      await TrackPlayer.setRepeatMode(RepeatMode.Queue);
    } catch (error) {
      console.error('Erreur lors de l\'ajout de pistes:', error);
    }
  }