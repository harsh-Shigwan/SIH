import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

export default function PatientSignIn() {
  // Component: SocialSignInButton
  const SocialSignInButton = ({ icon, text }) => {
    return (
      <View className="flex gap-6 px-5 py-4 mt-6 w-full font-semibold text-center bg-white rounded-md border-solid max-w-[300px] shadow-[0px_10px_20px_rgba(58,41,106,0.2)]">
        <Image
          loading="lazy"
          source={{ uri: icon }}
          className="object-contain shrink-0 my-auto w-5 aspect-square"
        />
        <View className="grow shrink w-[211px]">
          <Text>{text}</Text>
        </View>
      </View>
    );
  };

  // Component: FormInput
  const FormInput = ({ icon, placeholder, type = 'text', showEndIcon, endIcon }) => {
    return (
      <View className="flex gap-4 px-6 py-4 mt-6 bg-gray-50 rounded-md border border-solid border-stone-800 border-opacity-10">
        <View className="flex gap-4">
          <Image
            loading="lazy"
            source={{ uri: icon }}
            className="object-contain shrink-0 w-6 aspect-square"
          />
          <TextInput
            placeholder={placeholder}
            secureTextEntry={type === 'password'}
            className="basis-auto"
            accessibilityLabel={placeholder}
          />
        </View>
        {showEndIcon && (
          <Image
            loading="lazy"
            source={{ uri: endIcon }}
            className="object-contain shrink-0 w-6 aspect-square"
          />
        )}
      </View>
    );
  };

  // Social sign-in button options
  const socialSignInOptions = [
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3fe9803e327c2c31cd68159aea3d49db3ecec12c00c149ed9bb12c9f8ac1a11e?placeholderIfAbsent=true&apiKey=abdee94ac70c4c57afd053b3a4b32b3c',
      text: 'Sign in with Google',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c7d11ce90de2ef614e78092bdd688a0e8de8e4f5314a5aabfb6c3c858d428bb8?placeholderIfAbsent=true&apiKey=abdee94ac70c4c57afd053b3a4b32b3c',
      text: 'Sign in with Facebook',
    },
  ];

  // Main SignIn Component
  return (
    <View className="flex overflow-hidden flex-col items-center pt-16 pb-28 text-base bg-white max-w-[360px] text-stone-800">
      <View className="flex flex-col self-stretch px-8 w-full text-sm text-stone-800 text-opacity-40">
        <View className="flex gap-5 justify-between max-w-full text-lg font-bold leading-none text-center text-stone-800 w-[181px]">
          <Image
            loading="lazy"
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/75e6fed17a7bfbb7f040659d652642aad8b3b9bce758f74d566ed7bd9bd3d2bb?placeholderIfAbsent=true&apiKey=abdee94ac70c4c57afd053b3a4b32b3c',
            }}
            className="object-contain shrink-0 w-10 aspect-square"
          />
          <View className="my-auto">
            <Text>Sign In</Text>
          </View>
        </View>

        <FormInput
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/34e5f6262dd33cfe34d912ff38efe96533cfa602c72c570c74475e4062780307?placeholderIfAbsent=true&apiKey=abdee94ac70c4c57afd053b3a4b32b3c"
          placeholder="Enter your email"
          type="email"
        />

        <FormInput
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/d1dbb31d6b2940997c0626141cf07cc3942962395167f3dcb03cf2051e3be6f2?placeholderIfAbsent=true&apiKey=abdee94ac70c4c57afd053b3a4b32b3c"
          placeholder="Enter your password"
          type="password"
          showEndIcon={true}
          endIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/5bf3e1a0f572c443080fda5277abd9de1382616f877a92f3ee1106ca28227676?placeholderIfAbsent=true&apiKey=abdee94ac70c4c57afd053b3a4b32b3c"
        />

        <TouchableOpacity className="self-end mt-4">
          <Text className="text-sm font-medium leading-snug text-blue-500">
            Forgot password?
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity className="px-16 py-4 mt-12 w-full font-semibold text-center text-white bg-blue-500 max-w-[300px] rounded-[32px]">
        <Text>Sign In</Text>
      </TouchableOpacity>

      <View className="mt-2.5">
        <Text className="text-sm leading-none text-center">
          Don't have an account?{' '}
          <Text className="text-blue-500">Sign up</Text>
        </Text>
      </View>

      <View className="px-2 py-1 mt-12 text-center text-gray-400 whitespace-nowrap bg-white w-[37px]">
        <Text>OR</Text>
      </View>

      {socialSignInOptions.map((option, index) => (
        <SocialSignInButton key={index} icon={option.icon} text={option.text} />
      ))}
    </View>
  );
}
