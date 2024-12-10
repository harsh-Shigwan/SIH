import React, { useState } from "react";
import { SafeAreaView, View, ScrollView, Image, Text, TouchableOpacity, StyleSheet } from "react-native";

export default (props) => {
  const [selectedDay, setSelectedDay] = useState(null);

  const handleDayClick = (day) => {
    setSelectedDay(day === selectedDay ? null : day);  // Toggle selection
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.row}>
          <View style={styles.view}>
            <Image
              source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6f219deb-3a8e-401a-965d-1e90c4683493"
              }}
              resizeMode={"stretch"}
              style={styles.image}
            />
          </View>
          <Text style={styles.text}>{"Doctor Detail"}</Text>
        </View>

        {/* Your other components go here */}
        <View style={styles.row2}>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b7f8e36d-1ce7-4a49-84f7-07562f621983"}} 
						resizeMode = {"stretch"}
						style={styles.image2}
					/>
					<View style={styles.column}>
						<Text style={styles.text2}>
							{"Dr. Rishi"}
						</Text>
						<Text style={styles.text3}>
							{"Chardiologist"}
						</Text>
						<View style={styles.row3}>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/226649dc-972d-499e-8277-5b44aaeec0f1"}} 
								resizeMode = {"stretch"}
								style={styles.image3}
							/>
							<Text style={styles.text4}>
								{"4.7"}
							</Text>
						</View>
						<View style={styles.row4}>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/63a843bf-fa46-4518-91f2-a5f765677902"}} 
								resizeMode = {"stretch"}
								style={styles.image4}
							/>
							<Text style={styles.text5}>
								{"800m away"}
							</Text>
						</View>
					</View>
				</View>
				<Text style={styles.text6}>
					{"About"}
				</Text>
				<Text style={styles.text7}>
					{"Lorem ipsum dolor sit amet, consectetur adipi elit, sed do eiusmod tempor incididunt ut laore et dolore magna aliqua. Ut enim ad minim veniam... Read more"}
				</Text>

        <View style={styles.row5}>
          <TouchableOpacity
            style={[styles.buttonColumn, selectedDay === "Mon" && styles.selectedButton]}
            onPress={() => handleDayClick("Mon")}
          >
            <Text style={styles.text8}>{"Mon"}</Text>
            <Text style={styles.text9}>{"21"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.buttonColumn, selectedDay === "Tue" && styles.selectedButton]}
            onPress={() => handleDayClick("Tue")}
          >
            <Text style={styles.text8}>{"Tue"}</Text>
            <Text style={styles.text9}>{"22"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
          style={[styles.buttonColumn, selectedDay === "Wed" && styles.selectedButton]}
          onPress={() => handleDayClick("Wed")}
        >
          <Text style={styles.text8}>{"Wed"}</Text>
          <Text style={styles.text9}>{"23"}</Text>
        </TouchableOpacity>

          <TouchableOpacity
            style={[styles.buttonColumn3, selectedDay === "Thu" && styles.selectedButton]}
            onPress={() => handleDayClick("Thu")}
          >
            <Text style={styles.text12}>{"Thu"}</Text>
            <Text style={styles.text9}>{"24"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.buttonColumn3, selectedDay === "Fri" && styles.selectedButton]}
            onPress={() => handleDayClick("Fri")}
          >
            <Text style={styles.text12}>{"Fri"}</Text>
            <Text style={styles.text9}>{"25"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.buttonColumn3, selectedDay === "Sat" && styles.selectedButton]}
            onPress={() => handleDayClick("Sat")}
          >
            <Text style={styles.text12}>{"Sat"}</Text>
            <Text style={styles.text9}>{"26"}</Text>
          </TouchableOpacity>
        </View>

        {/* Rest of your components */}
                <View style={styles.box}>
	 			</View>
				<View style={styles.row6}>
					<TouchableOpacity style={styles.button} onPress={()=>alert('Pressed!')}>
						<Text style={styles.text13}>
							{"09:00 AM"}
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={()=>alert('Pressed!')}>
						<Text style={styles.text5}>
							{"10:00 AM"}
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={()=>alert('Pressed!')}>
						<Text style={styles.text4}>
							{"11:00 AM"}
						</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.row6}>
					<TouchableOpacity style={styles.button} onPress={()=>alert('Pressed!')}>
						<Text style={styles.text13}>
							{"01:00 PM"}
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button2} onPress={()=>alert('Pressed!')}>
						<Text style={styles.text14}>
							{"02:00 PM"}
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={()=>alert('Pressed!')}>
						<Text style={styles.text5}>
							{"03:00 PM"}
						</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.row7}>
					<TouchableOpacity style={styles.button} onPress={()=>alert('Pressed!')}>
						<Text style={styles.text5}>
							{"04:00 PM"}
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={()=>alert('Pressed!')}>
						<Text style={styles.text5}>
							{"07:00 PM"}
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={()=>alert('Pressed!')}>
						<Text style={styles.text4}>
							{"08:00 PM"}
						</Text>
					</TouchableOpacity>
				</View>
				<TouchableOpacity style={styles.button3}  onPress={()=> props.navigation.navigate("Home")}>
					<Text style={styles.text15}>
						{"Book Apointment"}
					</Text>
				</TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  row5: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 23,
    marginRight: 31,
  },box: {
		height: 1,
		backgroundColor: "#407CE21F",
		marginBottom: 20,
		marginRight: 30,
	},
	button: {
		width: 86,
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderColor: "#4C6FFF61",
		borderRadius: 15,
		borderWidth: 1,
		paddingVertical: 14,
	},
	button2: {
		width: 86,
		alignItems: "center",
		backgroundColor: "#4C6FFFCC",
		borderRadius: 15,
		paddingVertical: 14,
	},
	button3: {
		alignItems: "center",
		backgroundColor: "#4C6FFFCC",
		borderRadius: 32,
		paddingVertical: 19,
		marginRight: 30,
	},
  buttonColumn: {
    width: 46,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#221F1F1A",
    borderRadius: 15,
    borderWidth: 1,
    paddingVertical: 18,
  },
  buttonColumn2: {
    width: 46,
    alignItems: "center",
    backgroundColor: "#4C6FFFCC",
    borderRadius: 15,
    paddingVertical: 17,
  },
  buttonColumn3: {
    width: 46,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#221F1F1A",
    borderRadius: 15,
    borderWidth: 1,
    paddingVertical: 17,
  },
  selectedButton: {
    backgroundColor: "#4C6FFFCC",  // Highlight color when selected
  },
 column: {
		flex: 1,
		alignItems: "flex-start",
		paddingHorizontal: 2,
	},
	image: {
		height: 24,
		marginTop: 10,
	},
	image2: {
		borderRadius: 6,
		width: 96,
		height: 96,
		marginRight: 15,
	},
	image3: {
		width: 10,
		height: 10,
		marginRight: 6,
	},
	image4: {
		width: 9,
		height: 10,
	},
	row: {
		flexDirection: "row",
		alignItems: "flex-start",
		marginBottom: 29,
		marginRight: 128,
	},
	row2: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderRadius: 6,
		padding: 9,
		marginBottom: 26,
		marginRight: 30,
	},
	row3: {
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
	row4: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	row5: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 23,
		marginRight: 31,
	},
	row6: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 14,
		marginRight: 30,
	},
	row7: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 35,
		marginRight: 30,
	},
	scrollView: {
		flex: 1,
		backgroundColor: "#FFFFFF",
		paddingTop: 30,
		paddingLeft: 30,
	},
	text: {
		color: "#221F1F",
		fontSize: 16,
		marginTop: 18,
		flex: 1,
	},
	text2: {
		color: "#221F1F",
		fontSize: 16,
		marginBottom: 12,
	},
	text3: {
		color: "#221F1F",
		fontSize: 12,
		marginBottom: 9,
	},
	text4: {
		color: "#4C6FFF",
		fontSize: 12,
	},
	text5: {
		color: "#221F1F",
		fontSize: 12,
	},
	text6: {
		color: "#221F1F",
		fontSize: 16,
		marginBottom: 11,
	},
	text7: {
		fontSize: 12,
		marginBottom: 24,
	},
	text8: {
		color: "#221F1F",
		fontSize: 10,
		marginBottom: 8,
	},
	text9: {
		color: "#221F1F",
		fontSize: 18,
	},
	text10: {
		color: "#FFFFFF",
		fontSize: 10,
		marginBottom: 9,
	},
	text11: {
		color: "#FFFFFF",
		fontSize: 18,
	},
	text12: {
		color: "#221F1F",
		fontSize: 10,
		marginBottom: 9,
	},
	text13: {
		color: "#407CE2",
		fontSize: 12,
	},
	text14: {
		color: "#FFFFFF",
		fontSize: 12,
	},
	text15: {
		color: "#FFFFFF",
		fontSize: 14,
	},
	view: {
		width: 42,
		backgroundColor: "#4C6FFF2E",
		borderRadius: 9,
		paddingHorizontal: 8,
		marginRight: 57,
	},
});
