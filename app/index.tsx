import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

// Story data
const storyData = [
  {
    id: "start",
    text: "You wake up in a dark forest. The first thing you notice is you are wearing a light colored gown and are a girl, as you start to think what is this to yourself, you hear a voice from inside speaking to you..., 'What would you like to help you survive? A book, a tool, or an innate sense?",
    choices: [
      { text: "A Book to read!", nextId: "book" },
      { text: "A Tool to use!", nextId: "tool" },
      { text: "An innate sense to have!", nextId: "sense" },
    ],
  },
  {
    id: "book",
    text: "You are given a book, it is a reference guide for staying alive, this could really be useful! You read the book but only have the pages are written in it. In the last page it says... as you learn more you will get more information, but you must traverse the forest and experience life to learn more...",
    choices: [
      { text: "Start walking the forest...", nextId: "walking1" },
      { text: "Re-read the book...", nextId: "readbook0" },
      { text: "Go to sleep...", nextId: "sleep1" },
    ],
  },
  {
    id: "tool",
    text: "Excellent choice, man has used tools for millenia, this time instead of you having to make a tool, I will give you a tool that can change your world and hone your own abilities from gaining strength to learning how to solve complex problems with making creative use of this tool. You find this tool at your feet and it almost looks like scissors but instead of blades there is a jagged clamp and the handle reverses to a single hold, while the blades can join to form a single rod.",
    choices: [
      { text: "Practice using the tool around you", nextId: "toolpractice1" },
      { text: "Start walking the forest", nextId: "walking1" },
      { text: "Look around you", nextId: "look1" },
    ],
  },
  {
    id: "sense",
    text: "It's normal to see, hear and have senses, but I'll give you more than what you know, you will now have the good sense to understand at an innate level your surroundings, almost as if you have an ability to know what's next or how to do things for your best chance at leaving the forest with life experiences that will carry you through in life afterwards and let you share this with other's.",
    choices: [
      { text: "Start walking the forest", nextId: "walking1" },
      { text: "Start a meditation session", nextId: "sense1" },
      { text: "Ask about your purpose in life", nextId: "purpose1" },
    ],
  },
  {
    id: "readbook0",
    text: "You read the book again having learned from it once...",
    choices: [],
  },
  {
    id: "walking1",
    text: "You begin the walk of the forest...",
    choices: [],
  },
  {
    id: "sense1",
    text: "You think inside, and begin to close your mind to your surroundings...",
    choices: [],
  },
  {
    id: "purpose1",
    text: "You ask to the void where the voice was heard, what is my purpose in this strange world of choices...",
    choices: [],
  },
  {
    id: "sleep1",
    text: "In this world, it's dark and late and sleep is a good thing to keep rested...",
    choices: [],
  },
  {
    id: "look1",
    text: "The forest is dark but you can start looking around and see there are tree's and paths, as well as the night sky has stars visible with the mmon out behind some clouds...",
    choices: [],
  },
  {
    id: "toolpractice1",
    text: "The tool you are given immediately seems to conform to your hand and it seems there is a lot that can be done with it given the forest setting...",
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
