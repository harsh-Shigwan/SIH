import * as React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

// AmbulanceCard Component
const AmbulanceCard = ({ name, location, distance, imageUrl }) => (
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

// ServiceHeader Component
const ServiceHeader = ({ title }) => (
  <View className="flex gap-10 text-base font-semibold text-center text-stone-800">
    <View className="flex shrink-0 rounded-lg bg-blue-500 bg-opacity-20 h-[42px] w-[42px]" />
    <View className="self-start mt-3.5 basis-auto">
      <Text>{title}</Text>
    </View>
  </View>
);

// ServiceLocation Component
const ServiceLocation = ({ address }) => (
  <View className="flex gap-2.5 mt-3 text-sm leading-5 text-blue-950">
    <Image
      accessibilityLabel="Location icon"
      source={{
        uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/37a4be4a7f01d067e88d414b2592798004ae451ffefc72a5a1d244345d20835b?placeholderIfAbsent=true&apiKey=abdee94ac70c4c57afd053b3a4b32b3c",
      }}
      className="object-contain shrink-0 self-start aspect-[0.86] w-[18px]"
    />
    <View className="opacity-40">
      <Text>{address}</Text>
    </View>
  </View>
);

// ServiceRating Component
const ServiceRating = ({ rating, reviews }) => (
  <View className="flex flex-col">
    <Text className="self-start text-xs font-light leading-none text-right text-blue-950">
      Rating
    </Text>
    <View className="flex gap-1.5 mt-3 text-sm">
      <View className="px-3 pt-1.5 pb-6 font-extrabold text-center text-white whitespace-nowrap bg-green-600 rounded h-[39px] w-[39px]">
        <Text>{rating}</Text>
      </View>
      <View className="my-auto tracking-tight text-stone-300">
        <Text>Fair ({reviews})</Text>
      </View>
    </View>
  </View>
);

// ServicePrice Component
const ServicePrice = ({ price }) => (
  <View className="flex flex-col self-start mt-2 leading-none text-right whitespace-nowrap text-blue-950">
    <Text className="self-start ml-5 text-xs font-light">From</Text>
    <Text className="mt-5 text-sm font-extrabold">{price}</Text>
  </View>
);

// BookButton Component
const BookButton = () => (
  <TouchableOpacity className="flex items-center justify-center mt-5 px-5 py-2 bg-blue-500 rounded-md">
    <Text className="text-white text-sm font-semibold">Book Now</Text>
  </TouchableOpacity>
);

// PatientAmbulanceList Component
const PatientAmbulanceList = () => {
  const ambulanceData = [
    {
      id: 1,
      name: "Ganesh Ambulance",
      location: "Mumbai",
      distance: "800m away",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6e687b7b6ceb5fb8a55d236d440ead47457286c22439c0fd89bdd74278f94b1d?placeholderIfAbsent=true&apiKey=abdee94ac70c4c57afd053b3a4b32b3c",
    },
    {
      id: 2,
      name: "Siddhi Ambulance",
      location: "Pune",
      distance: "1.2km away",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6e687b7b6ceb5fb8a55d236d440ead47457286c22439c0fd89bdd74278f94b1d?placeholderIfAbsent=true&apiKey=abdee94ac70c4c57afd053b3a4b32b3c",
    },
  ];

  return (
    <View className="flex overflow-hidden flex-col items-center py-9 bg-white max-w-[360px]">
      <ServiceHeader title="Available Ambulances" />
      {ambulanceData.map((ambulance) => (
        <AmbulanceCard key={ambulance.id} {...ambulance} />
      ))}
      <BookButton />
    </View>
  );
};

// Export the consolidated component
export default PatientAmbulanceList;
