import { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';

export function Timer({ totalSeconds, running }) {
  const [seconds, setSeconds] = useState(totalSeconds);

  useEffect(() => {
    setSeconds(totalSeconds);
  }, [totalSeconds]);

  useEffect(() => {
    if (!running) return;
    if (seconds === 0) return;

    const interval = setInterval(() => {
      setSeconds(sec => (sec > 0 ? sec - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [running, seconds]);

  const date = new Date(seconds * 1000);
  const options = { minute: "2-digit", second: "2-digit" };

  return (
    <Text style={styles.timer}>
      {date.toLocaleTimeString("pt-br", options)}
    </Text>
  );
}

const styles = StyleSheet.create({
  timer: {
    fontSize: 54,
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: "center",
  },
});
