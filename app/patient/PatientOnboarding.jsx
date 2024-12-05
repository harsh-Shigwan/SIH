import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router'; // Import the useRouter hook

export default function PatientOnboarding() {
  const router = useRouter(); // Initialize the router

  const Button = ({ title, variant = 'primary', onPress }) => {
    const baseStyles = "self-stretch px-16 py-4 font-semibold rounded-[32px]";
    const variants = {
      primary: "bg-blue-500 bg-opacity-80",
      secondary: "border border-solid border-blue-500 border-opacity-80"
    };
    const textVariants = {
      primary: "text-white",
      secondary: "text-blue-500 text-opacity-80"
    };

    return (
      <TouchableOpacity 
        className={`${baseStyles} ${variants[variant]}`}
        onPress={onPress}
        accessibilityRole="button"
        accessibilityLabel={title}
      >
        <Text className={`text-center font-semibold ${textVariants[variant]}`}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View className="flex overflow-hidden flex-col items-center px-14 py-48 text-base text-center bg-white max-w-[360px]">
      <Image
        accessibilityLabel="CareChainAi Logo"
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/a0a55daa52d741f234a4c0c3e8b2deec2b31337a2871fb0df009394c6589c3c3?placeholderIfAbsent=true&apiKey=abdee94ac70c4c57afd053b3a4b32b3c",
        }}
        className="object-contain max-w-full aspect-[1.12] w-[118px]"
      />
      <View className="mt-2 text-2xl font-semibold text-blue-500">
        <Text accessibilityRole="header">CareChainAi</Text>
      </View>
      <View className="mt-6 text-2xl font-bold leading-none text-stone-800">
        <Text accessibilityRole="header">Let's get started!</Text>
      </View>
      <View className="tracking-wide text-stone-800 text-opacity-60">
        <Text>Login to Stay healthy and fit</Text>
      </View>
      
      <Button 
        title="Login"
        variant="primary"
        onPress={() => router.push('patient/PatientSignIn')} // Navigate to PatientSignIn
      />
      
      <View className="mt-4">
        <Button 
          title="Sign Up"
          variant="secondary"
          onPress={() => router.push('/patient/PatientSignUp')} // Navigate to PatientSignUp
        />
      </View>
    </View>
  );
}
