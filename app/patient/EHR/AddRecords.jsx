import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, TouchableOpacity, StyleSheet, } from "react-native";
export default (props) => {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>
				<View style={styles.row}>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/149a99ab-eca3-4567-a28c-84ab9e39a5a0"}} 
						resizeMode = {"stretch"}
						style={styles.image}
					/>
					<Text style={styles.text}>
						{"Add other records"}
					</Text>
				</View>
				<Text style={styles.text2}>
					{"Label"}
				</Text>
				<View style={styles.row2}>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8a07e46d-08ac-4453-a081-9bdcbff26151"}} 
						resizeMode = {"stretch"}
						style={styles.image2}
					/>
					<Text style={styles.text3}>
						{"Search for record type...."}
					</Text>
					<View style={styles.box}>
					</View>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f977342b-cf44-4e66-bfd5-82a8c8751518"}} 
						resizeMode = {"stretch"}
						style={styles.image3}
					/>
				</View>
				<Text style={styles.text4}>
					{"Label"}
				</Text>
				<View style={styles.view}>
					<Text style={styles.text3}>
						{"type the record details here ....."}
					</Text>
				</View>
				<Text style={styles.text5}>
					{"Max. 2000 characters"}
				</Text>
				<TouchableOpacity style={styles.button} onPress={()=>alert('Pressed!')}>
					<Text style={styles.text6}>
						{"Add Record"}
					</Text>
				</TouchableOpacity>
				<Image
					source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/533c33b7-c93a-4dc2-8b0d-9e55b0b3d569"}} 
					resizeMode = {"stretch"}
					style={styles.image4}
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
	button: {
		alignItems: "center",
		backgroundColor: "#4C6FFFCC",
		borderRadius: 10,
		paddingVertical: 17,
		marginHorizontal: 19,
	},
	image: {
		width: 24,
		height: 24,
		marginRight: 46,
	},
	image2: {
		width: 19,
		height: 20,
		marginRight: 19,
	},
	image3: {
		width: 15,
		height: 15,
	},
	image4: {
		height: 19,
		marginHorizontal: 167,
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 61,
		marginHorizontal: 33,
	},
	row2: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderColor: "#F0F3FF",
		borderRadius: 12,
		borderWidth: 1,
		paddingVertical: 9,
		paddingHorizontal: 17,
		marginBottom: 49,
		marginHorizontal: 25,
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
		color: "#8D8D8D",
		fontSize: 15,
		marginBottom: 8,
		marginLeft: 32,
	},
	text3: {
		color: "#BBBBBB",
		fontSize: 12,
	},
	text4: {
		color: "#8D8D8D",
		fontSize: 15,
		marginBottom: 13,
		marginLeft: 27,
	},
	text5: {
		color: "#AAAAAA",
		fontSize: 10,
		marginBottom: 153,
		marginHorizontal: 17,
	},
	text6: {
		color: "#FFFFFF",
		fontSize: 20,
	},
	view: {
		borderColor: "#A1A1A166",
		borderRadius: 12,
		borderWidth: 1,
		paddingTop: 21,
		paddingBottom: 192,
		paddingHorizontal: 23,
		marginBottom: 15,
		marginHorizontal: 17,
	},
});