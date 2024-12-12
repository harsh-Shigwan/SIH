import React, { useEffect, useState } from "react";
import { SafeAreaView, View, ScrollView, Text, ActivityIndicator, StyleSheet, TouchableOpacity, Image } from "react-native";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default (props) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

                // Make the GET request
                const response = await axios.get('http://127.0.0.1:8000/admin_app/policies/', config);
                setData(response.data);
                setLoading(false);
                console.log('Response data:', response.data);
            } catch (err) {
                setError('Error fetching data');
                setLoading(false);
				console.error("Error:", error.response?.data || error.message);

            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <SafeAreaView style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text>Loading...</Text>
            </SafeAreaView>
        );
    }

    if (error) {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.errorText}>{error}</Text>
            </SafeAreaView>
        );
    }

	  return (
		<SafeAreaView style={styles.container}>
		  <ScrollView style={styles.scrollView}>
			{loading && <Text>Loading...</Text>}
			{error && <Text style={{color: 'red'}}>{error}</Text>}
	  
			{!loading && !error && data && Array.isArray(data) && data.map((func, idx) => (
			  <TouchableOpacity
				key={idx}
				style={styles.row3}
				onPress={() => props.navigation.navigate("PolicyDescription" , {id: func.id  , title: func.title, onPress: func.onPress, imageUri: func.imageUri, muteImageUri: func.muteImageUri, date: func.date, summary: func.summary})}
			  >
				<Image
				  source={{
					uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3203c84f-1359-4c05-be79-8b9c30bd9db5",
				  }}
				  resizeMode={"stretch"}
				  style={styles.image3}
				/>
				<View style={styles.column2}>
				  <Text style={styles.text3}>{func.name}</Text>
				  <Text style={styles.text4}>{"₹5L health coverage for poor families."}</Text>
				</View>
			  </TouchableOpacity>
			))}
		  </ScrollView>
		</SafeAreaView>
	);  
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
		borderColor: "#E3E3E333",
		borderRadius: 20,
		borderWidth: 1,
		paddingVertical: 26,
		marginBottom: 14,
		marginHorizontal: 23,
	},
	column2: {
		flex: 1,
	},
	column3: {
		width: 167,
	},
	column4: {
		backgroundColor: "#FFFFFF",
		borderColor: "#EEEEEE",
		borderWidth: 1,
		paddingVertical: 17,
		paddingHorizontal: 19,
		marginTop: -20,
	},
	image: {
		width: 69,
		height: 11,
	},
	image2: {
		width: 20,
		height: 20,
		marginRight: 11,
	},
	image3: {
		borderRadius: 20,
		width: 100,
		height: 93,
		marginRight: 15,
	},
	image4: {
		borderRadius: 20,
		width: 100,
		height: 93,
	},
	image5: {
		width: 100,
		height: 93,
		marginRight: 15,
	},
	image6: {
		borderRadius: 20,
		width: 94,
		height: 98,
	},
	image7: {
		height: 78,
		marginHorizontal: 130,
	},
	image8: {
		width: 19,
		height: 20,
		marginRight: 51,
	},
	image9: {
		width: 24,
		height: 24,
		marginRight: 51,
	},
	image10: {
		width: 24,
		height: 24,
	},
	input: {
		color: "#233876",
		fontSize: 14,
		flex: 1,
		paddingVertical: 7,
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 36,
		marginHorizontal: 25,
	},
	row2: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#EEF3FF",
		borderRadius: 30,
		paddingHorizontal: 31,
		marginBottom: 20,
		marginHorizontal: 11,
	},
	row3: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderColor: "#221F1F1A",
		borderRadius: 6,
		borderWidth: 1,
		paddingVertical: 8,
		paddingHorizontal: 9,
		marginBottom: 10,
	},
	row4: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderColor: "#221F1F1A",
		borderRadius: 6,
		borderWidth: 1,
		paddingVertical: 8,
		paddingLeft: 9,
		paddingRight: 20,
		marginBottom: 10,
	},
	row5: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderColor: "#221F1F1A",
		borderRadius: 6,
		borderWidth: 1,
		paddingVertical: 5,
		paddingLeft: 9,
		paddingRight: 20,
	},
	row6: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 8,
	},
	row7: {
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
		marginBottom: 16,
		marginHorizontal: 57,
	},
	text3: {
		color: "#233876",
		fontSize: 14,
		marginBottom: 10,
	},
	text4: {
		color: "#221F1F",
		fontSize: 12,
	},
	text5: {
		color: "#233876",
		fontSize: 14,
		marginBottom: 11,
		marginHorizontal: 1,
	},
	text6: {
		color: "#233876",
		fontSize: 14,
		marginBottom: 11,
	},
	text7: {
		color: "#233876",
		fontSize: 20,
		marginBottom: 12,
		marginHorizontal: 105,
	},
	text8: {
		color: "#4C6FFF",
		fontSize: 12,
		marginRight: 4,
		flex: 1,
	},
	text9: {
		color: "#7A7979",
		fontSize: 12,
		marginRight: 29,
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
});