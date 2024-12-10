import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, StyleSheet, } from "react-native";
const appointments = [
    {
      id: 1,
      doctorName: "Dr. Rishi",
      specialty: "Cardiologist",
      date: "01/02/2025",
      time: "2:00 PM",
      consultationMode: "online Visit",
      status: "Upcoming",
      statusLogo: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7a0af414-843d-482d-b090-cbacc7fa36e5",
      doctorImage: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b9b9bba2-0313-4d4b-b4d8-d83fbb822047",
    },
    {
      id: 2,
      doctorName: "Dr. bara",
      specialty: "Cardiologist",
      date: "01/02/2000",
      time: "2:35 PM",
      consultationMode: "Offline Visit",
      status: "Cancelled",
      statusLogo: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/066c1b28-fa0e-4048-9e76-50c9efa0b171",
      doctorImage: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d172d4bd-0d6c-4ca5-9aed-f3fb65532789",
    },
    {
      id: 3,
      doctorName: "Dr. eman",
      specialty: "Cardiologist",
      date: "01/12/2025",
      time: "12:00 PM",
      consultationMode: "Offline Visit",
      status: "Completed",
      statusLogo: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ddd61546-40a5-42ab-bbfc-27b74e901c0b",
      doctorImage: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/897d6916-167e-46b3-af32-e7e22bd223c1",
    },
  ];
export default (props) => {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>
				<View style={styles.row}>
					
					<Text style={styles.text}>
						{"My Appointments"}
					</Text>
				</View>
				<View style={styles.column}>
					<View style={styles.column2}>
                    { appointments.map((appointment) =>(
						<View style={styles.column3} key={appointment.id}>
							<View style={styles.row2}>
								<Image
                                source={{ uri: appointment.doctorImage }}
									resizeMode = {"stretch"}
									style={styles.image2}
								/>
								<View style={styles.box}>
								</View>
								<View style={styles.column4}>
									<Text style={styles.text2}>
                                        {appointment.doctorName}
									</Text>
									<Text style={styles.text3}>
                                        {appointment.specialty}
									</Text>
									<Text style={styles.text4}>
										{"Date : "  }
									</Text>
									<Text style={styles.text5}>
										{"Time : " }
									</Text>
								</View>
								<View style={styles.column5}>
									<Text style={styles.text6}>
										{appointment.date}
									</Text>
									<Text style={styles.text5}>
										{appointment.time}
									</Text>
								</View>
								<Image
									source = {{ uri: appointment.statusLogo }} 
									resizeMode = {"stretch"}
									style={styles.image3}
								/>
								<Text style={styles.text7}>
                                    {appointment.status}
								</Text>
							</View>
							<View style={styles.row3}>
								<Text style={styles.text5}>
									{"Consultation mode"}
								</Text>
								<Text style={styles.text5}>
									{appointment.consultationMode}
								</Text>
							</View>
						</View>
					
                    )) }
						
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
	absoluteImage: {
		position: "absolute",
		top: -9,
		right: 73,
		width: 15,
		height: 10,
	},
	absoluteText: {
		position: "absolute",
		top: -12,
		right: 33,
		color: "#4C6FFF",
		fontSize: 15,
	},
	box: {
		flex: 1,
	},
	column: {
		marginBottom: 10,
	},
	column2: {
		backgroundColor: "#FFFFFF",
		paddingTop: 26,
		paddingBottom: 48,
		paddingHorizontal: 30,
	},
	column3: {
		backgroundColor: "#FFFFFF",
		borderColor: "#221F1F1A",
		borderRadius: 6,
		borderWidth: 1,
		paddingVertical: 10,
		marginBottom: 10,
	},
	column4: {
		width: 67,
		marginRight: 21,
	},
	column5: {
		width: 44,
		marginTop: 37,
	},
	column6: {
		width: 53,
		marginTop: 1,
		marginRight: 5,
	},
	column7: {
		backgroundColor: "#FFFFFF",
		borderColor: "#221F1F1A",
		borderRadius: 6,
		borderWidth: 1,
		paddingVertical: 10,
	},
	column8: {
		backgroundColor: "#FFFFFF",
		paddingVertical: 11,
		paddingHorizontal: 39,
	},
	image: {
		height: 24,
		marginTop: 10,
	},
	image2: {
		borderRadius: 6,
		width: 55,
		height: 53,
		marginTop: 5,
	},
	image3: {
		width: 10,
		height: 11,
		marginTop: 1,
		marginRight: 5,
	},
	image4: {
		height: 11,
		marginBottom: 25,
	},
	image5: {
		width: 19,
		height: 20,
		marginRight: 55,
	},
	image6: {
		width: 15,
		height: 20,
	},
	image7: {
		width: 24,
		height: 24,
		marginRight: 61,
	},
	image8: {
		width: 24,
		height: 24,
	},
	row: {
		flexDirection: "row",
		alignItems: "flex-start",
		marginBottom: 29,
		marginHorizontal: 30,
	},
	row2: {
		flexDirection: "row",
		alignItems: "flex-start",
		marginBottom: 7,
		marginHorizontal: 10,
	},
	row3: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginHorizontal: 63,
	},
	row4: {
		flexDirection: "row",
		alignItems: "flex-start",
		marginBottom: 7,
		marginHorizontal: 7,
	},
	row5: {
		flexDirection: "row",
		alignItems: "flex-start",
		marginBottom: 7,
		marginHorizontal: 8,
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
		paddingTop: 30,
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
		marginBottom: 5,
		marginHorizontal: 1,
	},
	text3: {
		color: "#221F1F",
		fontSize: 10,
		marginBottom: 8,
	},
	text4: {
		color: "#221F1F",
		fontSize: 8,
		marginBottom: 7,
	},
	text5: {
		color: "#221F1F",
		fontSize: 8,
	},
	text6: {
		color: "#221F1F",
		fontSize: 8,
		marginBottom: 9,
	},
	text7: {
		color: "#66CB9F",
		fontSize: 8,
		marginTop: 2,
	},
	text8: {
		color: "#FF5B5E",
		fontSize: 8,
		marginTop: 3,
	},
	text9: {
		color: "#4C6FFF",
		fontSize: 8,
		marginTop: 3,
	},
	text10: {
		color: "#221F1F",
		fontSize: 12,
		marginRight: 45,
	},
	text11: {
		color: "#221F1F",
		fontSize: 12,
		marginRight: 46,
	},
	text12: {
		color: "#221F1F",
		fontSize: 12,
		marginRight: 34,
	},
	text13: {
		color: "#407CE2",
		fontSize: 12,
		flex: 1,
	},
	view: {
		width: 42,
		backgroundColor: "#4C6FFF2E",
		borderRadius: 9,
		paddingHorizontal: 8,
		marginRight: 38,
	},
});