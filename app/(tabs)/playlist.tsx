import { ScrollView, StyleSheet, Text } from 'react-native';

import PlaylistVideoItem from '@/components/PlaylistVideoItem';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TabThreeScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safe}>
        <ThemedText style={styles.title}>Playlist</ThemedText>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <Text style={{color:'#fff', width:'100%'}}>aaaaaa</Text>
          <Text style={{color:'#fff', width:'100%'}}>aaaaaa</Text>
          <PlaylistVideoItem videoId={'k0VOchBlqiQ'}/>
          <PlaylistVideoItem videoId={'45zq0Xct-Oc'}/>
          <PlaylistVideoItem videoId={'DZWNMjhj-VY'}/>
          <PlaylistVideoItem videoId={'VrSJhTGMM90'}/>
          <PlaylistVideoItem videoId={'k0VOchBlqiQ'}/>
          <PlaylistVideoItem videoId={'45zq0Xct-Oc'}/>
          <PlaylistVideoItem videoId={'DZWNMjhj-VY'}/>
          <PlaylistVideoItem videoId={'VrSJhTGMM90'}/>
          <PlaylistVideoItem videoId={'k0VOchBlqiQ'}/>
          <PlaylistVideoItem videoId={'45zq0Xct-Oc'}/>
          <PlaylistVideoItem videoId={'DZWNMjhj-VY'}/>
          <PlaylistVideoItem videoId={'VrSJhTGMM90'}/>
          <PlaylistVideoItem videoId={'k0VOchBlqiQ'}/>
          <PlaylistVideoItem videoId={'45zq0Xct-Oc'}/>
          <PlaylistVideoItem videoId={'DZWNMjhj-VY'}/>
          <PlaylistVideoItem videoId={'VrSJhTGMM90'}/>
        </ScrollView>
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
    marginTop: 10,
    marginBottom: 20,
    textAlign: 'center',
  },
  safe: {
    flex: 1,
    width: '100%',
  },
  scrollContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: 10,
    rowGap: 10,
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
});