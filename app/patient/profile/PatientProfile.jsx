import * as React from "react";
import { View, Image, Text } from "react-native";

export default function PatientProfile() {
  // Menu options data
  const menuOptions = [
    {
      id: 1,
      title: "My Saved Doctors",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a586e960ed0dfafdc4934ab6e506023ca1b6f01ae3a978bf69a50618a4199ec2?placeholderIfAbsent=true&apiKey=abdee94ac70c4c57afd053b3a4b32b3c",
    },
    {
      id: 2,
      title: "Appointment",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/56cc90a3c0e1490e0f73d66f8610994369cc4cb07b5494ba2689854344294cc1?placeholderIfAbsent=true&apiKey=abdee94ac70c4c57afd053b3a4b32b3c",
    },
    {
      id: 3,
      title: "My Scheme / Policies",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d145502d474924e5cff608abff89527c2b5b39614a4d53e268a0b68260143eeb?placeholderIfAbsent=true&apiKey=abdee94ac70c4c57afd053b3a4b32b3c",
    },
    {
      id: 4,
      title: "FAQs",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5577de023b0dab1287316525db1ce56e0309f921a9b3402e1b4bde76e38bb7ff?placeholderIfAbsent=true&apiKey=abdee94ac70c4c57afd053b3a4b32b3c",
    },
    {
      id: 5,
      title: "Logout",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/027d66d2fc1ae7df4a480119f9e1268d598df22ea6cbb690cd5090c4c8c5e414?placeholderIfAbsent=true&apiKey=abdee94ac70c4c57afd053b3a4b32b3c",
    },
  ];

  return (
    <View className="flex overflow-hidden flex-col items-center pt-16 bg-white max-w-[360px]">
      {/* Profile Header */}
      <>
        <Image
          loading="lazy"
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/009f5ad6db205aa4f582da33a1c6dc39b512350e2a88391b654a528b7823b930?placeholderIfAbsent=true&apiKey=abdee94ac70c4c57afd053b3a4b32b3c",
          }}
          className="object-contain rounded-full aspect-square w-[90px]"
        />
        <View className="mt-2 text-base font-semibold text-blue-500 text-opacity-70">
          <Text>Ruchita</Text>
        </View>
        <View className="flex gap-7 items-center mt-10 text-xs font-semibold text-blue-500 text-opacity-70">
          <View className="self-stretch pt-11 my-auto w-[53px]">
            <Text>Edit Profile</Text>
          </View>
          <View className="flex shrink-0 self-stretch my-auto w-px h-11 bg-blue-500 bg-opacity-10" />
          <View className="self-stretch pt-10 my-auto w-[57px]">
            <Text>My Queries</Text>
          </View>
          <View className="flex shrink-0 self-stretch my-auto w-px h-11 bg-blue-500 bg-opacity-10" />
          <View className="self-stretch pt-11 my-auto whitespace-nowrap w-[42px]">
            <Text>Settings</Text>
          </View>
        </View>
      </>

      {/* Menu Options */}
      {menuOptions.map((option) => (
        <React.Fragment key={option.id}>
          <View className="flex gap-5 justify-between mt-3.5 w-full text-base font-semibold max-w-[300px] text-stone-800">
            <View className="flex gap-5">
              <Image
                loading="lazy"
                source={{ uri: option.icon }}
                className="object-contain shrink-0 aspect-square w-[43px]"
              />
              <View className="my-auto basis-auto">
                <Text>{option.title}</Text>
              </View>
            </View>
            <Image
              loading="lazy"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/70604de9120ea55f7026f572dd8df4e2eb3ac573d3ab740e6abb601150745ed8?placeholderIfAbsent=true&apiKey=abdee94ac70c4c57afd053b3a4b32b3c",
              }}
              className="object-contain shrink-0 my-auto w-6 aspect-square"
            />
          </View>
          <View className="flex shrink-0 mt-3.5 max-w-full h-px bg-blue-500 bg-opacity-10 w-[300px]" />
        </React.Fragment>
      ))}
    </View>
  );
}
