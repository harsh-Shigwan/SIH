import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Link} from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const index = () => {
  return (
    <View className="flex-1 items-center justify-center max-h-screen">
      <Text className="color-red-400 text-3xl">index</Text>
      <StatusBar style="auto"/>
      <Link href="/About">
        <Text>Go to About</Text>
      </Link>
      <Link href="/patient/home">
       <Text>Go to Patient Home</Text>
      </Link>
      <Link href="/patient/PatientOnboarding">
       <Text>Go to Patient Onboarding</Text>
      </Link>
    </View>
  )
}


export default index

const styles = StyleSheet.create({})