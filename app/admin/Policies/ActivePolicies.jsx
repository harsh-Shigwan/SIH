import React, {useState} from "react";
import { SafeAreaView, View, ScrollView, Text, Image, TextInput, StyleSheet, } from "react-native";
export default (props) => {
	const [textInput1, onChangeTextInput1] = useState('');
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>
				<View style={styles.row}>
					<Text style={styles.text}>
						{"9:40"}
					</Text>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/46b8089e-d28e-4783-bfca-9e68d38c89ea"}} 
						resizeMode = {"stretch"}
						style={styles.image}
					/>
				</View>
				<View style={styles.column}>
					<Text style={styles.text2}>
						{"Health Programs and Policies"}
					</Text>
					<View style={styles.row2}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c91d7aa7-2bab-4fbf-8f87-969819eee1ac"}} 
							resizeMode = {"stretch"}
							style={styles.image2}
						/>
						<TextInput
							placeholder={"Search policies by title"}
							value={textInput1}
							onChangeText={onChangeTextInput1}
							style={styles.input}
						/>
					</View>
					<View style={styles.row3}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3203c84f-1359-4c05-be79-8b9c30bd9db5"}} 
							resizeMode = {"stretch"}
							style={styles.image3}
						/>
						<View style={styles.column2}>
							<Text style={styles.text3}>
								{"Ayushman Bharat - PMJAY"}
							</Text>
							<Text style={styles.text4}>
								{"₹5L health coverage for poor families."}
							</Text>
						</View>
					</View>
					<View style={styles.row3}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9d3b11fd-9505-44a6-bfb3-fb5bb503bc10"}} 
							resizeMode = {"stretch"}
							style={styles.image3}
						/>
						<View style={styles.column2}>
							<Text style={styles.text5}>
								{"ICDS (Integrated Child Development Services)"}
							</Text>
							<Text style={styles.text4}>
								{"Nutrition and care for kids and mothers."}
							</Text>
						</View>
					</View>
					<View style={styles.row4}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d583d4d6-0444-45c8-a5ae-4c6488e7211b"}} 
							resizeMode = {"stretch"}
							style={styles.image4}
						/>
						<View style={styles.column3}>
							<Text style={styles.text6}>
								{"Rashtriya Swasthya Bima Yojana (RSBY)"}
							</Text>
							<Text style={styles.text4}>
								{"₹5L health coverage for poor families."}
							</Text>
						</View>
					</View>
					<View style={styles.row3}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f60d25d7-a79f-47d6-98df-d57cb3b38f5e"}} 
							resizeMode = {"stretch"}
							style={styles.image5}
						/>
						<View style={styles.column2}>
							<Text style={styles.text5}>
								{"National Immunization Program (NIP)"}
							</Text>
							<Text style={styles.text4}>
								{"Free vaccines for children."}
							</Text>
						</View>
					</View>
					<View style={styles.row5}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d9f93002-416e-4fc0-b153-5bc8d1b41908"}} 
							resizeMode = {"stretch"}
							style={styles.image6}
						/>
						<View style={styles.column3}>
							<Text style={styles.text6}>
								{"Rashtriya Swasthya Bima Yojana (RSBY)"}
							</Text>
							<Text style={styles.text4}>
								{"₹30K hospitalization for BPL families."}
							</Text>
						</View>
					</View>
				</View>
				<Text style={styles.text7}>
					{"Add New Policy"}
				</Text>
				<View >
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ec2fe44c-0efc-41e3-9671-b7406f98b768"}} 
						resizeMode = {"stretch"}
						style={styles.image7}
					/>
					<View style={styles.column4}>
						<View style={styles.row6}>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7fa7742b-a784-4b46-a247-6f3ad3607471"}} 
								resizeMode = {"stretch"}
								style={styles.image8}
							/>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f29b9b1e-60d5-4d6b-b592-fc5c663b615d"}} 
								resizeMode = {"stretch"}
								style={styles.image9}
							/>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/563bcc64-4cdc-4898-a125-2e696324711d"}} 
								resizeMode = {"stretch"}
								style={styles.image10}
							/>
							<View style={styles.box}>
							</View>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c11beb83-218b-4bb0-9bd3-f30806281d07"}} 
								resizeMode = {"stretch"}
								style={styles.image10}
							/>
						</View>
						<View style={styles.row7}>
							<Text style={styles.text8}>
								{"Home"}
							</Text>
							<Text style={styles.text9}>
								{"  Doctors"}
							</Text>
							<Text style={styles.text10}>
								{"Policies"}
							</Text>
							<Text style={styles.text11}>
								{"Queries"}
							</Text>
							<Text style={styles.text4}>
								{"Profile"}
							</Text>
						</View>
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
	column: {
		backgroundColor: "#FFFFFF",
		borderColor: "#E3E3E333",
		borderRadius: 20,
		borderWidth: 1,
		paddingVertical: 26,
		marginBottom: 14,
		marginHorizontal: 23,
	},
	column2: {
		flex: 1,
	},
	column3: {
		width: 167,
	},
	column4: {
		backgroundColor: "#FFFFFF",
		borderColor: "#EEEEEE",
		borderWidth: 1,
		paddingVertical: 17,
		paddingHorizontal: 19,
		marginTop: -20,
	},
	image: {
		width: 69,
		height: 11,
	},
	image2: {
		width: 20,
		height: 20,
		marginRight: 11,
	},
	image3: {
		borderRadius: 20,
		width: 100,
		height: 93,
		marginRight: 15,
	},
	image4: {
		borderRadius: 20,
		width: 100,
		height: 93,
	},
	image5: {
		width: 100,
		height: 93,
		marginRight: 15,
	},
	image6: {
		borderRadius: 20,
		width: 94,
		height: 98,
	},
	image7: {
		height: 78,
		marginHorizontal: 130,
	},
	image8: {
		width: 19,
		height: 20,
		marginRight: 51,
	},
	image9: {
		width: 24,
		height: 24,
		marginRight: 51,
	},
	image10: {
		width: 24,
		height: 24,
	},
	input: {
		color: "#233876",
		fontSize: 14,
		flex: 1,
		paddingVertical: 7,
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 36,
		marginHorizontal: 25,
	},
	row2: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#EEF3FF",
		borderRadius: 30,
		paddingHorizontal: 31,
		marginBottom: 20,
		marginHorizontal: 11,
	},
	row3: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderColor: "#221F1F1A",
		borderRadius: 6,
		borderWidth: 1,
		paddingVertical: 8,
		paddingHorizontal: 9,
		marginBottom: 10,
	},
	row4: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderColor: "#221F1F1A",
		borderRadius: 6,
		borderWidth: 1,
		paddingVertical: 8,
		paddingLeft: 9,
		paddingRight: 20,
		marginBottom: 10,
	},
	row5: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderColor: "#221F1F1A",
		borderRadius: 6,
		borderWidth: 1,
		paddingVertical: 5,
		paddingLeft: 9,
		paddingRight: 20,
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
		marginBottom: 16,
		marginHorizontal: 57,
	},
	text3: {
		color: "#233876",
		fontSize: 14,
		marginBottom: 10,
	},
	text4: {
		color: "#221F1F",
		fontSize: 12,
	},
	text5: {
		color: "#233876",
		fontSize: 14,
		marginBottom: 11,
		marginHorizontal: 1,
	},
	text6: {
		color: "#233876",
		fontSize: 14,
		marginBottom: 11,
	},
	text7: {
		color: "#233876",
		fontSize: 20,
		marginBottom: 12,
		marginHorizontal: 105,
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
		marginRight: 29,
	},
	text10: {
		color: "#7A7979",
		fontSize: 12,
		marginRight: 30,
	},
	text11: {
		color: "#221F1F",
		fontSize: 12,
		marginRight: 27,
	},
});