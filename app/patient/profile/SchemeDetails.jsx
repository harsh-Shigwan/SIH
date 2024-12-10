
import React from 'react'

import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const SchemeDetails = ( props) => {
  const { title , id , imageUri , muteImageUri , date , summary } =  props.route.params;
  return (
    <ScrollView  style={styles.scrollView}>
	<View style={styles.row}>
	
		<Text style={styles.text}>
			{title}
		</Text>
	</View>
	<View style={styles.column}>
		<Image
			source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3618710f-180b-4103-ac7d-30d1ac28fd03"}} 
			resizeMode = {"stretch"}
			style={styles.image2}
		/>
		<Text style={styles.text2}>
			{"Ayushman Bharat - Pradhan Mantri Jan Arogya Yojana (PMJAY)"}
		</Text>
		<Text style={styles.text3}>
			{"Launch Date: " + date}
		</Text>
		<Text style={styles.text4}>
			{"Validity: Ongoing"}
		</Text>
		<Text style={styles.text5}>
			{"Description:" + summary}
		</Text>
		<Text style={styles.text6}>
			{"Target Beneficiaries: Below poverty line (BPL) families, rural and urban poor."}
		</Text>
		<Text style={styles.text7}>
			{"Key Features:\nFree medical treatment at empanelled hospitals.\nCovers all secondary and tertiary care hospitalization.\nCashless access to healthcare services."}
		</Text>
		<TouchableOpacity style={styles.button} onPress={()=>alert('Pressed!')}>
			<Text style={styles.text8}>
				{"Get more info"}
			</Text>
		</TouchableOpacity>
	</View>
</ScrollView>
  )
}

export default SchemeDetails

const styles = StyleSheet.create({
	button: {
		alignItems: "center",
		borderColor: "#4C6FFFCC",
		borderRadius: 32,
		borderWidth: 1,
		paddingVertical: 18,
		marginHorizontal: 78,
	},
	column: {
		backgroundColor: "#FFFFFF",
		borderRadius: 16,
		paddingTop: 23,
		paddingBottom: 37,
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
	image: {
		height: 24,
		marginTop: 10,
	},
	image2: {
		borderRadius: 20,
		height: 157,
		marginBottom: 25,
		marginHorizontal: 83,
	},
	row: {
		flexDirection: "row",
		alignItems: "flex-start",
		marginBottom: 62,
		marginHorizontal: 30,
	},
	scrollView: {
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
		color: "#233876",
		fontSize: 20,
		marginBottom: 27,
		marginHorizontal: 30,
	},
	text3: {
		fontSize: 14,
		marginBottom: 20,
		marginHorizontal: 23,
	},
	text4: {
		fontSize: 14,
		marginBottom: 30,
		marginLeft: 24,
	},
	text5: {
		fontSize: 14,
		marginBottom: 34,
		marginHorizontal: 23,
	},
	text6: {
		color: "#718096",
		fontSize: 14,
		marginBottom: 20,
		marginHorizontal: 23,
	},
	text7: {
		fontSize: 14,
		marginBottom: 81,
		marginHorizontal: 19,
	},
	text8: {
		color: "#4C6FFF",
		fontSize: 14,
	},
	view: {
		width: 42,
		backgroundColor: "#4C6FFF2E",
		borderRadius: 9,
		paddingHorizontal: 8,
		marginRight: 30,
	},
});