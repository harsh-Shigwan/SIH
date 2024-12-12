import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image, ImageBackground, StyleSheet, } from "react-native";
export default (props) => {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>
				<View style={styles.column}>
					<Text style={styles.text}>
						{"OPD  Insights"}
					</Text>
					<View style={styles.row}>
						<View style={styles.column2}>
							<View style={styles.row2}>
								<Image
									source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d23dd4cf-5a59-4ada-a241-9387bb9b3b7f"}} 
									resizeMode = {"stretch"}
									style={styles.image}
								/>
								<Text style={styles.text2}>
									{"8"}
								</Text>
							</View>
							<Text style={styles.text3}>
								{"Beds available"}
							</Text>
							<View style={styles.row2}>
								<Image
									source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aafef1b5-00c1-4d5d-a2da-e656c9858e1b"}} 
									resizeMode = {"stretch"}
									style={styles.image}
								/>
								<Text style={styles.text2}>
									{"5"}
								</Text>
							</View>
							<Text style={styles.text3}>
								{"Wards available"}
							</Text>
							<View style={styles.row2}>
								<Image
									source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/545cf5fe-ad29-411d-aa2d-3b109e849f30"}} 
									resizeMode = {"stretch"}
									style={styles.image}
								/>
								<Text style={styles.text2}>
									{"2"}
								</Text>
							</View>
							<Text style={styles.text4}>
								{"Beds not in use"}
							</Text>
						</View>
						<ImageBackground 
							source={{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/14c98916-9ee7-44ad-b7bd-f73fa3c3157f"}} 
							resizeMode = {'stretch'}
							style={styles.view}
							>
							<Text style={styles.text5}>
								{"23"}
							</Text>
						</ImageBackground>
					</View>
				</View>
				<View style={styles.column}>
					<Text style={styles.text}>
						{"IPD  Insights"}
					</Text>
					<View style={styles.row}>
						<View style={styles.column2}>
							<View style={styles.row2}>
								<Image
									source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/48766a21-2b1f-47e3-a9ea-daff1584d2e7"}} 
									resizeMode = {"stretch"}
									style={styles.image}
								/>
								<Text style={styles.text2}>
									{"8"}
								</Text>
							</View>
							<Text style={styles.text3}>
								{"Beds available"}
							</Text>
							<View style={styles.row2}>
								<Image
									source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a52b23c0-d07a-4ef9-b598-11bb69557748"}} 
									resizeMode = {"stretch"}
									style={styles.image}
								/>
								<Text style={styles.text2}>
									{"5"}
								</Text>
							</View>
							<Text style={styles.text6}>
								{"Wards available"}
							</Text>
							<View style={styles.row2}>
								<Image
									source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/63aae090-22f2-409c-b756-9658215ca839"}} 
									resizeMode = {"stretch"}
									style={styles.image}
								/>
								<Text style={styles.text2}>
									{"2"}
								</Text>
							</View>
							<Text style={styles.text4}>
								{"Beds not in use"}
							</Text>
						</View>
						<ImageBackground 
							source={{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/28d5147f-b0c2-4deb-841d-4254d9fb68ba"}} 
							resizeMode = {'stretch'}
							style={styles.view}
							>
							<Text style={styles.text5}>
								{"23"}
							</Text>
						</ImageBackground>
					</View>
				</View>
				<View style={styles.row3}>
					<View style={styles.column3}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/275def78-5333-4d8d-97c1-d456b5fad71f"}} 
							resizeMode = {"stretch"}
							style={styles.image2}
						/>
						<Text style={styles.text7}>
							{"Active Programs \nand Policies"}
						</Text>
						<Text style={styles.text8}>
							{"Ongoing Initiatives ->"}
						</Text>
					</View>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/21a4801c-0cc5-4c14-9df4-385fd50bc85a"}} 
						resizeMode = {"stretch"}
						style={styles.image3}
					/>
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
		borderColor: "#C4C4C433",
		borderRadius: 16,
		borderWidth: 1,
		paddingVertical: 30,
		paddingHorizontal: 24,
		marginBottom: 30,
		marginHorizontal: 52,
	},
	column2: {
		width: 72,
	},
	column3: {
		width: 171,
	},
	column4: {
		backgroundColor: "#FFFFFF",
		paddingVertical: 17,
		paddingHorizontal: 29,
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
		width: 8,
		height: 8,
		marginRight: 8,
	},
	image2: {
		width: 41,
		height: 40,
		marginBottom: 13,
	},
	image3: {
		width: 132,
		height: 108,
		marginTop: 25,
	},
	image4: {
		width: 19,
		height: 20,
	},
	image5: {
		width: 20,
		height: 20,
		marginRight: 68,
	},
	image6: {
		width: 24,
		height: 24,
		marginRight: 59,
	},
	image7: {
		width: 24,
		height: 24,
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	row2: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 3,
	},
	row3: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-start",
		backgroundColor: "#FFFFFF",
		borderColor: "#C4C4C433",
		borderRadius: 16,
		borderWidth: 1,
		paddingTop: 17,
		paddingBottom: 42,
		paddingLeft: 17,
		marginBottom: 154,
		marginHorizontal: 14,
	},
	row4: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 7,
	},
	row5: {
		flexDirection: "row",
		alignItems: "center",
	},
	scrollView: {
		flex: 1,
		backgroundColor: "#FFFFFF",
		paddingTop: 42,
	},
	text: {
		color: "#16192C",
		fontSize: 16,
		marginBottom: 31,
	},
	text2: {
		color: "#27272E",
		fontSize: 12,
		flex: 1,
	},
	text3: {
		color: "#718096",
		fontSize: 10,
		marginBottom: 27,
	},
	text4: {
		color: "#718096",
		fontSize: 10,
	},
	text5: {
		color: "#27272E",
		fontSize: 20,
	},
	text6: {
		color: "#718096",
		fontSize: 10,
		marginBottom: 26,
	},
	text7: {
		color: "#000000",
		fontSize: 22,
		marginBottom: 15,
	},
	text8: {
		color: "#4C6FFF",
		fontSize: 12,
		marginHorizontal: 3,
	},
	text9: {
		color: "#4C6FFF",
		fontSize: 12,
		marginRight: 4,
		flex: 1,
	},
	text10: {
		color: "#7A7979",
		fontSize: 12,
		marginRight: 70,
	},
	text11: {
		color: "#7A7979",
		fontSize: 12,
		marginRight: 52,
	},
	text12: {
		color: "#221F1F",
		fontSize: 12,
	},
	view: {
		width: 117,
		height: 115,
		alignItems: "center",
		paddingVertical: 50,
	},
});