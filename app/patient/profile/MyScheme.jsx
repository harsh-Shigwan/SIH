import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
export default (props) => {
  const [textInput1, onChangeTextInput1] = useState("");
  const data = [
    {
      id: 1,
      title: "Pradhan mantri Jan Aroygya Yojna",
      imageUri:
        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/60cc37d9-f39a-4ec4-ab70-48e0c816f3b4",
      muteImageUri:
        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4a58d814-5efa-4d06-923a-3a28b1f07332",
      date: "31/01/2025",
      summary:
        "A flagship health insurance scheme that aims to provide health coverage of up to ₹5 lakh per family per year for secondary and tertiary care hospitalization to over 10 crore poor and vulnerable families.",
    },
    {
      id: 2,
      title: " mantri Jan Aroygya Yojna",
      imageUri:
        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/60cc37d9-f39a-4ec4-ab70-48e0c816f3b4",
      muteImageUri:
        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4a58d814-5efa-4d06-923a-3a28b1f07332",
      date: "31/01/2025",
      summary:
        "A flagship health insurance scheme that aims to provide health coverage of up to ₹5 lakh per family per year for secondary and tertiary care hospitalization to over 10 crore poor and vulnerable families.",
    },
    // Add more items as needed
  ];
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View>
          <View style={styles.column}>
            <View style={styles.column2}>
              <View style={styles.row}>
                <View style={styles.row2}>
                  <Image
                    source={{
                      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bd88cda7-d8f0-4f67-8c1b-c4855dbd757b",
                    }}
                    resizeMode={"stretch"}
                    style={styles.image}
                  />
                  <TextInput
                    placeholder={"Search for new scheme..."}
                    value={textInput1}
                    onChangeText={onChangeTextInput1}
                    style={styles.input}
                  />
                </View>
                <Text style={styles.text}>{"See all"}</Text>
              </View>
              {data.map((item) => (
                <View key={item.id} style={styles.column3}>
                   <View style={styles.row3}>
                      <Image source={{uri: item.imageUri}} resizeMode="stretch" style={styles.image2} />
                      <Text style={styles.text2}>{item.title}</Text>
                      <Image source={{uri: item.muteImageUri}} resizeMode="stretch" style={styles.image3} />
                      <Text style={styles.text3}>{"Mute"}</Text>
                   </View>
                   <View style={styles.row4}>
                      <Text style={styles.text4}>{"Date :-"}</Text>
                      <Text style={styles.text5}>{item.date}</Text>
                   </View>
                   <View style={styles.row5}>
                      <Text style={styles.text6}>{"Summary :-"}</Text>
                      <Text style={styles.text7}>{item.summary}</Text>
                   </View>
                   <View style={styles.row6}>
                      <View style={styles.row7}>
                         <View style={styles.box2}></View>
                         <Text style={styles.text8}>{"Remove"}</Text>
                      </View>
                      <TouchableOpacity style={styles.button}  onPress={() => props.navigation.navigate("SchemeDetails",{id: item.id, title: item.title, imageUri: item.imageUri, muteImageUri: item.muteImageUri, date: item.date, summary: item.summary})}>
                         <Text style={styles.text9}>{"View"}</Text>
                      </TouchableOpacity>
                   </View>
                </View>
             ))}
             
            </View>
          </View>
        </View>
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
  box2: {
    width: 11,
    height: 13,
    backgroundColor: "#4C6FFFCC",
    borderRadius: 5,
    marginRight: 10,
  },
  button: {
    width: 57,
    alignItems: "center",
    backgroundColor: "#4C6FFFCC",
    borderRadius: 5,
    paddingVertical: 8,
  },
  column: {
    marginBottom: 4,
  },
  column2: {
    backgroundColor: "#FFFFFF",
    paddingTop: 23,
    paddingBottom: 50,
    paddingHorizontal: 17,
  },
  column3: {
    backgroundColor: "#FFFFFF",
    borderColor: "#9F9F9F1A",
    borderRadius: 12,
    borderWidth: 1,
    paddingVertical: 24,
    paddingHorizontal: 21,
    marginBottom: 15,
  },
  image: {
    width: 15,
    height: 15,
    marginRight: 10,
  },
  image2: {
    borderRadius: 20,
    width: 64,
    height: 64,
    marginTop: 1,
    marginRight: 19,
  },
  image3: {
    width: 16,
    height: 16,
    marginRight: 7,
  },
  input: {
    color: "#221F1F",
    fontSize: 10,
    flex: 1,
    paddingVertical: 13,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },
  row2: {
    width: 249,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FAFAFA",
    borderColor: "#E8F3F1",
    borderRadius: 24,
    borderWidth: 1,
    paddingHorizontal: 22,
    marginRight: 38,
  },
  row3: {
    flexDirection: "row",
    marginBottom: 5,
  },
  row4: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  row5: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  row6: {
    flexDirection: "row",
    alignItems: "center",
  },
  row7: {
    width: 81,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#4C6FFFCC",
    borderRadius: 5,
    borderWidth: 1,
    paddingVertical: 6,
    marginRight: 140,
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  text: {
    color: "#4C6FFF",
    fontSize: 12,
  },
  text2: {
    color: "#000000",
    fontSize: 12,
    marginTop: 8,
    width: 111,
  },
  text3: {
    color: "#4C6FFF",
    fontSize: 10,
    marginTop: 3,
  },
  text4: {
    color: "#000000",
    fontSize: 12,
    marginRight: 43,
  },
  text5: {
    color: "#000000",
    fontSize: 12,
    flex: 1,
  },
  text6: {
    color: "#000000",
    fontSize: 12,
    marginTop: 3,
  },
  text7: {
    color: "#000000",
    fontSize: 8,
    width: 197,
  },
  text8: {
    color: "#4C6FFF",
    fontSize: 10,
  },
  text9: {
    color: "#FFFFFF",
    fontSize: 10,
  },
});