import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image, StyleSheet,  TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
export default (props) => {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>
				
				<Image
					source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/36aeab63-aa9c-4fd3-9baa-cd0057711711"}} 
					resizeMode = {"stretch"}
					style={styles.image}
				/>
				<Text style={styles.text2}>
					{"Get advice only from a doctor you believe in."}
				</Text>
				<View style={styles.row}>
					<View style={styles.box}>
					</View>
					<View style={styles.box2}>
					</View>
					<View style={styles.box3}>
					</View>
                    <TouchableOpacity onPress={()=> props.navigation.navigate("LoginSignUp")} style={styles.button}>
                    <Icon name="arrow-forward" size={24} color="#fff" />
                  </TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}
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
		width: 56,
		height: 56,
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
		marginLeft: 30,
	},
	scrollView: {
		flex: 1,
		backgroundColor: "#FFFFFF",
		paddingTop: 0,
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
	},  button: {
        height: 56, 
       width: 56,
  borderRadius: 98, 
  overflow: "hidden",
  marginTop: 20,
  backgroundColor: "#4C6FFF",
  justifyContent: "center",
  alignItems: "center", 
  marginBottom: 20,

      },
});