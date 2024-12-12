import React, {useState} from "react";
import { SafeAreaView, View, ScrollView, Text, Image, TextInput, TouchableOpacity, StyleSheet, } from "react-native";
export default (props) => {
	const [textInput1, onChangeTextInput1] = useState('');
	const [textInput2, onChangeTextInput2] = useState('');
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>
			
				<Text style={styles.text2}>
					{"Add Patient"}
				</Text>
				<View style={styles.row2}>
					<View style={styles.view}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b49ad9b2-0316-4300-b790-bd25bd181784"}} 
							resizeMode = {"stretch"}
							style={styles.image2}
						/>
					</View>
					<Text style={styles.text3}>
						{"Emergency Contact"}
					</Text>
					<View style={styles.box}>
					</View>
					<View style={styles.view}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d844d03f-50c3-491b-82a0-d59242bb196c"}} 
							resizeMode = {"stretch"}
							style={styles.image2}
						/>
					</View>
					<Text style={styles.text3}>
						{"Insurance"}
					</Text>
					<View style={styles.box}>
					</View>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fb344c28-b866-4a6f-9511-8b72690759ea"}} 
						resizeMode = {"stretch"}
						style={styles.image3}
					/>
					<Text style={styles.text4}>
						{"Deposit info"}
					</Text>
				</View>
				<View style={styles.box2}>
				</View>
				<Text style={styles.text5}>
					{"Deposit Amount"}
				</Text>
				<TextInput
					placeholder={"Enter insurance number"}
					value={textInput1}
					onChangeText={onChangeTextInput1}
					style={styles.input}
				/>
				<Text style={styles.text5}>
					{"Payment Mode"}
				</Text>
				<TextInput
					placeholder={"Enter insurance number"}
					value={textInput2}
					onChangeText={onChangeTextInput2}
					style={styles.input2}
				/>
				<TouchableOpacity style={styles.button} onPress={()=>props.navigation.navigate("PatientList")}>
					<Text style={styles.text6}>
						{"Submit"}
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
		marginBottom: 330,
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
	input: {
		color: "#000000",
		fontSize: 12,
		marginBottom: 21,
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
		marginBottom: 33,
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
		color: "#000000",
		fontSize: 10,
	},
	text4: {
		color: "#4C6FFF",
		fontSize: 10,
	},
	text5: {
		color: "#000000",
		fontSize: 14,
		marginBottom: 5,
		marginLeft: 33,
	},
	text6: {
		color: "#FFFFFF",
		fontSize: 16,
	},
	text7: {
		color: "#4C6FFF",
		fontSize: 12,
		marginRight: 4,
		flex: 1,
	},
	text8: {
		color: "#7A7979",
		fontSize: 12,
		marginRight: 55,
	},
	text9: {
		color: "#7A7979",
		fontSize: 12,
		marginRight: 37,
	},
	text10: {
		color: "#221F1F",
		fontSize: 12,
		marginRight: 27,
	},
	text11: {
		color: "#221F1F",
		fontSize: 12,
	},
	view: {
		width: 25,
		backgroundColor: "#FFFFFF",
	},
});