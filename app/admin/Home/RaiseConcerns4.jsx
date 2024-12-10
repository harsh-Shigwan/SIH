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
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/99654b64-41f5-4c87-bb69-d9ac79bb8d1a"}} 
						resizeMode = {"stretch"}
						style={styles.image}
					/>
				</View>
				<View style={styles.column}>
					<View style={styles.row2}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/13c30de3-2daf-410d-b49c-3e08024fc028"}} 
							resizeMode = {"stretch"}
							style={styles.image2}
						/>
						<View style={styles.box}>
						</View>
						<Text style={styles.text2}>
							{"Raise Concerns"}
						</Text>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9feee437-1540-4d60-a791-3393b40205d9"}} 
							resizeMode = {"stretch"}
							style={styles.image2}
						/>
					</View>
					<View style={styles.row3}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4248d916-6ba4-42de-9ca2-a8171a091d51"}} 
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
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c3bbe53c-0a4d-40c9-9bdb-a8863f4cb099"}} 
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
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b28dcdc0-f1dd-41b3-bb68-3855f71387b2"}} 
							resizeMode = {"stretch"}
							style={styles.image3}
						/>
						<View style={styles.view2}>
							<View style={styles.box2}>
							</View>
						</View>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f0686693-51e4-45d2-a39d-78e5f6a8df36"}} 
							resizeMode = {"stretch"}
							style={styles.image3}
						/>
					</View>
					<View style={styles.box4}>
					</View>
					<View style={styles.column2}>
						<View style={styles.column3}>
							<Text style={styles.text3}>
								{"Success"}
							</Text>
							<Text style={styles.text4}>
								{"Sucessfully sent the concerns to the hospital"}
							</Text>
							<View style={styles.row4}>
								<TouchableOpacity style={styles.button} onPress={()=>alert('Pressed!')}>
									<Text style={styles.text5}>
										{"Cancel"}
									</Text>
								</TouchableOpacity>
								<TouchableOpacity style={styles.button2} onPress={()=>alert('Pressed!')}>
									<Text style={styles.text6}>
										{"Home"}
									</Text>
								</TouchableOpacity>
							</View>
						</View>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c3f79198-025d-4c6d-9d19-2627674f947a"}} 
							resizeMode = {"stretch"}
							style={styles.absoluteImage}
						/>
					</View>
				</View>
				<View style={styles.column4}>
					<View style={styles.row5}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/232a962a-f335-468f-8232-720d3521166d"}} 
							resizeMode = {"stretch"}
							style={styles.image4}
						/>
						<View style={styles.box}>
						</View>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ece798fc-7c44-4a37-8b64-b68cf665f694"}} 
							resizeMode = {"stretch"}
							style={styles.image5}
						/>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fdc24fc8-4df1-424e-9500-ac2fcf38e930"}} 
							resizeMode = {"stretch"}
							style={styles.image6}
						/>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/908daf2f-6bc9-4f2d-a5c6-edd0481cd565"}} 
							resizeMode = {"stretch"}
							style={styles.image7}
						/>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/01d35dcf-dc14-485e-895f-2b5da375455d"}} 
							resizeMode = {"stretch"}
							style={styles.image2}
						/>
					</View>
					<View style={styles.row6}>
						<Text style={styles.text7}>
							{"Home"}
						</Text>
						<Text style={styles.text8}>
							{"  Doctors"}
						</Text>
						<Text style={styles.text8}>
							{"Policies"}
						</Text>
						<Text style={styles.text9}>
							{"Queries"}
						</Text>
						<Text style={styles.text9}>
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
	absoluteImage: {
		position: "absolute",
		top: -50,
		right: 111,
		width: 100,
		height: 100,
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
		height: 1,
		backgroundColor: "#D9DBE8",
		marginBottom: 135,
		marginHorizontal: 15,
	},
	button: {
		width: 144,
		alignItems: "center",
		backgroundColor: "#D0DEEB",
		borderRadius: 4,
		paddingVertical: 13,
	},
	button2: {
		width: 144,
		alignItems: "center",
		backgroundColor: "#4C6FFFCC",
		borderRadius: 4,
		paddingVertical: 14,
	},
	column: {
		backgroundColor: "#FFFFFF",
		borderColor: "#EFF0F6",
		borderWidth: 1,
		paddingBottom: 109,
		marginBottom: 26,
		marginHorizontal: 7,
	},
	column2: {
		marginHorizontal: 14,
	},
	column3: {
		backgroundColor: "#FFFFFF",
		borderRadius: 10,
		paddingTop: 70,
		paddingBottom: 14,
	},
	column4: {
		backgroundColor: "#FFFFFF",
		borderColor: "#EEEEEE",
		borderWidth: 1,
		paddingVertical: 17,
		paddingHorizontal: 23,
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
		width: 19,
		height: 20,
	},
	image5: {
		width: 24,
		height: 24,
		marginRight: 51,
	},
	image6: {
		width: 24,
		height: 24,
		marginRight: 53,
	},
	image7: {
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
		justifyContent: "space-between",
		alignItems: "center",
		marginHorizontal: 15,
	},
	row5: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 8,
	},
	row6: {
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
		color: "#7C8691",
		fontSize: 24,
		marginBottom: 33,
		marginHorizontal: 112,
	},
	text4: {
		color: "#D3DAE0",
		fontSize: 12,
		marginBottom: 33,
		marginHorizontal: 29,
	},
	text5: {
		color: "#9BA9B9",
		fontSize: 14,
	},
	text6: {
		color: "#FFFFFF",
		fontSize: 14,
	},
	text7: {
		color: "#4C6FFF",
		fontSize: 12,
	},
	text8: {
		color: "#7A7979",
		fontSize: 12,
	},
	text9: {
		color: "#221F1F",
		fontSize: 12,
	},
	view: {
		width: 61,
	},
	view2: {
		width: 60,
		backgroundColor: "#EFF0F6",
		borderRadius: 40,
		paddingHorizontal: 1,
	},
});