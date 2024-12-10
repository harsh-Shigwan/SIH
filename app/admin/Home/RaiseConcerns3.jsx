import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image, TouchableOpacity, StyleSheet, } from "react-native";
export default (props) => {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>
				<View style={styles.row}>
					<Text style={styles.text}>
						{"9:41"}
					</Text>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/914ed96e-a699-45ed-8306-7588d25401b4"}} 
						resizeMode = {"stretch"}
						style={styles.image}
					/>
				</View>
				<View style={styles.column}>
					<View style={styles.row2}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ecf83dcd-7fb2-4935-b718-ce16a79f6a4c"}} 
							resizeMode = {"stretch"}
							style={styles.image2}
						/>
						<View style={styles.box}>
						</View>
						<Text style={styles.text2}>
							{"Raise Concerns"}
						</Text>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ea923354-6bb9-42ed-a652-49e88bd57013"}} 
							resizeMode = {"stretch"}
							style={styles.image2}
						/>
					</View>
					<View style={styles.row3}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ec42a8e0-0f55-4417-b8bb-931cd326c27a"}} 
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
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/222f6518-badc-41da-b4f3-905958f8e971"}} 
							resizeMode = {"stretch"}
							style={styles.image4}
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
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0b97fb7f-01c3-4046-8806-6543772269b2"}} 
							resizeMode = {"stretch"}
							style={styles.image4}
						/>
						<View style={styles.view2}>
							<View style={styles.box4}>
							</View>
						</View>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/acbbca58-f702-4dd6-868c-65307e6393b0"}} 
							resizeMode = {"stretch"}
							style={styles.image3}
						/>
					</View>
					<View style={styles.box5}>
					</View>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eee4ad3c-1b72-4b12-845e-346afbef4f44"}} 
						resizeMode = {"stretch"}
						style={styles.image5}
					/>
					<Text style={styles.text3}>
						{"Impact"}
					</Text>
					<View style={styles.row4}>
						<Text style={styles.text4}>
							{"Give a briefe description of the the impact...."}
						</Text>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f974531c-75ad-44be-aff3-db38b547ce11"}} 
							resizeMode = {"stretch"}
							style={styles.image6}
						/>
					</View>
					<Text style={styles.text5}>
						{"Proposed Solution"}
					</Text>
					<View style={styles.row5}>
						<Text style={styles.text4}>
							{"Give a briefe description of the the solution...."}
						</Text>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/374fb27f-b0d8-4dc8-8d76-2734b03aedf0"}} 
							resizeMode = {"stretch"}
							style={styles.image6}
						/>
					</View>
					<View style={styles.row6}>
						<View style={styles.box6}>
						</View>
						<Text style={styles.text6}>
							{"I confirm that the above information is accurate to the best of my knowledge."}
						</Text>
					</View>
					<TouchableOpacity style={styles.button} onPress={()=>alert('Pressed!')}>
						<Text style={styles.text7}>
							{"Raise Issue "}
						</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.column2}>
					<View style={styles.row7}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/12652966-bc27-482a-b343-6f117b49cdeb"}} 
							resizeMode = {"stretch"}
							style={styles.image7}
						/>
						<View style={styles.box}>
						</View>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a101ab39-8418-436a-9992-0640113e7989"}} 
							resizeMode = {"stretch"}
							style={styles.image8}
						/>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4087f4f5-8705-46f7-a361-44a458966d8a"}} 
							resizeMode = {"stretch"}
							style={styles.image9}
						/>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4426912e-7cbb-4f0f-9c54-01992bf7b3d2"}} 
							resizeMode = {"stretch"}
							style={styles.image10}
						/>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f7d94afa-124b-4104-ad4e-825f45d28576"}} 
							resizeMode = {"stretch"}
							style={styles.image2}
						/>
					</View>
					<View style={styles.row8}>
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
		width: 32,
		height: 6,
		backgroundColor: "#4C6FFFCC",
		borderRadius: 40,
	},
	box5: {
		height: 1,
		backgroundColor: "#D9DBE8",
		marginBottom: 23,
		marginHorizontal: 15,
	},
	box6: {
		width: 13,
		height: 13,
		backgroundColor: "#FFFFFF",
		borderColor: "#939393",
		borderRadius: 10,
		borderWidth: 1,
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
		borderRadius: 40,
		width: 20,
		height: 20,
	},
	image5: {
		width: 24,
		height: 24,
		marginBottom: 7,
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
		backgroundColor: "#FFFFFF",
		borderColor: "#EDF1F3",
		borderRadius: 10,
		borderWidth: 1,
		paddingTop: 8,
		paddingBottom: 137,
		paddingHorizontal: 14,
		marginBottom: 36,
		marginHorizontal: 40,
		shadowColor: "#E4E5E73B",
		shadowOpacity: 0.2,
		shadowOffset: {
		    width: 0,
		    height: 1
		},
		shadowRadius: 2,
		elevation: 2,
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
		marginBottom: 33,
		marginHorizontal: 40,
		shadowColor: "#E4E5E73B",
		shadowOpacity: 0.2,
		shadowOffset: {
		    width: 0,
		    height: 1
		},
		shadowRadius: 2,
		elevation: 2,
	},
	row6: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-start",
		marginBottom: 131,
		marginHorizontal: 42,
	},
	row7: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 8,
	},
	row8: {
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
		marginBottom: 7,
		marginLeft: 41,
	},
	text4: {
		color: "#939393",
		fontSize: 10,
		marginTop: 4,
		marginRight: 4,
		flex: 1,
	},
	text5: {
		color: "#6C7278",
		fontSize: 12,
		marginBottom: 8,
		marginLeft: 41,
	},
	text6: {
		color: "#6C7278",
		fontSize: 10,
		marginTop: 1,
		width: 228,
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
		alignItems: "flex-start",
		backgroundColor: "#EFF0F6",
		borderRadius: 40,
		paddingHorizontal: 1,
	},
});