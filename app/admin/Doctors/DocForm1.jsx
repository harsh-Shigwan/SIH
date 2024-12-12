import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Breadcrumps from '../../Breadcrumps';

const DocForm1 = () => {
  const steps = ['Page 1', 'Page 2', 'Page 3'];
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    specialization: '',
    hospital: '',
    contact_number: '',
    email: '',
    address: '',
    gender: '',
    profile_photo: '',
    medical_license_number: '',
    license_file: '',
    years_of_experience: '',
    is_available: false,
    status: '',
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setLoading(true); // Start loading
    try {
      const token = await AsyncStorage.getItem('token');
      console.log('Token string from storage:', token);

      if (!token) {
        Alert.alert('Error', 'No token found, please log in.');
        setLoading(false);
        return;
      }

      const config = {
        headers: {
          Authorization: `Token ${token}`,
        },
      };

      const response = await axios.post(
        'http://127.0.0.1:8000/admin_app/doctors/',
        formData,
        config
      );
      Alert.alert('Success', 'Form submitted successfully!');
    } catch (error) {
      Alert.alert(
        'Error',
        `Failed to submit the form. ${error.response?.data || error.message}`
      );
      console.error('Error:', error.response?.data || error.message);
      
    } finally {
      setLoading(false); // Stop loading
    }
  }
      
  return (
    <View style={styles.container}>
      <Breadcrumps steps={steps} currentStep={currentStep} />
      {currentStep === 1 && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={formData.name}
            onChangeText={(value) => handleInputChange('name', value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Specialization"
            value={formData.specialization}
            onChangeText={(value) => handleInputChange('specialization', value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Hospital"
            value={formData.hospital}
            onChangeText={(value) => handleInputChange('hospital', value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Contact Number"
            value={formData.contact_number}
            onChangeText={(value) => handleInputChange('contact_number', value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={formData.email}
            onChangeText={(value) => handleInputChange('email', value)}
          />
        </>
      )}
      {currentStep === 2 && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Address"
            value={formData.address}
            onChangeText={(value) => handleInputChange('address', value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Gender"
            value={formData.gender}
            onChangeText={(value) => handleInputChange('gender', value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Profile Photo URL"
            value={formData.profile_photo}
            onChangeText={(value) => handleInputChange('profile_photo', value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Medical License Number"
            value={formData.medical_license_number}
            onChangeText={(value) => handleInputChange('medical_license_number', value)}
          />
          <TextInput
            style={styles.input}
            placeholder="License File URL"
            value={formData.license_file}
            onChangeText={(value) => handleInputChange('license_file', value)}
          />
        </>
      )}
      {currentStep === 3 && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Years of Experience"
            value={formData.years_of_experience}
            onChangeText={(value) => handleInputChange('years_of_experience', value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Availability (true/false)"
            value={formData.is_available.toString()}
            onChangeText={(value) =>
              handleInputChange('is_available', value.toLowerCase() === 'true')
            }
          />
          <TextInput
            style={styles.input}
            placeholder="Status"
            value={formData.status}
            onChangeText={(value) => handleInputChange('status', value)}
          />
        </>
      )}
      <View style={styles.buttonContainer}>
        {currentStep > 1 && <Button title="Back" onPress={handleBack} />}
        <Button
          title={currentStep === steps.length ? 'Submit' : 'Next'}
          onPress={handleNext}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default DocForm1;
