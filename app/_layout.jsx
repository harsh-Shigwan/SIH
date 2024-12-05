import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import "../global.css";
import { Slot, Stack } from 'expo-router';
const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name='index' />
    </Stack>
  )
}

export default RootLayout

const styles = StyleSheet.create({})