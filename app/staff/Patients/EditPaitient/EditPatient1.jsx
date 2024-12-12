import React, {useState} from "react";
import { SafeAreaView, View, ScrollView, Text, Image, TextInput, TouchableOpacity, StyleSheet, } from "react-native";
export default (props) => {
	const [textInput1, onChangeTextInput1] = useState('');
	const [textInput2, onChangeTextInput2] = useState('');
	const [textInput3, onChangeTextInput3] = useState('');
	const [textInput4, onChangeTextInput4] = useState('');
	const [textInput5, onChangeTextInput5] = useState('');
	const [textInput6, onChangeTextInput6] = useState('');
	const [textInput7, onChangeTextInput7] = useState('');
	const [textInput8, onChangeTextInput8] = useState('');
	const [textInput9, onChangeTextInput9] = useState('');
	const [textInput10, onChangeTextInput10] = useState('');
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>
				
				<Text style={styles.text2}>
					{"Edit Patient"}
				</Text>
				<View style={styles.row2}>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a2b4d1b8-9a27-4732-8970-e8001fc4f156"}} 
						resizeMode = {"stretch"}
						style={styles.image2}
					/>
					<Text style={styles.text3}>
						{"Basic Details"}
					</Text>
					<View style={styles.box}>
					</View>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/829ab784-bf45-42be-b003-24902ce18c18"}} 
						resizeMode = {"stretch"}
						style={styles.image2}
					/>
					<Text style={styles.text4}>
						{"Emergency Contact"}
					</Text>
					<View style={styles.box}>
					</View>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cf2b7b63-70da-4fe7-aeaf-0fe70f2040c0"}} 
						resizeMode = {"stretch"}
						style={styles.image2}
					/>
					<Text style={styles.text4}>
						{"Insurance"}
					</Text>
				</View>
				<View style={styles.box2}>
				</View>
				<Text style={styles.text5}>
					{"Full Name"}
				</Text>
				<TextInput
					placeholder={"Enter Full name"}
					value={textInput1}
					onChangeText={onChangeTextInput1}
					style={styles.input}
				/>
				<Text style={styles.text5}>
					{"Phone number "}
				</Text>
				<TextInput
					placeholder={"Enter phone number"}
					value={textInput2}
					onChangeText={onChangeTextInput2}
					style={styles.input}
				/>
				<Text style={styles.text5}>
					{"E-mail ID"}
				</Text>
				<TextInput
					placeholder={"Enter email id"}
					value={textInput3}
					onChangeText={onChangeTextInput3}
					style={styles.input2}
				/>
				<Text style={styles.text5}>
					{"Date of birth"}
				</Text>
				<TextInput
					placeholder={"dd-mm-yyyy"}
					value={textInput4}
					onChangeText={onChangeTextInput4}
					style={styles.input}
				/>
				<Text style={styles.text6}>
					{"Gender"}
				</Text>
				<TextInput
					placeholder={"Select the gender"}
					value={textInput5}
					onChangeText={onChangeTextInput5}
					style={styles.input}
				/>
				<Text style={styles.text5}>
					{"Referred by"}
				</Text>
				<TextInput
					placeholder={"Enter Full name"}
					value={textInput6}
					onChangeText={onChangeTextInput6}
					style={styles.input}
				/>
				<Text style={styles.text5}>
					{"Blood Group"}
				</Text>
				<TextInput
					placeholder={"Select the blood group"}
					value={textInput7}
					onChangeText={onChangeTextInput7}
					style={styles.input3}
				/>
				<Text style={styles.text7}>
					{"Allergy(if any)"}
				</Text>
				<TextInput
					placeholder={"Allergy(if any)"}
					value={textInput8}
					onChangeText={onChangeTextInput8}
					style={styles.input4}
				/>
				<Text style={styles.text6}>
					{"City"}
				</Text>
				<TextInput
					placeholder={"Enter city"}
					value={textInput9}
					onChangeText={onChangeTextInput9}
					style={styles.input2}
				/>
				<Text style={styles.text5}>
					{"Pincode"}
				</Text>
				<TextInput
					placeholder={"Enter pin code"}
					value={textInput10}
					onChangeText={onChangeTextInput10}
					style={styles.input5}
				/>
				<TouchableOpacity style={styles.button} onPress={()=>props.navigation.navigate("EditPatient2")}>
					<Text style={styles.text8}>
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
	},
	box2: {
		height: 1,
		backgroundColor: "#7A797940",
		marginBottom: 28,
		marginHorizontal: 14,
	},
	box3: {
		flex: 1,
	},
	button: {
		alignItems: "center",
		backgroundColor: "#4C6FFFCC",
		borderRadius: 6,
		paddingVertical: 16,
		marginBottom: 26,
		marginHorizontal: 35,
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
		width: 24,
		height: 24,
	},
	image3: {
		width: 19,
		height: 20,
		marginRight: 55,
	},
	image4: {
		width: 20,
		height: 20,
		marginRight: 53,
	},
	input: {
		color: "#000000",
		fontSize: 12,
		marginBottom: 16,
		marginHorizontal: 31,
		backgroundColor: "#E0E0E0",
		borderColor: "#A8A8A8",
		borderRadius: 8,
		borderWidth: 1,
		paddingVertical: 15,
		paddingHorizontal: 11,
	},
	input2: {
		color: "#000000",
		fontSize: 12,
		marginBottom: 16,
		marginHorizontal: 31,
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
		marginBottom: 13,
		marginHorizontal: 31,
		backgroundColor: "#E0E0E0",
		borderColor: "#A8A8A8",
		borderRadius: 8,
		borderWidth: 1,
		paddingVertical: 15,
		paddingHorizontal: 11,
	},
	input4: {
		color: "#000000",
		fontSize: 12,
		marginBottom: 16,
		marginHorizontal: 31,
		backgroundColor: "#E0E0E0",
		borderColor: "#A8A8A8",
		borderRadius: 8,
		borderWidth: 1,
		paddingVertical: 12,
		paddingHorizontal: 11,
	},
	input5: {
		color: "#000000",
		fontSize: 12,
		marginBottom: 25,
		marginHorizontal: 31,
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
		justifyContent: "space-between",
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
		color: "#4C6FFF",
		fontSize: 10,
	},
	text4: {
		color: "#000000",
		fontSize: 10,
	},
	text5: {
		color: "#000000",
		fontSize: 14,
		marginBottom: 5,
		marginLeft: 35,
	},
	text6: {
		color: "#000000",
		fontSize: 14,
		marginBottom: 5,
		marginLeft: 34,
	},
	text7: {
		color: "#000000",
		fontSize: 14,
		marginBottom: 8,
		marginLeft: 34,
	},
	text8: {
		color: "#FFFFFF",
		fontSize: 16,
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
		marginRight: 55,
	},
	text11: {
		color: "#7A7979",
		fontSize: 12,
		marginRight: 37,
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