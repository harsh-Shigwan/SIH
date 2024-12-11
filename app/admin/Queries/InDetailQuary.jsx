import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, StyleSheet, } from "react-native";
export default (props) => {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>
				<View style={styles.row}>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0cc17b8f-06f4-4db6-808f-8794a774414e"}} 
						resizeMode = {"stretch"}
						style={styles.image}
					/>
					<Text style={styles.text}>
						{"Incoming Queries"}
					</Text>
				</View>
				<View style={styles.column}>
					<Text style={styles.text2}>
						{"Status : Pending"}
					</Text>
					<Text style={styles.text3}>
						{"Title: Disappointing Experience at XYZ Hospital"}
					</Text>
					<Text style={styles.text4}>
						{"Summary:"}
					</Text>
					<Text style={styles.text5}>
						{"Long Waiting Times: I had an appointment scheduled for 10:00 AM but wasn’t attended to until 12:30 PM. The waiting area was overcrowded and lacked basic amenities like proper seating and water.\nUnhelpful Staff: The reception staff were rude and dismissive when I tried to get information about my appointment delay. Their attitude was indifferent and unprofessional.\nPoor Hygiene Standards: The consultation room was not adequately cleaned. There was visible dirt, and even the equipment seemed poorly maintained, which raised serious concerns about hygiene.\nOvercharging: I was charged for tests that I later found were unnecessary. When I questioned the charges, no one was able to provide a clear explanation.\nI sincerely hope the hospital management takes these issues seriously and makes the necessary improvements. Patients come here with trust and deserve much better treatment."}
					</Text>
					<View style={styles.row2}>
						<View style={styles.column2}>
							<Text style={styles.text6}>
								{"John D."}
							</Text>
							<Text style={styles.text7}>
								{"CareChainAi User"}
							</Text>
						</View>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/063390f3-d047-4918-9a22-47e4ebfca9ae"}} 
							resizeMode = {"stretch"}
							style={styles.image2}
						/>
					</View>
				</View>
				<View style={styles.row3}>
					<Text style={styles.text8}>
						{"type your reply message....."}
					</Text>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a667fb34-43a7-43d1-959d-a6ec5d4d2799"}} 
						resizeMode = {"stretch"}
						style={styles.image3}
					/>
					<Text style={styles.text7}>
						{"Reply"}
					</Text>
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
	column: {
		backgroundColor: "#FFFFFF",
		borderColor: "#ABABAB26",
		borderRadius: 16,
		borderWidth: 1,
		paddingTop: 30,
		marginBottom: 16,
	},
	column2: {
		flex: 1,
		marginRight: 4,
	},
	image: {
		width: 24,
		height: 24,
		marginRight: 70,
	},
	image2: {
		borderRadius: 60,
		width: 60,
		height: 60,
	},
	image3: {
		width: 39,
		height: 24,
		marginRight: 8,
	},
	row: {
		flexDirection: "row",
		marginBottom: 39,
	},
	row2: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#F8F8F8",
		padding: 24,
	},
	row3: {
		flexDirection: "row",
		alignItems: "center",
		borderColor: "#ACACAC4D",
		borderRadius: 10,
		borderWidth: 1,
		paddingVertical: 12,
		paddingHorizontal: 20,
	},
	scrollView: {
		flex: 1,
		backgroundColor: "#FFFFFF",
		paddingTop: 45,
		paddingHorizontal: 16,
	},
	text: {
		color: "#221F1F",
		fontSize: 16,
		marginTop: 18,
		flex: 1,
	},
	text2: {
		color: "#2B2B2B",
		fontSize: 16,
		marginBottom: 39,
		marginLeft: 20,
	},
	text3: {
		color: "#2B2B2B",
		fontSize: 16,
		marginBottom: 24,
		marginHorizontal: 20,
	},
	text4: {
		color: "#2B2B2B",
		fontSize: 16,
		marginBottom: 6,
		marginLeft: 23,
	},
	text5: {
		color: "#2B2B2B",
		fontSize: 16,
		marginBottom: 46,
		marginHorizontal: 25,
	},
	text6: {
		color: "#2B2B2B",
		fontSize: 20,
		marginBottom: 8,
	},
	text7: {
		color: "#777777",
		fontSize: 14,
	},
	text8: {
		color: "#777777",
		fontSize: 12,
		marginRight: 4,
		flex: 1,
	},
});