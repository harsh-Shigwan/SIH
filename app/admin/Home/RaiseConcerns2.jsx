import React, {useState} from "react";
import { SafeAreaView, View, ScrollView, Text, Image, TextInput, TouchableOpacity, StyleSheet, } from "react-native";
export default (props) => {
	const [textInput1, onChangeTextInput1] = useState('');
	const [textInput2, onChangeTextInput2] = useState('');
	const [textInput3, onChangeTextInput3] = useState('');
	const [textInput4, onChangeTextInput4] = useState('');
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>
				<View style={styles.row}>
					<Text style={styles.text}>
						{"9:41"}
					</Text>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/49e059cf-c5de-40c9-9795-fa978a0b4aae"}} 
						resizeMode = {"stretch"}
						style={styles.image}
					/>
				</View>
				<View style={styles.column}>
					<View style={styles.row2}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0b0356bd-53a1-4723-9b31-82c10fe811de"}} 
							resizeMode = {"stretch"}
							style={styles.image2}
						/>
						<View style={styles.box}>
						</View>
						<Text style={styles.text2}>
							{"Raise Concerns"}
						</Text>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d5465c07-0eef-4b58-9e4e-8b92881e1db8"}} 
							resizeMode = {"stretch"}
							style={styles.image2}
						/>
					</View>
					<View style={styles.row3}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/04355b3c-c85f-425d-9a81-cd2e4ca25b95"}} 
							resizeMode = {"stretch"}
							style={styles.image3}
						/>
						<View style={styles.view}>
							<View >
								<View style={styles.box2}>
								</View>
								<View style={styles.box3}>
								</View>
							</View>
						</View>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a9f915b1-4a9e-484f-9259-e1c96ede4873"}} 
							resizeMode = {"stretch"}
							style={styles.image3}
						/>
						<View style={styles.view2}>
							<View >
								<View style={styles.box4}>
								</View>
								<View style={styles.box3}>
								</View>
							</View>
						</View>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/594ffdcf-c199-4768-967f-58647bcac538"}} 
							resizeMode = {"stretch"}
							style={styles.image3}
						/>
						<View style={styles.box5}>
						</View>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/19907791-a2e0-41b5-9c9b-fc099f976925"}} 
							resizeMode = {"stretch"}
							style={styles.image3}
						/>
					</View>
					<View style={styles.box6}>
					</View>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6b92e40e-7f1d-4b6b-b317-739c4758685b"}} 
						resizeMode = {"stretch"}
						style={styles.image4}
					/>
					<Text style={styles.text3}>
						{"Select The issue type "}
					</Text>
					<View style={styles.row4}>
						<TextInput
							placeholder={"None"}
							value={textInput1}
							onChangeText={onChangeTextInput1}
							style={styles.input}
						/>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/984abbaa-673d-490e-b5ae-4d7163020b45"}} 
							resizeMode = {"stretch"}
							style={styles.image5}
						/>
					</View>
					<Text style={styles.text4}>
						{"Description of the Issue"}
					</Text>
					<View style={styles.row5}>
						<Text style={styles.text5}>
							{"Give a briefe description of the issue...."}
						</Text>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bfaf0f12-445f-4728-87b0-067c67dc7239"}} 
							resizeMode = {"stretch"}
							style={styles.image6}
						/>
					</View>
					<Text style={styles.text4}>
						{"Date/Time of Incident"}
					</Text>
					<View style={styles.row6}>
						<TextInput
							placeholder={"18/03/2024"}
							value={textInput2}
							onChangeText={onChangeTextInput2}
							style={styles.input2}
						/>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/caae5831-802a-4361-a5aa-57f0469bfea6"}} 
							resizeMode = {"stretch"}
							style={styles.image6}
						/>
					</View>
					<Text style={styles.text3}>
						{"Related Department"}
					</Text>
					<View style={styles.row7}>
						<TextInput
							placeholder={"None"}
							value={textInput3}
							onChangeText={onChangeTextInput3}
							style={styles.input3}
						/>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/615103a8-2b83-485e-9bbe-ca025a85563e"}} 
							resizeMode = {"stretch"}
							style={styles.image5}
						/>
					</View>
					<Text style={styles.text6}>
						{"Evidence/Attachments"}
					</Text>
					<View style={styles.row8}>
						<TextInput
							placeholder={"Chose a file (img,video,audio)...."}
							value={textInput4}
							onChangeText={onChangeTextInput4}
							style={styles.input4}
						/>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/070484dd-deb7-4226-bb28-e6c7dce2ec3a"}} 
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
					<View style={styles.row9}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b3ce9e9d-339d-41c7-8f7d-a712e514fc66"}} 
							resizeMode = {"stretch"}
							style={styles.image7}
						/>
						<View style={styles.box}>
						</View>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/03cdd752-c565-45df-b6af-fce71a208f9f"}} 
							resizeMode = {"stretch"}
							style={styles.image8}
						/>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ea7f99ea-2db7-4095-bd85-28140f6f6314"}} 
							resizeMode = {"stretch"}
							style={styles.image9}
						/>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9e4c3b17-d162-4424-8165-5baf8f9c6f78"}} 
							resizeMode = {"stretch"}
							style={styles.image10}
						/>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/53d2e74f-ba90-4664-bd87-2efe6cd9531f"}} 
							resizeMode = {"stretch"}
							style={styles.image2}
						/>
					</View>
					<View style={styles.row10}>
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
		flex: 1,
	},
	box2: {
		height: 6,
		backgroundColor: "#4C6FFFCC",
		borderRadius: 40,
	},
	box3: {
		height: 6,
		backgroundColor: "#EFF0F6",
		borderRadius: 40,
	},
	box4: {
		height: 6,
		backgroundColor: "#4C6FFFCC",
		borderRadius: 40,
		marginHorizontal: 1,
	},
	box5: {
		width: 60,
		height: 6,
		backgroundColor: "#EFF0F6",
		borderRadius: 40,
	},
	box6: {
		height: 1,
		backgroundColor: "#D9DBE8",
		marginBottom: 23,
		marginHorizontal: 15,
	},
	button: {
		alignItems: "center",
		backgroundColor: "#4C6FFFCC",
		borderRadius: 10,
		paddingVertical: 18,
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
	},
	image3: {
		width: 20,
		height: 20,
	},
	image4: {
		width: 24,
		height: 24,
		marginBottom: 12,
		marginHorizontal: 36,
	},
	image5: {
		width: 10,
		height: 5,
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
	input: {
		color: "#939393",
		fontSize: 14,
		marginRight: 4,
		flex: 1,
		paddingVertical: 18,
	},
	input2: {
		color: "#939393",
		fontSize: 14,
		marginRight: 4,
		flex: 1,
		paddingVertical: 15,
	},
	input3: {
		color: "#939393",
		fontSize: 14,
		marginRight: 4,
		flex: 1,
		paddingVertical: 17,
	},
	input4: {
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
		marginBottom: 31,
	},
	row3: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 34,
		marginHorizontal: 15,
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
		backgroundColor: "#FFFFFF",
		borderColor: "#EDF1F3",
		borderRadius: 10,
		borderWidth: 1,
		paddingTop: 8,
		paddingBottom: 137,
		paddingHorizontal: 14,
		marginBottom: 29,
		marginHorizontal: 36,
	},
	row6: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderColor: "#EDF1F3",
		borderRadius: 10,
		borderWidth: 1,
		paddingHorizontal: 14,
		marginBottom: 28,
		marginHorizontal: 36,
	},
	row7: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderColor: "#EDF1F3",
		borderRadius: 10,
		borderWidth: 1,
		paddingHorizontal: 15,
		marginBottom: 28,
		marginHorizontal: 36,
	},
	row8: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderColor: "#EDF1F3",
		borderRadius: 10,
		borderWidth: 1,
		paddingHorizontal: 14,
		marginBottom: 45,
		marginHorizontal: 35,
	},
	row9: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 8,
	},
	row10: {
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
		marginRight: 77,
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
		marginTop: 4,
		marginRight: 4,
		flex: 1,
	},
	text6: {
		color: "#6C7278",
		fontSize: 12,
		marginBottom: 8,
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
	},
	view2: {
		width: 60,
	},
});