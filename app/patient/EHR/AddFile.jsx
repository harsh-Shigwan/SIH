import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, StyleSheet, TouchableOpacity, } from "react-native";
export default (props) => {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>
				
				<View style={styles.row2}>
					<View style={styles.column}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3dbdd3d2-ad5c-48d9-845a-09ba6199d4aa"}} 
							resizeMode = {"stretch"}
							style={styles.image2}
						/>
						<Text style={styles.text2}>
							{"Reports"}
						</Text>
						<Text style={styles.text3}>
							{"10 reports found"}
						</Text>
					</View>
					<View style={styles.column2}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a1ba49fa-9e66-4428-a65a-bdc00dd4daa7"}} 
							resizeMode = {"stretch"}
							style={styles.image3}
						/>
						<Text style={styles.text2}>
							{"Others"}
						</Text>
						<Text style={styles.text3}>
							{"6 other Records"}
						</Text>
					</View>
				</View>
				<Text style={styles.text4}>
					{"Select Type of EHR data"}
				</Text>
                <TouchableOpacity onPress={()=> props.navigation.navigate("UploadFile")} style={styles.button}>
				<View style={styles.row3}>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eb3c8f51-f18f-42e5-8b4e-dd28086bc96b"}} 
						resizeMode = {"stretch"}
						style={styles.image4}
					/>
					<View style={styles.box}>
					</View>
					<Text style={styles.text5}>
						{"Upload Reports / Data"}
					</Text>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7f762987-8afa-4c6b-b5ce-7e5bcca4e17b"}} 
						resizeMode = {"stretch"}
						style={styles.image5}
					/>
				</View></TouchableOpacity>
				<TouchableOpacity  style={styles.row4} onPress={()=> props.navigation.navigate("AddRecord")}>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d35d1c82-4673-45e2-8f26-91ee8b917ea6"}} 
						resizeMode = {"stretch"}
						style={styles.image6}
					/>
					<View style={styles.box}>
					</View>
					<Text style={styles.text6}>
						{"Add new Text Record"}
					</Text>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/82b7422c-e24f-486b-939a-184f1674f4a8"}} 
						resizeMode = {"stretch"}
						style={styles.image5}
					/>
				</TouchableOpacity>
				<Image
					source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e88a0b4a-cf02-4011-9810-2214263f7745"}} 
					resizeMode = {"stretch"}
					style={styles.image7}
				/>
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
		width: 120,
		backgroundColor: "#45B2CA",
		borderRadius: 15,
		paddingVertical: 24,
		paddingHorizontal: 12,
	},
	column2: {
		width: 120,
		backgroundColor: "#EC728F",
		borderRadius: 15,
		paddingVertical: 24,
		paddingHorizontal: 11,
	},
	image: {
		width: 24,
		height: 24,
		marginRight: 64,
	},
	image2: {
		width: 34,
		height: 34,
		marginBottom: 34,
	},
	image3: {
		width: 32,
		height: 32,
		marginBottom: 35,
	},
	image4: {
		width: 34,
		height: 34,
	},
	image5: {
		width: 4,
		height: 8,
	},
	image6: {
		width: 21,
		height: 12,
	},
	image7: {
		height: 19,
		marginHorizontal: 167,
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 26,
		marginHorizontal: 33,
	},
	row2: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 44,
		marginHorizontal: 35,
	},
	row3: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#4C63FF33",
		borderRadius: 9,
		paddingVertical: 7,
		paddingHorizontal: 16,
		marginBottom: 10,
		marginHorizontal: 17,
	},
	row4: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#4C63FF33",
		borderRadius: 9,
		paddingVertical: 17,
		paddingHorizontal: 22,
		marginBottom: 283,
		marginHorizontal: 17,
	},
	scrollView: {
		flex: 1,
		backgroundColor: "#FFFFFF",
		paddingTop: 26,
	},
	text: {
		color: "#221F1F",
		fontSize: 16,
		flex: 1,
	},
	text2: {
		color: "#F6F6F6",
		fontSize: 16,
		marginBottom: 5,
	},
	text3: {
		color: "#F6F6F6",
		fontSize: 12,
	},
	text4: {
		color: "#000000",
		fontSize: 18,
		marginBottom: 25,
		marginHorizontal: 18,
	},
	text5: {
		color: "#000000",
		fontSize: 16,
		marginRight: 47,
	},
	text6: {
		color: "#000000",
		fontSize: 16,
		marginRight: 52,
	},
});