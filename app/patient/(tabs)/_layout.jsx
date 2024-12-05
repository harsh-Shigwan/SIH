// import { StatusBar } from "expo-status-bar";
// import { Redirect, Tabs } from "expo-router";
// import { Image, Text, View } from "react-native";


// const TabIcon = ({ icon, color, name, focused }) => {
//   return (
//     <View className="flex items-center justify-center gap-2">
//       <Image
//          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/bf93d161f70e750443c56c75bde598ff48a7fd5054fcb5553e65b8a13bd0e48c?placeholderIfAbsent=true&apiKey=abdee94ac70c4c57afd053b3a4b32b3c" }}
//         resizeMode="contain"
//         tintColor={color}
//         className="w-6 h-6"
//       />
//       <Text
//         className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
//         style={{ color: color }}
//       >
//         {name}
//       </Text>
//     </View>
//   );
// };

// const TabLayout = () => {
//   const { loading, isLogged } = useGlobalContext();

//   if (!loading && !isLogged) return <Redirect href="/sign-in" />;

//   return (
//     <>
//       <Tabs
//         screenOptions={{
//           tabBarActiveTintColor: "#FFA001",
//           tabBarInactiveTintColor: "#CDCDE0",
//           tabBarShowLabel: false,
//           tabBarStyle: {
//             backgroundColor: "#161622",
//             borderTopWidth: 1,
//             borderTopColor: "#232533",
//             height: 84,
//           },
//         }}
//       >
//         <Tabs.Screen
//           name="home"
//           options={{
//             title: "Home",
//             headerShown: false,
//             tabBarIcon: ({ color, focused }) => (
//               <TabIcon
//                 icon={icons.home}
//                 color={color}
//                 name="Home"
//                 focused={focused}
//               />
//             ),
//           }}
//         />
//         <Tabs.Screen
//           name="bookmark"
//           options={{
//             title: "Bookmark",
//             headerShown: false,
//             tabBarIcon: ({ color, focused }) => (
//               <TabIcon
//                 icon={icons.bookmark}
//                 color={color}
//                 name="Bookmark"
//                 focused={focused}
//               />
//             ),
//           }}
//         />

//         <Tabs.Screen
//           name="create"
//           options={{
//             title: "Create",
//             headerShown: false,
//             tabBarIcon: ({ color, focused }) => (
//               <TabIcon
//                 icon={icons.plus}
//                 color={color}
//                 name="Create"
//                 focused={focused}
//               />
//             ),
//           }}
//         />
//         <Tabs.Screen
//           name="profile"
//           options={{
//             title: "Profile",
//             headerShown: false,
//             tabBarIcon: ({ color, focused }) => (
//               <TabIcon
//                 icon={icons.profile}
//                 color={color}
//                 name="Profile"
//                 focused={focused}
//               />
//             ),
//           }}
//         />
//       </Tabs>

//       <Loader isLoading={loading} />
//       <StatusBar backgroundColor="#161622" style="light" />
//     </>
//   );
// };

// export default TabLayout;