import { Pressable, StyleSheet, Text, View } from "react-native";

/**
 * FokusButton Component
 * A custom button component that toggles between play and pause states
 * @param {Function} press - Function to execute on button press
 * @param {string} title - Button text
 * @param {boolean} isPause - Flag to determine if button is in pause state
 */
export const FokusButton = ({ press, title, isPause }) => {
  return (
    <Pressable style={styles.button} onPress={press}>
      <View style={styles.row}>
        {isPause ? (
          <View style={styles.iconPause}>
            <View style={styles.pauseBar} />
            <View style={styles.pauseBar} />
          </View>
        ) : (
          <View style={styles.iconPlay} />
        )}
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#B872FF',
    borderRadius: 32,
    paddingVertical: 8,
    paddingHorizontal: 18,
    alignItems: "center"
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    fontSize: 18,
    color: '#021123',
    textAlign: "center",
    fontWeight: 'bold',
    marginLeft: 8
  },
  iconPause: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  pauseBar: {
    width: 5,
    height: 14,
    backgroundColor: '#021123',
    borderRadius: 1.5,
    marginHorizontal: 1
  },
  iconPlay: {
    width: 0,
    height: 0,
    borderTopWidth: 8,
    borderBottomWidth: 8,
    borderLeftWidth: 14,
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: '#021123',
    marginRight: 5,
    marginLeft: 2
  }
});
