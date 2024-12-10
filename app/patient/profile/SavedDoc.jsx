import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, StyleSheet, } from "react-native";
export default (props) => {
    const Data = [
        {
            id: 1,
            name: "Dr. Rishi",
            specialization: "Chardiologist",
            image: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a0785f27-dadb-4946-a934-27c3b5179fde",
            rating: "1.5",
        },{
            id: 2,
            name: "Dr. mohan",
            specialization: "Chardiologist",
            image: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a0785f27-dadb-4946-a934-27c3b5179fde",
            rating: "2.5",
        },{
            id: 3,
            name: "Dr. raman more",
            specialization: "Chardiologist",
            image: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a0785f27-dadb-4946-a934-27c3b5179fde",
            rating: "4.5",
        }
    ]
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>
				<View style={styles.row}>
					
					<Text style={styles.text}>
						{"My Saved doctors"}
					</Text>
				</View>
				
				
				{
                    Data.map((item) => {
                        return (
                            <View style={styles.row2}>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/234a6bdf-3c78-4082-9c3c-26b07077b007"}} 
						resizeMode = {"stretch"}
						style={styles.image2}
					/>
					<View style={styles.column}>
						<Text style={styles.text2}>
							{item.name}
						</Text>
						<Text style={styles.text3}>
							{item.description}
						</Text>
						<View style={styles.column2}>
							<View style={styles.view2}>
								<Image
									source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a0785f27-dadb-4946-a934-27c3b5179fde"}} 
									resizeMode = {"stretch"}
									style={styles.image3}
								/>
							</View>
							<Text style={styles.absoluteText}>
                                {item.rating}
							</Text>
						</View>
						<View style={styles.row3}>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/159f53b6-367e-4f16-be80-77bb24fa1789"}} 
								resizeMode = {"stretch"}
								style={styles.image4}
							/>
							<Text style={styles.text4}>
								{"800m away"}
							</Text>
						</View>
					</View>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e04d4133-3df4-43e8-acd2-be2dae4f7cc7"}} 
						resizeMode = {"stretch"}
						style={styles.image5}
					/>
				</View>
                        )
                    })
                }
				
				
			</ScrollView>
		</SafeAreaView>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
	absoluteColumn: {
		position: "absolute",
		bottom: -7,
		left: -30,
		width: 360,
		height: 70,
		backgroundColor: "#FFFFFF",
		paddingHorizontal: 39,
	},
	absoluteText: {
		position: "absolute",
		bottom: -2,
		right: 4,
		color: "#4C6FFF",
		fontSize: 12,
	},
	box: {
		flex: 1,
	},
	column: {
		flex: 1,
		alignItems: "flex-start",
		paddingHorizontal: 2,
		marginRight: 4,
	},
	column2: {
		width: 41,
		height: 15,
		marginBottom: 5,
	},
	image: {
		height: 24,
		marginTop: 10,
	},
	image2: {
		borderRadius: 6,
		width: 55,
		height: 53,
		marginRight: 33,
	},
	image3: {
		width: 10,
		height: 13,
		marginTop: 3,
	},
	image4: {
		width: 9,
		height: 9,
		marginRight: 6,
	},
	image5: {
		width: 20,
		height: 18,
	},
	image6: {
		borderRadius: 6,
		width: 55,
		height: 53,
		marginRight: 35,
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
	row: {
		flexDirection: "row",
		alignItems: "flex-start",
		marginBottom: 26,
	},
	row2: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderColor: "#221F1F1A",
		borderRadius: 6,
		borderWidth: 1,
		paddingVertical: 7,
		paddingHorizontal: 16,
		marginBottom: 19,
	},
	row3: {
		flexDirection: "row",
		alignItems: "center",
	},
	row4: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderColor: "#221F1F1A",
		borderRadius: 6,
		borderWidth: 1,
		paddingVertical: 7,
		paddingHorizontal: 16,
	},
	row5: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 11,
		marginBottom: 8,
	},
	scrollView: {
		flex: 1,
		backgroundColor: "#FFFFFF",
		paddingTop: 30,
		paddingHorizontal: 30,
	},
	text: {
		color: "#221F1F",
		fontSize: 16,
		marginTop: 19,
		flex: 1,
	},
	text2: {
		color: "#221F1F",
		fontSize: 16,
		marginBottom: 5,
	},
	text3: {
		color: "#221F1F",
		fontSize: 10,
		marginBottom: 3,
	},
	text4: {
		color: "#221F1F",
		fontSize: 10,
		flex: 1,
	},
	text5: {
		color: "#221F1F",
		fontSize: 16,
	},
	text6: {
		color: "#221F1F",
		fontSize: 12,
		marginRight: 45,
	},
	text7: {
		color: "#221F1F",
		fontSize: 12,
		marginRight: 46,
	},
	text8: {
		color: "#221F1F",
		fontSize: 12,
		marginRight: 34,
	},
	text9: {
		color: "#407CE2",
		fontSize: 12,
		flex: 1,
	},
	view: {
		width: 42,
		backgroundColor: "#4C6FFF2E",
		borderRadius: 9,
		paddingHorizontal: 8,
		marginRight: 38,
	},
	view2: {
		backgroundColor: "#407CE22B",
		borderRadius: 2,
		paddingHorizontal: 5,
	},
});