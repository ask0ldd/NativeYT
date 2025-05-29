import { Pressable, ScrollView, StyleSheet, TextInput, View } from 'react-native';

import PlaylistVideoItem from '@/components/PlaylistVideoItem';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import mockVideosService from '@/services/mockVideosService';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TabThreeScreen() {

  const [searchInputValue, setSearchInputValue]= useState<string>("Search for a Video")
  const [activeMenuItem, setActiveMenuItem] = useState<"home"|"videos"|"playlists"|"posts">("home")

  function shorten(text : string, length : number) : string{
    if(text.length > length) return text.slice(0, length) + '...'
    return text
  }

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safe}>
        <ThemedText style={styles.title}>Playlist</ThemedText>
        <TextInput style={{fontSize:14, color:'#93AEB5', borderRadius:4, fontFamily:'Montserrat_500Medium', backgroundColor:'#55373722', marginHorizontal:10, paddingHorizontal:10}} value={searchInputValue} onChangeText={setSearchInputValue} onFocus={() => {if(searchInputValue == "Search for a Video") setSearchInputValue("")}} onBlur={() => {if(searchInputValue == "") setSearchInputValue("Search for a Video")}}/>
        <View style={{display:'flex', flexDirection:'row', columnGap:30, marginTop:20, paddingHorizontal:10, borderBottomWidth: 1, borderBottomColor: '#333333'}}>
          <Pressable onPress={() => setActiveMenuItem("home")} style={activeMenuItem === "home" ? {...styles.menuButton, ...styles.menuButtonActive} : styles.menuButton}>
            <ThemedText style={{fontSize:14}}>Home</ThemedText>
          </Pressable>
          <Pressable onPress={() => setActiveMenuItem("videos")} style={activeMenuItem === "videos" ? {...styles.menuButton, ...styles.menuButtonActive} : styles.menuButton}>
            <ThemedText style={{fontSize:14}}>Videos</ThemedText>
          </Pressable>
          <Pressable onPress={() => setActiveMenuItem("playlists")} style={activeMenuItem === "playlists" ? {...styles.menuButton, ...styles.menuButtonActive} : styles.menuButton}>
            <ThemedText style={{fontSize:14}}>Playlists</ThemedText>
          </Pressable>
          <Pressable onPress={() => setActiveMenuItem("posts")} style={activeMenuItem === "posts" ? {...styles.menuButton, ...styles.menuButtonActive} : styles.menuButton}>
            <ThemedText style={{fontSize:14}}>Posts</ThemedText>
          </Pressable>
      </View>
        <View style={{display:'flex', flexDirection:'row', columnGap:10, marginTop:20, paddingHorizontal:10}}>
          <Pressable style={styles.sortingButton}>
            <ThemedText style={{fontSize:14}}>Latest</ThemedText>
          </Pressable>
          <Pressable style={styles.sortingButton}>
            <ThemedText style={{fontSize:14}}>Popular</ThemedText>
          </Pressable>
          <Pressable style={styles.sortingButton}>
            <ThemedText style={{fontSize:14}}>Oldest</ThemedText>
          </Pressable>
        </View>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
        >
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
    flexDirection: 'column',
    width:'100%',
    columnGap: 10,
    rowGap: 10,
    paddingHorizontal: 10,
    paddingBottom: 20,
    marginTop:10
  },
  sortingButton : {
    height:36, 
    paddingHorizontal:15, 
    backgroundColor:'#55373722',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:4,
    fontSize:14
  },
  menuButton : {
    height:44, 
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
  menuButtonActive : {
    borderBottomWidth: 2, 
    borderBottomColor: '#FFFFFF',
    fontWeight:600
  }
});