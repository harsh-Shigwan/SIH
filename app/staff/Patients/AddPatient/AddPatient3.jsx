import React, {useState} from "react";
import { SafeAreaView, View, ScrollView, Text, Image, TextInput, TouchableOpacity, StyleSheet, } from "react-native";
export default (props) => {
	const [textInput1, onChangeTextInput1] = useState('');
	const [textInput2, onChangeTextInput2] = useState('');
	const [textInput3, onChangeTextInput3] = useState('');
	const [textInput4, onChangeTextInput4] = useState('');
	const [textInput5, onChangeTextInput5] = useState('');
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>
				
				<Text style={styles.text2}>
					{"Add Patient"}
				</Text>
				<View style={styles.row2}>
					<View style={styles.view}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bdc91b43-a09d-4d0e-a936-4ce4c19469e7"}} 
							resizeMode = {"stretch"}
							style={styles.image2}
						/>
					</View>
					<Text style={styles.text3}>
						{"Emergency Contact"}
					</Text>
					<View style={styles.box}>
					</View>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/415bde2d-90d9-47ea-b700-a0b95c1ba4bf"}} 
						resizeMode = {"stretch"}
						style={styles.image3}
					/>
					<Text style={styles.text4}>
						{"Insurance"}
					</Text>
					<View style={styles.box2}>
					</View>
					<View style={styles.view}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2b1e89d6-bc8b-4d5b-b8e0-9a4637f4bf78"}} 
							resizeMode = {"stretch"}
							style={styles.image2}
						/>
					</View>
					<Text style={styles.text5}>
						{"Deposit info"}
					</Text>
				</View>
				<View style={styles.box3}>
				</View>
				<Text style={styles.text6}>
					{"Insurance provider"}
				</Text>
				<TextInput
					placeholder={"Enter insurance number"}
					value={textInput1}
					onChangeText={onChangeTextInput1}
					style={styles.input}
				/>
				<Text style={styles.text7}>
					{"Insurance number (Member no.)"}
				</Text>
				<TextInput
					placeholder={"Enter insurance number"}
					value={textInput2}
					onChangeText={onChangeTextInput2}
					style={styles.input}
				/>
				<Text style={styles.text8}>
					{"Card number (ID no.)"}
				</Text>
				<TextInput
					placeholder={"Enter card number"}
					value={textInput3}
					onChangeText={onChangeTextInput3}
					style={styles.input2}
				/>
				<Text style={styles.text6}>
					{"Facility code"}
				</Text>
				<TextInput
					placeholder={"Enter facility code"}
					value={textInput4}
					onChangeText={onChangeTextInput4}
					style={styles.input3}
				/>
				<Text style={styles.text9}>
					{"Insurance name"}
				</Text>
				<TextInput
					placeholder={"Enter insurance name"}
					value={textInput5}
					onChangeText={onChangeTextInput5}
					style={styles.input4}
				/>
				<TouchableOpacity style={styles.button} onPress={()=>props.navigation.navigate("AddPatient4")}>
					<Text style={styles.text10}>
						{" Next"}
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
		width: 20,
		height: 1,
		backgroundColor: "#00000080",
		marginRight: 6,
	},
	box2: {
		width: 20,
		height: 1,
		backgroundColor: "#00000080",
		marginRight: 4,
	},
	box3: {
		height: 1,
		backgroundColor: "#7A797940",
		marginBottom: 28,
		marginHorizontal: 14,
	},
	box4: {
		flex: 1,
	},
	button: {
		alignItems: "center",
		backgroundColor: "#4C6FFFCC",
		borderRadius: 6,
		paddingVertical: 16,
		marginBottom: 83,
		marginHorizontal: 33,
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
		height: 24,
	},
	image3: {
		width: 24,
		height: 24,
		marginRight: 2,
	},
	image4: {
		width: 19,
		height: 20,
		marginRight: 55,
	},
	image5: {
		width: 20,
		height: 20,
		marginRight: 53,
	},
	image6: {
		width: 24,
		height: 24,
	},
	input: {
		color: "#000000",
		fontSize: 12,
		marginBottom: 18,
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
		marginBottom: 21,
		marginHorizontal: 32,
		backgroundColor: "#E0E0E0",
		borderColor: "#A8A8A8",
		borderRadius: 8,
		borderWidth: 1,
		paddingVertical: 15,
		paddingHorizontal: 11,
	},
	input3: {
		color: "#000000",
		fontSize: 12,
		marginBottom: 22,
		marginHorizontal: 32,
		backgroundColor: "#E0E0E0",
		borderColor: "#A8A8A8",
		borderRadius: 8,
		borderWidth: 1,
		paddingVertical: 14,
		paddingHorizontal: 11,
	},
	input4: {
		color: "#000000",
		fontSize: 12,
		marginBottom: 40,
		marginHorizontal: 32,
		backgroundColor: "#E0E0E0",
		borderColor: "#A8A8A8",
		borderRadius: 8,
		borderWidth: 1,
		paddingVertical: 14,
		paddingHorizontal: 11,
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 20,
		marginHorizontal: 25,
	},
	row2: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 25,
		marginHorizontal: 11,
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
		color: "#1F2937",
		fontSize: 16,
		marginBottom: 12,
		marginHorizontal: 131,
	},
	text3: {
		color: "#000000",
		fontSize: 10,
		marginRight: 2,
	},
	text4: {
		color: "#4C6FFF",
		fontSize: 10,
		marginRight: 3,
	},
	text5: {
		color: "#000000",
		fontSize: 10,
		flex: 1,
	},
	text6: {
		color: "#000000",
		fontSize: 14,
		marginBottom: 5,
		marginLeft: 33,
	},
	text7: {
		color: "#000000",
		fontSize: 14,
		marginBottom: 8,
		marginHorizontal: 33,
	},
	text8: {
		color: "#000000",
		fontSize: 14,
		marginBottom: 8,
		marginHorizontal: 32,
	},
	text9: {
		color: "#000000",
		fontSize: 14,
		marginBottom: 4,
		marginLeft: 33,
	},
	text10: {
		color: "#FFFFFF",
		fontSize: 16,
	},
	text11: {
		color: "#4C6FFF",
		fontSize: 12,
		marginRight: 4,
		flex: 1,
	},
	text12: {
		color: "#7A7979",
		fontSize: 12,
		marginRight: 55,
	},
	text13: {
		color: "#7A7979",
		fontSize: 12,
		marginRight: 37,
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
		width: 25,
		backgroundColor: "#FFFFFF",
		marginRight: 1,
	},
});