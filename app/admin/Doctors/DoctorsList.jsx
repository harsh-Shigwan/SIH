import React, { useEffect,useState } from "react";
import { SafeAreaView, View, ScrollView, Image, Text, TextInput, StyleSheet ,TouchableOpacity } from "react-native";

import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Dummy data for doctors
const doctors = [
  { id:1,
    name: "Dr. Rishi",
    specialty: "Cardiologist",
    rating: 4.7,
    distance: "800m away",
    imageUrl: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/46417fdc-bf31-43df-a4ff-d8993a83cee2",
    ratingImageUrl: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/779a1b34-5d8b-4db5-9bff-378df00ce0a2",
    distanceImageUrl: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2d89013a-fb28-40fc-8a72-e2f9509b6fd5"
  },
  { id:2,
    name: "Dr. Arjun",
    specialty: "Neurologist",
    rating: 4.8,
    distance: "1.2km away",
    imageUrl: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/46417fdc-bf31-43df-a4ff-d8993a83cee2",
    ratingImageUrl: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/779a1b34-5d8b-4db5-9bff-378df00ce0a2",
    distanceImageUrl: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2d89013a-fb28-40fc-8a72-e2f9509b6fd5"
  },
  { id:3,
    name: "Dr. Sima",
    specialty: "ganelo",
    rating: 7.8,
    distance: "1.2km away",
    imageUrl: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/46417fdc-bf31-43df-a4ff-d8993a83cee2",
    ratingImageUrl: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/779a1b34-5d8b-4db5-9bff-378df00ce0a2",
    distanceImageUrl: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2d89013a-fb28-40fc-8a72-e2f9509b6fd5"
  },
  
];


export default ( props) => {
  const [textInput1, onChangeTextInput1] = useState("");
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
            const response = await axios.get('http://127.0.0.1:8000/admin_app/doctors/', config);

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
      <ScrollView style={styles.scrollView}>
        <View style={styles.row}>
         
          <Text style={styles.text}>{"Doctors"}</Text>
        </View>
        <View style={styles.row2}>
          <Image
            source={{ uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/46a825f7-f1c7-4333-860a-8c619c65febc" }}
            resizeMode={"stretch"}
            style={styles.image2}
          />
          <TextInput
            placeholder={"Search doctor..."}
            value={textInput1}
            onChangeText={onChangeTextInput1}
            style={styles.input}
          />
        </View>
       
		<TouchableOpacity  onPress={() => props.navigation.navigate("DocForm1")} className="bg-blue-600 ml-24 mb-5 h-12 w-40 justify-center items-center rounded-md">
		<Text className="text-white font-bold text-lg">Add Doctor</Text>
	  </TouchableOpacity>
       
        
        {/* Mapping over doctors */}
        {data.map((doctor, index) => (
          <TouchableOpacity style={styles.row4} key={index} onPress={()=> props.navigation.navigate("DoctorDetails" ,{id : doctor.id})} >
            <Image
              source={{ uri: doctor.imageUrl }}
              resizeMode={"stretch"}
              style={styles.image4}
            />
            <View style={styles.column}>
              <Text style={styles.text3}>{doctor.name}</Text>
              <Text style={styles.text4}>{doctor.specialization}</Text>
              <View style={styles.row5}>
                <Image
                  source={{ uri: doctor.ratingImageUrl }}
                  resizeMode={"stretch"}
                  style={styles.image5}
                />
                <Text style={styles.text5}>{doctor.medical_license_number}</Text>
              </View>
              <View style={styles.row6}>
                <Image
                  source={{ uri: doctor.distanceImageUrl }}
                  resizeMode={"stretch"}
                  style={styles.image6}
                />
                <Text style={styles.text6}>{doctor.address}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  column: {
    flex: 1,
    alignItems: "flex-start",
    paddingHorizontal: 2,
  },
  image: {
    height: 24,
    marginTop: 9,
  },
  image2: {
    width: 18,
    height: 18,
    marginRight: 13,
  },
  image3: {
    width: 24,
    height: 24,
    marginRight: 2,
  },
  image4: {
    borderRadius: 6,
    width: 96,
    height: 96,
    marginRight: 15,
  },
  image5: {
    width: 10,
    height: 10,
    marginRight: 6,
  },
  image6: {
    width: 9,
    height: 10,
  },
  input: {
    color: "#221F1F",
    fontSize: 12,
    flex: 1,
    paddingVertical: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 13,
    marginLeft: 31,
  },
  row2: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FAFAFA",
    borderColor: "#E8F3F1",
    borderRadius: 24,
    borderWidth: 1,
    paddingHorizontal: 25,
    marginBottom: 12,
    marginLeft: 30,
  },
  row3: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginLeft: 262,
  },
  row4: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#221F1F1A",
    borderRadius: 6,
    borderWidth: 1,
    padding: 9,
    marginBottom: 20,
    marginLeft: 30,
  },
  row5: {
    width: 41,
    height: 18,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#407CE22B",
    borderRadius: 2,
    paddingVertical: 4,
    marginBottom: 8,
  },
  row6: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: 21,
    paddingRight: 30,
  },
  text: {
    color: "#221F1F",
    fontSize: 16,
    marginTop: 18,
    flex: 1,
  },
  text2: {
    color: "#4C6FFF",
    fontSize: 15,
    flex: 1,
  },
  text3: {
    color: "#221F1F",
    fontSize: 16,
    marginBottom: 12,
  },
  text4: {
    color: "#221F1F",
    fontSize: 12,
    marginBottom: 9,
  },
  text5: {
    color: "#407CE2",
    fontSize: 12,
  },
  text6: {
    color: "#221F1F",
    fontSize: 12,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  view: {
    width: 42,
    backgroundColor: "#4C6FFF2E",
    borderRadius: 9,
    paddingHorizontal: 7,
    marginRight: 80,
  },
});
