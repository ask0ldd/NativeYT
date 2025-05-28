import { ScrollView, StyleSheet, Text, TextInput } from 'react-native';

import PlaylistVideoItem from '@/components/PlaylistVideoItem';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import mockVideosService from '@/services/mockVideosService';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TabThreeScreen() {

  const [searchInputValue, setSearchInputValue]= useState<string>("Search for a Video")

  function shorten(text : string, length : number) : string{
    if(text.length > length) return text.slice(0, length) + '...'
    return text
  }

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safe}>
        <ThemedText style={styles.title}>Playlist</ThemedText>
        <TextInput style={{fontSize:14, color:'#93AEB5', borderRadius:4, fontFamily:'Montserrat_500Medium', backgroundColor:'#55373722', marginHorizontal:10, paddingHorizontal:10}} value={searchInputValue} onChangeText={setSearchInputValue} onFocus={() => {if(searchInputValue == "Search for a Video") setSearchInputValue("")}} onBlur={() => {if(searchInputValue == "") setSearchInputValue("Search for a Video")}}/>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <Text style={{color:'#fff', width:'100%', marginTop:20}}>Results :</Text>
          {mockVideosService.getAll().map(
            video => <PlaylistVideoItem key={video.YoutubeId} title={shorten(video.title, 50)} videoId={video.YoutubeId} duration={video.duration}/>
          )}
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