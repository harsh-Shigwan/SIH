import React from "react";
import { SafeAreaView, View, ScrollView, Text, TouchableOpacity, Image, Alert, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; // Using Ionicons as an example
export default (props) => {
  const handlePress = () => {
    Alert.alert("Button Pressed", "You clicked the image button!");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        
        
        <Image
          source={{
            uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e78711f9-d606-44bd-9307-4c60bb958c28",
          }}
          resizeMode={"stretch"}
          style={styles.image}
        />
        
        <Text style={styles.text2}>
          {"Find a lot of specialist doctors in one place and book an appointment easily."}
        </Text>
        <View style={styles.flexbtn}>
        <View style={styles.row}>
          <View style={styles.box}></View>
          <View style={styles.box2}></View>
          <View style={styles.box3}></View>
        </View>
        
        <TouchableOpacity
        onPress={() => props.navigation.navigate("Home2")}
        style={styles.button}
      >
        {/* Add an icon inside the button */}
        <Icon name="arrow-forward" size={24} color="#fff" />
      </TouchableOpacity></View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  box: {
    width: 13,
    height: 4,
    backgroundColor: "#407CE2",
    borderRadius: 56,
    marginRight: 3,

  },
  box2: {
    width: 13,
    height: 4,
    backgroundColor: "#407CE2",
    borderRadius: 56,
  },
  box3: {
    flex: 1,
    alignSelf: "stretch",
  },
  image: {
    height: 467,
    marginBottom: 36,
    marginLeft: 32,
  },
  image2: {
    width: 156,
    height: 156,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 30,
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: 70,
    paddingRight: 31,
  },
  text: {
    color: "#A0A7B0",
    fontSize: 14,
    marginBottom: 31,
    marginLeft: 303,
  },
  text2: {
    color: "#221F1F",
    fontSize: 22,
    marginBottom: 25,
    marginLeft: 31,
  },
button: {
  height: 56, // Ensure the height and width are the same
  width: 56,
  borderRadius: 98, // Half of the height/width
  overflow: "hidden",
  marginTop: 20,
  backgroundColor: "#4C6FFF",
  justifyContent: "center", // Center content vertically
  alignItems: "center", // Center content horizontally
},
flexbtn: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginLeft: 30,
  marginRight: 30,
  marginTop: 20,
  marginBottom: 20,
},

});
