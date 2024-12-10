import { useNavigation } from "expo-router";
import React, {useState} from "react";
import { SafeAreaView, View, ScrollView, Image, Text, TextInput, StyleSheet, } from "react-native";
export default (props) => {
	const [textInput1, onChangeTextInput1] = useState('');
    const navigation = useNavigation(); // Hook for navigation

    const handleInputClick = () => {
      // Navigate to NewPage when TextInput is clicked
      navigation.navigate('NewPage');
    };
  
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>
				<View style={styles.column}>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/731caa6b-7582-437c-b4e5-03119d1cd633"}} 
						resizeMode = {"stretch"}
						style={styles.image}
					/>
					<Text style={styles.text}>
						{"welcome !"}
					</Text>
					<Text style={styles.text2}>
						{"Ruchita"}
					</Text>
					<Text style={styles.text3}>
						{"How is it going today ?"}
					</Text>
					<View style={styles.row}>
						<View style={styles.box}>
						</View>
						<View style={styles.box}>
						</View>
						<View style={styles.box2}>
						</View>
						<View style={styles.box3}>
						</View>
					</View>
					<View style={styles.column2}>
						<View >
							<View style={styles.column3}>
								<View style={styles.row2}>
									<Image
										source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/96563b40-ae9d-41ba-8420-a7930ca89664"}} 
										resizeMode = {"stretch"}
										style={styles.image2}
									/>
									<TextInput
										placeholder={"Search doctor, drugs, articles..."}
										value={textInput1}
										onChangeText={onChangeTextInput1}
										style={styles.input}
                                        onFocus={handleInputClick}
									/>
								</View>
								<View style={styles.row3}>
									<View style={styles.view}>
										<Image
											source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/45ec3459-8400-4878-8ba9-ba8377d2ddba"}} 
											resizeMode = {"stretch"}
											style={styles.image3}
										/>
									</View>
									<View style={styles.view}>
										<Image
											source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3ce4f534-02b8-431a-ab07-a6514a5e6d42"}} 
											resizeMode = {"stretch"}
											style={styles.image3}
										/>
									</View>
									<View style={styles.view}>
										<Image
											source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/38cfcf00-dfc9-46e9-b62d-d98e7f96e34d"}} 
											resizeMode = {"stretch"}
											style={styles.image3}
										/>
									</View>
								</View>
								<View style={styles.row4}>
									<Text style={styles.text4}>
										{"Doctors"}
									</Text>
									<Text style={styles.text5}>
										{"Hospitals "}
									</Text>
									<Text style={styles.text6}>
										{"Ambulance"}
									</Text>
								</View>
								<View style={styles.row5}>
									<Text style={styles.text7}>
										{"Health article"}
									</Text>
									<Text style={styles.text8}>
										{"See all"}
									</Text>
								</View>
								<View style={styles.row6}>
									<Image
										source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4ef1fd79-b632-49e3-bcff-819e42f40a9f"}} 
										resizeMode = {"stretch"}
										style={styles.image4}
									/>
									<View style={styles.column4}>
										<Text style={styles.text9}>
											{"The 25 Healthiest Fruits You Can Eat, According to a Nutritionist"}
										</Text>
										<View style={styles.row7}>
											<Text style={styles.text10}>
												{"Jun 10, 20223 "}
											</Text>
											<Text style={styles.text11}>
												{"5min read"}
											</Text>
										</View>
									</View>
									<Image
										source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b66b0038-7803-42c8-ac62-676a7f778416"}} 
										resizeMode = {"stretch"}
										style={styles.image5}
									/>
								</View>
								<View style={styles.row8}>
									<Image
										source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b3e6cdac-0f70-4bce-8443-c0892a7ba14d"}} 
										resizeMode = {"stretch"}
										style={styles.image4}
									/>
									<View style={styles.column4}>
										<Text style={styles.text9}>
											{"The Impact of COVID-19 on Healthcare Systems"}
										</Text>
										<View style={styles.row7}>
											<Text style={styles.text10}>
												{"Jul 10, 2023 "}
											</Text>
											<Text style={styles.text11}>
												{"5min read"}
											</Text>
										</View>
									</View>
									<Image
										source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bb4cb324-e555-43d4-bc24-3415710ccdd8"}} 
										resizeMode = {"stretch"}
										style={styles.image5}
									/>
								</View>
							</View>
							<View style={styles.absoluteView}>
								<View style={styles.row9}>
									<Image
										source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d07272db-89dc-4da8-9570-ec6e38fa4dcb"}} 
										resizeMode = {"stretch"}
										style={styles.image4}
									/>
									<View style={styles.column5}>
										<Text style={styles.text9}>
											{"The Impact of COVID-19 on Healthcare Systems"}
										</Text>
										<View style={styles.row7}>
											<Text style={styles.text10}>
												{"Jul 10, 2023 "}
											</Text>
											<Text style={styles.text11}>
												{"5min read"}
											</Text>
										</View>
									</View>
									<Image
										source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/67c8279d-0171-4861-8c13-6cd5ad8e94b0"}} 
										resizeMode = {"stretch"}
										style={styles.image6}
									/>
								</View>
							</View>
						</View>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ada914c3-2d33-442a-969e-40d57a9a36d8"}} 
							resizeMode = {"stretch"}
							style={styles.absoluteImage}
						/>
					</View>
					<View style={styles.column6}>
						<View style={styles.row10}>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6167a281-386a-42e6-97b8-92e6b6f04f51"}} 
								resizeMode = {"stretch"}
								style={styles.image7}
							/>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a9d6600f-84e5-46d6-8598-956e30521b22"}} 
								resizeMode = {"stretch"}
								style={styles.image8}
							/>
							<View style={styles.box4}>
							</View>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7db8e22f-3696-49fe-8099-f63200ea183c"}} 
								resizeMode = {"stretch"}
								style={styles.image9}
							/>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/037e6a9b-a00e-456a-8f89-095b237a6131"}} 
								resizeMode = {"stretch"}
								style={styles.image10}
							/>
						</View>
						
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
	absoluteImage: {
		position: "absolute",
		top: -209,
		right: 30,
		width: 160,
		height: 239,
	},
	absoluteView: {
		position: "absolute",
		bottom: -29,
		left: 30,
		width: 300,
		height: 67,
		backgroundColor: "#FFFFFF",
		borderColor: "#221F1F1A",
		borderRadius: 6,
		borderWidth: 1,
		paddingHorizontal: 10,
	},
	box: {
		width: 28,
		height: 4,
		backgroundColor: "#407CE2",
		borderRadius: 56,
		marginRight: 7,
	},
	box2: {
		width: 28,
		height: 4,
		backgroundColor: "#95B1F6",
		borderRadius: 56,
		marginRight: 7,
	},
	box3: {
		width: 28,
		height: 4,
		backgroundColor: "#95B1F6",
		borderRadius: 56,
	},
	box4: {
		flex: 1,
	},
	column: {
		marginTop: 15,
	},
	column2: {
		marginBottom: 23,
	},
	column3: {
		backgroundColor: "#FFFFFF",
		borderColor: "#000000",
		borderWidth: 1,
		paddingTop: 20,
		paddingBottom: 53,
	},
	column4: {
		flex: 1,
		marginRight: 4,
	},
	column5: {
		flex: 1,
		marginTop: 3,
		marginRight: 4,
	},
	column6: {
		backgroundColor: "#FFFFFF",
		paddingVertical: 16,
		paddingHorizontal: 39,
		shadowColor: "#0000001F",
		shadowOpacity: 0.1,
		shadowOffset: {
		    width: 0,
		    height: -3
		},
		shadowRadius: 4,
		elevation: 4,
	},
	image: {
		width: 48,
		height: 48,
		marginBottom: 21,
		marginHorizontal: 30,
	},
	image2: {
		width: 18,
		height: 18,
		marginRight: 13,
	},
	image3: {
		height: 31,
		marginTop: 7,
	},
	image4: {
		borderRadius: 6,
		width: 55,
		height: 53,
		marginRight: 12,
	},
	image5: {
		width: 10,
		height: 12,
	},
	image6: {
		width: 10,
		height: 12,
		marginTop: 1,
	},
	image7: {
		width: 19,
		height: 20,
		marginRight: 55,
	},
	image8: {
		width: 15,
		height: 20,
	},
	image9: {
		width: 24,
		height: 24,
		marginRight: 61,
	},
	image10: {
		width: 24,
		height: 24,
	},
	input: {
		color: "#221F1F",
		fontSize: 12,
		flex: 1,
		paddingVertical: 10,
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 12,
		marginHorizontal: 30,
	},
	row2: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#FAFAFA",
		borderColor: "#E8F3F1",
		borderRadius: 24,
		borderWidth: 1,
		paddingHorizontal: 25,
		marginBottom: 20,
		marginHorizontal: 30,
	},
	row3: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 14,
		marginHorizontal: 48,
	},
	row4: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 39,
		marginHorizontal: 31,
	},
	row5: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 13,
		marginHorizontal: 32,
	},
	row6: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderColor: "#221F1F1A",
		borderRadius: 6,
		borderWidth: 1,
		paddingVertical: 7,
		paddingHorizontal: 10,
		marginBottom: 15,
		marginHorizontal: 30,
	},
	row7: {
		flexDirection: "row",
		alignItems: "center",
	},
	row8: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderColor: "#221F1F1A",
		borderRadius: 6,
		borderWidth: 1,
		paddingVertical: 7,
		paddingHorizontal: 10,
		marginHorizontal: 30,
	},
	row9: {
		flexDirection: "row",
		alignItems: "flex-start",
		marginTop: 7,
	},
	row10: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 8,
	},
	scrollView: {
		flex: 1,
		backgroundColor: "#FFFFFF",
		paddingTop: 65,
	},
	text: {
		color: "#221F1F",
		fontSize: 16,
		marginBottom: 4,
		marginLeft: 31,
	},
	text2: {
		color: "#221F1F",
		fontSize: 16,
		marginBottom: 16,
		marginLeft: 32,
	},
	text3: {
		color: "#221F1F",
		fontSize: 13,
		marginBottom: 44,
		marginLeft: 31,
	},
	text4: {
		color: "#221F1F",
		fontSize: 14,
		marginRight: 4,
		flex: 1,
	},
	text5: {
		color: "#221F1F",
		fontSize: 14,
		marginRight: 37,
	},
	text6: {
		color: "#221F1F",
		fontSize: 14,
	},
	text7: {
		color: "#221F1F",
		fontSize: 16,
	},
	text8: {
		color: "#4C6FFF",
		fontSize: 12,
	},
	text9: {
		color: "#565656",
		fontSize: 10,
		marginBottom: 12,
	},
	text10: {
		color: "#221F1F",
		fontSize: 8,
		marginRight: 9,
	},
	text11: {
		color: "#221F1F",
		fontSize: 8,
		flex: 1,
	},
	text12: {
		color: "#4C6FFF",
		fontSize: 12,
		marginRight: 45,
	},
	text13: {
		color: "#221F1F",
		fontSize: 12,
		marginRight: 46,
	},
	text14: {
		color: "#221F1F",
		fontSize: 12,
		marginRight: 34,
	},
	text15: {
		color: "#221F1F",
		fontSize: 12,
		flex: 1,
	},
	view: {
		width: 45,
		backgroundColor: "#4C6FFFCC",
		borderRadius: 30,
		paddingHorizontal: 7,
		shadowColor: "#0000001A",
		shadowOpacity: 0.1,
		shadowOffset: {
		    width: 0,
		    height: 17
		},
		shadowRadius: 70,
		elevation: 70,
	},
});