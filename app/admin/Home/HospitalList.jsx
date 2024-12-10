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
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/594106f1-d72d-4165-a384-3f47e4409966"}} 
						resizeMode = {"stretch"}
						style={styles.image}
					/>
				</View>
				<View style={styles.column}>
					<View style={styles.view}>
						<View style={styles.view2}>
							<View style={styles.row2}>
								<Image
									source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3f2eb730-9141-4935-86e7-b297fc616cf3"}} 
									resizeMode = {"stretch"}
									style={styles.image2}
								/>
								<TextInput
									placeholder={"Search Hospital "}
									value={textInput1}
									onChangeText={onChangeTextInput1}
									style={styles.input}
								/>
							</View>
						</View>
					</View>
					<View style={styles.column2}>
						<View style={styles.row3}>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d443f894-6635-44f2-8a52-9aab6b144e54"}} 
								resizeMode = {"stretch"}
								style={styles.image3}
							/>
							<Text style={styles.text2}>
								{"Filter by"}
							</Text>
							<View style={styles.box}>
							</View>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c1682a46-87ef-41b7-9561-b06ce17a4e50"}} 
								resizeMode = {"stretch"}
								style={styles.image4}
							/>
						</View>
						<View style={styles.column3}>
							<View style={styles.row4}>
								<Text style={styles.text3}>
									{"City Hospital"}
								</Text>
								<Image
									source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/958b8adc-7c88-4a70-90ce-4cd374eea50b"}} 
									resizeMode = {"stretch"}
									style={styles.image5}
								/>
								<Text style={styles.text4}>
									{"Active"}
								</Text>
							</View>
							<View style={styles.row5}>
								<Image
									source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a4b8e946-1d37-48a4-87e6-472a9c37ad7b"}} 
									resizeMode = {"stretch"}
									style={styles.image6}
								/>
								<Text style={styles.text5}>
									{"Location: Mumbai"}
								</Text>
							</View>
							<Text style={styles.text6}>
								{"Contact: +91-9876543210 "}
							</Text>
						</View>
						<View style={styles.column4}>
							<View style={styles.row6}>
								<Text style={styles.text7}>
									{"Green Valley Hospital"}
								</Text>
								<Image
									source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a4000418-4a2e-498f-9ab5-b378656f14ce"}} 
									resizeMode = {"stretch"}
									style={styles.image7}
								/>
								<Text style={styles.text8}>
									{"Critical"}
								</Text>
							</View>
							<View style={styles.row7}>
								<Image
									source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/98bb0157-8669-4108-a696-0109b1c8b660"}} 
									resizeMode = {"stretch"}
									style={styles.image6}
								/>
								<Text style={styles.text5}>
									{"Location: Thane"}
								</Text>
							</View>
							<Text style={styles.text6}>
								{"Contact: +91-9876543210 "}
							</Text>
						</View>
						<View style={styles.column5}>
							<View style={styles.row8}>
								<Text style={styles.text9}>
									{"Rainbow Medical Center"}
								</Text>
								<Image
									source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e2de6ff6-4c33-41fc-9dcd-4fa39ed1e079"}} 
									resizeMode = {"stretch"}
									style={styles.image8}
								/>
								<Text style={styles.text10}>
									{"Active"}
								</Text>
							</View>
							<View style={styles.row5}>
								<Image
									source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1a6cf045-c27e-46dd-8628-75901aad8d5d"}} 
									resizeMode = {"stretch"}
									style={styles.image6}
								/>
								<Text style={styles.text5}>
									{"Location: Mumbai"}
								</Text>
							</View>
							<Text style={styles.text6}>
								{"Contact: +91-9876543210 "}
							</Text>
						</View>
						<View style={styles.column6}>
							<View style={styles.row9}>
								<Text style={styles.text11}>
									{"Apollo Healthcare"}
								</Text>
								<Image
									source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d9b63004-6bbc-40b4-9b62-473455cb39f0"}} 
									resizeMode = {"stretch"}
									style={styles.image5}
								/>
								<Text style={styles.text10}>
									{"Active"}
								</Text>
							</View>
							<View style={styles.row7}>
								<Image
									source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3c2f401a-772e-4263-be96-8a90fb70cd14"}} 
									resizeMode = {"stretch"}
									style={styles.image6}
								/>
								<Text style={styles.text5}>
									{"Location: Thane"}
								</Text>
							</View>
							<Text style={styles.text6}>
								{"Contact: +91-9876543210 "}
							</Text>
						</View>
						<View style={styles.column7}>
							<View style={styles.row10}>
								<Text style={styles.text12}>
									{"LifeCare Hospital"}
								</Text>
								<Image
									source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/882d54b0-8932-47de-bdf8-4b4b75293299"}} 
									resizeMode = {"stretch"}
									style={styles.image5}
								/>
								<Text style={styles.text10}>
									{"Active"}
								</Text>
							</View>
							<View style={styles.row11}>
								<Image
									source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/66851d38-20c0-405e-b00e-b21e1c39ad0f"}} 
									resizeMode = {"stretch"}
									style={styles.image6}
								/>
								<Text style={styles.text5}>
									{"Location: Kuldabad"}
								</Text>
							</View>
							<Text style={styles.text6}>
								{"Contact: +91-9876543210 "}
							</Text>
						</View>
					</View>
				</View>
				<View style={styles.column8}>
					<View style={styles.row12}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6bd71deb-37ca-411d-a101-6b02abc9143b"}} 
							resizeMode = {"stretch"}
							style={styles.image9}
						/>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/901c3551-98df-4702-9ce8-8d6bb04e4c64"}} 
							resizeMode = {"stretch"}
							style={styles.image10}
						/>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/652e7737-8b4e-4641-bf3a-6d475ef31d9d"}} 
							resizeMode = {"stretch"}
							style={styles.image11}
						/>
						<View style={styles.box}>
						</View>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c2d29d0d-90ed-40f8-87e5-abfb562b1ef6"}} 
							resizeMode = {"stretch"}
							style={styles.image11}
						/>
					</View>
					<View style={styles.row13}>
						<Text style={styles.text13}>
							{"Home"}
						</Text>
						<Text style={styles.text14}>
							{"  Doctors"}
						</Text>
						<Text style={styles.text15}>
							{"Policies"}
						</Text>
						<Text style={styles.text16}>
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
		marginBottom: 14,
	},
	column2: {
		backgroundColor: "#FFFFFF",
		borderColor: "#E3E3E333",
		borderRadius: 20,
		borderWidth: 1,
		paddingTop: 12,
		paddingBottom: 72,
		paddingHorizontal: 19,
		marginTop: -40,
		marginHorizontal: 9,
	},
	column3: {
		backgroundColor: "#FFFFFF",
		borderColor: "#221F1F1A",
		borderRadius: 6,
		borderWidth: 1,
		paddingTop: 12,
		paddingBottom: 31,
		paddingLeft: 19,
		marginBottom: 8,
	},
	column4: {
		backgroundColor: "#FFFFFF",
		borderColor: "#221F1F1A",
		borderRadius: 6,
		borderWidth: 1,
		paddingTop: 7,
		paddingBottom: 31,
		paddingLeft: 19,
		marginBottom: 8,
	},
	column5: {
		backgroundColor: "#FFFFFF",
		borderColor: "#221F1F1A",
		borderRadius: 6,
		borderWidth: 1,
		paddingTop: 6,
		paddingBottom: 31,
		paddingLeft: 20,
		marginBottom: 8,
	},
	column6: {
		backgroundColor: "#FFFFFF",
		borderColor: "#221F1F1A",
		borderRadius: 6,
		borderWidth: 1,
		paddingTop: 5,
		paddingBottom: 32,
		paddingLeft: 19,
		marginBottom: 11,
	},
	column7: {
		backgroundColor: "#FFFFFF",
		borderColor: "#221F1F1A",
		borderRadius: 6,
		borderWidth: 1,
		paddingTop: 5,
		paddingBottom: 32,
		paddingLeft: 20,
	},
	column8: {
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
		width: 14,
		height: 14,
		marginRight: 11,
	},
	image3: {
		width: 22,
		height: 19,
		marginRight: 8,
	},
	image4: {
		width: 16,
		height: 14,
	},
	image5: {
		width: 16,
		height: 16,
		marginRight: 10,
	},
	image6: {
		width: 13,
		height: 14,
		marginRight: 2,
	},
	image7: {
		width: 22,
		height: 22,
		marginRight: 4,
	},
	image8: {
		width: 16,
		height: 16,
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
	input: {
		color: "#233876",
		fontSize: 14,
		flex: 1,
		paddingVertical: 11,
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
		alignItems: "center",
		backgroundColor: "#EEF3FF",
		borderRadius: 30,
		paddingHorizontal: 30,
		marginTop: 30,
	},
	row3: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#EEF3FF",
		borderRadius: 30,
		paddingVertical: 9,
		paddingLeft: 26,
		paddingRight: 14,
		marginBottom: 12,
	},
	row4: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 9,
		marginRight: 9,
	},
	row5: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 11,
		marginRight: 157,
	},
	row6: {
		flexDirection: "row",
		marginBottom: 9,
		marginRight: 7,
	},
	row7: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 11,
		marginRight: 170,
	},
	row8: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 9,
		marginRight: 9,
	},
	row9: {
		flexDirection: "row",
		marginBottom: 8,
		marginRight: 7,
	},
	row10: {
		flexDirection: "row",
		marginBottom: 9,
		marginRight: 9,
	},
	row11: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 11,
		marginRight: 149,
	},
	row12: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 8,
	},
	row13: {
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
		color: "#233876",
		fontSize: 14,
	},
	text3: {
		color: "#221F1F",
		fontSize: 16,
		marginRight: 4,
		flex: 1,
	},
	text4: {
		color: "#66CB9F",
		fontSize: 14,
	},
	text5: {
		color: "#221F1F",
		fontSize: 12,
		flex: 1,
	},
	text6: {
		color: "#221F1F",
		fontSize: 12,
	},
	text7: {
		color: "#221F1F",
		fontSize: 16,
		marginTop: 14,
		marginRight: 4,
		flex: 1,
	},
	text8: {
		color: "#F24822",
		fontSize: 14,
		marginTop: 6,
	},
	text9: {
		color: "#221F1F",
		fontSize: 16,
		marginTop: 15,
	},
	text10: {
		color: "#66CB9F",
		fontSize: 14,
		marginTop: 3,
	},
	text11: {
		color: "#221F1F",
		fontSize: 16,
		marginTop: 16,
		marginRight: 4,
		flex: 1,
	},
	text12: {
		color: "#221F1F",
		fontSize: 16,
		marginTop: 15,
		marginRight: 4,
		flex: 1,
	},
	text13: {
		color: "#4C6FFF",
		fontSize: 12,
		marginRight: 4,
		flex: 1,
	},
	text14: {
		color: "#7A7979",
		fontSize: 12,
		marginRight: 29,
	},
	text15: {
		color: "#7A7979",
		fontSize: 12,
		marginRight: 30,
	},
	text16: {
		color: "#221F1F",
		fontSize: 12,
		marginRight: 27,
	},
	view: {
		height: 151,
		backgroundColor: "#FFFFFF",
	},
	view2: {
		backgroundColor: "#4C6FFFCC",
		paddingHorizontal: 36,
		marginTop: 20,
	},
});