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
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/41e3e864-7878-4c8a-9433-521ec2534535"}} 
						resizeMode = {"stretch"}
						style={styles.image}
					/>
				</View>
				<TextInput
					placeholder={"Programs & Policies Overview"}
					value={textInput1}
					onChangeText={onChangeTextInput1}
					style={styles.input}
				/>
				<View style={styles.row2}>
					<View style={styles.column}>
						<Text style={styles.text2}>
							{"Active Programs"}
						</Text>
						<Text style={styles.text3}>
							{"View the number of programs currently underway ->"}
						</Text>
					</View>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8c37cfaa-e453-47f7-a666-a365fa31f5e0"}} 
						resizeMode = {"stretch"}
						style={styles.image2}
					/>
				</View>
				<View style={styles.row3}>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/beca57b2-f287-4d7f-a83b-966d54ac08e9"}} 
						resizeMode = {"stretch"}
						style={styles.image3}
					/>
					<View style={styles.column2}>
						<Text style={styles.text2}>
							{"Upcoming Programs"}
						</Text>
						<Text style={styles.text4}>
							{"Explore programs scheduled for upcoming dates ->"}
						</Text>
					</View>
				</View>
				<View style={styles.row4}>
					<View style={styles.column3}>
						<Text style={styles.text2}>
							{"Policies Updated"}
						</Text>
						<Text style={styles.text3}>
							{"Check the latest changes in health policies ->"}
						</Text>
					</View>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/67c1fe31-3263-4450-b880-50baeb706a84"}} 
						resizeMode = {"stretch"}
						style={styles.image4}
					/>
				</View>
				<View style={styles.column4}>
					<View style={styles.row5}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a4b888da-4e81-4e93-8717-2f9b15892080"}} 
							resizeMode = {"stretch"}
							style={styles.image5}
						/>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f2646342-89ab-4ddd-a2a2-9e520dab9b24"}} 
							resizeMode = {"stretch"}
							style={styles.image6}
						/>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/df6c3f66-f63a-4b5c-9497-99f122bd86cd"}} 
							resizeMode = {"stretch"}
							style={styles.image7}
						/>
						<View style={styles.box}>
						</View>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f5024ee8-8163-4011-9a25-a65a7426a3f0"}} 
							resizeMode = {"stretch"}
							style={styles.image7}
						/>
					</View>
					<View style={styles.row6}>
						<Text style={styles.text5}>
							{"Home"}
						</Text>
						<Text style={styles.text6}>
							{"  Doctors"}
						</Text>
						<Text style={styles.text6}>
							{"Policies"}
						</Text>
						<Text style={styles.text7}>
							{"Queries"}
						</Text>
						<Text style={styles.text8}>
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
	column: {
		width: 156,
		marginTop: 12,
		marginRight: 8,
	},
	column2: {
		width: 192,
	},
	column3: {
		width: 159,
		marginRight: 4,
	},
	column4: {
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
		borderRadius: 20,
		width: 110,
		height: 97,
	},
	image3: {
		borderRadius: 20,
		width: 96,
		height: 84,
		marginRight: 2,
	},
	image4: {
		borderRadius: 20,
		width: 108,
		height: 97,
	},
	image5: {
		width: 19,
		height: 20,
		marginRight: 51,
	},
	image6: {
		width: 24,
		height: 24,
		marginRight: 51,
	},
	image7: {
		width: 24,
		height: 24,
	},
	input: {
		color: "#233876",
		fontSize: 20,
		marginBottom: 16,
		marginHorizontal: 20,
		backgroundColor: "#E0E7FF",
		borderColor: "#E3E3E333",
		borderRadius: 20,
		borderWidth: 1,
		paddingVertical: 21,
		paddingHorizontal: 64,
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 25,
		marginHorizontal: 25,
	},
	row2: {
		flexDirection: "row",
		alignItems: "flex-start",
		backgroundColor: "#FFFFFF",
		borderColor: "#E3E3E333",
		borderRadius: 20,
		borderWidth: 1,
		paddingTop: 9,
		paddingBottom: 25,
		paddingLeft: 27,
		paddingRight: 11,
		marginBottom: 18,
		marginHorizontal: 20,
	},
	row3: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderColor: "#E3E3E333",
		borderRadius: 20,
		borderWidth: 1,
		paddingVertical: 21,
		marginBottom: 18,
		marginHorizontal: 20,
	},
	row4: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderColor: "#E3E3E333",
		borderRadius: 20,
		borderWidth: 1,
		paddingVertical: 21,
		paddingLeft: 27,
		paddingRight: 14,
		marginBottom: 323,
		marginHorizontal: 20,
	},
	row5: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 8,
	},
	row6: {
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
		marginBottom: 14,
	},
	text3: {
		color: "#718096",
		fontSize: 14,
	},
	text4: {
		color: "#718096",
		fontSize: 14,
		marginHorizontal: 9,
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
});