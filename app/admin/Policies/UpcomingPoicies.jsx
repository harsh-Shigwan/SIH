import React, {useState} from "react";
import { SafeAreaView, View, ScrollView, Text, Image, TextInput, StyleSheet, } from "react-native";
export default (props) => {
	const [textInput1, onChangeTextInput1] = useState('');
	const [textInput2, onChangeTextInput2] = useState('');
	const [textInput3, onChangeTextInput3] = useState('');
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>
				<View style={styles.row}>
					<Text style={styles.text}>
						{"9:40"}
					</Text>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/80a4c7d8-5f05-4402-8ad9-b5a09ad40c6b"}} 
						resizeMode = {"stretch"}
						style={styles.image}
					/>
				</View>
				<Text style={styles.text2}>
					{"Upcoming Programs List"}
				</Text>
				<View style={styles.column}>
					<TextInput
						placeholder={"Program 1: National Immunization DriveStart Date: March 15, 2024Target Beneficiaries: Children under 5 years, pregnant women.Status: Scheduled."}
						value={textInput1}
						onChangeText={onChangeTextInput1}
						style={styles.input}
					/>
					<TextInput
						placeholder={"Program 2: Mental Health Awareness WeekStart Date: April 1, 2024Target Beneficiaries: General public, students, and working professionals.Status: Scheduled."}
						value={textInput2}
						onChangeText={onChangeTextInput2}
						style={styles.input}
					/>
					<TextInput
						placeholder={"Program 3: Ayushman Bharat Digital Health WeekStart Date: March 25, 2024Target Beneficiaries: All citizens with a focus on rural areas.Status: Pending Approval."}
						value={textInput3}
						onChangeText={onChangeTextInput3}
						style={styles.input2}
					/>
				</View>
				<View style={styles.column2}>
					<View style={styles.row2}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3cd9952f-4b8c-4196-a3ae-ecd4046a1b63"}} 
							resizeMode = {"stretch"}
							style={styles.image2}
						/>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/71c1767e-3c86-4e0d-9612-5acbbac54d02"}} 
							resizeMode = {"stretch"}
							style={styles.image3}
						/>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f5355243-34a9-4bbb-b44e-7efa308074cc"}} 
							resizeMode = {"stretch"}
							style={styles.image4}
						/>
						<View style={styles.box}>
						</View>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cb4928a0-298d-4e27-92d0-09363915ffa6"}} 
							resizeMode = {"stretch"}
							style={styles.image4}
						/>
					</View>
					<View style={styles.row3}>
						<Text style={styles.text3}>
							{"Home"}
						</Text>
						<Text style={styles.text4}>
							{"  Doctors"}
						</Text>
						<Text style={styles.text4}>
							{"Policies"}
						</Text>
						<Text style={styles.text5}>
							{"Queries"}
						</Text>
						<Text style={styles.text6}>
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
		backgroundColor: "#FFFFFF",
		borderColor: "#E3E3E333",
		borderRadius: 20,
		borderWidth: 1,
		paddingBottom: 251,
		paddingHorizontal: 1,
		marginBottom: 33,
		marginHorizontal: 24,
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
		width: 19,
		height: 20,
		marginRight: 52,
	},
	image3: {
		width: 24,
		height: 24,
		marginRight: 51,
	},
	image4: {
		width: 24,
		height: 24,
	},
	input: {
		color: "#FFFFFF",
		fontSize: 14,
		marginBottom: 16,
		backgroundColor: "#FFFFFF",
		borderColor: "#221F1F1A",
		borderRadius: 6,
		borderWidth: 1,
		paddingVertical: 25,
		paddingHorizontal: 22,
	},
	input2: {
		color: "#FFFFFF",
		fontSize: 14,
		backgroundColor: "#FFFFFF",
		borderColor: "#221F1F1A",
		borderRadius: 6,
		borderWidth: 1,
		paddingVertical: 25,
		paddingHorizontal: 21,
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 52,
		marginHorizontal: 25,
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
		paddingTop: 16,
	},
	text: {
		color: "#221E1E",
		fontSize: 14,
	},
	text2: {
		color: "#233876",
		fontSize: 20,
		marginBottom: 35,
		marginHorizontal: 64,
	},
	text3: {
		color: "#4C6FFF",
		fontSize: 12,
		marginRight: 4,
		flex: 1,
	},
	text4: {
		color: "#7A7979",
		fontSize: 12,
		marginRight: 30,
	},
	text5: {
		color: "#221F1F",
		fontSize: 12,
		marginRight: 27,
	},
	text6: {
		color: "#221F1F",
		fontSize: 12,
	},
});