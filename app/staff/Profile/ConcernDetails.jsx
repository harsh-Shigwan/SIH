import React, {useState} from "react";
import { SafeAreaView, View, ScrollView, Image, Text, TextInput, TouchableOpacity, StyleSheet, } from "react-native";
export default (props) => {
	const [textInput1, onChangeTextInput1] = useState('');
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>
				
				<View style={styles.row2}>
					<Text style={styles.text2}>
						{"Issue Type :"}
					</Text>
					<Text style={styles.text3}>
						{"Equipment Failure"}
					</Text>
				</View>
				<View style={styles.row3}>
					<Text style={styles.text4}>
						{"Date Reported :"}
					</Text>
					<Text style={styles.text8}>
						{"15/01/2025"}
					</Text>
				</View>
				<View style={styles.row4}>
					<Text style={styles.text6}>
						{"Description :"}
					</Text>
					<Text style={styles.text7}>
						{"The hospital has been facing frequent nurse shortages, leading to delayed patient care"}
					</Text>
				</View>
				<View style={styles.row5}>
					<Text style={styles.text2}>
						{"Evidence :"}
					</Text>
					<TextInput
						placeholder={"Download"}
						value={textInput1}
						onChangeText={onChangeTextInput1}
						style={styles.input}
					/>
				</View>
				<View style={styles.row6}>
					<Text style={styles.text8}>
						{"Confirmed Status  :"}
					</Text>
					<Text style={styles.text5}>
						{"Yes"}
					</Text>
				</View>
				<View style={styles.row7}>
					<Text style={styles.text9}>
						{"Impact :"}
					</Text>
					<Text style={styles.text7}>
						{"The hospital has been facing frequent nurse shortages, leading to delayed patient care"}
					</Text>
				</View>
				<View style={styles.row8}>
					<Text style={styles.text3}>
						{"Proposed Solution :"}
					</Text>
					<Text style={styles.text10}>
						{"The hospital has been facing frequent nurse shortages, leading to delayed patient care.The hospital has been facing frequent nurse shortages, leading to delayed patient care.The hospital has been facing frequent nurse shortages, leading to delayed patient care"}
					</Text>
				</View>
				<TouchableOpacity style={styles.button} onPress={()=>props.navigation.navigate("ConcernsList")}>
					<Text style={styles.text11}>
						{"Done"}
					</Text>
				</TouchableOpacity>
			
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
		flex: 1,
	},
	button: {
		alignItems: "center",
		backgroundColor: "#4C6FFFCC",
		borderRadius: 10,
		paddingVertical: 12,
		marginBottom: 54,
		marginHorizontal: 130,
	},
	column: {
		backgroundColor: "#FFFFFF",
		borderColor: "#EEEEEE",
		borderWidth: 1,
		paddingVertical: 17,
		paddingHorizontal: 18,
	},
	image: {
		height: 24,
		marginTop: 10,
	},
	image2: {
		width: 19,
		height: 20,
		marginRight: 52,
	},
	image3: {
		width: 24,
		height: 24,
		marginRight: 51,
	},
	image4: {
		width: 24,
		height: 24,
	},
	input: {
		color: "#6C7278",
		fontSize: 12,
		width: 164,
		backgroundColor: "#E5E4E4",
		borderRadius: 10,
		paddingVertical: 11,
		paddingHorizontal: 47,
    marginRight:15,
   
	},
	row: {
		flexDirection: "row",
		alignItems: "flex-start",
		marginBottom: 36,
		marginHorizontal: 30,
	},
	row2: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 25,
		marginHorizontal: 27,
	},
	row3: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 25,
		marginHorizontal: 27,
	},
	row4: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 25,
		marginHorizontal: 27,
	},
	row5: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 25,
		marginHorizontal: 27,
	},
	row6: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 25,
		marginHorizontal: 27,
	},
	row7: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 25,
		marginHorizontal: 27,
	},
	row8: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 25,
		marginHorizontal: 21,
	},
	row9: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 8,
	},
	row10: {
		flexDirection: "row",
		alignItems: "center",
	},
	scrollView: {
		flex: 1,
		backgroundColor: "#FFFFFF",
		paddingTop: 30,
	},
	text: {
		color: "#221F1F",
		fontSize: 16,
		marginTop: 19,
		flex: 1,
	},
	text2: {
		color: "#6C7278",
		fontSize: 12,
		marginRight: 0,
		flex: 1,
	},
	text3: {
		color: "#6C7278",
		fontSize: 12,
    marginRight: 87,
	},
	text4: {
		color: "#6C7278",
		fontSize: 12,
		marginRight: 57,
	},
	text5: {
		color: "#6C7278",
		fontSize: 12,
		flex: 1,
    marginLeft:10,
	},
  text8: {
		color: "#6C7278",
		fontSize: 12,
		flex: 1,
    marginLeft:10,
	},
	text6: {
		color: "#6C7278",
		fontSize: 12,
		marginTop: 7,
	},
	text7: {
		color: "#6C7278",
		fontSize: 12,
		width: 169,
    marginRight:11,
	},
	text8: {
		color: "#6C7278",
		fontSize: 12,
		marginRight: 29,
	},
	text9: {
		color: "#6C7278",
		fontSize: 12,
		marginTop: 1,
	},
	text10: {
		color: "#6C7278",
		fontSize: 12,
		marginTop: 5,
		width: 271,
    marginRight:40,
	},
	text11: {
		color: "#FFFFFF",
		fontSize: 15,
	},
	text12: {
		color: "#4C6FFF",
		fontSize: 12,
		marginRight: 4,
		flex: 1,
	},
	text13: {
		color: "#7A7979",
		fontSize: 12,
		marginRight: 30,
	},
	text14: {
		color: "#221F1F",
		fontSize: 12,
		marginRight: 27,
	},
	text15: {
		color: "#221F1F",
		fontSize: 12,
	},
	view: {
		width: 42,
		backgroundColor: "#4C6FFF2E",
		borderRadius: 9,
		paddingHorizontal: 8,
		marginRight: 44,
	},
});