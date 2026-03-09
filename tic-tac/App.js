import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';


// create a 3x3 grid for tic-tac-toe
export default function App() {
  return (
    <View style={styles.grid}>
      <View style={styles.row}>
        <Pressable style={styles.cell}>
          <Text style={styles.cellText}>X</Text>
        </Pressable>
      </View>

      <View style={styles.row}>
        <Pressable style={styles.cell}>
          <Text style={styles.cellText}>O</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  grid: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#000",
    padding: 5,
  }
});