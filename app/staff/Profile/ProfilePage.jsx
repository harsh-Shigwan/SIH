import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image, TouchableOpacity, StyleSheet, } from "react-native";
export default (props) => {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>
				
				<View style={styles.column}>
					<Image
						resizeMode = {"stretch"}
						style={styles.image2}
					/>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c45e957a-1487-411f-804b-8df613c62f00"}} 
						resizeMode = {"stretch"}
						style={styles.image3}
					/>
					<Text style={styles.text2}>
						{" Rajesh Sharma"}
					</Text>
					<View style={styles.row2}>
						<View style={styles.column2}>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5b209969-9b4c-410b-8918-d2bbd178d8e9"}} 
								resizeMode = {"stretch"}
								style={styles.image4}
							/>
							<Text style={styles.text16}>
								{"    Name"}
							</Text>
						</View>
						<View style={styles.box}>
						</View>
						<View style={styles.column3}>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/384ee0c4-26ee-40d5-a720-0f0dc747cece"}} 
								resizeMode = {"stretch"}
								style={styles.image5}
							/>
							<Text style={styles.text3}>
								{"Role"}
							</Text>
						</View>
						<View style={styles.box}>
						</View>
						<View style={styles.column4}>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3590dee4-1b78-41b7-959f-c31867887a40"}} 
								resizeMode = {"stretch"}
								style={styles.image6}
							/>
							<Text style={styles.text3}>
								{"Contact"}
							</Text>
						</View>
					</View>
					<View style={styles.row3}>
						<Text style={styles.text4}>
							{"Rajesh Sharma"}
						</Text>
						<Text style={styles.text9}>
							{"Staff"}
						</Text>
						<View style={styles.box2}>
						</View>
						<Text style={styles.text5}>
							{"9876543210"}
						</Text>
					</View>
					<View style={styles.column5}>
						<Text style={styles.text6}>
							{"Email: rajesh.sharma@healthdept.in"}
						</Text>
						<Text style={styles.text7}>
							{"Location: New Delhi, India"}
						</Text>
					</View>
					<View style={styles.column6}>
						<Text style={styles.text8}>
							{"Quick Actions"}
						</Text>
						<TouchableOpacity onPress={()=>props.navigation.navigate("ConcernsList")}>
						<View style={styles.row4}>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cbc8d490-9b58-4c53-829f-cb9ed8bbda70"}} 
								resizeMode = {"stretch"}
								style={styles.image7}
							/>
							<Text style={styles.text15}>
								{"Received Concerns from admin "}
							</Text>
						</View>
						</TouchableOpacity>
						<TouchableOpacity>
						<View style={styles.row5}>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/52b199d4-b1da-444e-89c8-cdaa3cf43441"}} 
								resizeMode = {"stretch"}
								style={styles.image7}
							/>
							
							<Text style={styles.text9}>
								{"View All Schemes"}
							</Text>
						
						</View>
						</TouchableOpacity>
					</View>
					<TouchableOpacity style={styles.buttonRow} onPress={()=>props.navigation.navigate("EditProfile")}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e528767a-2bbb-4671-ac04-6c4031a697d7"}} 
							resizeMode = {"stretch"}
							style={styles.image8}
						/>
						<Text style={styles.text10}>
							{"Edit Profile   "}
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
		width: 1,
		height: 44,
		backgroundColor: "#407CE21F",
	},
	box2: {
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
		paddingBottom: 98,
		marginBottom: 44,
		marginHorizontal: 12,
	},
	column2: {
		width: 33,
	},
	column3: {
		width: 32,
	},
	column4: {
		width: 40,
	},
	column5: {
		backgroundColor: "#FFFFFF",
		borderColor: "#E3E3E333",
		borderRadius: 20,
		borderWidth: 1,
		paddingVertical: 23,
		paddingHorizontal: 16,
		marginBottom: 23,
		marginHorizontal: 12,
	},
	column6: {
		backgroundColor: "#FFFFFF",
		borderColor: "#E3E3E333",
		borderRadius: 20,
		borderWidth: 1,
		paddingTop: 15,
		paddingBottom: 84,
		marginBottom: 23,
		marginHorizontal: 12,
	},
	column7: {
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
		marginBottom: 17,
		marginHorizontal: 8,
	},
	image3: {
		height: 93,
		marginBottom: 18,
		marginHorizontal: 126,
	},
	image4: {
		height: 32,
		
	},
	image5: {
		height: 32,
		marginBottom: 9,
	},
	image6: {
		height: 32,
		marginBottom: 12,
		marginHorizontal: 3,
	},
	image7: {
		width: 24,
		height: 24,
		marginRight: 3,
	},
	image8: {
		width: 12,
		height: 12,
		marginRight: 8,
	},
	image9: {
		width: 19,
		height: 20,
		marginRight: 52,
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
		marginBottom: 14,
		marginHorizontal: 25,
	},
	row2: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 5,
		marginHorizontal: 37,
	},
	row3: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 25,
		marginHorizontal: 17,
	},
	row4: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 5,
		marginHorizontal: 20,
	},
	row5: {
		flexDirection: "row",
		alignItems: "center",
		marginHorizontal: 20,
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
		paddingTop: 17,
	},
	text: {
		color: "#221E1E",
		fontSize: 14,
	},
	text2: {
		color: "#221F1F",
		fontSize: 12,
		marginBottom: 17,
		marginHorizontal: 118,
		marginLeft: 130,
	},
	text3: {
		color: "#407CE2",
		fontSize: 10,
		
	},
	text16: {
		color: "#407CE2",
		fontSize: 10,
		marginBottom: 12,
	},
	text4: {
		color: "#4C6FFF",
		fontSize: 12,
		marginRight: 59,
	},
	text5: {
		color: "#4C6FFF",
		fontSize: 12,
	},
	text15: {
		color: "#4C6FFF",
		fontSize: 12,
		marginRight:20,
	},
	
	text6: {
		color: "#407CE2",
		fontSize: 12,
		marginBottom: 13,
	},
	text7: {
		color: "#407CE2",
		fontSize: 12,
	},
	text8: {
		color: "#233876",
		fontSize: 20,
		marginBottom: 20,
		marginHorizontal: 90,
	},
	text9: {
		color: "#4C6FFF",
		fontSize: 12,
		flex: 1,
	},
	text10: {
		color: "#FFFFFF",
		fontSize: 12,
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
});