import { useLocalSearchParams } from "expo-router";
import { StyleSheet } from 'react-native';

import { ThemedView } from '@/components/ThemedView';
import YouTubePlayer from '@/components/YoutubePlayer';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TabFourScreen() {

  const { videoId } = useLocalSearchParams<{videoId : string}>();
  
  return (
    <ThemedView style={styles.container}>
        <SafeAreaView style={styles.safe}>
            <YouTubePlayer videoId={videoId}/>
        </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  safe:{
    flex: 1,
    width:'100%',
  }
});