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
				<View style={styles.row}>
					<Text style={styles.text}>
						{"9:40"}
					</Text>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0a30fb18-c10c-455f-862e-496a80b2129c"}} 
						resizeMode = {"stretch"}
						style={styles.image}
					/>
				</View>
				<View style={styles.column}>
					<View style={styles.column2}>
						<View style={styles.row2}>
							<Image
								source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style={styles.image2}
							/>
							<Text style={styles.text2}>
								{"Admin Profile"}
							</Text>
						</View>
						<View style={styles.row3}>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/13772162-1cce-4d4a-b0d3-8127b2fbce8c"}} 
								resizeMode = {"stretch"}
								style={styles.image3}
							/>
							<View style={styles.column3}>
								<Text style={styles.text3}>
									{"Rajesh Sharama"}
								</Text>
								<Text style={styles.text4}>
									{" rajesh.sharma@healthdept.in"}
								</Text>
							</View>
						</View>
						<Text style={styles.text5}>
							{"Username"}
						</Text>
						<TextInput
							placeholder={"new username"}
							value={textInput1}
							onChangeText={onChangeTextInput1}
							style={styles.input}
						/>
						<Text style={styles.text6}>
							{"Email I’d"}
						</Text>
						<TextInput
							placeholder={"new email"}
							value={textInput2}
							onChangeText={onChangeTextInput2}
							style={styles.input2}
						/>
						<Text style={styles.text7}>
							{"Phone Number"}
						</Text>
						<TextInput
							placeholder={"new number"}
							value={textInput3}
							onChangeText={onChangeTextInput3}
							style={styles.input3}
						/>
						<Text style={styles.text6}>
							{"Password"}
						</Text>
						<TextInput
							placeholder={"new password"}
							value={textInput4}
							onChangeText={onChangeTextInput4}
							style={styles.input3}
						/>
						<Text style={styles.text6}>
							{"Confirm Password"}
						</Text>
						<TextInput
							placeholder={"Re-enter new password"}
							value={textInput5}
							onChangeText={onChangeTextInput5}
							style={styles.input4}
						/>
						<TouchableOpacity style={styles.button} onPress={()=>alert('Pressed!')}>
							<Text style={styles.text8}>
								{"Save Change"}
							</Text>
						</TouchableOpacity>
					</View>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4bf8b477-8b03-405d-8142-fb81d7c0b477"}} 
						resizeMode = {"stretch"}
						style={styles.absoluteImage}
					/>
					<View style={styles.absoluteBox}>
					</View>
				</View>
				<View style={styles.column4}>
					<View style={styles.row4}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/87a48bce-e63c-4317-9450-d8e922b557bc"}} 
							resizeMode = {"stretch"}
							style={styles.image4}
						/>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ce762f53-97f4-42f2-8001-558287e2452e"}} 
							resizeMode = {"stretch"}
							style={styles.image5}
						/>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/76f788f8-c4c3-447c-aaaa-7008ebf69d9d"}} 
							resizeMode = {"stretch"}
							style={styles.image6}
						/>
						<View style={styles.box}>
						</View>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/41057939-2636-4091-b6cc-d061f7a6ddb3"}} 
							resizeMode = {"stretch"}
							style={styles.image6}
						/>
					</View>
					<View style={styles.row5}>
						<Text style={styles.text9}>
							{"Home"}
						</Text>
						<Text style={styles.text10}>
							{"  Doctors"}
						</Text>
						<Text style={styles.text11}>
							{"Policies"}
						</Text>
						<Text style={styles.text12}>
							{"Queries"}
						</Text>
						<Text style={styles.text13}>
							{"Profile"}
						</Text>
					</View>
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
	absoluteBox: {
		position: "absolute",
		top: 150,
		left: 33,
		width: 360,
		height: 1,
	},
	absoluteImage: {
		position: "absolute",
		top: 9,
		left: -1,
		width: 26,
		height: 27,
	},
	box: {
		flex: 1,
	},
	button: {
		alignItems: "center",
		backgroundColor: "#4C6FFF",
		borderRadius: 6,
		paddingVertical: 12,
		marginHorizontal: 84,
	},
	column: {
		marginBottom: 213,
		marginHorizontal: 24,
	},
	column2: {
		backgroundColor: "#FFFFFF",
		borderColor: "#E3E3E333",
		borderRadius: 20,
		borderWidth: 1,
		paddingTop: 16,
	},
	column3: {
		width: 181,
	},
	column4: {
		backgroundColor: "#FFFFFF",
		borderColor: "#EEEEEE",
		borderWidth: 1,
		paddingVertical: 17,
		paddingHorizontal: 19,
	},
	image: {
		width: 69,
		height: 11,
	},
	image2: {
		width: 24,
		height: 24,
		marginRight: 69,
	},
	image3: {
		width: 70,
		height: 70,
	},
	image4: {
		width: 19,
		height: 20,
		marginRight: 51,
	},
	image5: {
		width: 24,
		height: 24,
		marginRight: 51,
	},
	image6: {
		width: 24,
		height: 24,
	},
	input: {
		color: "#000000",
		fontSize: 12,
		marginBottom: 28,
		marginHorizontal: 8,
		backgroundColor: "#C4C4C4",
		borderColor: "#A8A8A8",
		borderRadius: 8,
		borderWidth: 1,
		paddingVertical: 17,
		paddingHorizontal: 12,
	},
	input2: {
		color: "#000000",
		fontSize: 12,
		marginBottom: 28,
		marginHorizontal: 8,
		backgroundColor: "#C4C4C4",
		borderColor: "#A8A8A8",
		borderRadius: 8,
		borderWidth: 1,
		paddingVertical: 13,
		paddingHorizontal: 12,
	},
	input3: {
		color: "#000000",
		fontSize: 12,
		marginBottom: 28,
		marginHorizontal: 8,
		backgroundColor: "#C4C4C4",
		borderColor: "#A8A8A8",
		borderRadius: 8,
		borderWidth: 1,
		paddingVertical: 15,
		paddingHorizontal: 12,
	},
	input4: {
		color: "#000000",
		fontSize: 12,
		marginBottom: 24,
		marginHorizontal: 9,
		backgroundColor: "#C4C4C4",
		borderColor: "#A8A8A8",
		borderRadius: 8,
		borderWidth: 1,
		paddingVertical: 15,
		paddingHorizontal: 12,
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 15,
		marginHorizontal: 25,
	},
	row2: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 24,
		marginHorizontal: 9,
	},
	row3: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 45,
		marginHorizontal: 10,
	},
	row4: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 8,
	},
	row5: {
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
		color: "#221F1F",
		fontSize: 16,
		flex: 1,
	},
	text3: {
		color: "#1F2937",
		fontSize: 16,
		marginBottom: 6,
	},
	text4: {
		color: "#6B7280",
		fontSize: 12,
	},
	text5: {
		color: "#000000",
		fontSize: 14,
		marginBottom: 4,
		marginLeft: 10,
	},
	text6: {
		color: "#000000",
		fontSize: 14,
		marginBottom: 5,
		marginLeft: 10,
	},
	text7: {
		color: "#000000",
		fontSize: 14,
		marginBottom: 8,
		marginLeft: 10,
	},
	text8: {
		color: "#FFFFFF",
		fontSize: 14,
	},
	text9: {
		color: "#4C6FFF",
		fontSize: 12,
		marginRight: 4,
		flex: 1,
	},
	text10: {
		color: "#7A7979",
		fontSize: 12,
		marginRight: 30,
	},
	text11: {
		color: "#7A7979",
		fontSize: 12,
		marginRight: 29,
	},
	text12: {
		color: "#221F1F",
		fontSize: 12,
		marginRight: 27,
	},
	text13: {
		color: "#221F1F",
		fontSize: 12,
	},
});