import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationIndependentTree } from "@react-navigation/native";
import Svg, { Path, Rect } from "react-native-svg";
import HomeNav from "./Home/HomeNav";
import IpdNav from "./IPD/IpdNav";
import OpdNav from "./OPD/OpdNav";
import PatientNav from "./Patients/PatientNav";
import ProfileNav from "./Profile/ProfileNav";
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
            {route.name === "Home" ? (
              // Home tab - Custom SVG logo
             
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"  onPress={onPress}>
  <path d="M9.14373 20.7821V17.7152C9.14372 16.9381 9.77567 16.3067 10.5584 16.3018H13.4326C14.2189 16.3018 14.8563 16.9346 14.8563 17.7152V20.7732C14.8562 21.4473 15.404 21.9951 16.0829 22H18.0438C18.9596 22.0023 19.8388 21.6428 20.4872 21.0007C21.1356 20.3586 21.5 19.4868 21.5 18.5775V9.86585C21.5 9.13139 21.1721 8.43471 20.6046 7.9635L13.943 2.67427C12.7785 1.74912 11.1154 1.77901 9.98539 2.74538L3.46701 7.9635C2.87274 8.42082 2.51755 9.11956 2.5 9.86585V18.5686C2.5 20.4637 4.04738 22 5.95617 22H7.87229C8.19917 22.0023 8.51349 21.8751 8.74547 21.6464C8.97746 21.4178 9.10793 21.1067 9.10792 20.7821H9.14373Z" fill="#4C6FFF" fill-opacity="0.8"/>
  <path
                  fill-rule="evenodd"
                  d="M9.14373 20.7821V17.7152C9.14372 16.9381 9.77567 16.3067 10.5584 16.3018H13.4326C14.2189 16.3018 14.8563 16.9346 14.8563 17.7152V20.7732C14.8562 21.4473 15.404 21.9951 16.0829 22H18.0438C18.9596 22.0023 19.8388 21.6428 20.4872 21.0007C21.1356 20.3586 21.5 19.4868 21.5 18.5775V9.86585C21.5 9.13139 21.1721 8.43471 20.6046 7.9635L13.943 2.67427C12.7785 1.74912 11.1154 1.77901 9.98539 2.74538L3.46701 7.9635C2.87274 8.42082 2.51755 9.11956 2.5 9.86585V18.5686C2.5 20.4637 4.04738 22 5.95617 22H7.87229C8.19917 22.0023 8.51349 21.8751 8.74547 21.6464C8.97746 21.4178 9.10793 21.1067 9.10792 20.7821H9.14373Z" 
                  clip-rule="evenodd"
                  fill={isFocused ? "#4C6FFF" : "#B0B0B0"}
                  fillOpacity="0.8"
                />
</svg>
           
            ) : route.name === "IPD" ? (
             <Svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none"           onPress={onPress}>
  <path d="M15.7143 0.75C16.8074 0.749939 17.8593 1.16761 18.6547 1.91755C19.45 2.66749 19.9287 3.69301 19.9929 4.78429L20 5.03571V10.75H14.2857L14.0343 10.7571C12.9863 10.8187 11.9973 11.2627 11.255 12.005C10.5127 12.7473 10.0687 13.7363 10.0071 14.7843L10 15.0357V20.75H4.28571C3.19256 20.7501 2.14069 20.3324 1.34534 19.5825C0.54999 18.8325 0.071275 17.807 0.00714303 16.7157L6.65778e-09 16.4643V5.03571C-6.08882e-05 3.94256 0.417607 2.89069 1.16755 2.09534C1.91749 1.29999 2.94301 0.821275 4.03429 0.757143L4.28571 0.75H15.7143ZM19.8571 12.18C19.7464 12.5197 19.5729 12.8357 19.3457 13.1114L19.1629 13.3114L12.5614 19.9129C12.2414 20.2329 11.8529 20.47 11.43 20.6086L11.4286 15.0357L11.4357 14.8214C11.4868 14.1412 11.7797 13.5017 12.2612 13.0185C12.7428 12.5354 13.3814 12.2405 14.0614 12.1871L14.2857 12.1786L19.8571 12.18Z" fill="#7A7979"/>
 <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.7143 0.75C16.8074 0.749939 17.8593 1.16761 18.6547 1.91755C19.45 2.66749 19.9287 3.69301 19.9929 4.78429L20 5.03571V10.75H14.2857L14.0343 10.7571C12.9863 10.8187 11.9973 11.2627 11.255 12.005C10.5127 12.7473 10.0687 13.7363 10.0071 14.7843L10 15.0357V20.75H4.28571C3.19256 20.7501 2.14069 20.3324 1.34534 19.5825C0.54999 18.8325 0.071275 17.807 0.00714303 16.7157L6.65778e-09 16.4643V5.03571C-6.08882e-05 3.94256 0.417607 2.89069 1.16755 2.09534C1.91749 1.29999 2.94301 0.821275 4.03429 0.757143L4.28571 0.75H15.7143ZM19.8571 12.18C19.7464 12.5197 19.5729 12.8357 19.3457 13.1114L19.1629 13.3114L12.5614 19.9129C12.2414 20.2329 11.8529 20.47 11.43 20.6086L11.4286 15.0357L11.4357 14.8214C11.4868 14.1412 11.7797 13.5017 12.2612 13.0185C12.7428 12.5354 13.3814 12.2405 14.0614 12.1871L14.2857 12.1786L19.8571 12.18Z"
                  fill={isFocused ? "#4C6FFF" : "#B0B0B0"}
                  fillOpacity="0.8"
                />
</Svg>
                ) : route.name === "OPD" ? (
                  <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none"           onPress={onPress}>
<path d="M21 15.25V5.25C21 4.71957 20.7893 4.21086 20.4142 3.83579C20.0391 3.46071 19.5304 3.25 19 3.25H5C4.46957 3.25 3.96086 3.46071 3.58579 3.83579C3.21071 4.21086 3 4.71957 3 5.25V19.25C3 19.7804 3.21071 20.2891 3.58579 20.6642C3.96086 21.0393 4.46957 21.25 5 21.25H15M21 15.25V15.422C20.9999 15.9524 20.7891 16.461 20.414 16.836L16.586 20.664C16.211 21.0391 15.7024 21.2499 15.172 21.25H15M21 15.25H17C16.4696 15.25 15.9609 15.4607 15.5858 15.8358C15.2107 16.2109 15 16.7196 15 17.25V21.25M7 7.25H17M7 11.25H17M7 15.25H11" stroke="#7A7979" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
fill-rule="evenodd"
<path
                  fill-rule="evenodd"
                  d="M21 15.25V5.25C21 4.71957 20.7893 4.21086 20.4142 3.83579C20.0391 3.46071 19.5304 3.25 19 3.25H5C4.46957 3.25 3.96086 3.46071 3.58579 3.83579C3.21071 4.21086 3 4.71957 3 5.25V19.25C3 19.7804 3.21071 20.2891 3.58579 20.6642C3.96086 21.0393 4.46957 21.25 5 21.25H15M21 15.25V15.422C20.9999 15.9524 20.7891 16.461 20.414 16.836L16.586 20.664C16.211 21.0391 15.7024 21.2499 15.172 21.25H15M21 15.25H17C16.4696 15.25 15.9609 15.4607 15.5858 15.8358C15.2107 16.2109 15 16.7196 15 17.25V21.25M7 7.25H17M7 11.25H17M7 15.25H11"
                  clip-rule="evenodd"
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

const StaffTabNavigation = () => {
 const Tab = createBottomTabNavigator();


  return (
    <NavigationIndependentTree>
      <NavigationContainer>
       <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
        <Tab.Screen
          name="Home"
          component={HomeNav}
          options={{
            tabBarLabel: "Home",
          }}
        />
        <Tab.Screen
          name="IPD"
          component={IpdNav}
          options={{
            tabBarLabel: "IPD",
          }}
        />
        <Tab.Screen
          name="OPD"
          component={OpdNav}
          options={{
            tabBarLabel: "OPD",
          }}
        />
        <Tab.Screen
          name="Patients"
          component={PatientNav}
          options={{
            tabBarLabel: "Patients",
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileNav}
          options={{
            tabBarLabel: "Profile",
          }}
        />
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

export default StaffTabNavigation;
