// Otavio.fokus
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ActionButton } from "../components/BotaoAçao";
import { FokusButton } from "../components/BotaoFoco";
import { Timer } from "../components/Tempinho";

const pomodoro = [
  {
    id: "focus",
    initialValue: 25,
    image: require('./foco.png'),
    display: "Foco",
  },
  {
    id: "short",
    initialValue: 5,
    image: require('./curto.png'),
    display: "Descanso curto",
  },
  {
    id: "long",
    initialValue: 15,
    image: require('./longo.png'),
    display: "Descanso longo",
  },
];

export default function Index() {
  const [timeType, setTimeType] = useState(pomodoro[0]);
  const [running, setRunning] = useState(false);
  const [seconds, setSeconds] = useState(timeType.initialValue * 60);

  useEffect(() => {
    setSeconds(timeType.initialValue * 60);
    setRunning(false);
  }, [timeType]);

  const togglerTimer = () => setRunning(r => !r);

  return (
    <View style={styles.container}>
      <Image source={timeType.image} />

      <View style={styles.actions}>
        <View style={styles.context}>
          {pomodoro.map(p =>
            <ActionButton
              key={p.id}
              active={timeType.id === p.id}
              onPress={() => setTimeType(p)}
              display={p.display}
            />
          )}
        </View>

        <Timer
          totalSeconds={seconds}
          running={running}
        />
        <FokusButton
  press={togglerTimer}
  title={running ? "Pausa" : "Começar"}
  isPause={running}
/>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Projeto fictício e sem fins comerciais.
        </Text>
        <Text style={styles.footerText}>
          Desenvolvido por Aluno.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#021123',
    gap: 40,
  },
  actions: {
    padding: 24,
    backgroundColor: '#14448080',
    width: '80%',
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#144480',
    gap: 32,
  },
  context: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  contextButtonActive: {
    backgroundColor: '#144480',
    borderRadius: 8,
  },
  contextButtonText: {
    fontSize: 12.5,
    color: '#FFF',
    padding: 8,
  },
  timer: {
    fontSize: 54,
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: "center",
  },
  button: {
    backgroundColor: '#B872FF',
    borderRadius: 32,
    padding: 8,
  },
  buttonText: {
    fontSize: 18,
    color: '#021123',
    textAlign: "center",
    fontWeight: 'bold',
  },
  footer: {
    width: '80%',
  },
  footerText: {
    color: '#98A0A8',
    fontSize: 12.5,
    textAlign: "center",
  }
});