import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';


// create a 3x3 grid for tic-tac-toe
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        <View style={styles.row}>
          <Pressable style={({ pressed }) => [styles.cell, pressed && styles.cellButton]}>
            <Text style={styles.cellText}>O</Text>
          </Pressable>
          <Pressable style={({ pressed }) => [styles.cell, pressed && styles.cellButton]}>
            <Text style={styles.cellText}></Text>
          </Pressable>
          <Pressable style={({ pressed }) => [styles.cell, pressed && styles.cellButton]}>
            <Text style={styles.cellText}>O</Text>
          </Pressable>
        </View>
      
        <View style={styles.row}>
          <Pressable style={({ pressed }) => [styles.cell, pressed && styles.cellButton]}>
            <Text style={styles.cellText}>X</Text>
          </Pressable>
          <Pressable style={({ pressed }) => [styles.cell, pressed && styles.cellButton]}>
            <Text style={styles.cellText}>X</Text>
          </Pressable>
          <Pressable style={({ pressed }) => [styles.cell, pressed && styles.cellButton]}>
            <Text style={styles.cellText}>O</Text>
          </Pressable>
        </View>
      
        <View style={styles.row}>
          <Pressable style={({ pressed }) => [styles.cell, pressed && styles.cellButton]}>
            <Text style={styles.cellText}>X</Text>
          </Pressable>
          <Pressable style={({ pressed }) => [styles.cell, pressed && styles.cellButton]}>
            <Text style={styles.cellText}></Text>
          </Pressable>
          <Pressable style={({ pressed }) => [styles.cell, pressed && styles.cellButton]}>
            <Text style={styles.cellText}>O</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    // flexWrap: "wrap",
  },
  grid: {
    borderWidth: 40,
    borderColor: "#a45c0e",
  },
  row: {
    flexDirection: "row",
  },
  cell: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
  },
  cellText: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#fff",
  },
  cellButton: {
    backgroundColor: "red",
    opacity: 0.5,
  }
});