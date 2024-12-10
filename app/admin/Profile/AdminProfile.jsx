import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image, TouchableOpacity, StyleSheet, } from "react-native";
export default (props) => {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>
				<View style={styles.row}>
					<Text style={styles.text}>
						{"9:40"}
					</Text>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c1e2f36d-6e48-4d54-8c74-470bc9229d80"}} 
						resizeMode = {"stretch"}
						style={styles.image}
					/>
				</View>
				<View style={styles.column}>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/67c5cc72-6869-4de1-b2c3-9d79d138fbb9"}} 
						resizeMode = {"stretch"}
						style={styles.image2}
					/>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aad9ebb1-1811-4063-985c-f87e9f3cff2b"}} 
						resizeMode = {"stretch"}
						style={styles.image3}
					/>
					<Text style={styles.text2}>
						{" Rajesh Sharma"}
					</Text>
					<View style={styles.row2}>
						<View style={styles.column2}>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a535db47-2cea-4a19-b511-7a573f35fc7b"}} 
								resizeMode = {"stretch"}
								style={styles.image4}
							/>
							<Text style={styles.text3}>
								{"    Name"}
							</Text>
						</View>
						<View style={styles.box}>
						</View>
						<View style={styles.column3}>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f8338845-884a-4e73-aca4-1aba9a121634"}} 
								resizeMode = {"stretch"}
								style={styles.image5}
							/>
							<Text style={styles.text4}>
								{"Role"}
							</Text>
						</View>
						<View style={styles.box2}>
						</View>
						<View style={styles.box3}>
						</View>
						<View style={styles.column4}>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f94081f5-2e98-4132-a6f8-388e23973619"}} 
								resizeMode = {"stretch"}
								style={styles.image6}
							/>
							<Text style={styles.text3}>
								{"Contact"}
							</Text>
						</View>
					</View>
					<View style={styles.row3}>
						<Text style={styles.text5}>
							{"Rajesh Sharma"}
						</Text>
						<Text style={styles.text6}>
							{"Super Admin"}
						</Text>
						<View style={styles.box4}>
						</View>
						<Text style={styles.text6}>
							{"9876543210"}
						</Text>
					</View>
					<View style={styles.column5}>
						<Text style={styles.text7}>
							{"Email: rajesh.sharma@healthdept.in"}
						</Text>
						<Text style={styles.text8}>
							{"Location: New Delhi, India"}
						</Text>
					</View>
					<View style={styles.row4}>
						<View style={styles.column6}>
							<Text style={styles.text9}>
								{"5"}
							</Text>
							<Text style={styles.text10}>
								{"Total Active Programs"}
							</Text>
						</View>
						<View style={styles.column7}>
							<Text style={styles.text11}>
								{"50"}
							</Text>
							<Text style={styles.text3}>
								{"Registered Hospitals"}
							</Text>
						</View>
						<View style={styles.column8}>
							<Text style={styles.text11}>
								{"120"}
							</Text>
							<Text style={styles.text3}>
								{"Registered Doctors"}
							</Text>
						</View>
					</View>
					<View style={styles.column9}>
						<Text style={styles.text12}>
							{"Quick Actions"}
						</Text>
						<View style={styles.row5}>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9096ef52-1d3b-41be-9cc0-ca57a8c620ad"}} 
								resizeMode = {"stretch"}
								style={styles.image7}
							/>
							<Text style={styles.text13}>
								{" Add New Policy/Program"}
							</Text>
						</View>
						<View style={styles.row5}>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7abd8b51-a2cd-45a9-9177-48ea7128f1c6"}} 
								resizeMode = {"stretch"}
								style={styles.image7}
							/>
							<Text style={styles.text13}>
								{"View Registered Hospitals"}
							</Text>
						</View>
						<View style={styles.row6}>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bb4033ce-f523-41a9-8fd6-00f3ee8f9e2c"}} 
								resizeMode = {"stretch"}
								style={styles.image7}
							/>
							<Text style={styles.text13}>
								{"View Registered Hospitals"}
							</Text>
						</View>
					</View>
					<TouchableOpacity style={styles.buttonRow} onPress={()=>alert('Pressed!')}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3e955d7b-f095-4ebb-84e7-c4d95e3f2210"}} 
							resizeMode = {"stretch"}
							style={styles.image8}
						/>
						<Text style={styles.text14}>
							{"Edit Profile   "}
						</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.column10}>
					<View style={styles.row7}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d7f570ee-2c53-4a87-b0d4-faae891866d9"}} 
							resizeMode = {"stretch"}
							style={styles.image9}
						/>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/059585a1-20aa-46ca-8b78-7a51f87fd659"}} 
							resizeMode = {"stretch"}
							style={styles.image10}
						/>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fb837a7d-e8fb-4d8e-8528-6fb756b96940"}} 
							resizeMode = {"stretch"}
							style={styles.image11}
						/>
						<View style={styles.box4}>
						</View>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/601527e6-83c8-4d6c-a4c9-b33828720b03"}} 
							resizeMode = {"stretch"}
							style={styles.image11}
						/>
					</View>
					<View style={styles.row8}>
						<Text style={styles.text15}>
							{"Home"}
						</Text>
						<Text style={styles.text16}>
							{"  Doctors"}
						</Text>
						<Text style={styles.text16}>
							{"Policies"}
						</Text>
						<Text style={styles.text17}>
							{"Queries"}
						</Text>
						<Text style={styles.text18}>
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
		width: 1,
		height: 44,
		backgroundColor: "#407CE21F",
		marginRight: 36,
	},
	box2: {
		width: 1,
		height: 44,
		backgroundColor: "#407CE21F",
	},
	box3: {
		flex: 1,
		alignSelf: "stretch",
	},
	box4: {
		flex: 1,
	},
	buttonRow: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#4C6FFF",
		borderRadius: 6,
		paddingVertical: 12,
		marginHorizontal: 105,
	},
	column: {
		backgroundColor: "#F1F4FF",
		borderColor: "#E3E3E30D",
		borderRadius: 20,
		borderWidth: 1,
		paddingTop: 8,
		paddingBottom: 20,
		marginBottom: 14,
		marginHorizontal: 12,
	},
	column2: {
		width: 32,
		marginRight: 40,
	},
	column3: {
		width: 32,
		marginRight: 30,
	},
	column4: {
		width: 40,
	},
	column5: {
		backgroundColor: "#FFFFFF",
		borderColor: "#E3E3E333",
		borderRadius: 20,
		borderWidth: 1,
		paddingVertical: 22,
		paddingHorizontal: 17,
		marginBottom: 24,
		marginHorizontal: 12,
	},
	column6: {
		width: 96,
		backgroundColor: "#FFFFFF",
		borderColor: "#E3E3E333",
		borderRadius: 20,
		borderWidth: 1,
		paddingVertical: 35,
	},
	column7: {
		width: 96,
		backgroundColor: "#FFFFFF",
		borderColor: "#E3E3E333",
		borderRadius: 20,
		borderWidth: 1,
		paddingVertical: 35,
		paddingHorizontal: 22,
	},
	column8: {
		width: 96,
		backgroundColor: "#FFFFFF",
		borderColor: "#E3E3E333",
		borderRadius: 20,
		borderWidth: 1,
		paddingVertical: 35,
		paddingHorizontal: 21,
	},
	column9: {
		backgroundColor: "#FFFFFF",
		borderColor: "#E3E3E333",
		borderRadius: 20,
		borderWidth: 1,
		paddingTop: 14,
		paddingBottom: 55,
		marginBottom: 17,
		marginHorizontal: 12,
	},
	column10: {
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
		marginBottom: 17,
		marginHorizontal: 8,
	},
	image3: {
		height: 93,
		marginBottom: 17,
		marginHorizontal: 116,
	},
	image4: {
		height: 32,
		marginBottom: 9,
	},
	image5: {
		height: 32,
		marginBottom: 8,
	},
	image6: {
		height: 32,
		marginBottom: 11,
		marginHorizontal: 4,
	},
	image7: {
		width: 24,
		height: 24,
		marginRight: 5,
	},
	image8: {
		width: 12,
		height: 12,
		marginRight: 9,
	},
	image9: {
		width: 19,
		height: 20,
		marginRight: 51,
	},
	image10: {
		width: 24,
		height: 24,
		marginRight: 51,
	},
	image11: {
		width: 24,
		height: 24,
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
		marginBottom: 5,
		marginHorizontal: 36,
	},
	row3: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 26,
		marginHorizontal: 18,
	},
	row4: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 43,
		marginHorizontal: 12,
	},
	row5: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 5,
		marginHorizontal: 20,
	},
	row6: {
		flexDirection: "row",
		alignItems: "center",
		marginHorizontal: 20,
	},
	row7: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 8,
	},
	row8: {
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
		fontSize: 12,
		marginBottom: 18,
		marginHorizontal: 117,
	},
	text3: {
		color: "#407CE2",
		fontSize: 10,
	},
	text4: {
		color: "#407CE2",
		fontSize: 10,
		marginHorizontal: 1,
	},
	text5: {
		color: "#4C6FFF",
		fontSize: 12,
		marginRight: 21,
	},
	text6: {
		color: "#4C6FFF",
		fontSize: 12,
	},
	text7: {
		color: "#407CE2",
		fontSize: 12,
		marginBottom: 13,
	},
	text8: {
		color: "#407CE2",
		fontSize: 12,
	},
	text9: {
		color: "#4C6FFF",
		fontSize: 36,
		marginBottom: 19,
		marginHorizontal: 38,
	},
	text10: {
		color: "#407CE2",
		fontSize: 10,
		marginHorizontal: 18,
	},
	text11: {
		color: "#4C6FFF",
		fontSize: 36,
		marginBottom: 19,
	},
	text12: {
		color: "#233876",
		fontSize: 20,
		marginBottom: 21,
		marginHorizontal: 91,
	},
	text13: {
		color: "#4C6FFF",
		fontSize: 12,
		flex: 1,
	},
	text14: {
		color: "#FFFFFF",
		fontSize: 12,
	},
	text15: {
		color: "#4C6FFF",
		fontSize: 12,
		marginRight: 4,
		flex: 1,
	},
	text16: {
		color: "#7A7979",
		fontSize: 12,
		marginRight: 30,
	},
	text17: {
		color: "#221F1F",
		fontSize: 12,
		marginRight: 27,
	},
	text18: {
		color: "#221F1F",
		fontSize: 12,
	},
});