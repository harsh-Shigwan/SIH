import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, StyleSheet, TouchableOpacity, } from "react-native";


const policies = [
  {
    id: 1,
    date: "23/04/2024",
    name: "Policy Name",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    date: "27/05/2024",
    name: "Policy Name 2",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    date: "30/06/2024",
    name: "Policy Name 3",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  }
]


export default (props) => {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>
				<View style={styles.row}>
					<View style={styles.view}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/db0a0446-8f2d-4ea2-88b0-77f8209ca6b6"}} 
							resizeMode = {"stretch"}
							style={styles.image}
						/>
					</View>
					<Text style={styles.text}>
						{"Policies / Schemes"}
					</Text>
				</View>


        {policies.map((policy, index) => (
        <TouchableOpacity key={index} style={styles.row3} onPress={()=> props.navigation.navigate("PolicyDetails")}>
				<View style={styles.column}>
					<View style={styles.row2}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7ea43653-645a-45e5-83a5-f7b2bf2878ff"}} 
							resizeMode = {"stretch"}
							style={styles.image2}
						/>
						<Text style={styles.text2}>
							Administrator
						</Text>
						<Text style={styles.text3}>
							{policy.date}
						</Text>
						<View style={styles.box}>
						</View>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/42eda31a-6855-494a-a55e-6fcbd8bc6caf"}} 
							resizeMode = {"stretch"}
							style={styles.image3}
						/>
					</View>
					<Text style={styles.text4}>
						{policy.name}
					</Text>
					<Text style={styles.text5}>
						{policy.description}
					</Text>
				</View>

       
         </TouchableOpacity>
          ))}

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
		marginBottom: 25,
		marginHorizontal: 9,
	},
	column2: {
		backgroundColor: "#FFFFFF",
		borderColor: "#C4C4C433",
		borderRadius: 16,
		borderWidth: 1,
		paddingVertical: 24,
		paddingLeft: 24,
		marginBottom: 101,
		marginHorizontal: 9,
	},
	column3: {
		backgroundColor: "#FFFFFF",
		paddingVertical: 17,
		paddingHorizontal: 32,
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
		marginRight: 38,
	},
	image5: {
		width: 24,
		height: 24,
		marginRight: 8,
	},
	image6: {
		width: 20,
		height: 20,
	},
	image7: {
		width: 24,
		height: 24,
		marginRight: 59,
	},
	image8: {
		width: 24,
		height: 24,
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 29,
		marginHorizontal: 31,
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
		marginBottom: 7,
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
		color: "#18181B",
		fontSize: 16,
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
		marginRight: 70,
	},
	text8: {
		color: "#7A7979",
		fontSize: 12,
		marginRight: 52,
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
		marginRight: 46,
	},
});