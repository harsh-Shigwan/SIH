import * as React from "react";
import { View, Image, Text } from "react-native";

// SearchBar Component
const SearchBar = () => {
  return (
    <View className="flex gap-5 justify-between">
      <View className="flex gap-2.5 px-6 py-3 text-xs rounded-3xl border border-emerald-50 border-solid bg-zinc-50 text-stone-800 text-opacity-40">
        <Image
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/237a76616a8ad4aacdebb6e671db7d264938af93cb492aac9c5438c964a96d01?placeholderIfAbsent=true&apiKey=abdee94ac70c4c57afd053b3a4b32b3c",
          }}
          className="object-contain shrink-0 self-start aspect-square w-[15px]"
        />
        <View className="basis-auto">
          <Text>Search for new scheme...</Text>
        </View>
      </View>
      <View className="my-auto text-xs text-blue-500 text-opacity-80">
        <Text>See all</Text>
      </View>
    </View>
  );
};

// NotificationCard Component
const NotificationCard = ({ title, date, address, onRemove, onMute, onView }) => {
  return (
    <View className="flex overflow-hidden flex-col mt-4 w-full bg-white rounded-xl border border-solid border-neutral-400 border-opacity-10">
      <View className="flex gap-2.5 px-5 py-6 bg-white rounded-xl border border-solid border-neutral-400 border-opacity-10 max-sm:hidden">
        <View className="flex flex-col">
          <View className="flex flex-col items-start pr-10 pl-2.5">
            <View className="text-base font-semibold leading-none text-black">
              <Text>{title}</Text>
            </View>
            <View className="mt-3 text-xs tracking-normal text-black text-opacity-60">
              <Text>{date}</Text>
            </View>
          </View>
          {address && (
            <View className="flex gap-3.5 mt-3.5 w-full text-black text-opacity-60">
              <View className="gap-2.5 self-stretch p-2.5 text-xs tracking-normal">
                <Text>Address :- </Text>
              </View>
              <View className="mt-2.5 text-xs tracking-normal">
                <Text>{address}</Text>
              </View>
            </View>
          )}
          <View
            className="flex gap-2.5 self-start px-3 py-1.5 mt-5 text-xs font-semibold tracking-normal whitespace-nowrap rounded-md border border-solid border-blue-500 border-opacity-80 text-blue-500 text-opacity-80"
            onClick={onRemove}
          >
            <Image
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/d10518070a5a38e55e62ee63b5caa46866baff108e794485e243b0d1e764dcab?placeholderIfAbsent=true&apiKey=abdee94ac70c4c57afd053b3a4b32b3c",
              }}
              className="object-contain shrink-0 rounded-md aspect-[0.85] w-[11px]"
            />
            <View>
              <Text>Remove</Text>
            </View>
          </View>
        </View>
        <View className="flex flex-col text-xs font-semibold tracking-normal whitespace-nowrap">
          <View
            className="flex gap-1.5 self-start text-blue-500 text-opacity-80"
            onClick={onMute}
          >
            <Image
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/f741637d6ce6da3112cd87c2786aa60c35a47a3b3ea69ac257f9e3c94f2178f4?placeholderIfAbsent=true&apiKey=abdee94ac70c4c57afd053b3a4b32b3c",
              }}
              className="object-contain shrink-0 w-4 aspect-square"
            />
            <View className="my-auto">
              <Text>Mute</Text>
            </View>
          </View>
          <View
            className="px-4 py-2 mt-20 text-white rounded-md bg-blue-500 bg-opacity-80"
            onClick={onView}
          >
            <Text>View</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

// NotificationsScreen Component
const NotificationsScreen = () => {
  const notificationData = [
    {
      title: "Regular Health Checkup",
      date: "31/01/2025",
      address: "TATA Memorial Hospital ,\nAndheri (east), Mumbai-69",
    },
    {
      title: "Rashtiyra Beema Yojna",
      date: "31/01/2025",
      address: "TATA Memorial Hospital ,\nAndheri (east), Mumbai-69",
    },
    {
      title: "Blood Donation Camp",
      date: "31/01/2025",
    },
  ];

  return (
    <View className="flex overflow-hidden flex-col bg-white max-w-[360px]">
      <View className="flex overflow-hidden flex-col px-4 pt-6 w-full bg-white">
        <SearchBar />
        {notificationData.map((notification, index) => (
          <NotificationCard
            key={index}
            title={notification.title}
            date={notification.date}
            address={notification.address}
            onRemove={() => console.log(`Remove notification: ${notification.title}`)}
            onMute={() => console.log(`Mute notification: ${notification.title}`)}
            onView={() => console.log(`View notification: ${notification.title}`)}
          />
        ))}
      </View>
    </View>
  );
};

// Export the NotificationsScreen component
export default NotificationsScreen;
