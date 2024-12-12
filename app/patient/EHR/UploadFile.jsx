// import React, { useState } from "react";
// import {
//   SafeAreaView,
//   View,
//   ScrollView,
//   Image,
//   Text,
//   ImageBackground,
//   TextInput,
//   StyleSheet,
//   Button,
//   Alert,
// } from "react-native";
// import DocumentPicker from "react-native-document-picker";
// import axios from "axios";

// export default (props) => {
//   const [textInput1, onChangeTextInput1] = useState("");
//   const [file, setFile] = useState(null); // State to hold the selected file
//   const [uploadType, setUploadType] = useState("file"); // uploadType for 'file' or 'text'

//   const pickFile = async () => {
//     try {
//       const res = await DocumentPicker.pick({
//         type: [DocumentPicker.types.allFiles], // You can restrict file types hereb
//       });
//       setFile(res[0]); // Store selected file
//     } catch (err) {
//       if (DocumentPicker.isCancel(err)) {
//         console.log("User canceled the picker");
//       } else {
//         throw err;
//       }
//     }
//   };

//   // Handle the form submission and file upload
//   const handleSubmit = async () => {
//     // Validation for the inputs
//     if (!file) {
//       Alert.alert("Error", "Please select a file.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("upload_type", uploadType); // 'file' or 'text'
//     formData.append("title", textInput1); // Assuming you want to send the title input
//     formData.append("description", textInput1); // Assuming description is textInput1
//     formData.append("file", {
//       uri: file.uri,
//       type: file.type,
//       name: file.name,
//     });

//     try {
//       const response = await axios.post(
//         "http://127.0.0.1:8000/patient/ehr/",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       if (response.status === 200) {
//         Alert.alert("Success", "File uploaded successfully!");
//       } else {
//         Alert.alert("Error", "Failed to upload file.");
//       }
//     } catch (error) {
//       console.error(error);
//       Alert.alert("Error", "Something went wrong during the upload.");
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView style={styles.scrollView}>
//         <View style={styles.row}>
//           <Image
//             source={{
//               uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/55345d16-9c05-43ea-abef-eefdb6419b31",
//             }}
//             resizeMode={"stretch"}
//             style={styles.image}
//           />
//           <Text style={styles.text}>{"Upload Reports"}</Text>
//         </View>
//         <ImageBackground
//           source={{
//             uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fb180145-f576-4fc4-8ce3-450215041056",
//           }}
//           resizeMode={"stretch"}
//           style={styles.column}
//         >
//           <Image
//             source={{
//               uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d1ab0a6c-13f7-41b5-a9b9-1c60d298cb9d",
//             }}
//             resizeMode={"stretch"}
//             style={styles.image2}
//           />
//           <Text style={styles.text2}>{"Browse Report"}</Text>
//           <Text style={styles.text3}>{"Supported formats (jpeg,png,pdf)"}</Text>
//         </ImageBackground>
//         <TextInput
//           placeholder={"Enter Title"}
//           value={textInput1}
//           onChangeText={onChangeTextInput1}
//           style={styles.input}
//         />
//         <Button title="Pick File" onPress={pickFile} />
//         {file && (
//           <Text style={styles.selectedFile}>
//             {`Selected file: ${file.name}`}
//           </Text>
//         )}
//         <Button title="Submit" onPress={handleSubmit} />
//         <Image
//           source={{
//             uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e61df19d-63b6-48ee-9c4e-940da67a4ec9",
//           }}
//           resizeMode={"stretch"}
//           style={styles.image3}
//         />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#FFFFFF",
//   },
//   column: {
//     height: 300,
//     paddingTop: 40,
//     paddingBottom: 58,
//     paddingRight: 62,
//     marginBottom: 116,
//     marginHorizontal: 27,
//   },
//   image: {
//     width: 24,
//     height: 24,
//     marginRight: 58,
//   },
//   image2: {
//     height: 158,
//     marginBottom: 4,
//     marginLeft: 68,
//   },
//   image3: {
//     height: 19,
//     marginHorizontal: 167,
//   },
//   input: {
//     color: "#FFFFFF",
//     fontSize: 20,
//     marginHorizontal: 22,
//     backgroundColor: "#4C6FFFCC",
//     borderRadius: 10,
//     paddingVertical: 17,
//     paddingHorizontal: 82,
//   },
//   row: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 184,
//     marginHorizontal: 33,
//   },
//   scrollView: {
//     flex: 1,
//     backgroundColor: "#FFFFFF",
//     paddingTop: 26,
//   },
//   text: {
//     color: "#221F1F",
//     fontSize: 16,
//     flex: 1,
//   },
//   text2: {
//     color: "#4C6FFF",
//     fontSize: 20,
//     marginBottom: 10,
//     marginLeft: 89,
//   },
//   text3: {
//     color: "#4C6FFF",
//     fontSize: 10,
//     marginLeft: 76,
//   },
// });

import { View, Text } from 'react-native'
import React from 'react'

const UploadFile = () => {
  return (
	<View>
	  <Text>UploadFile</Text>
	</View>
  )
}

export default UploadFile
