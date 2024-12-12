import React, { useState } from "react";
import { SafeAreaView, View, ScrollView, Image, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";

export default (props) => {
  const [textInput1, onChangeTextInput1] = useState(""); // Email
  const [textInput2, onChangeTextInput2] = useState(""); // Password

  const handleSubmit = async () => {
    const payload = {
      email: textInput1,
      password: textInput2,
    };

    try {
      const response = await axios.post("http://127.0.0.1:8000/users/login/", payload);
      if (response.data.user.role === 'patient') {
		props.navigation.navigate("Home3"); 
	  } else if (response.data.user.role === 'admin') {
		props.navigation.navigate("AdminTabNavigation"); 
	  } else if(response.data.user.role === 'hospital'){
		props.navigation.navigate("StaffTabNavigation");
	  } else{
		Alert.alert("Error", "Unknown role detected.");
	  }
  
	  console.log( "resp", response.data.token);
	  
	  await AsyncStorage.setItem('token', response.data.token);
	  console.log( "tokens:", response.data.token)

    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      Alert.alert("Error", "Failed to sign in. Please try again.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.row}>
          <Image
            source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
            resizeMode={"stretch"}
            style={styles.image}
          />
          <Text style={styles.text}>{"Sign In"}</Text>
        </View>
        <TextInput
          placeholder={"Enter your email"}
          value={textInput1}
          onChangeText={onChangeTextInput1}
          style={styles.input}
        />
        <TextInput
          placeholder={"Enter your password"}
          value={textInput2}
          onChangeText={onChangeTextInput2}
          secureTextEntry
          style={styles.input}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.text4}>{"Sign In"}</Text>
        </TouchableOpacity>
        <Text style={styles.text5}>{"Don’t have an account? Sign up"}</Text>
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
		flex: 1,
	},
	box2: {
		height: 1,
		backgroundColor: "#221F1F1A",
	},
	button: {
		alignItems: "center",
		backgroundColor: "#407CE2",
		borderRadius: 32,
		paddingVertical: 22,
		marginBottom: 14,
		marginHorizontal: 30,
	},
	column: {
		marginBottom: 25,
		marginHorizontal: 30,
	},
	image: {
		width: 24,
		height: 24,
		marginRight: 88,
	},
	image2: {
		width: 24,
		height: 24,
		marginRight: 17,
	},
	image3: {
		width: 24,
		height: 24,
	},
	image4: {
		width: 20,
		height: 20,
		marginRight: 26,
	},
	image5: {
		width: 20,
		height: 20,
	},
	input: {
		color: "#221F1F",
		fontSize: 14,
		flex: 1,
		paddingVertical: 16,
	},
	input2: {
		color: "#221F1F",
		fontSize: 16,
		flex: 1,
		paddingVertical: 18,
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 38,
		marginHorizontal: 38,
	},
	row2: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#F9F9FB",
		borderColor: "#221F1F1A",
		borderRadius: 6,
		borderWidth: 1,
		paddingHorizontal: 25,
		marginBottom: 25,
		marginHorizontal: 30,
	},
	row3: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#F9F9FB",
		borderColor: "#221F1F1A",
		borderRadius: 6,
		borderWidth: 1,
		paddingVertical: 16,
		paddingHorizontal: 25,
		marginBottom: 20,
		marginHorizontal: 30,
	},
	row4: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderColor: "#E5E7EB",
		borderRadius: 6,
		borderWidth: 1,
		paddingHorizontal: 20,
		marginBottom: 25,
		marginHorizontal: 30,
	},
	row5: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderColor: "#E5E7EB",
		borderRadius: 6,
		borderWidth: 1,
		paddingLeft: 18,
		paddingRight: 48,
		marginHorizontal: 30,
	},
	scrollView: {
		flex: 1,
		backgroundColor: "#FFFFFF",
		paddingTop: 73,
	},
	text: {
		color: "#221F1F",
		fontSize: 18,
		flex: 1,
	},
	text2: {
		color: "#221F1F",
		fontSize: 14,
	},
	text3: {
		color: "#407CE2",
		fontSize: 13,
		marginBottom: 50,
		marginHorizontal: 36,
	},
	text4: {
		color: "#FFFFFF",
		fontSize: 16,
	},
	text5: {
		fontSize: 14,
		marginBottom: 52,
		marginHorizontal: 61,
	},
	text6: {
		color: "#A0A7B0",
		fontSize: 16,
	},
	view: {
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		paddingVertical: 11,
		marginHorizontal: 131,
	},
});