import React from 'react';
import { View, Text, Image } from 'react-native';

export const PatientNavbar = () => {
  return (
    <View className="flex gap-5 justify-between px-10 py-4 mt-24 bg-white shadow-[0px_-3px_4px_rgba(0,0,0,0.13)]">
      <View className="flex flex-col">
        <View className="flex gap-5 justify-between">
          <Image
            loading="lazy"
            source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/bf93d161f70e750443c56c75bde598ff48a7fd5054fcb5553e65b8a13bd0e48c?placeholderIfAbsent=true&apiKey=abdee94ac70c4c57afd053b3a4b32b3c" }}
            className="object-contain shrink-0 w-6 aspect-square"
          />
          <Image
            loading="lazy"
            source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/ec8f7423b66dd106013f7832b50e73714426c4fd078b3e88a6b4b3c59e6d9854?placeholderIfAbsent=true&apiKey=abdee94ac70c4c57afd053b3a4b32b3c" }}
            className="object-contain shrink-0 w-6 aspect-square"
          />
        </View>
        <View className="flex gap-5 justify-between mt-1.5 text-xs font-medium whitespace-nowrap">
          <View className="text-blue-500 text-opacity-80">
            <Text>Home</Text>
          </View>
          <View className="text-stone-800 text-opacity-60">
            <Text>EHR</Text>
          </View>
        </View>
      </View>
      <View className="flex flex-col text-xs font-medium whitespace-nowrap text-stone-800 text-opacity-60">
        <Image
          loading="lazy"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/2c038bdd58f914b766e3156bb23cad7ebebff6314e8a5250133c305fc8aeb69a?placeholderIfAbsent=true&apiKey=abdee94ac70c4c57afd053b3a4b32b3c" }}
          className="object-contain self-center w-6 aspect-square"
        />
        <View className="mt-1.5">
          <Text>Notification</Text>
        </View>
      </View>
      <View className="flex flex-col text-xs font-medium whitespace-nowrap text-stone-800 text-opacity-60">
        <Image
          loading="lazy"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/6be3338b7e949da951a57f3131e7c2af5bde88d70ec09a039dc26a338f98745b?placeholderIfAbsent=true&apiKey=abdee94ac70c4c57afd053b3a4b32b3c" }}
          className="object-contain w-6 aspect-square"
        />
        <View className="mt-1.5">
          <Text>Profile</Text>
        </View>
      </View>
    </View>
  );
};