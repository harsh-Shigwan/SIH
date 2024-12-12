import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
export default (props) => {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>
				
        <TouchableOpacity onPress={()=>props.navigation.navigate("ConcernDetails")}>
				<View style={styles.column}>
					<View style={styles.row2}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/df79b756-e82a-42b5-a97e-8d1ffe20c976"}} 
							resizeMode = {"stretch"}
							style={styles.image2}
						/>
						<Text style={styles.text2}>
							{"Administrator"}
						</Text>
						<Text style={styles.text3}>
							{"now"}
						</Text>
						<View style={styles.box}>
						</View>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b10bdd9c-842d-47a0-9091-5c6b45cdbe10"}} 
							resizeMode = {"stretch"}
							style={styles.image3}
						/>
					</View>
					<Text style={styles.text4}>
						{"Hi Anastassia!"}
					</Text>
					<Text style={styles.text5}>
						{"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor"}
					</Text>
				</View>

        </TouchableOpacity>
			
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
		paddingVertical: 24,
		paddingLeft: 24,
		marginBottom: 563,
		marginHorizontal: 9,
	},
	column2: {
		backgroundColor: "#FFFFFF",
		borderColor: "#EEEEEE",
		borderWidth: 1,
		paddingVertical: 17,
		paddingHorizontal: 18,
	},
	image: {
		height: 24,
		marginTop: 10,
	},
	image2: {
		width: 16,
		height: 16,
		marginRight: 6,
	},
	image3: {
		width: 16,
		height: 16,
	},
	image4: {
		width: 19,
		height: 20,
		marginRight: 52,
	},
	image5: {
		width: 24,
		height: 24,
		marginRight: 51,
	},
	image6: {
		width: 24,
		height: 24,
	},
	row: {
		flexDirection: "row",
		alignItems: "flex-start",
		marginBottom: 29,
		marginHorizontal: 30,
	},
	row2: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 15,
		marginRight: 9,
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
		paddingTop: 30,
	},
	text: {
		color: "#221F1F",
		fontSize: 16,
		marginTop: 19,
		flex: 1,
	},
	text2: {
		color: "#4C6FFF",
		fontSize: 12,
		marginRight: 7,
	},
	text3: {
		color: "#595959",
		fontSize: 12,
	},
	text4: {
		color: "#222222",
		fontSize: 15,
		marginBottom: 9,
	},
	text5: {
		color: "#686868",
		fontSize: 13,
	},
	text6: {
		color: "#4C6FFF",
		fontSize: 12,
		marginRight: 4,
		flex: 1,
	},
	text7: {
		color: "#7A7979",
		fontSize: 12,
		marginRight: 30,
	},
	text8: {
		color: "#221F1F",
		fontSize: 12,
		marginRight: 27,
	},
	text9: {
		color: "#221F1F",
		fontSize: 12,
	},
	view: {
		width: 42,
		backgroundColor: "#4C6FFF2E",
		borderRadius: 9,
		paddingHorizontal: 8,
		marginRight: 44,
	},
});