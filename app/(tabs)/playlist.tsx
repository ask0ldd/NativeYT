import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TabThreeScreen() {
  return (
    <ThemedView style={styles.container}>
        <SafeAreaView style={styles.bgred}>
            <ThemedText style={styles.title}>AAAAAAAAAAA</ThemedText>
            <ThemedText>AAAAAAAAAAA</ThemedText>
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
  bgred:{
    backgroundColor:'#ff0000',
    flex: 1,
    width:'100%'
  }
});