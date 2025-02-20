import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

// Story data
const storyData = [
  {
    id: "start",
    text: "You wake up in a dark forest. You hear a rustling sound nearby. What do you do?",
    choices: [
      { text: "Investigate the sound", nextId: "investigate" },
      { text: "Run away", nextId: "run" },
    ],
  },
  {
    id: "investigate",
    text: "You find a small, injured animal. It looks like it needs help.",
    choices: [
      { text: "Help the animal", nextId: "help" },
      { text: "Leave it and move on", nextId: "leave" },
    ],
  },
  {
    id: "run",
    text: "You run as fast as you can, but you trip and fall. When you get up, you're lost.",
    choices: [
      { text: "Try to find your way back", nextId: "lost" },
      { text: "Keep running", nextId: "keepRunning" },
    ],
  },
  {
    id: "help",
    text: "You help the animal, and it leads you to safety. You win!",
    choices: [],
  },
  {
    id: "leave",
    text: "You leave the animal behind, but you feel guilty. The guilt haunts you forever.",
    choices: [],
  },
  {
    id: "lost",
    text: "You wander the forest for hours but never find your way out. You lose.",
    choices: [],
  },
  {
    id: "keepRunning",
    text: "You keep running and eventually find a road. You escape the forest!",
    choices: [],
  },
];

export default function Index() {
  const [currentPageId, setCurrentPageId] = useState("start");

  // Find the current page based on the ID
  const currentPage = storyData.find((page) => page.id === currentPageId);

  // Handle user choice
  const handleChoice = (nextId: string) => {
    setCurrentPageId(nextId);
  };

  // Restart the game
  const restartGame = () => {
    setCurrentPageId("start");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.storyText}>{currentPage?.text}</Text>

      {/* Render choices if they exist */}
      {currentPage?.choices.map((choice, index) => (
        <TouchableOpacity
          key={index}
          style={styles.choiceButton}
          onPress={() => handleChoice(choice.nextId)}
        >
          <Text style={styles.choiceText}>{choice.text}</Text>
        </TouchableOpacity>
      ))}

      {/* Show restart button if there are no choices, end of story */}
      {currentPage?.choices.length == 0 && (
        <TouchableOpacity style={styles.restartButton} onPress={restartGame}>
          <Text style={styles.restartButtonText}>Restart</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f0f0f0",
  },
  storyText: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },
  choiceButton: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    width: "80%",
    alignItems: "center",
  },
  choiceText: {
    color: "#FFF",
    fontSize: 16,
  },
  restartButton: {
    backgroundColor: "#FF6347",
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    width: "80%",
    alignItems: "center",
  },
  restartButtonText: {
    color: "#FFF",
    fontSize: 16,
  },
});
