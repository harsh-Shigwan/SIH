import React, {useState} from "react";
import { SafeAreaView, View, ScrollView, Text, Image, TextInput, TouchableOpacity, StyleSheet, } from "react-native";
export default (props) => {
	const [textInput1, onChangeTextInput1] = useState('');
	const [textInput2, onChangeTextInput2] = useState('');
	const [textInput3, onChangeTextInput3] = useState('');
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>
			
				<Text style={styles.text2}>
					{"Out Patient Department"}
				</Text>
				<Text style={styles.text3}>
					{"Add a new patient"}
				</Text>
				<View style={styles.box}>
				</View>
				<Text style={styles.text4}>
					{"Select a patient"}
				</Text>
				<TextInput
					placeholder={"Select a patient"}
					value={textInput1}
					onChangeText={onChangeTextInput1}
					style={styles.input}
				/>
				<Text style={styles.text4}>
					{"Select a Doctor"}
				</Text>
				<TextInput
					placeholder={"Type or select a doctor"}
					value={textInput2}
					onChangeText={onChangeTextInput2}
					style={styles.input2}
				/>
				<Text style={styles.text5}>
					{"Department"}
				</Text>
				<TextInput
					placeholder={"Enter Department"}
					value={textInput3}
					onChangeText={onChangeTextInput3}
					style={styles.input3}
				/>
				<View style={styles.row2}>
					<TouchableOpacity style={styles.button} onPress={()=>props.navigation.navigate("OpdPatientList")}>
						<Text style={styles.text6}>
							{"Cancel"}
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button2} onPress={()=>props.navigation.navigate("OpdPatientList")}>
						<Text style={styles.text7}>
							{"Submit"}
						</Text>
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
		height: 1,
		backgroundColor: "#7A797940",
		marginBottom: 48,
		marginHorizontal: 14,
	},
	box2: {
		flex: 1,
	},
	button: {
		width: 80,
		alignItems: "center",
		borderColor: "#4C6FFFCC",
		borderRadius: 6,
		borderWidth: 1,
		paddingVertical: 16,
	},
	button2: {
		width: 86,
		alignItems: "center",
		backgroundColor: "#4C6FFFCC",
		borderRadius: 6,
		paddingVertical: 16,
	},
	column: {
		backgroundColor: "#FFFFFF",
		paddingVertical: 17,
		paddingHorizontal: 21,
		marginHorizontal: 1,
		shadowColor: "#63636333",
		shadowOpacity: 0.2,
		shadowOffset: {
		    width: 0,
		    height: 2
		},
		shadowRadius: 8,
		elevation: 8,
	},
	image: {
		width: 69,
		height: 11,
	},
	image2: {
		width: 19,
		height: 20,
		marginRight: 55,
	},
	image3: {
		width: 20,
		height: 20,
		marginRight: 53,
	},
	image4: {
		width: 24,
		height: 24,
	},
	input: {
		color: "#000000",
		fontSize: 12,
		marginBottom: 28,
		marginHorizontal: 32,
		backgroundColor: "#E0E0E0",
		borderColor: "#A8A8A8",
		borderRadius: 8,
		borderWidth: 1,
		paddingVertical: 14,
		paddingHorizontal: 11,
	},
	input2: {
		color: "#000000",
		fontSize: 12,
		marginBottom: 29,
		marginHorizontal: 32,
		backgroundColor: "#E0E0E0",
		borderColor: "#A8A8A8",
		borderRadius: 8,
		borderWidth: 1,
		paddingVertical: 14,
		paddingHorizontal: 11,
	},
	input3: {
		color: "#000000",
		fontSize: 12,
		marginBottom: 57,
		marginHorizontal: 32,
		backgroundColor: "#E0E0E0",
		borderColor: "#A8A8A8",
		borderRadius: 8,
		borderWidth: 1,
		paddingVertical: 15,
		paddingHorizontal: 11,
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 100,
		marginHorizontal: 25,
	},
	row2: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 6,
		marginHorizontal: 68,
	},
	row3: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 8,
	},
	row4: {
		flexDirection: "row",
		alignItems: "center",
	},
	scrollView: {
		flex: 1,
		backgroundColor: "#FFFFFF",
		paddingTop: 16,
	},
	text: {
		color: "#221E1E",
		fontSize: 14,
	},
	text2: {
    color: "#1F2937", // Matches the --Gray---Tailwind-800
    fontFamily: "Poppins", // Specifies the Poppins font
    fontSize: 16, // Font size from the spec
    fontStyle: "normal", // Sets the font style to normal
    fontWeight: "700", // Bold text as per the spec
    lineHeight: 24, // Line height of 24px for better readability
    marginBottom: 8, // Keeps the vertical spacing as is
    marginHorizontal: 71, // Keeps the horizontal margin as is
    textAlign: "center",  
},
text3: {
	color: "#1F2937", // Matches the --Gray---Tailwind-800 color
	fontFamily: "Poppins", // Specifies the Poppins font
	fontSize: 14, // Font size from the spec
	fontStyle: "normal", // Sets the font style to normal
	fontWeight: "400", // Regular weight as per the spec
	lineHeight: 24, // Line height from the spec for proper spacing
	textAlign: "center", // Centers the text
	marginBottom: 23, // Keeps the vertical margin as is
	marginHorizontal: 105, // Maintains horizontal margin for layout
  },
  
	text4: {
		color: "#4E4D4D",
		fontSize: 14,
		marginBottom: 5,
		marginLeft: 34,
	},
	text5: {
		color: "#4E4D4D",
		fontSize: 14,
		marginBottom: 7,
		marginLeft: 34,
	},
	text6: {
		color: "#4C6FFF",
		fontSize: 16,
	},
	text7: {
		color: "#FFFFFF",
		fontSize: 16,
	},
	text8: {
		color: "#4C6FFF",
		fontSize: 12,
		marginRight: 4,
		flex: 1,
	},
	text9: {
		color: "#7A7979",
		fontSize: 12,
		marginRight: 55,
	},
	text10: {
		color: "#7A7979",
		fontSize: 12,
		marginRight: 37,
	},
	text11: {
		color: "#221F1F",
		fontSize: 12,
		marginRight: 27,
	},
	text12: {
		color: "#221F1F",
		fontSize: 12,
	},
});