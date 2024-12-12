import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Breadcrumps = ({ steps, currentStep }) => {
  return (
    <View style={styles.breadcrumbContainer}>
      {steps.map((step, index) => (
        <View key={index} style={styles.stepContainer}>
          <Text
            style={[
              styles.stepText,
              currentStep === index + 1 ? styles.activeStep : null,
            ]}
          >
            {step}
          </Text>
          {index < steps.length - 1 && <Text style={styles.separator}></Text>}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  breadcrumbContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  stepContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stepText: {
    fontSize: 16,
    color: '#666',
  },
  activeStep: {
    fontWeight: 'bold',
    color: '#000',
  },
  separator: {
    marginHorizontal: 8,
    color: '#666',
  },
});

export default Breadcrumps;
