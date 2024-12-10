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
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4c263078-39f6-4025-91c6-ba272e20a129"}} 
						resizeMode = {"stretch"}
						style={styles.image}
					/>
				</View>
				<View style={styles.column}>
					<View style={styles.view}>
						<View style={styles.view2}>
							<View style={styles.row2}>
								<Image
									source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/abccec41-9998-44bd-b5c8-4c4a83192bad"}} 
									resizeMode = {"stretch"}
									style={styles.image2}
								/>
								<TextInput
									placeholder={"Search Doctor"}
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
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fbb0115b-6015-4097-8683-67da7f8fb579"}} 
								resizeMode = {"stretch"}
								style={styles.image3}
							/>
							<View style={styles.column3}>
								<Text style={styles.text2}>
									{"Dr. Rishi"}
								</Text>
								<Text style={styles.text3}>
									{"Chardiologist"}
								</Text>
								<View style={styles.column4}>
									<View style={styles.view3}>
										<Image
											source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5cc1485f-5709-4364-a664-1bd9e91c50e0"}} 
											resizeMode = {"stretch"}
											style={styles.image4}
										/>
									</View>
									<Text style={styles.absoluteText}>
										{"4.7"}
									</Text>
								</View>
								<View style={styles.row4}>
									<Image
										source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f1b0a2a2-754e-43ee-8bf6-03c56d9375bf"}} 
										resizeMode = {"stretch"}
										style={styles.image5}
									/>
									<Text style={styles.text4}>
										{"Contact : 9876543451"}
									</Text>
								</View>
							</View>
						</View>
						<View style={styles.row5}>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9b0f2323-7eb8-4037-952e-0328d1d3160d"}} 
								resizeMode = {"stretch"}
								style={styles.image6}
							/>
							<View style={styles.column5}>
								<Text style={styles.text5}>
									{"Dr. Vaamana"}
								</Text>
								<Text style={styles.text6}>
									{"Dentists"}
								</Text>
								<View style={styles.column6}>
									<View style={styles.view3}>
										<Image
											source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/43cfe5ea-dac6-4e57-ab4f-de71ed2e2090"}} 
											resizeMode = {"stretch"}
											style={styles.image4}
										/>
									</View>
									<Text style={styles.absoluteText}>
										{"4.7"}
									</Text>
								</View>
								<View style={styles.row4}>
									<Image
										source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/054fdfdf-95de-4916-ac5e-71491805874c"}} 
										resizeMode = {"stretch"}
										style={styles.image5}
									/>
									<Text style={styles.text4}>
										{"Contact : 9876543451"}
									</Text>
								</View>
							</View>
						</View>
						<View style={styles.row6}>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cc74a3fb-e1da-472e-8cb1-1a628929c579"}} 
								resizeMode = {"stretch"}
								style={styles.image6}
							/>
							<View style={styles.column5}>
								<Text style={styles.text7}>
									{"Dr. Nallarasi"}
								</Text>
								<Text style={styles.text3}>
									{"Orthopaedic"}
								</Text>
								<View style={styles.column6}>
									<View style={styles.view3}>
										<Image
											source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f837205e-f793-42a7-bee4-45a1162afc00"}} 
											resizeMode = {"stretch"}
											style={styles.image4}
										/>
									</View>
									<Text style={styles.absoluteText}>
										{"4.7"}
									</Text>
								</View>
								<View style={styles.row4}>
									<Image
										source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fa8f3239-d7b4-49d5-8643-fdfee00bcec6"}} 
										resizeMode = {"stretch"}
										style={styles.image5}
									/>
									<Text style={styles.text4}>
										{"Contact : 9876543451"}
									</Text>
								</View>
							</View>
						</View>
						<View style={styles.row5}>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5b24747d-91e7-4a88-9913-5c77eb975677"}} 
								resizeMode = {"stretch"}
								style={styles.image6}
							/>
							<View style={styles.column5}>
								<Text style={styles.text8}>
									{"Dr. Nihal"}
								</Text>
								<Text style={styles.text3}>
									{"Chardiologist"}
								</Text>
								<View style={styles.column6}>
									<View style={styles.view3}>
										<Image
											source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/57a3ec4d-2f77-4c48-80eb-f8715f00d2e2"}} 
											resizeMode = {"stretch"}
											style={styles.image4}
										/>
									</View>
									<Text style={styles.absoluteText}>
										{"4.7"}
									</Text>
								</View>
								<View style={styles.row4}>
									<Image
										source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/11438ed7-0b92-4798-91da-777eb10bc41b"}} 
										resizeMode = {"stretch"}
										style={styles.image5}
									/>
									<Text style={styles.text4}>
										{"Contact : 9876543451"}
									</Text>
								</View>
							</View>
						</View>
						<View style={styles.row7}>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/17effbf6-27b6-42b3-a3ea-2f29f81045dd"}} 
								resizeMode = {"stretch"}
								style={styles.image6}
							/>
							<View style={styles.column5}>
								<Text style={styles.text9}>
									{"Dr. Rishita"}
								</Text>
								<Text style={styles.text3}>
									{"Chardiologist"}
								</Text>
								<View style={styles.column6}>
									<View style={styles.view3}>
										<Image
											source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/153fc9cc-04eb-4440-8f3d-c717ab057900"}} 
											resizeMode = {"stretch"}
											style={styles.image4}
										/>
									</View>
									<Text style={styles.absoluteText}>
										{"4.7"}
									</Text>
								</View>
								<View style={styles.row4}>
									<Image
										source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cad2ccac-aeec-406f-853e-97462847ede1"}} 
										resizeMode = {"stretch"}
										style={styles.image5}
									/>
									<Text style={styles.text4}>
										{"Contact : 9876543451"}
									</Text>
								</View>
							</View>
						</View>
					</View>
				</View>
				<View style={styles.column7}>
					<View style={styles.row8}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a9fc298f-1a98-462a-b211-25ebd882863e"}} 
							resizeMode = {"stretch"}
							style={styles.image7}
						/>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/72f22629-b5dc-4a0d-afd4-94834241d9d8"}} 
							resizeMode = {"stretch"}
							style={styles.image8}
						/>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6d2202e7-dd7b-4513-84f0-045250b21710"}} 
							resizeMode = {"stretch"}
							style={styles.image9}
						/>
						<View style={styles.box}>
						</View>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ca1a1421-ad6e-475d-a766-cdf5c8118360"}} 
							resizeMode = {"stretch"}
							style={styles.image9}
						/>
					</View>
					<View style={styles.row9}>
						<Text style={styles.text10}>
							{"Home"}
						</Text>
						<Text style={styles.text11}>
							{"  Doctors"}
						</Text>
						<Text style={styles.text11}>
							{"Policies"}
						</Text>
						<Text style={styles.text12}>
							{"Queries"}
						</Text>
						<Text style={styles.text4}>
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
	absoluteText: {
		position: "absolute",
		bottom: -1,
		right: 5,
		color: "#407CE2",
		fontSize: 12,
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
		paddingVertical: 83,
		paddingHorizontal: 13,
		marginTop: -40,
		marginHorizontal: 14,
	},
	column3: {
		flex: 1,
		alignItems: "flex-start",
		paddingHorizontal: 1,
	},
	column4: {
		width: 42,
		height: 16,
		marginBottom: 6,
	},
	column5: {
		flex: 1,
	},
	column6: {
		marginBottom: 7,
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
		width: 14,
		height: 14,
		marginRight: 10,
	},
	image3: {
		borderRadius: 6,
		width: 99,
		height: 90,
		marginRight: 15,
	},
	image4: {
		width: 11,
		height: 9,
		marginTop: 4,
	},
	image5: {
		width: 16,
		height: 16,
	},
	image6: {
		borderRadius: 6,
		width: 99,
		height: 90,
		marginRight: 16,
	},
	image7: {
		width: 19,
		height: 20,
		marginRight: 52,
	},
	image8: {
		width: 24,
		height: 24,
		marginRight: 51,
	},
	image9: {
		width: 24,
		height: 24,
	},
	input: {
		color: "#233876",
		fontSize: 14,
		flex: 1,
		paddingVertical: 12,
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
		backgroundColor: "#EEF3FF",
		borderRadius: 30,
		paddingHorizontal: 30,
		marginTop: 30,
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
		marginBottom: 14,
	},
	row4: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	row5: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderColor: "#221F1F1A",
		borderRadius: 6,
		borderWidth: 1,
		paddingVertical: 8,
		paddingHorizontal: 9,
		marginBottom: 7,
	},
	row6: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderColor: "#221F1F1A",
		borderRadius: 6,
		borderWidth: 1,
		paddingVertical: 8,
		paddingHorizontal: 9,
		marginBottom: 8,
	},
	row7: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderColor: "#221F1F1A",
		borderRadius: 6,
		borderWidth: 1,
		paddingVertical: 8,
		paddingHorizontal: 9,
	},
	row8: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 8,
	},
	row9: {
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
		fontSize: 16,
		marginBottom: 11,
	},
	text3: {
		color: "#221F1F",
		fontSize: 12,
		marginBottom: 7,
	},
	text4: {
		color: "#221F1F",
		fontSize: 12,
	},
	text5: {
		color: "#101623",
		fontSize: 16,
		marginBottom: 9,
		marginHorizontal: 1,
	},
	text6: {
		color: "#221F1F",
		fontSize: 12,
		marginBottom: 7,
		marginLeft: 1,
	},
	text7: {
		color: "#101623",
		fontSize: 16,
		marginBottom: 11,
		marginHorizontal: 1,
	},
	text8: {
		color: "#101623",
		fontSize: 16,
		marginBottom: 11,
		marginLeft: 1,
	},
	text9: {
		color: "#221F1F",
		fontSize: 16,
		marginBottom: 11,
		marginHorizontal: 1,
	},
	text10: {
		color: "#4C6FFF",
		fontSize: 12,
		marginRight: 4,
		flex: 1,
	},
	text11: {
		color: "#7A7979",
		fontSize: 12,
		marginRight: 30,
	},
	text12: {
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
	view3: {
		backgroundColor: "#407CE22B",
		borderRadius: 2,
		paddingHorizontal: 4,
	},
});