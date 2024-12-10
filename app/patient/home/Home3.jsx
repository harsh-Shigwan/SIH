import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationIndependentTree } from "@react-navigation/native";
import Home1 from "./Home1";
import Home2 from "./Home2";
import HomePages from "./HomePages";
import Svg, { Path, Rect } from "react-native-svg";
import EHR from "../EHR/EHR";
import Notification from "../notifications/Notification";
import Profile from "../profile/Profile";
function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel ?? options.title ?? route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <View style={styles.tabItem} key={index}>
            {route.name === "Profile" ? (
              // Home tab - Custom SVG logo
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                onPress={onPress}
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.9847 15.3462C8.11707 15.3462 4.81421 15.931 4.81421 18.2729C4.81421 20.6148 8.09611 21.2205 11.9847 21.2205C15.8523 21.2205 19.1542 20.6348 19.1542 18.2938C19.1542 15.9529 15.8733 15.3462 11.9847 15.3462Z"
                  fill={isFocused ? "#4C6FFF" : "#B0B0B0"}
                  fillOpacity="0.8"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.9846 12.0059C14.5227 12.0059 16.5799 9.94779 16.5799 7.40969C16.5799 4.8716 14.5227 2.81445 11.9846 2.81445C9.44655 2.81445 7.38845 4.8716 7.38845 7.40969C7.37988 9.93922 9.42369 11.9973 11.9523 12.0059H11.9846Z"
                  fill={isFocused ? "#4C6FFF" : "#B0B0B0"}
                  fillOpacity="0.8"
                />
              </Svg>
            ) : route.name === "Notification" ? (
              // Default SVG for other tabs
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                onPress={onPress}
              >
                <path
                  d="M22.0475 18.9028C21.9682 18.7584 21.8517 18.638 21.71 18.5541L20.6947 17.9447C20.2984 17.7064 19.9705 17.3697 19.743 16.9672C19.5153 16.5647 19.3958 16.1102 19.3958 15.6478V10.1559C19.3948 8.56284 18.878 7.01292 17.9225 5.73816C16.9671 4.46337 15.6244 3.53232 14.0956 3.08438C14.0295 3.06555 13.9713 3.02584 13.9296 2.97117C13.888 2.9165 13.8652 2.84982 13.8645 2.78109C13.8645 2.29214 13.6703 1.82322 13.3245 1.47748C12.9788 1.13174 12.5099 0.9375 12.021 0.9375C11.532 0.9375 11.0631 1.13174 10.7173 1.47748C10.3716 1.82322 10.1773 2.29214 10.1773 2.78109C10.1767 2.8498 10.1538 2.91645 10.1122 2.9711C10.0705 3.02575 10.0123 3.06548 9.94622 3.08438C8.41744 3.53232 7.0748 4.46337 6.11934 5.73816C5.16389 7.01292 4.64703 8.56284 4.64608 10.1559V15.6469C4.64612 16.1092 4.52653 16.5638 4.29893 16.9663C4.07132 17.3687 3.74344 17.7055 3.34718 17.9437L2.33187 18.5531C2.15656 18.6578 2.02022 18.8168 1.94357 19.0061C1.86692 19.1954 1.85415 19.4044 1.90719 19.6016C1.96024 19.7988 2.0762 19.9732 2.23746 20.0985C2.39872 20.2237 2.59646 20.2929 2.80062 20.2955H21.2384C21.4 20.2916 21.558 20.2464 21.6971 20.164C21.8362 20.0816 21.9518 19.9649 22.0328 19.825C22.1139 19.6852 22.1577 19.5268 22.16 19.3652C22.1624 19.2036 22.1231 19.044 22.0461 18.9019L22.0475 18.9028Z"
                  fill={isFocused ? "#4C6FFF" : "#B0B0B0"}
                  fillOpacity="0.8"
                />
                <path
                  d="M10.4273 22.5526C10.7754 22.7988 11.1758 22.9609 11.5971 23.0262C12.0184 23.0916 12.4491 23.0583 12.8554 22.929C13.2617 22.7997 13.6324 22.5779 13.9384 22.2811C14.2445 21.9843 14.4776 21.6206 14.6193 21.2185H9.42139C9.61114 21.7563 9.96247 22.2222 10.4273 22.5526Z"
                  fill={isFocused ? "#4C6FFF" : "#B0B0B0"}
                  fillOpacity="0.8"
                />
              </Svg>
            ) : (
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                onPress={onPress}
              >
                <Path
                  d="M9.14373 20.7821V17.7152C9.14372 16.9381 9.77567 16.3067 10.5584 16.3018H13.4326C14.2189 16.3018 14.8563 16.9346 14.8563 17.7152V20.7732C14.8562 21.4473 15.404 21.9951 16.0829 22H18.0438C18.9596 22.0023 19.8388 21.6428 20.4872 21.0007C21.1356 20.3586 21.5 19.4868 21.5 18.5775V9.86585C21.5 9.13139 21.1721 8.43471 20.6046 7.9635L13.943 2.67427C12.7785 1.74912 11.1154 1.77901 9.98539 2.74538L3.46701 7.9635C2.87274 8.42082 2.51755 9.11956 2.5 9.86585V18.5686C2.5 20.4637 4.04738 22 5.95617 22H7.87229C8.19917 22.0023 8.51349 21.8751 8.74547 21.6464C8.97746 21.4178 9.10793 21.1067 9.10792 20.7821H9.14373Z"
                  fill={isFocused ? "#4C6FFF" : "#B0B0B0"}
                  fillOpacity="0.8"
                />
              </Svg>
            )}
            <Text
              onPress={onPress}
              style={[
                styles.label,
                { color: isFocused ? "#4C6FFF" : "#B0B0B0" },
              ]}
            >
              {label}
            </Text>
          </View>
        );
      })}
    </View>
  );
}

const Home3 = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
          <Tab.Screen
            name="HomePages"
            component={HomePages}
            options={{ headerShown: false }}
          />

          <Tab.Screen name="EHR" component={EHR}  options={{ headerShown: false }}/>
          <Tab.Screen name="Notification" options={{ headerShown: false }} component={Notification} />
          <Tab.Screen name="Profile" options={{ headerShown: false }} component={Profile} />
          
        </Tab.Navigator>
        
      </NavigationContainer>
    </NavigationIndependentTree>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    backgroundColor: "white",
    paddingVertical: 10,
    minHeight: 60,
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
  },
  label: {
    fontSize: 12,
    marginTop: 4,
  },
});

export default Home3;
