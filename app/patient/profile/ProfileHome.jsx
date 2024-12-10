import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, StyleSheet, TouchableOpacity, } from "react-native";
export default (props) => {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>
				<Image
					source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3cfc0874-7ba8-4e4e-99ea-ea64311955bc"}} 
					resizeMode = {"stretch"}
					style={styles.image}
				/>
				<Text style={styles.text}>
					{"Ruchita"}
				</Text>
				<View style={styles.row}>
					<View style={styles.column}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ca0c3451-760b-49d8-ab9f-5f1a61707482"}} 
							resizeMode = {"stretch"}
							style={styles.image2}
						/>
						<Text style={styles.text2}>
							{"Edit Profile"}
						</Text>
					</View>
					<View style={styles.box}>
					</View>
					<View style={styles.column2}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eaa6c5c2-bc18-490e-b321-dc60e68a6e6a"}} 
							resizeMode = {"stretch"}
							style={styles.image3}
						/>
						<Text style={styles.text2}>
							{"My Queries"}
						</Text>
					</View>
					<View style={styles.box}>
					</View>
					<View style={styles.column3}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c6e379f5-3c61-4ff7-b10d-5a4ea562bbb2"}} 
							resizeMode = {"stretch"}
							style={styles.image4}
						/>
						<Text style={styles.text2}>
							{"Settings"}
						</Text>
					</View>
				</View>
				<TouchableOpacity style={styles.row2} onPress={() => props.navigation.navigate("SavedDoc")}>

					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8b713c7b-08a2-4def-9ad8-ea8dd44101e1"}} 
						resizeMode = {"stretch"}
						style={styles.image5}
					/>
					<Text style={styles.text3}>
						{"My Saved Doctors"}
					</Text>
					<View style={styles.box2}>
					</View>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1447f249-5219-422c-a50b-9c260781fa9c"}} 
						resizeMode = {"stretch"}
						style={styles.image6}
					/>
				</TouchableOpacity>
				<View style={styles.box3}>
				</View>
				<TouchableOpacity onPress={() => props.navigation.navigate("MyAppointment")} style={styles.row2}>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fb3de785-e730-4962-af7d-71e70773823a"}} 
						resizeMode = {"stretch"}
						style={styles.image7}
					/>
					<Text style={styles.text3}>
						{"Appointmnet"}
					</Text>
					<View style={styles.box2}>
					</View>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/27aa14ff-b3d4-4d5c-a1c8-0dc3dd70ffac"}} 
						resizeMode = {"stretch"}
						style={styles.image6}
					/>
				</TouchableOpacity>
				<View style={styles.box3}>
				</View>
				<TouchableOpacity onPress={() => props.navigation.navigate("MyScheme")} style={styles.row2}>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/98e6321d-0167-4937-9590-29e95827461c"}} 
						resizeMode = {"stretch"}
						style={styles.image5}
					/>
					<Text style={styles.text3}>
						{"My Scheme / Policies"}
					</Text>
					<View style={styles.box2}>
					</View>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f05c7bb5-ab96-417f-87e9-64c8eaf5e2a1"}} 
						resizeMode = {"stretch"}
						style={styles.image6}
					/>
				</TouchableOpacity>
				<View style={styles.box3}>
				</View>
				<View style={styles.row2}>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/052a3c29-412d-4037-b84e-564c7cad8880"}} 
						resizeMode = {"stretch"}
						style={styles.image5}
					/>
					<Text style={styles.text3}>
						{"FAQs"}
					</Text>
					<View style={styles.box2}>
					</View>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/94756cc7-2638-4566-9a0b-06d96694e741"}} 
						resizeMode = {"stretch"}
						style={styles.image6}
					/>
				</View>
				<View style={styles.box3}>
				</View>
				<View style={styles.row3}>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/99c0c1f4-bec5-4eb0-97d1-3c4e6ec9e981"}} 
						resizeMode = {"stretch"}
						style={styles.image5}
					/>
					<Text style={styles.text3}>
						{"Logout"}
					</Text>
					<View style={styles.box2}>
					</View>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/05002ca2-c41c-49b2-a29a-4e111d51f5fc"}} 
						resizeMode = {"stretch"}
						style={styles.image6}
					/>
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
	box3: {
		height: 1,
		backgroundColor: "#407CE21F",
		marginBottom: 13,
		marginHorizontal: 30,
	},
	column: {
		width: 51,
	},
	column2: {
		width: 55,
	},
	column3: {
		width: 41,
	},
	column4: {
		backgroundColor: "#FFFFFF",
		paddingVertical: 11,
		paddingHorizontal: 39,
	},
	image: {
		height: 90,
		marginBottom: 6,
		marginHorizontal: 135,
	},
	image2: {
		height: 40,
		marginBottom: 8,
		marginHorizontal: 4,
	},
	image3: {
		height: 33,
		marginBottom: 8,
		marginHorizontal: 9,
	},
	image4: {
		height: 42,
		marginBottom: 6,
	},
	image5: {
		width: 43,
		height: 43,
		marginRight: 20,
	},
	image6: {
		width: 9,
		height: 16,
	},
	image7: {
		width: 43,
		height: 43,
		marginRight: 19,
	},
	image8: {
		width: 19,
		height: 20,
		marginRight: 55,
	},
	image9: {
		width: 15,
		height: 20,
	},
	image10: {
		width: 24,
		height: 24,
		marginRight: 61,
	},
	image11: {
		width: 24,
		height: 24,
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 38,
		marginHorizontal: 48,
	},
	row2: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 13,
		marginHorizontal: 30,
	},
	row3: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 100,
		marginHorizontal: 30,
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
		paddingTop: 65,
	},
	text: {
		color: "#407CE2",
		fontSize: 15,
		marginBottom: 35,
		marginHorizontal: 149,
	},
	text2: {
		color: "#407CE2",
		fontSize: 10,
	},
	text3: {
		color: "#221F1F",
		fontSize: 16,
	},
	text4: {
		color: "#221F1F",
		fontSize: 12,
		marginRight: 45,
	},
	text5: {
		color: "#221F1F",
		fontSize: 12,
		marginRight: 46,
	},
	text6: {
		color: "#221F1F",
		fontSize: 12,
		marginRight: 34,
	},
	text7: {
		color: "#407CE2",
		fontSize: 12,
		flex: 1,
	},
});