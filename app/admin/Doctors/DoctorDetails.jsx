import React, { useEffect, useState } from "react";
import { SafeAreaView, View, ScrollView, Text, Image, StyleSheet, } from "react-native";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default (props) => {
	const { id} =  props.route.params;
	const [ data , setData ] = useState(null);
	console.log("id", id);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const token = await AsyncStorage.getItem('token');
                console.log('Token string from storage:', token); // Check if token is stored

                if (!token) {
                    setError('No token found, please log in.');
                    setLoading(false);
                    return;
                }

                const config = {
                    headers: {
                        Authorization: `Token ${token}`, // Use token in the header
                    },
                };

				const response = await axios.get(`http://127.0.0.1:8000/admin_app/doctors/${id}/` , config);
				setData(response.data);
				console.log('Response data:', response.data);
				console.log("data", data)
			} catch (error) {
				console.error('Error fetching data:', error);
				console.error("Error:", error.response?.data || error.message);
			}
		}

		fetchData();
	},[])
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>
				
				<View style={styles.row2}>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/11d959d5-3994-45f5-8ed0-112d6bf9c722"}} 
						resizeMode = {"stretch"}
						style={styles.image2}
					/>
					<Text style={styles.text2}>
						{"Doctor Detail"}
					</Text>
				</View>
				<View style={styles.column}>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6d4e56a8-bf52-4f0e-83a5-d9abb5354884"}} 
						resizeMode = {"stretch"}
						style={styles.image3}
					/>
					<View style={styles.row3}>
						<Text style={styles.text3}>
						{data?.name || "Loading..."}
						</Text>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/83709a46-cf37-471b-87eb-f56ae3dcdd16"}} 
							resizeMode = {"stretch"}
							style={styles.image4}
						/>
						<Text style={styles.text4}>
							{"Verified"}
						</Text>
					</View>
					<Text style={styles.text5}>
						 {`Joined on ${data?.updated_at || "N/A"}`}
					</Text>
					<View style={styles.row4}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5121f5db-9909-4320-8d81-6ce137691613"}} 
							resizeMode = {"stretch"}
							style={styles.image5}
						/>
						<Text style={styles.text6}>
							{data?.specialization || "N/A"}
						</Text>
						<View style={styles.box}>
						</View>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b07fa55e-dce2-4153-acab-61f25a03681f"}} 
							resizeMode = {"stretch"}
							style={styles.image4}
						/>
						<Text style={styles.text6}>
						{data?.contact_number || "N/A"}
						</Text>
					</View>
					<View style={styles.row5}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/00b663b4-a52d-4787-943f-2c92ab343e9a"}} 
							resizeMode = {"stretch"}
							style={styles.image5}
						/>
						<Text style={styles.text6}>
						
						</Text>
						<View style={styles.box}>
						</View>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6813fa24-896d-4f32-a86d-c838453a19bd"}} 
							resizeMode = {"stretch"}
							style={styles.image5}
						/>
						<Text style={styles.text6}>
							{data?.gender || "Gender"}
						</Text>
					</View>
					<View style={styles.row6}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/566c6e81-b8f7-4eea-afec-a7d1156be71a"}} 
							resizeMode = {"stretch"}
							style={styles.image4}
						/>
						<Text style={styles.text7}>
							{data?.years_of_experience || "years"}
						</Text>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/71e3296b-4441-41dd-8e35-8820dd77ccf6"}} 
							resizeMode = {"stretch"}
							style={styles.image5}
						/>
						<Text style={styles.text8}>
							{"B+"}
						</Text>
					</View>
					<View style={styles.row7}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b7851ba8-864b-4ead-b2dd-ef897fbb7260"}} 
							resizeMode = {"stretch"}
							style={styles.image4}
						/>
						<Text style={styles.text8}>
							{data?.email || "N/A"}
						</Text>
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
		borderColor: "#EEEEEE",
		borderRadius: 16,
		borderWidth: 1,
		paddingTop: 26,
		paddingBottom: 52,
		marginBottom: 143,
		marginHorizontal: 15,
	},
	column2: {
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
		width: 26,
		height: 27,
		marginRight: 79,
	},
	image3: {
		borderRadius: 6,
		height: 90,
		marginBottom: 30,
		marginHorizontal: 111,
	},
	image4: {
		width: 16,
		height: 16,
		marginRight: 10,
	},
	image5: {
		width: 16,
		height: 16,
		marginRight: 11,
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
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 24,
		marginHorizontal: 25,
	},
	row2: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 67,
		marginHorizontal: 22,
	},
	row3: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 18,
		marginHorizontal: 42,
	},
	row4: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 14,
		marginHorizontal: 41,
	},
	row5: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 15,
		marginHorizontal: 27,
	},
	row6: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 9,
		marginHorizontal: 43,
	},
	row7: {
		flexDirection: "row",
		alignItems: "center",
		marginHorizontal: 43,
	},
	row8: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 8,
	},
	row9: {
		flexDirection: "row",
		alignItems: "center",
	},
	scrollView: {
		flex: 1,
		backgroundColor: "#FFFFFF",
		paddingTop: 16,
	},
	text: {
		color: "#221E1E",
		fontSize: 14,
	},
	text2: {
		color: "#221F1F",
		fontSize: 16,
		flex: 1,
	},
	text3: {
		color: "#16192C",
		fontSize: 16,
		marginRight: 18,
	},
	text4: {
		color: "#66CB9F",
		fontSize: 14,
		flex: 1,
	},
	text5: {
		color: "#718096",
		fontSize: 10,
		marginBottom: 50,
		marginLeft: 41,
	},
	text6: {
		color: "#718096",
		fontSize: 14,
	},
	text7: {
		color: "#718096",
		fontSize: 14,
		marginRight: 43,
	},
	text8: {
		color: "#718096",
		fontSize: 14,
		flex: 1,
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