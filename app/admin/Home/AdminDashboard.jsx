import { React, useState} from "react";
import { SafeAreaView, View, ScrollView, Text, Image, TextInput, ImageBackground, StyleSheet, } from "react-native";
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
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c99471a9-7d9b-43d4-bb5f-9f1e447dc79d"}} 
						resizeMode = {"stretch"}
						style={styles.image}
					/>
				</View>
				<View style={styles.column}>
					<View style={styles.view}>
						<View style={styles.row2}>
							<View style={styles.view2}>
								<Image
									source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/133ab695-0498-41c4-ace6-9e388c33dfbd"}} 
									resizeMode = {"stretch"}
									style={styles.image2}
								/>
							</View>
							<View style={styles.column2}>
								<Text style={styles.text2}>
									{"Hospitals on-board"}
								</Text>
								<Text style={styles.text3}>
									{"23"}
								</Text>
							</View>
						</View>
					</View>
					<View style={styles.absoluteView}>
						<View style={styles.row3}>
							<View style={styles.view3}>
								<Image
									source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/694c4289-9165-4ec6-9c25-44064323d971"}} 
									resizeMode = {"stretch"}
									style={styles.image2}
								/>
							</View>
							<View style={styles.column3}>
								<Text style={styles.text2}>
									{"Doctors on-board"}
								</Text>
								<Text style={styles.text4}>
									{"200"}
								</Text>
							</View>
						</View>
					</View>
				</View>
				<View style={styles.row4}>
					<View style={styles.view4}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/58e971e4-a42e-4c26-8023-6670c540d294"}} 
							resizeMode = {"stretch"}
							style={styles.image3}
						/>
					</View>
					<View style={styles.column4}>
						<Text style={styles.text5}>
							{"Registered Hospitals"}
						</Text>
						<Text style={styles.text6}>
							{"View Details ->"}
						</Text>
					</View>
				</View>
				<View style={styles.row5}>
					<View style={styles.view5}>
						<View >
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7a16ebf7-3ac7-4d0f-bcf1-3d10e4d6a824"}} 
								resizeMode = {"stretch"}
								style={styles.image4}
							/>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e8c2406c-ddff-4f1c-91e6-221963d98c2e"}} 
								resizeMode = {"stretch"}
								style={styles.image5}
							/>
						</View>
					</View>
					<View style={styles.column4}>
						<Text style={styles.text5}>
							{"Registered Doctors"}
						</Text>
						<Text style={styles.text6}>
							{"View Details ->"}
						</Text>
					</View>
				</View>
				<Text style={styles.text7}>
					{"Performance Overview\n"}
				</Text>
				<View style={styles.row6}>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7d63779b-7c06-4d79-b73f-b7a82bd1bdcb"}} 
						resizeMode = {"stretch"}
						style={styles.image6}
					/>
					<TextInput
						placeholder={"Search Hospital "}
						value={textInput1}
						onChangeText={onChangeTextInput1}
						style={styles.input}
					/>
				</View>
				<View style={styles.column5}>
					<View style={styles.row7}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/14f55e47-ca37-4365-885e-553493b74fde"}} 
							resizeMode = {"stretch"}
							style={styles.image7}
						/>
						<Text style={styles.text8}>
							{"8"}
						</Text>
					</View>
					<View style={styles.row8}>
						<View style={styles.column6}>
							<Text style={styles.text9}>
								{"\nDaily admissions"}
							</Text>
							<View style={styles.row9}>
								<Image
									source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/83ab20c2-7a96-42d8-a573-1f3c9a2ec149"}} 
									resizeMode = {"stretch"}
									style={styles.image7}
								/>
								<Text style={styles.text8}>
									{"5"}
								</Text>
							</View>
							<Text style={styles.text10}>
								{" bed utilization rates\n"}
							</Text>
							<View style={styles.row10}>
								<Image
									source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/60cf4ae6-385d-47b3-a1c3-4680ac07f6a1"}} 
									resizeMode = {"stretch"}
									style={styles.image7}
								/>
								<Text style={styles.text8}>
									{"2"}
								</Text>
							</View>
						</View>
						<ImageBackground 
							source={{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0f5fe4be-029b-4d08-8f5a-bad837493e02"}} 
							resizeMode = {'stretch'}
							style={styles.view6}
							>
							<Text style={styles.text11}>
								{"23"}
							</Text>
						</ImageBackground>
					</View>
					<Text style={styles.text12}>
						{"resource availability\n"}
					</Text>
				</View>
				<View style={styles.row11}>
					<View style={styles.column7}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/10f6160b-110b-4e80-984f-065f1246e8d6"}} 
							resizeMode = {"stretch"}
							style={styles.image8}
						/>
						<Text style={styles.text13}>
							{"Active Programs \nand Policies"}
						</Text>
						<Text style={styles.text14}>
							{"Ongoing Initiatives ->"}
						</Text>
					</View>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0ad13780-14d6-404d-a9d3-6a205333c6b6"}} 
						resizeMode = {"stretch"}
						style={styles.image9}
					/>
				</View>
				<View style={styles.row12}>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9ed10499-1d23-44a7-ac4e-5147858baebd"}} 
						resizeMode = {"stretch"}
						style={styles.image10}
					/>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7d3f77f8-2491-464b-b3c3-8c3b8053288c"}} 
						resizeMode = {"stretch"}
						style={styles.image11}
					/>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9d9ec9f0-ec6c-4395-b652-896cdece0378"}} 
						resizeMode = {"stretch"}
						style={styles.image12}
					/>
					<View style={styles.box}>
					</View>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/99a6df4c-c7d9-4c00-883f-d63e8c212462"}} 
						resizeMode = {"stretch"}
						style={styles.image12}
					/>
				</View>
				<View style={styles.row13}>
					<Text style={styles.text15}>
						{"Home"}
					</Text>
					<Text style={styles.text16}>
						{"  Doctors"}
					</Text>
					<Text style={styles.text16}>
						{"Policies"}
					</Text>
					<Text style={styles.text17}>
						{"Queries"}
					</Text>
					<Text style={styles.text17}>
						{"Profile"}
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
	absoluteView: {
		position: "absolute",
		bottom: 7,
		right: -21,
		width: 175,
		height: 79,
		backgroundColor: "#FFFFFF",
		borderRadius: 16,
		paddingHorizontal: 24,
		shadowColor: "#3232470D",
		shadowOpacity: 0.1,
		shadowOffset: {
		    width: 0,
		    height: 3
		},
		shadowRadius: 8,
		elevation: 8,
	},
	box: {
		flex: 1,
	},
	column: {
		marginBottom: 12,
	},
	column2: {
		width: 61,
	},
	column3: {
		flex: 1,
		marginTop: 4,
	},
	column4: {
		flex: 1,
	},
	column5: {
		backgroundColor: "#FFFFFF",
		borderColor: "#EEEEEE",
		borderRadius: 16,
		borderWidth: 1,
		paddingVertical: 28,
		paddingHorizontal: 24,
		marginBottom: 17,
		marginHorizontal: 36,
	},
	column6: {
		width: 93,
	},
	column7: {
		width: 171,
	},
	image: {
		width: 69,
		height: 11,
	},
	image2: {
		height: 18,
		marginTop: 14,
	},
	image3: {
		height: 24,
		marginTop: 9,
	},
	image4: {
		height: 21,
	},
	image5: {
		height: 18,
		marginHorizontal: 2,
	},
	image6: {
		width: 20,
		height: 20,
		marginRight: 4,
	},
	image7: {
		width: 8,
		height: 8,
		marginRight: 9,
	},
	image8: {
		width: 39,
		height: 38,
		marginBottom: 21,
		marginHorizontal: 7,
	},
	image9: {
		width: 132,
		height: 108,
		marginTop: 31,
	},
	image10: {
		width: 19,
		height: 20,
		marginRight: 51,
	},
	image11: {
		width: 24,
		height: 24,
		marginRight: 51,
	},
	image12: {
		width: 24,
		height: 24,
	},
	input: {
		color: "#718096",
		fontSize: 14,
		flex: 1,
		paddingVertical: 8,
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 2,
		marginHorizontal: 25,
	},
	row2: {
		width: 175,
		height: 79,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderRadius: 16,
		paddingVertical: 9,
		paddingHorizontal: 24,
		marginTop: 9,
		shadowColor: "#3232470D",
		shadowOpacity: 0.1,
		shadowOffset: {
		    width: 0,
		    height: 3
		},
		shadowRadius: 8,
		elevation: 8,
	},
	row3: {
		flexDirection: "row",
		alignItems: "flex-start",
		marginTop: 9,
	},
	row4: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderColor: "#EEEEEE",
		borderRadius: 16,
		borderWidth: 1,
		paddingVertical: 17,
		paddingHorizontal: 24,
		marginBottom: 16,
		marginHorizontal: 9,
	},
	row5: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderColor: "#EEEEEE",
		borderRadius: 16,
		borderWidth: 1,
		paddingVertical: 17,
		paddingHorizontal: 24,
		marginBottom: 38,
		marginHorizontal: 9,
	},
	row6: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderColor: "#000000",
		borderRadius: 30,
		borderWidth: 1,
		paddingHorizontal: 31,
		marginBottom: 17,
		marginHorizontal: 32,
	},
	row7: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 17,
	},
	row8: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 4,
	},
	row9: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 3,
	},
	row10: {
		flexDirection: "row",
		alignItems: "center",
	},
	row11: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-start",
		backgroundColor: "#FFFFFF",
		borderRadius: 16,
		paddingTop: 11,
		paddingBottom: 42,
		paddingLeft: 18,
		marginBottom: 59,
		marginHorizontal: 17,
		shadowColor: "#3232470D",
		shadowOpacity: 0.1,
		shadowOffset: {
		    width: 0,
		    height: 3
		},
		shadowRadius: 8,
		elevation: 8,
	},
	row12: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 8,
		marginHorizontal: 23,
	},
	row13: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginHorizontal: 18,
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
		color: "#718096",
		fontSize: 14,
		marginBottom: 9,
	},
	text3: {
		color: "#16192C",
		fontSize: 20,
		marginLeft: 1,
	},
	text4: {
		color: "#16192C",
		fontSize: 20,
		marginHorizontal: 1,
	},
	text5: {
		color: "#233876",
		fontSize: 16,
		marginBottom: 4,
	},
	text6: {
		color: "#2978B9",
		fontSize: 14,
	},
	text7: {
		color: "#233876",
		fontSize: 20,
		marginBottom: 10,
		marginHorizontal: 69,
	},
	text8: {
		color: "#27272E",
		fontSize: 12,
		flex: 1,
	},
	text9: {
		color: "#718096",
		fontSize: 10,
		marginBottom: 28,
		marginHorizontal: 1,
	},
	text10: {
		color: "#718096",
		fontSize: 10,
		marginBottom: 42,
	},
	text11: {
		color: "#27272E",
		fontSize: 20,
	},
	text12: {
		color: "#718096",
		fontSize: 10,
	},
	text13: {
		color: "#000000",
		fontSize: 22,
		marginBottom: 15,
	},
	text14: {
		color: "#4C6FFF",
		fontSize: 12,
		marginHorizontal: 3,
	},
	text15: {
		color: "#4C6FFF",
		fontSize: 12,
	},
	text16: {
		color: "#7A7979",
		fontSize: 12,
	},
	text17: {
		color: "#221F1F",
		fontSize: 12,
	},
	view: {
		alignItems: "flex-start",
		backgroundColor: "#FFFFFF",
		paddingHorizontal: 12,
	},
	view2: {
		width: 46,
		backgroundColor: "#FFECE3",
		borderRadius: 8,
		paddingHorizontal: 14,
	},
	view3: {
		width: 46,
		backgroundColor: "#E1E7FF",
		borderRadius: 8,
		paddingHorizontal: 14,
		marginRight: 17,
	},
	view4: {
		width: 46,
		backgroundColor: "#E1E8FF",
		borderRadius: 8,
		paddingHorizontal: 10,
		marginRight: 17,
	},
	view5: {
		width: 46,
		backgroundColor: "#E1E8FF",
		borderRadius: 8,
		paddingVertical: 9,
		paddingHorizontal: 10,
		marginRight: 17,
	},
	view6: {
		width: 117,
		height: 115,
		alignItems: "center",
		paddingVertical: 49,
	},
});

