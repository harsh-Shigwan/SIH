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
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9d07bb37-829e-4430-b485-2e7201211f19"}} 
						resizeMode = {"stretch"}
						style={styles.image}
					/>
				</View>
				<View style={styles.column}>
					<View style={styles.row2}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6c5add4e-dfaa-4ef5-8716-65ee48ed9a81"}} 
							resizeMode = {"stretch"}
							style={styles.image2}
						/>
						<View style={styles.box}>
						</View>
						<Text style={styles.text2}>
							{"Raise Concerns"}
						</Text>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b3f419a3-e1a6-47e9-bf7e-61628e0ac059"}} 
							resizeMode = {"stretch"}
							style={styles.image2}
						/>
					</View>
					<View style={styles.row3}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ccf181ad-d706-4cfc-abde-e09b04020bd7"}} 
							resizeMode = {"stretch"}
							style={styles.image3}
						/>
						<View style={styles.view}>
							<View style={styles.box2}>
							</View>
						</View>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5ce48329-1518-43f0-b3e6-78e82806e937"}} 
							resizeMode = {"stretch"}
							style={styles.image3}
						/>
						<View style={styles.box3}>
						</View>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f4e3d22d-a00c-4c68-8684-0165c49f0301"}} 
							resizeMode = {"stretch"}
							style={styles.image3}
						/>
						<View style={styles.box3}>
						</View>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9fdc7a93-8e89-403a-a879-e076bb7e2bbc"}} 
							resizeMode = {"stretch"}
							style={styles.image3}
						/>
					</View>
					<View style={styles.box4}>
					</View>
					<Text style={styles.text3}>
						{"Hospital Details "}
					</Text>
					<View style={styles.row4}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/67a6ea86-dbeb-49ef-a97e-77b14e9c7a77"}} 
							resizeMode = {"stretch"}
							style={styles.image4}
						/>
						<View style={styles.column2}>
							<Text style={styles.text4}>
								{"Breach Candy Hospital"}
							</Text>
							<View style={styles.row5}>
								<Image
									source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4900386f-762d-4d23-bafd-108395aed00d"}} 
									resizeMode = {"stretch"}
									style={styles.image5}
								/>
								<Text style={styles.text5}>
									{"Bhulabhai Desai Marg, Cumballa Hill, Mumbai"}
								</Text>
							</View>
							<View style={styles.row6}>
								<Image
									source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/faa7ec27-194b-4769-8223-da448e10159a"}} 
									resizeMode = {"stretch"}
									style={styles.image6}
								/>
								<Text style={styles.text6}>
									{" 022 2366 7949"}
								</Text>
							</View>
						</View>
					</View>
					<TouchableOpacity style={styles.button} onPress={()=>alert('Pressed!')}>
						<Text style={styles.text7}>
							{"Next"}
						</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.column3}>
					<View style={styles.row7}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e5b8bfea-179f-468a-b4ba-cafc41bc98e1"}} 
							resizeMode = {"stretch"}
							style={styles.image7}
						/>
						<View style={styles.box}>
						</View>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/49b658df-0a90-488f-a70a-91f185688037"}} 
							resizeMode = {"stretch"}
							style={styles.image8}
						/>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/abad47b9-b3ad-476e-8514-85e570653c55"}} 
							resizeMode = {"stretch"}
							style={styles.image9}
						/>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ff0c137f-e41f-419e-b38f-b131f405daa5"}} 
							resizeMode = {"stretch"}
							style={styles.image10}
						/>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/997cd317-39e5-4e6e-bca0-3242e409cb70"}} 
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
		width: 60,
		height: 6,
		backgroundColor: "#EFF0F6",
		borderRadius: 40,
	},
	box4: {
		height: 1,
		backgroundColor: "#D9DBE8",
		marginBottom: 13,
		marginHorizontal: 15,
	},
	button: {
		alignItems: "center",
		backgroundColor: "#4C6FFFCC",
		borderRadius: 10,
		paddingVertical: 18,
		marginHorizontal: 38,
	},
	column: {
		backgroundColor: "#FFFFFF",
		borderColor: "#EFF0F6",
		borderWidth: 1,
		paddingBottom: 50,
		marginBottom: 30,
		marginHorizontal: 7,
	},
	column2: {
		flex: 1,
	},
	column3: {
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
		borderRadius: 41,
		width: 55,
		height: 58,
		marginRight: 7,
	},
	image5: {
		width: 11,
		height: 12,
	},
	image6: {
		width: 12,
		height: 12,
		marginRight: 6,
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
		alignItems: "center",
		marginBottom: 261,
		marginHorizontal: 15,
	},
	row5: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 7,
	},
	row6: {
		flexDirection: "row",
		alignItems: "center",
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
		color: "#71717A",
		fontSize: 10,
		marginBottom: 21,
		marginLeft: 15,
	},
	text4: {
		color: "#18181B",
		fontSize: 18,
		marginBottom: 6,
		marginHorizontal: 1,
	},
	text5: {
		color: "#71717A",
		fontSize: 10,
	},
	text6: {
		color: "#71717A",
		fontSize: 12,
		flex: 1,
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
		width: 60,
		backgroundColor: "#EFF0F6",
		borderRadius: 40,
	},
});