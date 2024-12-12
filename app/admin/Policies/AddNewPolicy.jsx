import React, { useState } from 'react';
import { View, Text, Button, TextInput, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

const FileUpload = () => {
  const [image, setImage] = useState(null);
  const [uploadType, setUploadType] = useState('');
  const [error, setError] = useState('');

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  const handleSubmit = async () => {
    if (!uploadType) {
      setError('Upload type is required.');
      return;
    }

    const formData = new FormData();
    formData.append('upload_type', uploadType);
    formData.append('image', {
      uri: image,
      name: 'image.jpg', // Replace with actual file name
      type: 'image/jpeg', // Replace with actual MIME type
    });

    try {
      const response = await axios.post('your_api_endpoint_here', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('File uploaded successfully:', response.data);
      // Handle success, e.g., show a success message
    } catch (error) {
      console.error('Error uploading file:', error);
      // Handle errors, e.g., show an error message
    }
  };

  return (
    <View>
      <Button title="Pick Image" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      <TextInput
        placeholder="Upload Type"
        value={uploadType}
        onChangeText={setUploadType}
      />
      {error && <Text style={{ color: 'red' }}>{error}</Text>}
      <Button title="Upload" onPress={handleSubmit} />
    </View>
  );
};

export default FileUpload;