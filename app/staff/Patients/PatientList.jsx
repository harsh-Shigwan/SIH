import React, {useState} from "react";
import { SafeAreaView, View, ScrollView, Text, Image, TextInput, TouchableOpacity, StyleSheet, } from "react-native";
export default (props) => {
	const [textInput1, onChangeTextInput1] = useState('');
	const [textInput2, onChangeTextInput2] = useState('');
	const [textInput3, onChangeTextInput3] = useState('');
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>
				
				<View style={styles.row2}>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a6abd895-48ef-4dff-95a0-ec35c06fc100"}} 
						resizeMode = {"stretch"}
						style={styles.image2}
					/>
					<TextInput 
						placeholder={"Search by name"}
						value={textInput1}
						onChangeText={onChangeTextInput1}
						style={styles.input}
					/>
				</View>
				<View style={styles.row3}>
					<View style={styles.row4}>
						<TextInput
							placeholder={"Date"}
							value={textInput2}
							onChangeText={onChangeTextInput2}
							style={styles.input2}
						/>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ba1e7eeb-7057-49ca-a2aa-dbc08c4ef959"}} 
							resizeMode = {"stretch"}
							style={styles.image3}
						/>
					</View>
					<View style={styles.row5}>
						<TextInput
							placeholder={"Filter"}
							value={textInput3}
							onChangeText={onChangeTextInput3}
							style={styles.input3}
						/>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/45725bb6-e8ba-4036-a612-6d8e02cabbd2"}} 
							resizeMode = {"stretch"}
							style={styles.image4}
						/>
					</View>
				</View>
				<View style={styles.box}>
				</View>


				<TouchableOpacity onPress={()=> props.navigation.navigate("EditPatient1")}>
				<View style={styles.column}>
					<View style={styles.row6}>
						<Text style={styles.text2}>
							{"Patient Id: "}
						</Text>
						<Text style={styles.text3}>
							{"Enter Full name"}
						</Text>
					</View>
					<View style={styles.row7}>
						<Text style={styles.text4}>
							{"Name"}
						</Text>
						<Text style={styles.text3}>
							{"Enter Full name"}
						</Text>
					</View>
					<View style={styles.row7}>
						<Text style={styles.text5}>
							{"Sex"}
						</Text>
						<Text style={styles.text3}>
							{"Enter Full name"}
						</Text>
					</View>
					<View style={styles.row7}>
						<Text style={styles.text6}>
							{"Blood"}
						</Text>
						<Text style={styles.text3}>
							{"Enter Full name"}
						</Text>
					</View>
					<View style={styles.row8}>
						<Text style={styles.text7}>
							{"Date Of Earth"}
						</Text>
						<Text style={styles.text3}>
							{"Enter Full name"}
						</Text>
					</View>
				</View>
				
				</TouchableOpacity>
			
				<TouchableOpacity style={styles.buttonRow} onPress={()=>props.navigation.navigate("AddPatient1")}>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fc904216-edd2-4740-b867-1650b20e9303"}} 
						resizeMode = {"stretch"}
						style={styles.image5}
					/>
					<Text style={styles.text8}>
						{"Add Patient"}
					</Text>
				</TouchableOpacity>
				<View >
					
					
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
		height: 1,
		backgroundColor: "#7A797940",
		marginBottom: 24,
		marginHorizontal: 14,
	},
	box2: {
		flex: 1,
	},
	box3: {
		height: 82,
		backgroundColor: "#FFFFFF",
		borderColor: "#EEEEEE",
		borderWidth: 1,
	},
	buttonRow: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#4C6FFFCC",
		borderRadius: 6,
		paddingVertical: 10,
		marginBottom: 53,
		marginHorizontal: 100,
	},
	column: {
		backgroundColor: "#FFFFFF",
		borderColor: "#221F1F1A",
		borderRadius: 6,
		borderWidth: 1,
		paddingVertical: 19,
		paddingHorizontal: 18,
		marginBottom: 10,
		marginHorizontal: 28,
	},
	column2: {
		backgroundColor: "#FFFFFF",
		borderColor: "#221F1F1A",
		borderRadius: 6,
		borderWidth: 1,
		padding: 18,
		marginBottom: 122,
		marginHorizontal: 28,
	},
	column3: {
		backgroundColor: "#FFFFFF",
		borderColor: "#EEEEEE",
		borderWidth: 1,
		paddingVertical: 17,
		paddingHorizontal: 18,
	},
	image: {
		width: 69,
		height: 11,
	},
	image2: {
		width: 14,
		height: 14,
		marginRight: 10,
	},
	image3: {
    width: 12, // Adjust image size
    height: 12, // Adjust image size
  
  },
	image4: {
    width: 12, // Image width
    height: 12, // Image height
    marginLeft: 8, // Optional: Adds space between the input and the image
  },
	image5: {
		width: 20,
		height: 20,
		marginRight: 8,
	},
	image6: {
		width: 19,
		height: 20,
		marginRight: 52,
	},
	image7: {
		width: 24,
		height: 24,
		marginRight: 51,
	},
	image8: {
		width: 24,
		height: 24,
	},
	input: {
		color: "#233876",
		fontSize: 14,
    
		flex: 1,
		paddingVertical: 11,
	},
  input2: {
    color: "#233876",
    fontSize: 10,
    flex: 1, // Takes up remaining space
    paddingVertical: 7,
  },
  input3: {
    color: "#233876", // Text color
    fontSize: 10, // Font size
    flex: 1, // Input takes remaining space
    paddingVertical: 7, // Vertical padding inside input
  },
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 51,
		marginHorizontal: 25,
	},
	row2: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#C4C4C426",
		borderRadius: 30,
		paddingHorizontal: 30,
		marginBottom: 19,
		marginHorizontal: 36,
	},
	row3: {
    flexDirection: "row",           // Keeps the items aligned horizontally
    justifyContent: "space-between", // Spaces out the children (TextInput and Image) evenly
    alignItems: "center",           // Vertically centers the items within the row
    marginBottom: 14,               // Adds space below row3
    marginHorizontal: 48,           // Adds horizontal margin for padding from left and right
  },
	row4: {
		flexDirection: 'row', // Align items in a row
    justifyContent: 'space-between', // Space items evenly
    alignItems: 'center', // Vertically center the content
    borderColor: "#63636333",
    borderRadius: 5,
    borderWidth: 1,
    paddingHorizontal: 12,
    width: '2', // Ensure the container takes the full width
  },
	row5: {
    flexDirection: 'row', // Align items horizontally
    justifyContent: 'space-between', // Space between the text input and image
    alignItems: 'center', // Vertically center the content
    borderColor: "#63636333", // Border color
    borderRadius: 5, // Rounded corners
    borderWidth: 1, // Border width
    paddingHorizontal: 12, // Horizontal padding for spacing
    width: '1', // Full width for the container
  },
	row6: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 9,
	},
	row7: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 8,
	},
	row8: {
		flexDirection: "row",
		alignItems: "center",
	},
	scrollView: {
		flex: 1,
		backgroundColor: "#FFFFFF",
		paddingTop: 17,
	},
	text: {
		color: "#221E1E",
		fontSize: 14,
	},
	text2: {
		color: "#000000",
		fontSize: 10,
		marginRight: 29,
	},
	text3: {
    color: "#000000",
    fontSize: 8,
    marginLeft: 20,  // Adds margin to the left to shift text
    textAlign: 'left',  // Ensures the text aligns to the left
  },
	text4: {
		color: "#000000",
		fontSize: 10,
		marginRight: 48,
	},
	text5: {
		color: "#000000",
		fontSize: 10,
		marginRight: 60,
	},
	text6: {
		color: "#000000",
		fontSize: 10,
		marginRight: 50,
	},
	text7: {
		color: "#000000",
		fontSize: 10,
		marginRight: 17,
	},
	text8: {
		color: "#FFFFFF",
		fontSize: 12,
	},
	text9: {
		color: "#4C6FFF",
		fontSize: 12,
		marginRight: 4,
		flex: 1,
	},
	text10: {
		color: "#7A7979",
		fontSize: 12,
		marginRight: 30,
	},
	text11: {
		color: "#221F1F",
		fontSize: 12,
		marginRight: 27,
	},
	text12: {
		color: "#221F1F",
		fontSize: 12,
	},
});