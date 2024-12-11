import React, { useState } from "react";
import axios from "axios";
import { 
  SafeAreaView, 
  View, 
  ScrollView, 
  Image, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  Alert 
} from "react-native";

export default (props) => {
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/users/signup/", {
        role,
        email,
        password,
      });
      Alert.alert("Success", "Sign-up successful!");
      console.log("Response data:", response.data);
	  props.navigation.navigate("SignIn");
    } catch (error) {
      if (error.response) {
        // Server responded with a status outside 2xx
        console.error("Error response data:", error.response.data);
        console.error("Error response status:", error.response.status);
        console.error("Error response headers:", error.response.headers);
        Alert.alert("Error", `Sign-up failed: ${error.response.data.message || "Please try again."}`);
      } else if (error.request) {
        // Request made but no response received
        console.error("Error request:", error.request);
        Alert.alert("Error", "No response received. Please check your connection or server.");
      } else {
        // Other errors
        console.error("Error message:", error.message);
        Alert.alert("Error", "An unexpected error occurred. Please try again.");
      }
    }
  };
  

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.row}>
          <Image
            source={{ uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d0c116d6-27f8-4699-8810-56a99ba412eb" }}
            resizeMode={"stretch"}
            style={styles.image}
          />
          <Text style={styles.text}>{"Sign Up"}</Text>
        </View>
        <View style={styles.row2}>
          <Image
            source={{ uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fd1b08f7-2ab9-4b6e-809a-188d9ad3f56f" }}
            resizeMode={"stretch"}
            style={styles.image2}
          />
          <TextInput
            placeholder={"Enter your name"}
            value={role}
            onChangeText={setRole}
            style={styles.input}
          />
        </View>
        <View style={styles.row2}>
          <Image
            source={{ uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0184e0ba-fbf9-4814-9503-8b85e7ad68e4" }}
            resizeMode={"stretch"}
            style={styles.image2}
          />
          <TextInput
            placeholder={"Enter your email"}
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          />
        </View>
        <View style={styles.row3}>
          <Image
            source={{ uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f6f2c455-9ddf-47aa-805a-739501bda241" }}
            resizeMode={"stretch"}
            style={styles.image2}
          />
          <TextInput
            placeholder={"Enter your password"}
            value={password}
            secureTextEntry
            onChangeText={setPassword}
            style={styles.input}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.text4}>{"Sign Up"}</Text>
        </TouchableOpacity>
        <Text style={styles.text5}>{"Don’t have an account?  Sign In"}</Text>
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
	button: {
		alignItems: "center",
		backgroundColor: "#4C6FFFCC",
		borderRadius: 32,
		paddingVertical: 22,
		marginBottom: 14,
		marginHorizontal: 30,
	},
	image: {
		width: 24,
		height: 24,
		marginRight: 85,
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
		borderRadius: 8,
		width: 24,
		height: 24,
		marginRight: 17,
	},
	input: {
		color: "#221F1F",
		fontSize: 14,
		flex: 1,
		paddingVertical: 16,
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
		marginBottom: 15,
		marginHorizontal: 30,
	},
	row4: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 270,
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
		fontSize: 13,
		flex: 1,
	},
	text4: {
		color: "#FFFFFF",
		fontSize: 16,
	},
	text5: {
		fontSize: 14,
		marginHorizontal: 64,
	},
});