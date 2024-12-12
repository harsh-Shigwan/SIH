import React, {useState} from "react";
import { SafeAreaView, View, ScrollView, Image, Text, TextInput, TouchableOpacity, StyleSheet, } from "react-native";
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
					<View style={styles.view}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1beeabaf-90e1-4956-94c9-9f4fe722203c"}} 
							resizeMode = {"stretch"}
							style={styles.image}
						/>
					</View>
					<Text style={styles.text}>
						{"Edit Profile"}
					</Text>
				</View>
				<Image
					source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f895c350-f295-4856-af84-ebd8a76dd97d"}} 
					resizeMode = {"stretch"}
					style={styles.image2}
				/>
				<Text style={styles.text2}>
					{"Full Name"}
				</Text>
				<TextInput
					placeholder={"Enter Full name"}
					value={textInput1}
					onChangeText={onChangeTextInput1}
					style={styles.input}
				/>
				<Text style={styles.text2}>
					{"Role"}
				</Text>
				<TextInput
					placeholder={"Staff"}
					value={textInput2}
					onChangeText={onChangeTextInput2}
					style={styles.input2}
				/>
				<Text style={styles.text3}>
					{"Contact"}
				</Text>
				<TextInput
					placeholder={"Enter the contact details"}
					value={textInput3}
					onChangeText={onChangeTextInput3}
					style={styles.input3}
				/>
				<Text style={styles.text2}>
					{"Email"}
				</Text>
				<TextInput
					placeholder={"Enter the email "}
					value={textInput4}
					onChangeText={onChangeTextInput4}
					style={styles.input3}
				/>
				<Text style={styles.text2}>
					{"Location"}
				</Text>
				<TextInput
					placeholder={"Enter your location"}
					value={textInput5}
					onChangeText={onChangeTextInput5}
					style={styles.input4}
				/>
				<TouchableOpacity style={styles.button} onPress={()=>props.navigation.navigate("ProfilePage")}>
					<Text style={styles.text4}>
						{"Save"}
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
		backgroundColor: "#4C6FFF",
		borderRadius: 6,
		paddingVertical: 14,
		marginBottom: 84,
		marginHorizontal: 118,
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
		borderRadius: 50,
		height: 70,
		marginBottom: 15,
		marginHorizontal: 145,
	},
	image3: {
		width: 19,
		height: 20,
		marginRight: 52,
	},
	image4: {
		width: 24,
		height: 24,
		marginRight: 51,
	},
	image5: {
		width: 24,
		height: 24,
	},
	input: {
		color: "#000000",
		fontSize: 12,
		marginBottom: 25,
		marginHorizontal: 25,
		backgroundColor: "#E0E0E0",
		borderColor: "#A8A8A8",
		borderRadius: 8,
		borderWidth: 1,
		paddingVertical: 16,
		paddingHorizontal: 11,
	},
	input2: {
		color: "#000000",
		fontSize: 12,
		marginBottom: 26,
		marginHorizontal: 25,
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
		marginBottom: 25,
		marginHorizontal: 25,
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
		marginBottom: 118,
		marginHorizontal: 25,
		backgroundColor: "#E0E0E0",
		borderColor: "#A8A8A8",
		borderRadius: 8,
		borderWidth: 1,
		paddingVertical: 15,
		paddingHorizontal: 11,
	},
	row: {
		flexDirection: "row",
		alignItems: "flex-start",
		marginBottom: 39,
		marginHorizontal: 30,
	},
	row2: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 8,
	},
	row3: {
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
		color: "#000000",
		fontSize: 14,
		marginBottom: 4,
		marginLeft: 41,
	},
	text3: {
		color: "#000000",
		fontSize: 14,
		marginBottom: 3,
		marginLeft: 40,
	},
	text4: {
		color: "#FFFFFF",
		fontSize: 15,
	},
	text5: {
		color: "#4C6FFF",
		fontSize: 12,
		marginRight: 4,
		flex: 1,
	},
	text6: {
		color: "#7A7979",
		fontSize: 12,
		marginRight: 30,
	},
	text7: {
		color: "#221F1F",
		fontSize: 12,
		marginRight: 27,
	},
	text8: {
		color: "#221F1F",
		fontSize: 12,
	},
	view: {
		width: 42,
		backgroundColor: "#4C6FFF2E",
		borderRadius: 9,
		paddingHorizontal: 8,
		marginRight: 82,
	},
});