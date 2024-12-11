import React from "react";
import { SafeAreaView, View, ScrollView, Text, TouchableOpacity, StyleSheet } from "react-native";
import Svg, { Defs, LinearGradient, Stop, Rect } from 'react-native-svg';

export default (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Gradient Background using SVG */}
        <Svg height="100%" width="100%" style={styles.gradient}>
          <Defs>
            <LinearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
              <Stop offset="0%" stopColor="#E6E9EF" stopOpacity="1" />
              <Stop offset="100%" stopColor="#EEF0F5" stopOpacity="1" />
            </LinearGradient>
          </Defs>
          <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad1)" />
        </Svg>

        <View style={styles.view}>
          <Svg height="100%" width="100%" style={styles.innerGradient}>
            <Defs>
              <LinearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
                <Stop offset="0%" stopColor="#D7E2FF" stopOpacity="1" />
                <Stop offset="100%" stopColor="#F1F2F7" stopOpacity="1" />
              </LinearGradient>
            </Defs>
            <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad2)" />
          </Svg>

          <Text style={styles.text}>
            {"CareChainAi"}
          </Text>
        </View>

        <Text style={styles.text2}>
          {"Let’s get started!"}
        </Text>
        <Text style={styles.text3}>
          {"Login to Stay healthy and fit"}
        </Text>

        <TouchableOpacity style={styles.button} onPress={() => alert('Pressed!')}>
          <Text style={styles.text4}>{"Login"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={() => alert('Pressed!')}>
          <Text style={styles.text5}>{"Sign Up"}</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  gradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  innerGradient: {
    borderRadius: 247,
    paddingVertical: 46,
    marginTop: 11,
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: 112,
  },
  view: {
    borderRadius: 360,
    paddingHorizontal: 12,
    marginBottom: 49,
    marginHorizontal: 69,
  },
  text: {
    color: "#407BFF",
    fontSize: 20,
    marginHorizontal: 35,
  },
  text2: {
    color: "#221F1F",
    fontSize: 22,
    marginBottom: 9,
    marginHorizontal: 86,
  },
  text3: {
    color: "#221F1F",
    fontSize: 16,
    marginBottom: 44,
    marginHorizontal: 63,
  },
  text4: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  text5: {
    color: "#4C6FFF",
    fontSize: 16,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#4C6FFFCC",
    borderRadius: 32,
    paddingVertical: 22,
    marginBottom: 16,
    marginHorizontal: 55,
  },
  button2: {
    alignItems: "center",
    borderColor: "#4C6FFFCC",
    borderRadius: 32,
    borderWidth: 1,
    paddingVertical: 22,
    marginHorizontal: 55,
  },
});
