import React, {useState} from "react";
import { SafeAreaView, View, ScrollView, Text, Image, TextInput, TouchableOpacity, StyleSheet, } from "react-native";
export default (props) => {
	const [textInput1, onChangeTextInput1] = useState('');
	const [textInput2, onChangeTextInput2] = useState('');
	const [textInput3, onChangeTextInput3] = useState('');
	const [textInput4, onChangeTextInput4] = useState('');
	const [textInput5, onChangeTextInput5] = useState('');
	const [textInput6, onChangeTextInput6] = useState('');
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>
			
				<View style={styles.row2}>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/753bb96e-75d6-40fd-b380-ad624f0a0835"}} 
						resizeMode = {"stretch"}
						style={styles.image2}
					/>
					<Text style={styles.text2}>
						{"Add Policy Description"}
					</Text>
				</View>
				<View style={styles.column}>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8325f60a-d125-4783-8f51-8837cd23b513"}} 
						resizeMode = {"stretch"}
						style={styles.image3}
					/>
					<Text style={styles.text3}>
						{" Policy Name"}
					</Text>
					<View style={styles.row3}>
						<Text style={styles.text4}>
							{"Policy Name: "}
						</Text>
						<TextInput
							placeholder={"Enter policy name"}
							value={textInput1}
							onChangeText={onChangeTextInput1}
							style={styles.input}
						/>
					</View>
					<View style={styles.row3}>
						<Text style={styles.text4}>
							{"Launch Date: "}
						</Text>
						<TextInput
							placeholder={"Enter launch date "}
							value={textInput2}
							onChangeText={onChangeTextInput2}
							style={styles.input}
						/>
					</View>
					<View style={styles.row4}>
						<Text style={styles.text5}>
							{"Validity:"}
						</Text>
						<TextInput
							placeholder={"Enter validity"}
							value={textInput3}
							onChangeText={onChangeTextInput3}
							style={styles.input}
						/>
					</View>
					<Text style={styles.text6}>
						{"Description:"}
					</Text>
					<View style={styles.view}>
						<Text style={styles.text7}>
							{"Give a brief description of the policy...."}
						</Text>
					</View>
					<Text style={styles.text8}>
						{"Target Beneficiaries:"}
					</Text>
					<TextInput
						placeholder={"Enter target beneficiaries"}
						value={textInput4}
						onChangeText={onChangeTextInput4}
						style={styles.input2}
					/>
					<Text style={styles.text9}>
						{"Category:"}
					</Text>
					<View style={styles.row5}>
						<TextInput
							placeholder={"Select the category"}
							value={textInput5}
							onChangeText={onChangeTextInput5}
							style={styles.input3}
						/>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/27519775-87da-4698-a90c-2878239a0482"}} 
							resizeMode = {"stretch"}
							style={styles.image4}
						/>
					</View>
					<Text style={styles.text9}>
						{"Budget Allocated:"}
					</Text>
					<TextInput
						placeholder={"Enter the allocated budget"}
						value={textInput6}
						onChangeText={onChangeTextInput6}
						style={styles.input4}
					/>
					<TouchableOpacity style={styles.button} onPress={()=>alert('Pressed!')}>
						<Text style={styles.text10}>
							{"Save "}
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
		flex: 1,
	},
	button: {
		alignItems: "center",
		backgroundColor: "#4C6FFF",
		borderRadius: 6,
		paddingVertical: 13,
		marginHorizontal: 112,
	},
	column: {
		backgroundColor: "#FFFFFF",
		borderColor: "#EEEEEE",
		borderRadius: 16,
		borderWidth: 1,
		paddingTop: 32,
		paddingBottom: 139,
		marginBottom: 22,
		marginHorizontal: 17,
		shadowColor: "#0C1A4B3B",
		shadowOpacity: 0.2,
		shadowOffset: {
		    width: 0,
		    height: 0
		},
		shadowRadius: 1,
		elevation: 1,
	},
	column2: {
		backgroundColor: "#FFFFFF",
		borderColor: "#EEEEEE",
		borderWidth: 1,
		paddingVertical: 17,
		paddingHorizontal: 18,
	},
	image: {
		width: 69,
		height: 11,
	},
	image2: {
		width: 24,
		height: 24,
		marginRight: 33,
	},
	image3: {
		height: 118,
		marginBottom: 3,
		marginHorizontal: 105,
	},
	image4: {
		width: 24,
		height: 24,
	},
	image5: {
		width: 19,
		height: 20,
		marginRight: 52,
	},
	image6: {
		width: 24,
		height: 24,
		marginRight: 51,
	},
	input: {
		color: "#939393",
		fontSize: 10,
		width: 167,
		backgroundColor: "#FFFFFF",
		borderColor: "#EDF1F3",
		borderRadius: 10,
		borderWidth: 1,
		paddingVertical: 11,
		paddingHorizontal: 14,
	},
	input2: {
		color: "#939393",
		fontSize: 10,
		marginBottom: 12,
		marginHorizontal: 23,
		backgroundColor: "#FFFFFF",
		borderColor: "#EDF1F3",
		borderRadius: 10,
		borderWidth: 1,
		paddingVertical: 11,
		paddingHorizontal: 14,
	},
	input3: {
		color: "#939393",
		fontSize: 10,
		marginRight: 4,
		flex: 1,
		paddingVertical: 8,
	},
	input4: {
		color: "#939393",
		fontSize: 10,
		marginBottom: 19,
		marginHorizontal: 23,
		backgroundColor: "#FFFFFF",
		borderColor: "#EDF1F3",
		borderRadius: 10,
		borderWidth: 1,
		paddingVertical: 11,
		paddingHorizontal: 14,
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 30,
		marginHorizontal: 25,
	},
	row2: {
		flexDirection: "row",
		marginBottom: 37,
		marginHorizontal: 16,
	},
	row3: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 7,
		marginHorizontal: 23,
	},
	row4: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 16,
		marginHorizontal: 23,
	},
	row5: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderColor: "#EDF1F3",
		borderRadius: 10,
		borderWidth: 1,
		paddingHorizontal: 14,
		marginBottom: 12,
		marginHorizontal: 23,
	},
	row6: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 8,
	},
	row7: {
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
		color: "#233876",
		fontSize: 20,
		marginTop: 15,
		flex: 1,
	},
	text3: {
		color: "#233876",
		fontSize: 20,
		marginBottom: 63,
		marginHorizontal: 102,
	},
	text4: {
		fontSize: 14,
	},
	text5: {
		color: "#233876",
		fontSize: 14,
		marginRight: 4,
		flex: 1,
	},
	text6: {
		color: "#718096",
		fontSize: 14,
		marginBottom: 10,
		marginLeft: 23,
	},
	text7: {
		color: "#939393",
		fontSize: 10,
	},
	text8: {
		color: "#233876",
		fontSize: 14,
		marginBottom: 10,
		marginHorizontal: 23,
	},
	text9: {
		color: "#233876",
		fontSize: 14,
		marginBottom: 10,
		marginLeft: 23,
	},
	text10: {
		color: "#FFFFFF",
		fontSize: 14,
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
		marginRight: 30,
	},
	text13: {
		color: "#221F1F",
		fontSize: 12,
		marginRight: 27,
	},
	text14: {
		color: "#221F1F",
		fontSize: 12,
	},
	view: {
		backgroundColor: "#FFFFFF",
		borderColor: "#EDF1F3",
		borderRadius: 10,
		borderWidth: 1,
		paddingTop: 11,
		paddingBottom: 75,
		paddingHorizontal: 14,
		marginBottom: 12,
		marginHorizontal: 23,
	},
});