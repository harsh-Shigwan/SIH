import React, {useState} from "react";
import { SafeAreaView, View, ScrollView, Text, Image, TextInput, TouchableOpacity, StyleSheet, } from "react-native";
export default (props) => {
	const [textInput1, onChangeTextInput1] = useState('');
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>
				
				<View style={styles.column}>
					<View style={styles.row2}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/de6a15ef-f4ac-4217-9c1a-6572d30a8dc4"}} 
							resizeMode = {"stretch"}
							style={styles.image2}
						/>
						<Text style={styles.text2}>
							{"Add Doctors"}
						</Text>
					</View>
					<View style={styles.row3}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0479ea79-0819-4eb7-9412-2543c0146a09"}} 
							resizeMode = {"stretch"}
							style={styles.image3}
						/>
						<View style={styles.view}>
							<View >
								<View style={styles.box}>
								</View>
								<View style={styles.box2}>
								</View>
							</View>
						</View>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aea85ee2-e676-4b19-9471-5a65e7af6de6"}} 
							resizeMode = {"stretch"}
							style={styles.image3}
						/>
						<View style={styles.view}>
							<View >
								<View style={styles.box}>
								</View>
								<View style={styles.box2}>
								</View>
							</View>
						</View>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/489f9bf1-966a-4f92-b5d4-f677b9c2416d"}} 
							resizeMode = {"stretch"}
							style={styles.image4}
						/>
					</View>
					<View style={styles.box3}>
					</View>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fac404d1-6d8c-4fd5-9db9-423411a50fed"}} 
						resizeMode = {"stretch"}
						style={styles.image5}
					/>
					<Text style={styles.text3}>
						{"Years Of  Experience"}
					</Text>
					<View style={styles.row4}>
						<TextInput
							placeholder={"None"}
							value={textInput1}
							onChangeText={onChangeTextInput1}
							style={styles.input}
						/>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fb106c71-6560-40ba-a6e3-cbb5777e109e"}} 
							resizeMode = {"stretch"}
							style={styles.image6}
						/>
					</View>
					<Text style={styles.text4}>
						{"Description of the Issue"}
					</Text>
					<View style={styles.view2}>
						<Text style={styles.text5}>
							{"Give a briefe description of the issue...."}
						</Text>
					</View>
					<Text style={styles.text6}>
						{"Is  available"}
					</Text>
					<View style={styles.row5}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/34658389-ab06-47ec-8022-b5fba7568f0d"}} 
							resizeMode = {"stretch"}
							style={styles.image7}
						/>
						<Text style={styles.text7}>
							{"Yes"}
						</Text>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c31f88d4-3a6d-41f5-adae-71baa04a04b2"}} 
							resizeMode = {"stretch"}
							style={styles.image7}
						/>
						<Text style={styles.text8}>
							{"No"}
						</Text>
					</View>
					<Text style={styles.text9}>
						{"Status"}
					</Text>
					<View style={styles.row6}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4be0fe7e-0db6-4f81-9370-f7c76fe0afb1"}} 
							resizeMode = {"stretch"}
							style={styles.image8}
						/>
						<Text style={styles.text10}>
							{"Active"}
						</Text>
						<View style={styles.box4}>
						</View>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/edbc6df8-2310-423f-9c6a-e39028d8fd33"}} 
							resizeMode = {"stretch"}
							style={styles.image8}
						/>
						<Text style={styles.text11}>
							{"Inactive"}
						</Text>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d0594efd-5d20-4847-9ad8-96aea269c125"}} 
							resizeMode = {"stretch"}
							style={styles.image8}
						/>
						<Text style={styles.text10}>
							{"On Leave"}
						</Text>
					</View>
					<TouchableOpacity style={styles.button} onPress={()=>alert('Pressed!')}>
						<Text style={styles.text12}>
							{"Add Doctor"}
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
		height: 6,
		backgroundColor: "#4C6FFFCC",
		borderRadius: 40,
	},
	box2: {
		height: 6,
		backgroundColor: "#EFF0F6",
		borderRadius: 40,
	},
	box3: {
		height: 1,
		backgroundColor: "#D9DBE8",
		marginBottom: 23,
		marginHorizontal: 15,
	},
	box4: {
		flex: 1,
	},
	button: {
		alignItems: "center",
		backgroundColor: "#4C6FFFCC",
		borderRadius: 10,
		paddingVertical: 19,
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
		marginRight: 89,
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
		marginBottom: 12,
		marginHorizontal: 36,
	},
	image6: {
		width: 10,
		height: 5,
	},
	image7: {
		width: 12,
		height: 12,
		marginRight: 6,
	},
	image8: {
		width: 12,
		height: 12,
		marginRight: 4,
	},
	image9: {
		width: 19,
		height: 20,
	},
	image10: {
		width: 24,
		height: 24,
		marginRight: 51,
	},
	image11: {
		width: 24,
		height: 24,
		marginRight: 53,
	},
	image12: {
		width: 15,
		height: 20,
		marginRight: 49,
	},
	image13: {
		width: 24,
		height: 24,
	},
	input: {
		color: "#939393",
		fontSize: 14,
		marginRight: 4,
		flex: 1,
		paddingVertical: 18,
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
		marginHorizontal: 62,
	},
	row4: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderColor: "#EDF1F3",
		borderRadius: 10,
		borderWidth: 1,
		paddingHorizontal: 15,
		marginBottom: 14,
		marginHorizontal: 36,
	},
	row5: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 55,
		marginHorizontal: 42,
	},
	row6: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 161,
		marginHorizontal: 37,
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
		flex: 1,
	},
	text3: {
		color: "#6C7278",
		fontSize: 12,
		marginBottom: 8,
		marginLeft: 36,
	},
	text4: {
		color: "#6C7278",
		fontSize: 12,
		marginBottom: 7,
		marginLeft: 36,
	},
	text5: {
		color: "#939393",
		fontSize: 10,
	},
	text6: {
		color: "#6C7278",
		fontSize: 12,
		marginBottom: 14,
		marginLeft: 36,
	},
	text7: {
		color: "#6C7278",
		fontSize: 10,
		marginRight: 83,
	},
	text8: {
		color: "#6C7278",
		fontSize: 10,
		flex: 1,
	},
	text9: {
		color: "#6C7278",
		fontSize: 12,
		marginBottom: 18,
		marginLeft: 36,
	},
	text10: {
		color: "#6C7278",
		fontSize: 10,
	},
	text11: {
		color: "#6C7278",
		fontSize: 10,
		marginRight: 64,
	},
	text12: {
		color: "#FFFFFF",
		fontSize: 15,
	},
	text13: {
		color: "#4C6FFF",
		fontSize: 12,
	},
	text14: {
		color: "#7A7979",
		fontSize: 12,
	},
	text15: {
		color: "#221F1F",
		fontSize: 12,
	},
	view: {
		width: 61,
	},
	view2: {
		backgroundColor: "#FFFFFF",
		borderColor: "#EDF1F3",
		borderRadius: 10,
		borderWidth: 1,
		paddingTop: 12,
		paddingBottom: 139,
		paddingHorizontal: 14,
		marginBottom: 29,
		marginHorizontal: 36,
	},
});