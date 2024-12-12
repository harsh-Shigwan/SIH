import React, { useEffect, useState } from "react";
import { SafeAreaView, View, ScrollView, Text, Image, TouchableOpacity, StyleSheet, } from "react-native";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default (props) => {
	const { id , name , address , phone} = props.route.params;
	console.log( 'resct', id)
	const [ data , setData ] = useState(null);

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

				const response = await axios.get(`http://127.0.0.1:8000/admin_app/policies/${id}/` , config);
				setData(response.data);
				console.log('Response data:', response.data);
				console.log("data", data)
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		}

		fetchData();
	},[])

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>
				
				<Text style={styles.text2}>
					{"Policy Description"}
				</Text>
				<View style={styles.column}>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/176c26e1-359b-4e20-a2a1-19b5478b6cfb"}} 
						resizeMode = {"stretch"}
						style={styles.image2}
					/>
					<Text style={styles.text3}>
					{data?.description || "No description available"}
					</Text>
					<Text style={styles.text4}>
						{"Launch Date: "}{data?.start_date || "NA"}
					</Text>
					<Text style={styles.text5}>
						{"Validity: Ongoing"}
					</Text>
					<Text style={styles.text6}>
					{data?.description || "No description available"}
					</Text>
					<Text style={styles.text7}>
						{"Target Beneficiaries: Below poverty line (BPL) families, rural and urban poor."}
					</Text>
					<Text style={styles.text8}>
						{"Key Features:\nFree medical treatment at empanelled hospitals.\nCovers all secondary and tertiary care hospitalization.\nCashless access to healthcare services."}
					</Text>
					<View style={styles.row2}>
						<TouchableOpacity style={styles.buttonRow} onPress={()=>alert('Pressed!')}>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2b0c36c6-e242-4895-a62c-ba4fad33c0b9"}} 
								resizeMode = {"stretch"}
								style={styles.image3}
							/>
							<Text style={styles.text9}>
								{"Edit "}
							</Text>
						</TouchableOpacity>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/89779d50-3180-4142-bf92-8bd85b622122"}} 
							resizeMode = {"stretch"}
							style={styles.image3}
						/>
						<Text style={styles.text10}>
							{"Delete"}
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
	buttonRow: {
		width: 83,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#4C6FFF",
		borderRadius: 6,
		paddingVertical: 12,
		marginRight: 32,
	},
	column: {
		backgroundColor: "#FFFFFF",
		borderColor: "#EEEEEE",
		borderRadius: 16,
		borderWidth: 1,
		paddingTop: 33,
		paddingBottom: 46,
		marginBottom: 20,
		marginHorizontal: 17,
		shadowColor: "#0C1A4B3B",
		shadowOpacity: 0.2,
		shadowOffset: {
		    width: 0,
		    height: 0
		},
		shadowRadius: 1,
		elevation: 1,
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
		borderRadius: 20,
		height: 157,
		marginBottom: 25,
		marginHorizontal: 83,
	},
	image3: {
		width: 12,
		height: 12,
		marginRight: 8,
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
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 51,
		marginHorizontal: 25,
	},
	row2: {
		flexDirection: "row",
		alignItems: "center",
		marginHorizontal: 69,
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
		paddingTop: 16,
	},
	text: {
		color: "#221E1E",
		fontSize: 14,
	},
	text2: {
		color: "#233876",
		fontSize: 20,
		marginBottom: 33,
		marginHorizontal: 89,
	},
	text3: {
		color: "#233876",
		fontSize: 20,
		marginBottom: 67,
		marginHorizontal: 29,
	},
	text4: {
		fontSize: 14,
		marginBottom: 20,
		marginHorizontal: 22,
	},
	text5: {
		fontSize: 14,
		marginBottom: 30,
		marginLeft: 23,
	},
	text6: {
		fontSize: 14,
		marginBottom: 34,
		marginHorizontal: 22,
	},
	text7: {
		color: "#718096",
		fontSize: 14,
		marginBottom: 20,
		marginHorizontal: 22,
	},
	text8: {
		fontSize: 14,
		marginBottom: 5,
		marginHorizontal: 20,
	},
	text9: {
		color: "#FFFFFF",
		fontSize: 12,
	},
	text10: {
		color: "#7A7979",
		fontSize: 12,
	},
	text11: {
		color: "#4C6FFF",
		fontSize: 12,
		marginRight: 4,
		flex: 1,
	},
	text12: {
		color: "#7A7979",
		fontSize: 12,
		marginRight: 30,
	},
	text13: {
		color: "#221F1F",
		fontSize: 12,
		marginRight: 27,
	},
	text14: {
		color: "#221F1F",
		fontSize: 12,
	},
});