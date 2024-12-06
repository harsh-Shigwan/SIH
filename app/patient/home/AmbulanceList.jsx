import * as React from "react";
import { View, Text, Image } from "react-native";

// AmbulanceCard Component
function AmbulanceCard({ name, location, distance, imageUrl }) {
  return (
    <View className="flex gap-4 p-2.5 mt-2.5 w-full text-xs font-medium bg-white rounded-md border border-solid border-stone-800 border-opacity-10 max-w-[300px] text-stone-800 text-opacity-40">
      <View className="flex shrink-0 w-24 h-24 rounded-md">
        <Image
          source={{ uri: imageUrl }}
          className="object-cover rounded-md w-24 h-24"
        />
      </View>
      <View className="flex flex-col items-start">
        <View className="self-stretch text-base font-semibold text-stone-800">
          <Text>{name}</Text>
        </View>
        <View className="mt-1.5">
          <Text>{location}</Text>
        </View>
        <View className="flex shrink-0 mt-4 rounded-sm bg-blue-500 bg-opacity-20 h-[18px] w-[41px]" />
        <View className="flex gap-1 mt-1.5">
          <Image
            source={{ uri: imageUrl }}
            className="object-contain shrink-0 self-start aspect-square w-[13px]"
          />
          <View>
            <Text>{distance}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

// AmbulanceList Component
function AmbulanceList() {
  const ambulanceData = [
    {
      id: 1,
      name: "Ganesh Ambulance",
      location: "Mumbai",
      distance: "800m away",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/6e687b7b6ceb5fb8a55d236d440ead47457286c22439c0fd89bdd74278f94b1d?placeholderIfAbsent=true&apiKey=abdee94ac70c4c57afd053b3a4b32b3c"
    },
    {
      id: 2,
      name: "Ganesh Ambulance",
      location: "Mumbai",
      distance: "800m away",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/6e687b7b6ceb5fb8a55d236d440ead47457286c22439c0fd89bdd74278f94b1d?placeholderIfAbsent=true&apiKey=abdee94ac70c4c57afd053b3a4b32b3c"
    },
    {
      id: 3,
      name: "Ganesh Ambulance",
      location: "Mumbai",
      distance: "800m away",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/79f0471771981d7b48498021cd47dcd90bf79e8aa3b8452db9df3b5eb5a3f15f?placeholderIfAbsent=true&apiKey=abdee94ac70c4c57afd053b3a4b32b3c"
    },
    {
      id: 4,
      name: "Ganesh Ambulance",
      location: "Mumbai",
      distance: "800m away",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/79f0471771981d7b48498021cd47dcd90bf79e8aa3b8452db9df3b5eb5a3f15f?placeholderIfAbsent=true&apiKey=abdee94ac70c4c57afd053b3a4b32b3c"
    },
    {
      id: 5,
      name: "Ganesh Ambulance",
      location: "Mumbai",
      distance: "800m away",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/79f0471771981d7b48498021cd47dcd90bf79e8aa3b8452db9df3b5eb5a3f15f?placeholderIfAbsent=true&apiKey=abdee94ac70c4c57afd053b3a4b32b3c"
    }
  ];

  return (
    <View className="flex overflow-hidden flex-col items-center py-9 bg-white max-w-[360px]">
      <View className="flex flex-col self-stretch px-8 w-full">
        <View className="flex gap-9 self-start text-base font-semibold text-center text-stone-800">
          <View className="flex shrink-0 rounded-lg bg-blue-500 bg-opacity-20 h-[42px] w-[42px]" />
          <View className="self-start mt-3.5 basis-auto">
            <Text>Available Ambulance</Text>
          </View>
        </View>
        <View className="flex gap-1.5 self-end mt-3 text-base whitespace-nowrap text-blue-500 text-opacity-80">
          <Image
            source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/972b001dfd004e46d32b339e2a1ac85e5165e6e25c10ebc90d21a41e3dbb7eca?placeholderIfAbsent=true&apiKey=abdee94ac70c4c57afd053b3a4b32b3c" }}
            className="object-contain shrink-0 my-auto aspect-[1.42] w-[17px]"
          />
          <View>
            <Text>Filter</Text>
          </View>
        </View>
      </View>
      {ambulanceData.map((ambulance) => (
        <AmbulanceCard key={ambulance.id} {...ambulance} />
      ))}
    </View>
  );
}

export default AmbulanceList;
