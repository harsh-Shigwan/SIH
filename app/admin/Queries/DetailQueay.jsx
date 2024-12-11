import React, { useEffect, useState } from "react";
import axios from "axios";
import { SafeAreaView, View, ScrollView, Image, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";

const DetailQueay = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/admin_app/communication/create/");
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch data. Please try again later.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
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
          <Image
            source={{ uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9de206ae-956d-416e-8bc5-6104d8894da9" }}
            resizeMode={"stretch"}
            style={styles.image}
          />
          <Text style={styles.text}>{"Incoming Queries"}</Text>
        </View>
        {data.map((query, idx) => (
          <TouchableOpacity
            key={idx}
            onPress={() => props.navigation.navigate("InDetailQuary", { data: query })}
            style={styles.row2}
          >
            <Image
              source={{ uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/97c165fb-8e2f-428f-8919-cd416d06c90c" }}
              resizeMode={"stretch"}
              style={styles.image2}
            />
            <View style={styles.box} />
            <View style={styles.column}>
              <Text style={styles.text2}>{query.timestamp}</Text>
              <Text style={styles.text3}>{query.sender}</Text>
              <Text style={styles.text4}>{query.receiver}</Text>
            </View>
            <Image
              source={{ uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/080548a3-36d7-4db6-bbae-bfe794030e5d" }}
              resizeMode={"stretch"}
              style={styles.image3}
            />
            <Text style={styles.text5}>{query.status === "resolved" ? "Resolved" : "Pending"}</Text>
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
    marginTop: 20,
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: 55,
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
  errorText: {
    color: "red",
    textAlign: "center",
    fontSize: 16,
  },
});

export default DetailQueay;
