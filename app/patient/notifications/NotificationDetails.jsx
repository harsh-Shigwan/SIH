import * as React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

function NotificationDetails() {
  // Data for the insurance features
  const features = [
    "Free medical treatment at empanelled hospitals.",
    "Covers all secondary and tertiary care hospitalization.",
    "Cashless access to healthcare services.",
  ];

  return (
    <View className="flex overflow-hidden flex-col px-4 pt-8 pb-16 mx-auto w-full bg-white max-w-[480px]">
      {/* Insurance Header */}
      <View className="flex gap-7 self-start ml-3.5 text-base font-semibold text-center text-stone-800">
        <View className="flex shrink-0 rounded-lg bg-blue-500 bg-opacity-20 h-[42px] w-[42px]" />
        <View className="self-start mt-3.5 basis-auto">
          <Text>Rashtiyra Beema Yojna</Text>
        </View>
      </View>

      <View className="flex overflow-hidden flex-col px-6 pt-6 pb-9 mt-16 text-sm bg-white rounded-2xl shadow-sm text-slate-500">
        {/* Insurance Images */}
        <>
          <Image
            loading="lazy"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/0b75cfe9f108c85dea52b8b4835f7b9860ea5de013a6815c1a0f8df97795960b?placeholderIfAbsent=true&apiKey=abdee94ac70c4c57afd053b3a4b32b3c",
            }}
            className="object-contain self-end aspect-square w-[31px]"
            accessibilityLabel="Insurance logo"
          />
          <Image
            loading="lazy"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/81adbb09d797faafe26464a47acbf37cf23c11a29a05c167d8e3c6176687426e?placeholderIfAbsent=true&apiKey=abdee94ac70c4c57afd053b3a4b32b3c",
            }}
            className="object-contain self-center mt-5 max-w-full rounded-3xl aspect-[1.01] w-[159px]"
            accessibilityLabel="Insurance scheme illustration"
          />
        </>

        {/* Insurance Details */}
        <>
          <View className="self-center mt-5 text-xl font-medium text-center text-indigo-900">
            <Text>Ayushman Bharat - Pradhan Mantri Jan Arogya Yojana (PMJAY)</Text>
          </View>
          <View className="self-start mt-7 font-extrabold leading-loose">
            <Text>Launch Date: September 23, 2018</Text>
          </View>
          <View className="self-start mt-5 font-extrabold leading-loose">
            <Text>Validity: Ongoing</Text>
          </View>
          <View className="self-start mt-8 font-semibold leading-6">
            <Text>
              Description: A flagship health insurance scheme that aims to provide health
              coverage of up to ₹5 lakh per family per year for secondary and
              tertiary care hospitalization to over 10 crore poor and vulnerable
              families.
            </Text>
          </View>
          <View className="self-start mt-9 font-medium leading-6">
            <Text>
              Target Beneficiaries: Below poverty line (BPL) families, rural and urban poor.
            </Text>
          </View>
        </>

        {/* Insurance Features */}
        <View className="mt-6 font-bold leading-6">
          <Text className="mb-2">Key Features:</Text>
          {features.map((feature, index) => (
            <View key={index} className="flex-row ml-4 mb-1">
              <Text>• {feature}</Text>
            </View>
          ))}
        </View>

        {/* Get More Info Button */}
        <TouchableOpacity
          className="self-center px-9 py-3.5 mt-20 max-w-full font-semibold border border-solid border-blue-500 border-opacity-80 rounded-[32px] text-blue-500 text-opacity-80 w-[169px]"
          accessibilityRole="button"
          accessibilityLabel="Get more information about insurance"
        >
          <Text className="text-blue-500 text-opacity-80">Get more info</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default NotificationDetails;
