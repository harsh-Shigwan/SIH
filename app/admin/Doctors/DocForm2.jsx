import React, {useState} from "react";
import { SafeAreaView, View, ScrollView, Text, Image, TextInput, TouchableOpacity, StyleSheet, } from "react-native";
export default (props) => {
	const [textInput1, onChangeTextInput1] = useState('');
	const [textInput2, onChangeTextInput2] = useState('');
	const [textInput3, onChangeTextInput3] = useState('');
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>
				<View style={styles.row}>
					<Text style={styles.text}>
						{"9:41"}
					</Text>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6dec6ecc-cad6-4757-ae17-722f2e3914b9"}} 
						resizeMode = {"stretch"}
						style={styles.image}
					/>
				</View>
				<View style={styles.column}>
					<View style={styles.row2}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/75c726bc-883c-4632-9462-fc7701ff0f6b"}} 
							resizeMode = {"stretch"}
							style={styles.image2}
						/>
						<Text style={styles.text2}>
							{"Add Doctors"}
						</Text>
					</View>
					<View style={styles.row3}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/54b9db5e-0c28-4c72-a2b4-47d8023a1c27"}} 
							resizeMode = {"stretch"}
							style={styles.image3}
						/>
						<View style={styles.view}>
							<View >
								<View style={styles.box}>
								</View>
								<View style={styles.box2}>
								</View>
							</View>
						</View>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/29c57ae1-ac6d-43c9-833e-d384c207e833"}} 
							resizeMode = {"stretch"}
							style={styles.image3}
						/>
						<View style={styles.box3}>
						</View>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/203cd5f2-46b6-4f02-ba8b-ba3208e5dd04"}} 
							resizeMode = {"stretch"}
							style={styles.image4}
						/>
					</View>
					<View style={styles.box4}>
					</View>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f1a34abd-c55a-45f0-891a-a240c14cf406"}} 
						resizeMode = {"stretch"}
						style={styles.image5}
					/>
					<Text style={styles.text3}>
						{"Profile Photo"}
					</Text>
					<View style={styles.row4}>
						<TextInput
							placeholder={"browse an image"}
							value={textInput1}
							onChangeText={onChangeTextInput1}
							style={styles.input}
						/>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4341e9ad-4cb0-4c97-aa48-a86fe947f4cb"}} 
							resizeMode = {"stretch"}
							style={styles.image6}
						/>
					</View>
					<Text style={styles.text4}>
						{"Address"}
					</Text>
					<View style={styles.view2}>
						<Text style={styles.text5}>
							{"Write the address of the doctor...."}
						</Text>
					</View>
					<Text style={styles.text4}>
						{"Medical license  number"}
					</Text>
					<TextInput
						placeholder={"None"}
						value={textInput2}
						onChangeText={onChangeTextInput2}
						style={styles.input2}
					/>
					<Text style={styles.text6}>
						{"License File"}
					</Text>
					<View style={styles.row5}>
						<TextInput
							placeholder={"Chose a file (img,video,audio)...."}
							value={textInput3}
							onChangeText={onChangeTextInput3}
							style={styles.input3}
						/>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b08e18b6-ca24-4536-be34-385d719b30e8"}} 
							resizeMode = {"stretch"}
							style={styles.image6}
						/>
					</View>
					<TouchableOpacity style={styles.button} onPress={()=>alert('Pressed!')}>
						<Text style={styles.text7}>
							{"Next"}
						</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.column2}>
					<View style={styles.row6}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d647e631-27d8-4d53-9f24-648d11e00470"}} 
							resizeMode = {"stretch"}
							style={styles.image7}
						/>
						<View style={styles.box5}>
						</View>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f01ce9e4-9e94-47ff-b5b3-f0bdf56d3af7"}} 
							resizeMode = {"stretch"}
							style={styles.image8}
						/>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c025f20c-1d75-41fe-b70b-643953615271"}} 
							resizeMode = {"stretch"}
							style={styles.image9}
						/>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/344dea27-49a6-4273-af83-e6caa6eb1b0a"}} 
							resizeMode = {"stretch"}
							style={styles.image10}
						/>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2fe3bcea-4ba8-4512-89d6-71e2cdfd4c23"}} 
							resizeMode = {"stretch"}
							style={styles.image11}
						/>
					</View>
					<View style={styles.row7}>
						<Text style={styles.text8}>
							{"Home"}
						</Text>
						<Text style={styles.text9}>
							{"  Doctors"}
						</Text>
						<Text style={styles.text9}>
							{"Policies"}
						</Text>
						<Text style={styles.text10}>
							{"Queries"}
						</Text>
						<Text style={styles.text10}>
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
	box: {
		height: 6,
		backgroundColor: "#4C6FFFCC",
		borderRadius: 40,
	},
	box2: {
		height: 6,
		backgroundColor: "#EFF0F6",
		borderRadius: 40,
	},
	box3: {
		width: 60,
		height: 6,
		backgroundColor: "#EFF0F6",
		borderRadius: 40,
		marginRight: 13,
	},
	box4: {
		height: 1,
		backgroundColor: "#D9DBE8",
		marginBottom: 23,
		marginHorizontal: 15,
	},
	box5: {
		flex: 1,
	},
	button: {
		alignItems: "center",
		backgroundColor: "#4C6FFFCC",
		borderRadius: 10,
		paddingVertical: 19,
		marginHorizontal: 36,
	},
	column: {
		backgroundColor: "#FFFFFF",
		borderColor: "#EFF0F6",
		borderWidth: 1,
		paddingBottom: 83,
		marginBottom: 33,
		marginHorizontal: 7,
	},
	column2: {
		backgroundColor: "#FFFFFF",
		borderColor: "#EEEEEE",
		borderWidth: 1,
		paddingVertical: 17,
		paddingHorizontal: 25,
	},
	image: {
		width: 66,
		height: 11,
	},
	image2: {
		width: 24,
		height: 24,
		marginRight: 89,
	},
	image3: {
		width: 20,
		height: 20,
		marginRight: 11,
	},
	image4: {
		borderRadius: 40,
		width: 20,
		height: 20,
	},
	image5: {
		width: 24,
		height: 24,
		marginBottom: 12,
		marginHorizontal: 36,
	},
	image6: {
		width: 16,
		height: 16,
	},
	image7: {
		width: 19,
		height: 20,
	},
	image8: {
		width: 24,
		height: 24,
		marginRight: 51,
	},
	image9: {
		width: 24,
		height: 24,
		marginRight: 53,
	},
	image10: {
		width: 15,
		height: 20,
		marginRight: 49,
	},
	image11: {
		width: 24,
		height: 24,
	},
	input: {
		color: "#939393",
		fontSize: 14,
		marginRight: 4,
		flex: 1,
		paddingVertical: 15,
	},
	input2: {
		color: "#939393",
		fontSize: 14,
		marginBottom: 23,
		marginHorizontal: 36,
		backgroundColor: "#FFFFFF",
		borderColor: "#EDF1F3",
		borderRadius: 10,
		borderWidth: 1,
		paddingVertical: 18,
		paddingHorizontal: 15,
	},
	input3: {
		color: "#939393",
		fontSize: 13,
		marginRight: 26,
		flex: 1,
		paddingVertical: 15,
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 12,
		marginHorizontal: 16,
	},
	row2: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		paddingVertical: 14,
		paddingHorizontal: 16,
		marginBottom: 29,
	},
	row3: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 36,
		marginHorizontal: 54,
	},
	row4: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderColor: "#EDF1F3",
		borderRadius: 10,
		borderWidth: 1,
		paddingHorizontal: 15,
		marginBottom: 14,
		marginHorizontal: 36,
	},
	row5: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderColor: "#EDF1F3",
		borderRadius: 10,
		borderWidth: 1,
		paddingHorizontal: 14,
		marginBottom: 145,
		marginHorizontal: 35,
	},
	row6: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 8,
	},
	row7: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	scrollView: {
		flex: 1,
		backgroundColor: "#FFFFFF",
		paddingTop: 17,
	},
	text: {
		color: "#020E22",
		fontSize: 15,
	},
	text2: {
		color: "#18181B",
		fontSize: 16,
		flex: 1,
	},
	text3: {
		color: "#6C7278",
		fontSize: 12,
		marginBottom: 8,
		marginLeft: 36,
	},
	text4: {
		color: "#6C7278",
		fontSize: 12,
		marginBottom: 7,
		marginLeft: 36,
	},
	text5: {
		color: "#939393",
		fontSize: 10,
	},
	text6: {
		color: "#6C7278",
		fontSize: 12,
		marginBottom: 7,
		marginLeft: 35,
	},
	text7: {
		color: "#FFFFFF",
		fontSize: 15,
	},
	text8: {
		color: "#4C6FFF",
		fontSize: 12,
	},
	text9: {
		color: "#7A7979",
		fontSize: 12,
	},
	text10: {
		color: "#221F1F",
		fontSize: 12,
	},
	view: {
		width: 61,
		marginRight: 11,
	},
	view2: {
		backgroundColor: "#FFFFFF",
		borderColor: "#EDF1F3",
		borderRadius: 10,
		borderWidth: 1,
		paddingTop: 12,
		paddingBottom: 139,
		paddingHorizontal: 14,
		marginBottom: 29,
		marginHorizontal: 36,
	},
});