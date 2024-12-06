import React from 'react';
import { View, Image, Text } from 'react-native';


export const SavedDoctors = () => {
  return (
    <View className="flex overflow-hidden flex-col pt-8 bg-white max-w-[360px]">
      <View className="flex gap-9 self-start ml-8 text-base font-semibold text-center text-stone-800">
        <View className="flex shrink-0 rounded-lg bg-blue-500 bg-opacity-20 h-[42px] w-[42px]" />
        <View className="self-start mt-3.5 basis-auto">
          <Text>My Saved doctors</Text>
        </View>
      </View>
      <Image
        loading="lazy"
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/1ef1523531eb3a968baf2a20dd381eed2999300357ade91f087402b1214e0892?placeholderIfAbsent=true&apiKey=abdee94ac70c4c57afd053b3a4b32b3c",
        }}
        className="object-contain mt-7 w-full aspect-[0.58]"
      />

    </View>
  );
};