import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, StyleSheet, } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
export default (props) => {
    const { data }=  props.route.params;
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>
				<View style={styles.row}>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/24a05b07-bdef-4f83-be4a-c376ab6c5e6c"}} 
						resizeMode = {"stretch"}
						style={styles.image}
					/>
					<Text style={styles.text}>
						{"Incoming Queries"}
					</Text>
				</View>
				<View style={styles.column}>
					<Text style={styles.text2}>
						{data.title}
					</Text>
					<Text style={styles.text3}>
						{"Summary:"}
					</Text>
					<Text style={styles.text4}>
						{ data.message}
					</Text>
					<Text style={styles.text5}>
						{"View more....."}
					</Text>
					<View style={styles.row2}>
						<View style={styles.column2}>
							<Text style={styles.text6}>
								{data.sender}
							</Text>
							<Text style={styles.text7}>
								{"Role :  " + data.role}
							</Text>
						</View>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c73ebd5a-3127-41a0-8c60-73b92ccd2c89"}} 
							resizeMode = {"stretch"}
							style={styles.image2}
						/>
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
		backgroundColor: "#FFFFFF",
		borderRadius: 16,
		paddingTop: 36,
		marginBottom: 459,
		marginHorizontal: 16,
		shadowColor: "#5252521A",
		shadowOpacity: 0.1,
		shadowOffset: {
		    width: 0,
		    height: 4
		},
		shadowRadius: 10,
		elevation: 10,
	},
	column2: {
		flex: 1,
		marginRight: 4,
	},
	column3: {
		backgroundColor: "#FFFFFF",
		borderColor: "#EEEEEE",
		borderWidth: 1,
		paddingVertical: 17,
		paddingHorizontal: 18,
	},
	image: {
		width: 24,
		height: 24,
		marginRight: 70,
	},
	image2: {
		borderRadius: 60,
		width: 60,
		height: 60,
	},
	image3: {
		width: 19,
		height: 20,
		marginRight: 52,
	},
	image4: {
		width: 24,
		height: 24,
		marginRight: 51,
	},
	image5: {
		width: 24,
		height: 24,
	},
	row: {
		flexDirection: "row",
		marginBottom: 3,
		marginHorizontal: 14,
	},
	row2: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#F8F8F8",
		padding: 24,
	},
	row3: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 8,
	},
	row4: {
		flexDirection: "row",
		alignItems: "center",
	},
	scrollView: {
		flex: 1,
		backgroundColor: "#FFFFFF",
		paddingTop: 45,
	},
	text: {
		color: "#221F1F",
		fontSize: 16,
		marginTop: 18,
		flex: 1,
	},
	text2: {
		color: "#2B2B2B",
		fontSize: 16,
		marginBottom: 27,
		marginHorizontal: 20,
	},
	text3: {
		color: "#2B2B2B",
		fontSize: 16,
		marginBottom: 6,
		marginLeft: 23,
	},
	text4: {
		color: "#2B2B2B",
		fontSize: 16,
		marginBottom: 21,
		marginHorizontal: 25,
	},
	text5: {
		color: "#4C6FFF",
		fontSize: 16,
		marginBottom: 7,
		marginHorizontal: 16,
	},
	text6: {
		color: "#2B2B2B",
		fontSize: 20,
		marginBottom: 8,
	},
	text7: {
		color: "#777777",
		fontSize: 14,
	},
	text8: {
		color: "#7A7979",
		fontSize: 12,
		marginRight: 4,
		flex: 1,
	},
	text9: {
		color: "#7A7979",
		fontSize: 12,
		marginRight: 30,
	},
	text10: {
		color: "#4C6FFF",
		fontSize: 12,
		marginRight: 27,
	},
	text11: {
		color: "#221F1F",
		fontSize: 12,
	},
});