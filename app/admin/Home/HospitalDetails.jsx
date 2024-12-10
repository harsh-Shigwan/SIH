import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image, StyleSheet, } from "react-native";
export default (props) => {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>
				<View style={styles.row}>
					<Text style={styles.text}>
						{"9:41"}
					</Text>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f53b6229-6813-448c-816b-c3841d4c971c"}} 
						resizeMode = {"stretch"}
						style={styles.image}
					/>
				</View>
				<View style={styles.row2}>
					<Text style={styles.text2}>
						{"Hospital Details"}
					</Text>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d69766b1-489d-4007-97e0-9d3c4558c95e"}} 
						resizeMode = {"stretch"}
						style={styles.image2}
					/>
				</View>
				<View style={styles.column}>
					<View style={styles.row3}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7a0b5c4a-7286-4ca0-9815-76035d6e9e69"}} 
							resizeMode = {"stretch"}
							style={styles.image3}
						/>
						<View style={styles.column2}>
							<Text style={styles.text3}>
								{"Breach Candy Hospital"}
							</Text>
							<View style={styles.row4}>
								<Image
									source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9370ec23-0e46-4267-b84b-47468621b283"}} 
									resizeMode = {"stretch"}
									style={styles.image4}
								/>
								<Text style={styles.text4}>
									{"Bhulabhai Desai Marg, Cumballa Hill, Mumbai"}
								</Text>
							</View>
							<View style={styles.row5}>
								<Image
									source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/85e7d9cf-0c8a-46d7-acb4-6003eb3541ca"}} 
									resizeMode = {"stretch"}
									style={styles.image5}
								/>
								<Text style={styles.text5}>
									{" 022 2366 7949"}
								</Text>
							</View>
						</View>
					</View>
					<View style={styles.row6}>
						<View style={styles.column3}>
							<Text style={styles.text6}>
								{"          4.5 ★ | 250 Reviews"}
							</Text>
							<Text style={styles.text7}>
								{"             NABH certified"}
							</Text>
						</View>
						<View style={styles.box}>
						</View>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fe56d1c2-141d-434c-9c9b-f7b221dfca80"}} 
							resizeMode = {"stretch"}
							style={styles.image6}
						/>
						<Text style={styles.text4}>
							{" Open 24 hours"}
						</Text>
					</View>
				</View>
				<View style={styles.column4}>
					<Text style={styles.text8}>
						{"Hospital Performance Over 12 months"}
					</Text>
					<Text style={styles.text9}>
						{"96"}
					</Text>
					<View style={styles.row7}>
						<Text style={styles.text10}>
							{"In percentage"}
						</Text>
						<View style={styles.box2}>
						</View>
						<View style={styles.column5}>
							<Text style={styles.text11}>
								{"86"}
							</Text>
							<View >
								<View style={styles.box3}>
								</View>
								<Image
									source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4f013c62-4dba-4b2c-bf35-44bf3624d90a"}} 
									resizeMode = {"stretch"}
									style={styles.absoluteImage}
								/>
							</View>
						</View>
						<View style={styles.column6}>
							<View style={styles.box4}>
							</View>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2ee6ba3f-bbf0-4a66-95e8-a10b3565e2c8"}} 
								resizeMode = {"stretch"}
								style={styles.absoluteImage2}
							/>
						</View>
						<View style={styles.column7}>
							<Text style={styles.text12}>
								{"93"}
							</Text>
							<View >
								<View style={styles.box5}>
								</View>
								<Image
									source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c7e3f794-bbec-4aca-9c9b-b17151fbd99b"}} 
									resizeMode = {"stretch"}
									style={styles.absoluteImage3}
								/>
							</View>
						</View>
						<View style={styles.column8}>
							<Text style={styles.text12}>
								{"93"}
							</Text>
							<View >
								<View style={styles.box5}>
								</View>
								<Image
									source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1005d5fc-cb6c-40ac-b99f-b88590054315"}} 
									resizeMode = {"stretch"}
									style={styles.absoluteImage}
								/>
							</View>
						</View>
						<View style={styles.column9}>
							<Text style={styles.text12}>
								{"34"}
							</Text>
							<View >
								<View style={styles.box6}>
								</View>
								<Image
									source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7e45f3ff-311c-4c18-94e3-c35018f7b55c"}} 
									resizeMode = {"stretch"}
									style={styles.absoluteImage}
								/>
							</View>
						</View>
						<View style={styles.absoluteBox}>
						</View>
					</View>
					<View style={styles.row8}>
						<Text style={styles.text13}>
							{"Patient  Recovery"}
						</Text>
						<Text style={styles.text14}>
							{"Treatment Quality"}
						</Text>
						<Text style={styles.text15}>
							{"Occupancy Rate"}
						</Text>
						<Text style={styles.text16}>
							{"Patient Satisfaction "}
						</Text>
						<Text style={styles.text17}>
							{"Emergency Case Response Time"}
						</Text>
					</View>
				</View>
				<View style={styles.column10}>
					<Text style={styles.text18}>
						{"Details"}
					</Text>
					<View style={styles.column11}>
						<View style={styles.row9}>
							<Text style={styles.text19}>
								{"Number of Beds"}
							</Text>
							<Text style={styles.text20}>
								{"206"}
							</Text>
						</View>
						<View style={styles.row10}>
							<Text style={styles.text19}>
								{"Number of Centers"}
							</Text>
							<Text style={styles.text20}>
								{"12"}
							</Text>
						</View>
						<View style={styles.row5}>
							<Text style={styles.text19}>
								{"ICU and Operation Theatres"}
							</Text>
							<Text style={styles.text20}>
								{"10 ICU | 5 OT"}
							</Text>
						</View>
					</View>
					<View style={styles.row11}>
						<Text style={styles.text19}>
							{"Emergency services"}
						</Text>
						<Text style={styles.text20}>
							{"24/7 available"}
						</Text>
					</View>
					<View style={styles.row5}>
						<Text style={styles.text19}>
							{"Accrediation"}
						</Text>
						<Text style={styles.text20}>
							{"NABH, JCI"}
						</Text>
					</View>
				</View>
				<View style={styles.column12}>
					<Text style={styles.text21}>
						{"Facilities"}
					</Text>
					<View style={styles.column13}>
						<Text style={styles.text22}>
							{"Ambulance Service"}
						</Text>
						<Text style={styles.text22}>
							{"Pharmacy"}
						</Text>
						<Text style={styles.text20}>
							{"Labs and Diagnostics"}
						</Text>
					</View>
					<Text style={styles.text23}>
						{"Cafeteria"}
					</Text>
					<Text style={styles.text20}>
						{"Parking"}
					</Text>
				</View>
				<View style={styles.column14}>
					<View style={styles.row12}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/015bd8ca-9491-49d8-ba15-7a3692c15faa"}} 
							resizeMode = {"stretch"}
							style={styles.image7}
						/>
						<View style={styles.box7}>
						</View>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aba9f61c-d1a2-4b15-898a-a8b2bd6862da"}} 
							resizeMode = {"stretch"}
							style={styles.image8}
						/>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e4280716-da58-4126-8c89-9a414c68ec44"}} 
							resizeMode = {"stretch"}
							style={styles.image9}
						/>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/349bf321-0d9b-4a35-8635-c0eaf1fc9661"}} 
							resizeMode = {"stretch"}
							style={styles.image10}
						/>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/51d0abdd-f670-4d7e-bc68-0eaa758f1e18"}} 
							resizeMode = {"stretch"}
							style={styles.image2}
						/>
					</View>
					<View style={styles.row13}>
						<Text style={styles.text24}>
							{"Home"}
						</Text>
						<Text style={styles.text25}>
							{"  Doctors"}
						</Text>
						<Text style={styles.text25}>
							{"Policies"}
						</Text>
						<Text style={styles.text26}>
							{"Queries"}
						</Text>
						<Text style={styles.text26}>
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
	absoluteBox: {
		position: "absolute",
		bottom: 6,
		right: 0,
		width: 295,
		height: 1,
	},
	absoluteImage: {
		position: "absolute",
		bottom: -10,
		right: 4,
		width: 1,
		height: 10,
	},
	absoluteImage2: {
		position: "absolute",
		bottom: -10,
		right: 3,
		width: 1,
		height: 10,
	},
	absoluteImage3: {
		position: "absolute",
		bottom: -10,
		right: 1,
		width: 1,
		height: 10,
	},
	box: {
		width: 1,
		height: 40,
		backgroundColor: "#E5E7EB",
		marginRight: 31,
	},
	box2: {
		width: 1,
		height: 159,
		marginRight: 17,
	},
	box3: {
		height: 111,
		backgroundColor: "#66CB9F",
	},
	box4: {
		height: 152,
		backgroundColor: "#66CB9F",
	},
	box5: {
		height: 126,
		backgroundColor: "#66CB9F",
	},
	box6: {
		height: 51,
		backgroundColor: "#F24822",
	},
	box7: {
		flex: 1,
	},
	column: {
		backgroundColor: "#FFFFFF",
		borderRadius: 16,
		paddingVertical: 11,
		marginBottom: 20,
		marginHorizontal: 8,
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
		width: 278,
	},
	column3: {
		flex: 1,
		marginRight: 4,
	},
	column4: {
		backgroundColor: "#FFFFFF",
		borderColor: "#EEEEEE",
		borderRadius: 16,
		borderWidth: 1,
		paddingVertical: 14,
		marginBottom: 20,
		marginHorizontal: 8,
	},
	column5: {
		flex: 1,
		marginTop: 29,
		marginRight: 4,
	},
	column6: {
		width: 10,
		marginRight: 50,
	},
	column7: {
		width: 12,
		marginTop: 15,
		marginRight: 49,
	},
	column8: {
		width: 11,
		marginTop: 15,
		marginRight: 51,
	},
	column9: {
		width: 10,
		marginTop: 90,
	},
	column10: {
		backgroundColor: "#FFFFFF",
		borderColor: "#EEEEEE",
		borderRadius: 16,
		borderWidth: 1,
		paddingVertical: 14,
		paddingHorizontal: 6,
		marginBottom: 20,
		marginHorizontal: 8,
	},
	column11: {
		borderRadius: 8,
		paddingVertical: 13,
		paddingHorizontal: 8,
		marginBottom: 1,
	},
	column12: {
		backgroundColor: "#FFFFFF",
		borderColor: "#EEEEEE",
		borderRadius: 16,
		borderWidth: 1,
		paddingVertical: 13,
		paddingHorizontal: 6,
		marginBottom: 81,
		marginHorizontal: 8,
	},
	column13: {
		borderRadius: 8,
		paddingVertical: 14,
		paddingHorizontal: 8,
		marginBottom: 1,
	},
	column14: {
		backgroundColor: "#FFFFFF",
		paddingVertical: 17,
		paddingHorizontal: 25,
		shadowColor: "#63636333",
		shadowOpacity: 0.2,
		shadowOffset: {
		    width: 0,
		    height: 2
		},
		shadowRadius: 8,
		elevation: 8,
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
		borderRadius: 41,
		width: 60,
		height: 58,
	},
	image4: {
		width: 12,
		height: 12,
	},
	image5: {
		width: 12,
		height: 12,
		marginRight: 6,
	},
	image6: {
		width: 18,
		height: 18,
		marginRight: 4,
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
		paddingLeft: 107,
		paddingRight: 16,
	},
	row3: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 17,
		marginHorizontal: 6,
	},
	row4: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 7,
	},
	row5: {
		flexDirection: "row",
		alignItems: "center",
	},
	row6: {
		flexDirection: "row",
		alignItems: "center",
		marginHorizontal: 30,
	},
	row7: {
		flexDirection: "row",
		alignItems: "flex-start",
		marginBottom: 10,
		marginHorizontal: 21,
	},
	row8: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginHorizontal: 21,
	},
	row9: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 12,
	},
	row10: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 10,
	},
	row11: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 13,
	},
	row12: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 8,
	},
	row13: {
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
		marginRight: 4,
		flex: 1,
	},
	text3: {
		color: "#18181B",
		fontSize: 18,
		marginBottom: 6,
		marginHorizontal: 1,
	},
	text4: {
		color: "#71717A",
		fontSize: 12,
	},
	text5: {
		color: "#71717A",
		fontSize: 12,
		flex: 1,
	},
	text6: {
		fontSize: 12,
		marginBottom: 11,
	},
	text7: {
		color: "#71717A",
		fontSize: 12,
		marginHorizontal: 14,
	},
	text8: {
		color: "#18181B",
		fontSize: 16,
		marginBottom: 13,
		marginHorizontal: 7,
	},
	text9: {
		color: "#939393",
		fontSize: 8,
		marginBottom: 2,
		marginLeft: 118,
	},
	text10: {
		color: "#939393",
		fontSize: 10,
		marginTop: 49,
		marginRight: 8,
		width: 9,
	},
	text11: {
		color: "#939393",
		fontSize: 8,
		marginBottom: 4,
	},
	text12: {
		color: "#939393",
		fontSize: 8,
		marginBottom: 3,
	},
	text13: {
		color: "#939393",
		fontSize: 8,
		width: 34,
	},
	text14: {
		color: "#939393",
		fontSize: 8,
		width: 38,
	},
	text15: {
		color: "#939393",
		fontSize: 8,
		width: 42,
	},
	text16: {
		color: "#939393",
		fontSize: 8,
		width: 44,
	},
	text17: {
		color: "#939393",
		fontSize: 8,
		width: 63,
	},
	text18: {
		color: "#18181B",
		fontSize: 16,
		marginBottom: 8,
	},
	text19: {
		color: "#000000",
		fontSize: 12,
		marginRight: 4,
		flex: 1,
	},
	text20: {
		color: "#000000",
		fontSize: 12,
	},
	text21: {
		color: "#18181B",
		fontSize: 16,
		marginBottom: 9,
	},
	text22: {
		color: "#000000",
		fontSize: 12,
		marginBottom: 13,
	},
	text23: {
		color: "#000000",
		fontSize: 12,
		marginBottom: 14,
	},
	text24: {
		color: "#4C6FFF",
		fontSize: 12,
	},
	text25: {
		color: "#7A7979",
		fontSize: 12,
	},
	text26: {
		color: "#221F1F",
		fontSize: 12,
	},
});