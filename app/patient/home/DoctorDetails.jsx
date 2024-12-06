import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';

// TimeSlot Component
const TimeSlot = ({ time, isSelected, isDisabled }) => {
  const baseStyle = "px-4 py-3 rounded-2xl";
  const selectedStyle = "font-semibold text-white bg-blue-500 bg-opacity-80";
  const disabledStyle = "bg-white border border-solid border-blue-500 border-opacity-40 text-blue-500 text-opacity-30";
  const defaultStyle = "bg-white border border-solid border-blue-500 border-opacity-40 text-stone-800";

  return (
    <View className={`${baseStyle} ${isSelected ? selectedStyle : isDisabled ? disabledStyle : defaultStyle}`}>
      <Text className="text-xs">{time}</Text>
    </View>
  );
};

// DateCard Component
const DateCard = ({ day, date, isSelected }) => {
  const baseStyle = "flex flex-col flex-1 px-2.5 py-3.5 rounded-2xl";
  const selectedStyle = "text-white bg-blue-500 bg-opacity-80";
  const defaultStyle = "bg-white border border-solid border-stone-800 border-opacity-10";

  return (
    <View className={`${baseStyle} ${isSelected ? selectedStyle : defaultStyle}`}>
      <View className={`text-xs ${isSelected ? 'text-white' : 'text-stone-800 text-opacity-60'}`}>
        <Text>{day}</Text>
      </View>
      <View className={`text-lg font-semibold ${isSelected ? 'text-white' : 'text-stone-800'}`}>
        <Text>{date}</Text>
      </View>
    </View>
  );
};

// SearchBar Component
const SearchBar = () => {
  return (
    <View className="flex gap-3 px-6 py-2.5 mt-3.5 text-xs rounded-3xl border border-emerald-50 border-solid bg-zinc-50 text-stone-800 text-opacity-40">
      <Image
        loading="lazy"
        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/9f27def8646d38134714af1aaab8c5eb3c26efcc7974caa0739d6fbbc6847405?placeholderIfAbsent=true&apiKey=abdee94ac70c4c57afd053b3a4b32b3c" }}
        className="object-contain shrink-0 self-start aspect-square w-[18px]"
      />
      <TextInput
        className="grow shrink w-[216px]"
        placeholder="Search doctor..."
        accessibilityLabel="Search for a doctor"
      />
    </View>
  );
};

// DoctorDetail Component
export default function DoctorDetails() {
  const dates = [
    { day: 'Mon', date: '21', isSelected: false },
    { day: 'Tue', date: '22', isSelected: false },
    { day: 'Wed', date: '23', isSelected: true },
    { day: 'Thu', date: '24', isSelected: false },
    { day: 'Fri', date: '25', isSelected: false },
    { day: 'Sat', date: '26', isSelected: false }
  ];

  const timeSlots = [
    [
      { time: '09:00 AM', isDisabled: true },
      { time: '10:00 AM', isDisabled: false },
      { time: '11:00 AM', isDisabled: true }
    ],
    [
      { time: '01:00 PM', isDisabled: true },
      { time: '02:00 PM', isSelected: true },
      { time: '03:00 PM', isDisabled: false }
    ],
    [
      { time: '04:00 PM', isDisabled: false },
      { time: '07:00 PM', isDisabled: false },
      { time: '08:00 PM', isDisabled: true }
    ]
  ];

  return (
    <ScrollView>
      <View className="flex overflow-hidden flex-col items-start pt-8 pb-24 pl-8 bg-white max-w-[360px]">
        <View className="flex gap-5 justify-between max-w-full text-base font-semibold text-center text-stone-800 w-[203px]">
          <View className="flex shrink-0 rounded-lg bg-blue-500 bg-opacity-20 h-[42px] w-[42px]" />
          <View className="self-start mt-3.5">
            <Text>Doctor Detail</Text>
          </View>
        </View>

        <SearchBar />

        <View className="flex gap-4 py-2.5 pr-16 pl-2.5 mt-7 text-xs font-medium bg-white rounded-md text-stone-800 text-opacity-40">
          <Image
            source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/2fc2cfbf33579101941be44fe5d4f1344639274ca709e6c334861e6a48060139?placeholderIfAbsent=true&apiKey=abdee94ac70c4c57afd053b3a4b32b3c" }}
            className="object-contain shrink-0 w-24 rounded-none aspect-square"
          />
          <View className="flex flex-col">
            <View className="self-start text-base font-semibold text-stone-800">
              <Text>Dr. Rishi</Text>
            </View>
            <View className="mt-1.5">
              <Text>Chardiologist</Text>
            </View>
            <View className="flex shrink-0 mt-3 rounded-sm bg-blue-500 bg-opacity-20 h-[18px] w-[41px]" />
            <View className="flex gap-1 mt-1.5">
              <Image
                source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/2223714e5e779b383aa3af1ddb590dfe936363f9a36f5dcdd9ca54a4c6298345?placeholderIfAbsent=true&apiKey=abdee94ac70c4c57afd053b3a4b32b3c" }}
                className="object-contain shrink-0 self-start aspect-square w-[13px]"
              />
              <View>
                <Text>800m away</Text>
              </View>
            </View>
          </View>
        </View>

        <View className="mt-5 text-base font-semibold text-stone-800">
          <Text>About</Text>
        </View>
        <View className="mt-1.5 text-xs leading-5 text-stone-800 text-opacity-60">
          <Text>Lorem ipsum dolor sit amet, consectetur adipi elit, sed do eiusmod tempor incididunt ut laore et dolore magna aliqua. Ut enim ad minim veniam... Read more</Text>
        </View>

        <View className="flex gap-3 self-stretch mt-5 whitespace-nowrap">
          {dates.map((dateItem, index) => (
            <DateCard key={index} {...dateItem} />
          ))}
        </View>

        <View className="flex shrink-0 mt-6 max-w-full h-px bg-blue-500 bg-opacity-10 w-[300px]" />

        {timeSlots.map((row, rowIndex) => (
          <View key={rowIndex} className="flex gap-5 mt-3.5 text-xs">
            {row.map((slot, slotIndex) => (
              <TimeSlot key={slotIndex} {...slot} />
            ))}
          </View>
        ))}

        <View className="px-16 py-4 mt-9 w-full text-sm font-semibold text-white bg-blue-500 bg-opacity-80 max-w-[300px] rounded-[32px]">
          <Text>Book Appointment</Text>
        </View>
      </View>
    </ScrollView>
  );
}
