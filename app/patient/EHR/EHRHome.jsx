import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image, StyleSheet, TouchableOpacity, } from "react-native";
export default (props) => {
    const data =[
        {
            id :1,
            name : "Genral Report",
            date : "10/10/2022",
        },
        {
            id :2,
            name : " Report",
            date : " 1/8/2025",
        },  {
            id :3,
            name : "Genral Report",
            date : "1/1/2024",
        }

    ]
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>
				<View style={styles.row}>
					<View style={styles.column}>
						<Text style={styles.text}>
							{"Health Grpah"}
						</Text>
						<View style={styles.row2}>
							<Text style={styles.text2}>
								{"+7"}
							</Text>
							<Text style={styles.text3}>
								{"%"}
							</Text>
						</View>
					</View>
					<View style={styles.box}>
					</View>
				</View>
				<View style={styles.row3}>
					<View style={styles.column2}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dcea9ebd-7d7b-4b50-b6e0-4d7f6f083551"}} 
							resizeMode = {"stretch"}
							style={styles.image}
						/>
						<Text style={styles.text4}>
							{"Blood Group"}
						</Text>
						<Text style={styles.text5}>
							{"A+"}
						</Text>
					</View>
					<View style={styles.column3}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/45aef16b-e928-4620-9555-f91ed704b04b"}} 
							resizeMode = {"stretch"}
							style={styles.image2}
						/>
						<Text style={styles.text6}>
							{"Weight"}
						</Text>
						<Text style={styles.text5}>
							{"103lbs"}
						</Text>
					</View>
				</View>
				<Text style={styles.text7}>
					{"Latest report "}
				</Text>
				{ data.map((item)=>(
				<View style={styles.row5}>
					<View style={styles.view}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e450fd7d-5c25-41ee-abc9-306d3db802bd"}} 
							resizeMode = {"stretch"}
							style={styles.image3}
						/>
					</View>
					<View style={styles.column4}>
						<Text style={styles.text8}>
							{item.name}
						</Text>
						<Text style={styles.text9}>
							{item.date}
						</Text>
					</View>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e0bc593c-2a92-4a2e-bde2-045cef8e9d11"}} 
						resizeMode = {"stretch"}
						style={styles.image4}
					/>
				</View>
            )) }
            <TouchableOpacity onPress={()=> props.navigation.navigate("AddFile")} style={styles.button}>           <Image 
            source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e9470ba1-3e41-4076-bf94-2028a87f7cfa"}} 
            resizeMode = {"stretch"}
            style={styles.image5}
        /></TouchableOpacity> 
				
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
		width: 136,
		height: 69,
		borderColor: "#4C6FFFCC",
		borderWidth: 2,
	},
	column: {
		width: 106,
	},
	column2: {
		width: 139,
		backgroundColor: "#B2748C69",
		borderRadius: 6,
		paddingVertical: 21,
		paddingHorizontal: 22,
	},
	column3: {
		width: 139,
		backgroundColor: "#FBF0DC",
		borderRadius: 6,
		padding: 20,
	},
	column4: {
		flex: 1,
		marginRight: 4,
	},
	image: {
		width: 16,
		height: 20,
		marginBottom: 14,
	},
	image2: {
		width: 24,
		height: 24,
		marginBottom: 11,
	},
	image3: {
		height: 20,
		marginTop: 17,
	},
	image4: {
		width: 20,
		height: 20,
	},
	image5: {
		height: 70,
        width:70,
		marginHorizontal: 150,
        marginTop: 25,
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center",

	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "#407CE22E",
		borderRadius: 6,
		paddingVertical: 25,
		paddingHorizontal: 24,
		marginBottom: 20,
		marginHorizontal: 30,
	},
	row2: {
		flexDirection: "row",
		alignItems: "center",
		marginHorizontal: 3,
	},
	row3: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 26,
		marginHorizontal: 30,
	},
	row4: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderColor: "#221F1F1A",
		borderRadius: 6,
		borderWidth: 1,
		paddingVertical: 7,
		paddingHorizontal: 10,
		marginBottom: 15,
		marginHorizontal: 30,
	},
	row5: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderColor: "#221F1F1A",
		borderRadius: 6,
		borderWidth: 1,
		paddingVertical: 7,
		paddingHorizontal: 10,
		marginBottom: 14,
		marginHorizontal: 30,
	},
	scrollView: {
		flex: 1,
		backgroundColor: "#FFFFFF",
		paddingTop: 65,
	},
	text: {
		color: "#4C6FFF",
		fontSize: 16,
		marginBottom: 26,
	},
	text2: {
		color: "#4C6FFF",
		fontSize: 35,
		marginRight: 6,
	},
	text3: {
		color: "#4C6FFF",
		fontSize: 25,
		flex: 1,
	},
	text4: {
		color: "#221F1F",
		fontSize: 14,
		marginBottom: 23,
	},
	text5: {
		color: "#221F1F",
		fontSize: 30,
	},
	text6: {
		color: "#221F1F",
		fontSize: 14,
		marginBottom: 21,
	},
	text7: {
		color: "#221F1F",
		fontSize: 16,
		marginBottom: 17,
		marginLeft: 32,
	},
	text8: {
		color: "#221F1F",
		fontSize: 14,
		marginBottom: 5,
	},
	text9: {
		color: "#221F1F",
		fontSize: 11,
	},
	view: {
		width: 54,
		backgroundColor: "#407BFF1C",
		borderRadius: 6,
		paddingHorizontal: 19,
		marginRight: 13,
	},
});