import React, {useState} from "react";
import { SafeAreaView, View, ScrollView, Image, Text, ImageBackground, TextInput, StyleSheet, } from "react-native";
export default (props) => {
	const [textInput1, onChangeTextInput1] = useState('');
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>
				<View style={styles.row}>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/55345d16-9c05-43ea-abef-eefdb6419b31"}} 
						resizeMode = {"stretch"}
						style={styles.image}
					/>
					<Text style={styles.text}>
						{"Upload Reports"}
					</Text>
				</View>
				<ImageBackground 
					source={{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fb180145-f576-4fc4-8ce3-450215041056"}} 
					resizeMode = {'stretch'}
					style={styles.column}
					>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d1ab0a6c-13f7-41b5-a9b9-1c60d298cb9d"}} 
						resizeMode = {"stretch"}
						style={styles.image2}
					/>
					<Text style={styles.text2}>
						{"Browse Report"}
					</Text>
					<Text style={styles.text3}>
						{"Supported formats (jpeg,png,pdf)"}
					</Text>
				</ImageBackground>
				<TextInput
					placeholder={"Upload Report"}
					value={textInput1}
					onChangeText={onChangeTextInput1}
					style={styles.input}
				/>
				<Image
					source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e61df19d-63b6-48ee-9c4e-940da67a4ec9"}} 
					resizeMode = {"stretch"}
					style={styles.image3}
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
	column: {
		height: 300,
		paddingTop: 40,
		paddingBottom: 58,
		paddingRight: 62,
		marginBottom: 116,
		marginHorizontal: 27,
	},
	image: {
		width: 24,
		height: 24,
		marginRight: 58,
	},
	image2: {
		height: 158,
		marginBottom: 4,
		marginLeft: 68,
	},
	image3: {
		height: 19,
		marginHorizontal: 167,
	},
	input: {
		color: "#FFFFFF",
		fontSize: 20,
		marginHorizontal: 22,
		backgroundColor: "#4C6FFFCC",
		borderRadius: 10,
		paddingVertical: 17,
		paddingHorizontal: 82,
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 184,
		marginHorizontal: 33,
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
		color: "#4C6FFF",
		fontSize: 20,
		marginBottom: 10,
		marginLeft: 89,
	},
	text3: {
		color: "#4C6FFF",
		fontSize: 10,
		marginLeft: 76,
	},
});