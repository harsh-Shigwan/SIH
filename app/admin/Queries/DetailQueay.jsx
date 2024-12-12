import React, { useEffect, useState } from "react";
import { SafeAreaView, View, ScrollView, Image, Text, StyleSheet, TouchableOpacity, } from "react-native";

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
            console.log('Token from storage:', token);

            if (!token) {
                throw new Error('No token found, please log in.');
            }

            const config = { headers: { Authorization: `Token ${token}` } };
            const response = await axios.get('http://127.0.0.1:8000/admin_app/communication/create/', config);

            console.log('Response data:', response.data);
            setData(response.data);
        } catch (err) {
            console.error('Error fetching data:', err.response?.data || err.message);
            setError(err.message || 'Error fetching data');
        } finally {
            setLoading(false);
        }
    };

    fetchData();
}, []);


if (loading) {
    return (
        <SafeAreaView style={styles.container}>
           
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
			<ScrollView  style={styles.scrollView}>
    
      {Array.isArray(data) && data.length > 0 ? (
        data.map((func, idx) => (
            <TouchableOpacity
                key={idx}
                onPress={() => props.navigation.navigate("InDetailQuary" , { id : func.id })}
            >
                <View style={styles.row}>
                    <Image
                        source={{ uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/26518bd0-a23b-4ade-b2e5-5f255a7ed087" }}
                        resizeMode={"stretch"}
                        style={styles.image}
                    />
                    <Text style={styles.text}>{"Incoming Queries"}</Text>
                </View>
                <View style={styles.row2}>
                    <Image
                        source={{ uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2b79fdbc-9738-430f-82d1-3546d2dc7b24" }}
                        resizeMode={"stretch"}
                        style={styles.image2}
                    />
                    <View style={styles.box}></View>
                    <View style={styles.column}>
                        <Text style={styles.text2}>{`Date: ${func.created_at || "N/A"}`}</Text>
                        <Text style={styles.text3}>{`Role: ${func.role || "N/A"}`}</Text>
                        <Text style={styles.text4}>{func.sender || "N/A"}</Text>
                    </View>
                    <Image
                        source={{ uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/87e8e3f3-4511-4b74-9d56-65232911249d" }}
                        resizeMode={"stretch"}
                        style={styles.image3}
                    />
                    <Text style={styles.text5}>{"Resolved"}</Text>
                </View>
                <Text style={styles.text6}>{func.position || "N/A"}</Text>
            </TouchableOpacity>
        ))
    ) : (
        <Text>No data available</Text>
    )}
    
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
		width: 107,
		paddingHorizontal: 3,
		marginRight: 25,
	},
	image: {
		width: 24,
		height: 24,
		marginRight: 70,
	},
	image2: {
		borderRadius: 6,
		width: 65,
		height: 63,
		marginTop: 4,
	},
	image3: {
		width: 15,
		height: 15,
		marginTop: 2,
		marginRight: 5,
	},
	row: {
		flexDirection: "row",
		marginBottom: 23,
		marginHorizontal: 14,
	},
	row2: {
		flexDirection: "row",
		alignItems: "flex-start",
		marginBottom: 7,
		marginHorizontal: 30,
	},
	scrollView: {
		flex: 1,
		backgroundColor: "#FFFFFF",
		paddingTop: 45,
	},
	text: {
		color: "#221F1F",
		fontSize: 16,
		marginTop: 18,
		flex: 1,
	},
	text2: {
		color: "#2B2B2B",
		fontSize: 12,
		marginBottom: 17,
	},
	text3: {
		color: "#2B2B2B",
		fontSize: 12,
		marginBottom: 18,
	},
	text4: {
		color: "#2B2B2B",
		fontSize: 20,
	},
	text5: {
		color: "#66CB9F",
		fontSize: 12,
		marginTop: 5,
	},
	text6: {
		color: "#777777",
		fontSize: 12,
		marginHorizontal: 120,
	},
});