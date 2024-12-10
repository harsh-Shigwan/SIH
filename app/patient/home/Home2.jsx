import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image, StyleSheet,  TouchableOpacity} from "react-native";
export default (props) => {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>
				<Text style={styles.text}>
					{"Skip"}
				</Text>
				<Image
					source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/36aeab63-aa9c-4fd3-9baa-cd0057711711"}} 
					resizeMode = {"stretch"}
					style={styles.image}
				/>
				<Text style={styles.text2}>
					{"Get advice only from a doctor you believe in."}
				</Text>
				<View style={styles.row}>
					<View style={styles.box}>
					</View>
					<View style={styles.box2}>
					</View>
					<View style={styles.box3}>
					</View>
                    <TouchableOpacity onPress={()=> props.navigation.navigate("AdminTabNavigation")} style={styles.button}>
                    <Image
                      source={{
                        uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0a1ce12a-7deb-4d6e-a5e7-9347a9341b3f",
                      }}
                      resizeMode="stretch"
                      style={styles.image2}
                    />
                  </TouchableOpacity>
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
		width: 13,
		height: 4,
		backgroundColor: "#407CE2",
		borderRadius: 56,
		marginRight: 3,
	},
	box2: {
		width: 13,
		height: 4,
		backgroundColor: "#407CE2",
		borderRadius: 56,
	},
	box3: {
		flex: 1,
		alignSelf: "stretch",
	},
	image: {
		height: 467,
		marginBottom: 36,
		marginLeft: 32,
	},
	image2: {
		width: 56,
		height: 56,
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
		marginLeft: 30,
	},
	scrollView: {
		flex: 1,
		backgroundColor: "#FFFFFF",
		paddingTop: 70,
		paddingRight: 31,
	},
	text: {
		color: "#A0A7B0",
		fontSize: 14,
		marginBottom: 31,
		marginLeft: 303,
	},
	text2: {
		color: "#221F1F",
		fontSize: 22,
		marginBottom: 25,
		marginLeft: 31,
	},  button: {
        width: 192,
        height: 96,
        borderRadius: 16,
        overflow: "hidden",
        marginTop: 20,
      },
});