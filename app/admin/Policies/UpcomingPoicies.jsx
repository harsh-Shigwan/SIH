import React from "react";
import { SafeAreaView, View, ScrollView, Text, StyleSheet } from "react-native";

const programs = [
  {
    title: "National Immunization Drive",
    startDate: "March 15, 2024",
    targetBeneficiaries: "Children under 5 years, pregnant women",
    status: "Scheduled",
  },
  {
    title: "Mental Health Awareness Week",
    startDate: "April 1, 2024",
    targetBeneficiaries: "General public, students, and working professionals",
    status: "Scheduled",
  },
  {
    title: "Ayushman Bharat Digital Health Week",
    startDate: "March 25, 2024",
    targetBeneficiaries: "All citizens with a focus on rural areas",
    status: "Pending Approval",
  },
];

export default () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text2}>{"Upcoming Programs List"}</Text>
        {programs.map((program, index) => (
          <View key={index} style={styles.column2}>
            <Text style={styles.text}>{program.title}</Text>
            <Text style={styles.text4}>Start Date: {program.startDate}</Text>
            <Text style={styles.text5}>
              Target Beneficiaries: {program.targetBeneficiaries}
            </Text>
            <Text style={styles.text6}>Status: {program.status}</Text>
          </View>
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
    backgroundColor: "#FFFFFF",
    borderColor: "#E3E3E333",
    borderRadius: 20,
    borderWidth: 1,
    paddingBottom: 251,
    paddingHorizontal: 1,
    marginBottom: 33,
    marginHorizontal: 24,
  },
  column2: {
    backgroundColor: "#FFFFFF",
    borderColor: "#EEEEEE",
    borderWidth: 1,
    paddingVertical: 17,
    paddingHorizontal: 18,
    marginBottom: 20,
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: 16,
  },
  text: {
    color: "#221E1E",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 8,
  },
  text2: {
    color: "#233876",
    fontSize: 20,
    marginBottom: 35,
    marginHorizontal: 64,
    textAlign: "center",
  },
  text4: {
    color: "#7A7979",
    fontSize: 12,
    marginBottom: 4,
  },
  text5: {
    color: "#221F1F",
    fontSize: 12,
    marginBottom: 4,
  },
  text6: {
    color: "#221F1F",
    fontSize: 12,
  },
});